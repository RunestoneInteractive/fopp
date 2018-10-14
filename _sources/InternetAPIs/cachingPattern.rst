..  Copyright (C)  Jackie Cohen.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _more_caching_responses:

More about Caching Response Content
===================================

Now that you've seen a bunch of code that will rely on a caching pattern to get data from an API, we'll break it down and examine more closely what it does.

Your goal as you look at this code should be to try to understand its structure, and understand how you could write similar code that requests and caches data from a different API, and/or how you could add a function that accesses data from another API to the same program.

When you begin writing a program that will use caching for expensive operations that get data, the first thing you need to do, if you follow the pattern we're using in this book, is set up your cache.

You'll need to:

* Decide what the file that holds your cached data will be called, and save that in a variable. That variable will be a *global* variable for the whole file. (We use ``CACHE_FNAME``.)

* Try to open a file saved as that name.

* Try to read the contents of that file into a string.

* Try to load the data in the contents of that file into a Python object, and save that data in a variable (we use ``_cache_diction``), which will be global for the entire program, so that you can access the cached data anytime later.

* If any one of those things doesn't work, create a variable (again, ``_cache_diction``) to hold the data you'll be caching during the program.

During the program, you'll add key-value pairs to it... and each time, you'll dump the dictionary to a JSON-formatted string and save that string to a file with the ``CACHE_FNAME`` name.

This code does that:

.. sourcecode:: python

    CACHE_FNAME = 'cache_file_name.json'
    try:
        cache_file = open(CACHE_FNAME, 'r')
        cache_contents = cache_file.read()
        _cache_diction = json.loads(cache_contents)
        cache_file.close()
    except:
        _cache_diction = {}


.. note::

    The reason you see the variable CACHE_FNAME in all caps is because it's convention to use all caps for variable names that are intended to be constants -- variables whose values will not change throughout the program, and will only be referred to.

    The reason you see the variable _cache_diction with a single underscore at its beginning is because it is conventional in Python to use single underscores at the start of variables that are intended to be private -- which means they are not used in any other file or accessible outside the places where it's used in the program. This is true for both variables that hold static values (integers, strings...) and for variables that are function names.

    In our case here, it's not truly necessary that the cache dictionary is private, but it is a good idea to make it special that way -- it is a special variable that shouldn't be changed without careful reason, since this whole pattern depends on it, and using this convention may indicate that to another programmer.

    Paying attention to stylistic conventions in programming like this is helpful, not because it necessarily changes how the code works, but because it will make it easier for other programmers to read your code. And knowing these conventions will make it much easier for you to understand others' code!

It's important to understand your end goal with this pattern of caching responses.

A cache file made with a program like this will eventually contain a JSON-formatted string which represents data from a big, complicated Python dictionary. This dictionary's keys will be strings, each of which represent a request. For example, a string that represents "a request for data about 50 photos tagged with the word 'mountains'". The value corresponding to that key will be a dictionary or list that comes from making specifically that request (e.g. a request for data about 50 photos on Flickr tagged with the word 'mountains').

The code that you saw earlier makes that happen.

The next thing you need in order to create a process where such a file can be created is a function that will reliably create a string that is that unique identifier of a particular request to a REST API.

This function should accept two required arguments: the base url for a REST API, the dictionary of query parameters and their values that you would pass to ``requests.get``, and a third optional argument: list of any query parameters needed for the request that contain private information you would not want to share, even if you shared your data (e.g. the ``api_key`` for a request to Flickr).

The function should return a string that represents a **unique identifier** of a specific API request, which, given the same input to the function, will *always* be the same.

We've provided such a function you can use, called ``params_unique_combination``:

.. sourcecode:: python

    def params_unique_combination(baseurl, params_d, private_keys=["api_key"]):
        alphabetized_keys = sorted(params_d.keys())
        res = []
        for k in alphabetized_keys:
            if k not in private_keys:
                res.append("{}-{}".format(k, params_d[k]))
        return baseurl + "_".join(res)

