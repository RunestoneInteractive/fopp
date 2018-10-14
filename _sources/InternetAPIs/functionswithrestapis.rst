..  Copyright (C) Jackie Cohen.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Functions with REST APIs
========================

Let's put this all together. You know the process of making requests to REST APIs, and you know how to define functions. 

**Check your understanding**

.. mchoice:: question400_6_1
   :practice: T
   :answer_a: Because that means you have to write less repeated code if you want to make a request to the same API more than once in the same program.
   :answer_b: Because writing functions to complete a complex process in your code makes it easier to read and easier to fix later.
   :answer_c: Because a lot of things stay the same among different requests to the same API.
   :answer_d: Because it's the only way to make a request to a REST API for data!
   :feedback_a: See the functions chapter for more info on this!
   :feedback_b: Definitely.
   :feedback_c: Yes, many things are the same between different requests. For example, the base URL is often the same, but perhaps you want a query parameter to have a different value for a new request. A function can help with that.
   :feedback_d: Check out other parts of this chapter -- you can certainly write code to request data from a REST API without writing a function, but if you have to do it multiple times, it may be less neat and may become a pain for you as the programmer!
   :multiple_answers:
   :correct: a,b,c
   
   Why would you define a function in order to make a request to a REST API for data?


Recall, when you decide to define a function, you have to consider the following:

**Input:** What should change for each function invocation? 
(Generally, when writing a function to request data from an API, you'll expect the input to be a string -- like whatever term you want to search, or whatever username you want to get data about, or something.)

**Body of the function:** For a function that will request data from an API, the body of the function will basically be made up of the same code you used to request and process data from the internet. (Make sure everything you need for the request is *inside* the 'function machine' (base url, etc) -- don’t depend on global variables! That can get you into trouble when you try to make multiple invocations to the functions!)

**Return value:** Decide what you want the function to return  -- a response object? a dictionary that represents the data? the text from the response, but not made into a Python object? some data from the response that’s processed, so inside the function you get a Python object and pull some data out of it? 

Often, for a function that makes a request to an API, it's most useful to have the function's return value be a Python object (a list or dictionary) that is the result of processing JSON-formatted data that you get from the REST API.

Let's take a look at a function, for example, that accesses data from the `datamuse API <https://www.datamuse.com/api/>`_, which gets you information about word meanings and rhymes (that link will take you to the documentation for the API).

The following commented code is a definition of a function that will return data about words that rhyme with some input word. 

Remember, in order to get to this code, a bunch of debugging and investigation might be necessary! 

.. sourcecode:: python
    
    # import statements for necessary Python modules
    import json
    import requests

    def get_from_datamuse(rhymes_with):
        baseurl = "https://api.datamuse.com/words" # Include the base url in the function so you don't need to depend on any global variables
        params_diction = {} # Set up an empty dictionary for query parameters
        params_diction["rel_rhy"] = rhymes_with # Make the value of the rel_rhy query parameter (see the API documentation!) be equal to the input for the function
        resp = requests.get(baseurl, params=params_diction) # Use the get function in the requests library to make a request with this query parameter-value pair and this base url
        resp_str = resp.text # Access the text attribute of the response
        python_obj = json.loads(resp_str) # Use the loads function in the Python module to convert that text string into a Python object, which will be either a list or a dictionary
        return python_obj # Return that python object


Consider, when you're writing a function like this: what will need to change from request to request, when each request is to the same REST API? In this case, the only thing that changes is *what* word you want rhymes for. Everything else (the base url, the query parameter name) stays the same! So those values are simply included in the body of the function.

Here's a couple example invocations to this ``get_from_datamuse`` function:

.. sourcecode:: python

    datamuse_rain_data = get_from_datamuse("rain")

    # Investigate the result
    print(datamuse_rain_data)   
    print(type(datamuse_rain_data)

    # Another invocation
    datamuse_orange_data = get_from_datamuse("orange")

    # And another
    wrd = "sound"
    datamuse_sound_word_rhymes = get_from_datamuse(wrd)     
        

Try out this code for yourself!