For example, with this base url: ``https://api.datamuse.com/words``
And this parameters dictionary: ``{"rel_rhy":"rain"}``, an invocation of ``params_unique_combination`` like so: ``params_unique_combination("https://api.datamuse.com/words",{"rel_rhy":"rain"})`` would return a string that looks like this:

``https://api.datamuse.com/wordsrel_rhy-rain``

That's pretty simple, because there's only one query parameter and its associated value. But this is pretty useful when you have a complicated set of query parameters and values. (Check out the section of the book about searching for tags on Flickr!)

When you use some more complicated processes for requesting data from APIs, there are some additional layers of complication in order to cache data, but for what we've seen so far, this pattern and this helper function ``params_unique_combination`` will always work if you're careful.

**Check your understanding**

.. mchoice:: restapis_caching_1
   :topics: UsingRESTAPIs/cachingPattern
   :answer_a: Because when requests.get encodes URL parameters, the params might be in any order, which would make it hard to compare one URL to another later on, and you could cache the same data multiple times.
   :answer_b: Because otherwise, it's too much data in the same function, and the program will not run.
   :answer_c: You don't, actually. This function is just a fancy way of calling requests.get.
   :answer_d: Because the params_unique_combination function as written here is what saves the cache data file so you have it later!
   :feedback_a: Comparing the strings "rowling&harry+potter" and "harry+potter&rowling", they are different as far as Python is concerned, but they are the same as far as meaning to a REST API is concerned! That's why we need to manipulate these strings carefully for the cache dictionary.
   :feedback_b: There's no such thing as too much in a function to run, even though sometimes it's a good idea to break functionality up into multiple functions for clarity and ease.
   :feedback_c: This function has nothing to do with calling requests.get. It only formulates information into a unique string.
   :feedback_d: This function does not save a cache file at all. It only formulates information into a unique string.
   :correct: a

   Why is it important to use a function like the params_unique_combination function in this caching pattern?


Finally, you'll need to write the function to request and cache data from an API. Here, we'll write a function requesting data from the datamuse API about words that rhyme with a certain word.

You'll need to:

* As always, set up your function input, base url, and paramaters dictionary in the function body, like you did in functions before.
* Check if the unique identifier created using the ``params_unique_combination`` function is in the cache dictionary already.
* Then, if it is, great -- you don't even need to make a request. Grab the data in the cache corresponding to that unique request, and return it (or manipulate it in some way to return what you want)

Otherwise, if the unique identifier is *not* in the cache dictionary yet, that's fine.

* Make a request to the internet, using the base url and the params dictionary with ``requests.get``, and get a resopnse back. P
* Pull the text data out of that response, and load it into a Python object.
* Add a key-value pair to the ``_cache_diction`` cache dictionary, where the key is the unique identifier string representing the request, and the value is that Python object that represents the data you got back from the request.
* Dump the *whole* ``_cache_diction`` cache dictionary to a string.
* Open the ``CACHE_FNAME`` file for *writing* and write the string version of the cache dictionary to that file. Then, close the file.
* Return the data (or manipulate it in some way to return what you want)

Here's an example of such a function:

.. sourcecode:: python

    def get_from_datamuse_caching(rhymes_with):
        baseurl = "https://api.datamuse.com/words"
        params_diction = {}
        params_diction["rel_rhy"] = rhymes_with
        unique_ident = params_unique_combination(baseurl,params_diction)
        if unique_ident in _cache_diction:
            return _cache_diction[unique_ident]
        else:
            resp = requests.get(baseurl, params_diction)
            _cache_diction[unique_ident] = json.loads(resp.text)
            dumped_json_cache = json.dumps(_cache_diction)
            fw = open(CACHE_FNAME,"w")
            fw.write(dumped_json_cache)
            fw.close() # Close the open file
            return _cache_diction[unique_ident]


The same way you can write a function to get data from many REST APIs using the function structure you've seen before, you can write functions to get and cache data by following this pattern.

This gives you a lot of power, and allows you to use and process a lot of data, repeatedly, that you get from REST APIs -- but you don't have to worry about e.g. not having an internet connection, the data changing in some surprising way midway through your work, or running into "rate limits" for the REST API (restrictions for how many times you can make requests to an API on the same internet connection).
