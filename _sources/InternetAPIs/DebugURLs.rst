..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _debug_urls_chap:

Debugging calls to requests.get()
=================================

The first thing that might go wrong is that you get a runtime error when you call ``requests.get()``. There are two possibilities for what's gone wrong in that case.

The first possibility is that the variable dest_url is either not bound to a string, or is bound to a string that isn't a valid URL. For example, it might be bound to the string ``"http://foo.bar/bat"``. foo.bar is not a valid domain name that can be resolved to an ip address, so there's no server to contact. That will yield an error of type requests.exceptions.ConnectionError. Here's a complete error message:

::

    requests.exceptions.ConnectionError: HTTPConnectionPool(host='foo.bar', port=80): Max retries exceeded with url: /bat?key=val (Caused by <class 'socket.gaierror'>: [Errno 11004] getaddrinfo failed)

A second possibility is that the value provided for the params parameter is not a valid dictionary or doesn't have key-value pairs that can be converted into text strings suitable for putting into a URL. For example, if you execute ``requests.get("http://github.com", params = [0,1])``, [0,1] is a list rather than a dictionary and the python interpreter generates the error, ``TypeError: 'int' object is not iterable``.

The best approach is to look at the URL that is produced and eyeball it to see whether it matches what the documentation of the particular API suggests the url should look like. To check the url, the first step is to print it out. Unfortunately, there's no way to force the ``requests.get()`` invocation to print out the url that it has constructed from the parameters that were passed to it. Instead, we've provided a little function ``requestURL()`` for you that takes the same parameters as ``requests.get()``, and returns the url that ``requests.get()`` is generating from those parameters. The function reaches a little into the internals of the requests module, so don't worry about understanding the function if you don't want to. If you do want to, check the documentation of the requests module: Request is a class in the requests module and prepare is a method defined for that class which creates a url.

.. sourcecode:: python

    def requestURL(baseurl, params = {}):
        # This function accepts a URL path and a params diction as inputs.
        # It calls requests.get() with those inputs,
        # and returns the full URL of the data you want to get.
        req = requests.Request(method = 'GET', url = baseurl, params = params)
        prepped = req.prepare()
        return prepped.url

    print(params)
    print(requestURL(some_base_url, some_params_dictionary))

If you get a runtime error when you call ``requestURL()``, that means that it can't create a URL at all. Usually, that means that you didn't pass in a string for the baseurl or didn't pass in a dictionary with keys that are strings for the params parameter.

Assuming ``requestURL()`` does return a URL, match up what you see from the printout of the params dictionary to what you see in the URL that was printed out. If you have a sample of a URL from the API documentation, see if the structure of your URL matches what's there. Perhaps you have misspelled one of the API parameter names or you misspelled the base url.

You can also try cutting and pasting the printed URL into a browser window, to see what error message you get from the website. You can then try changing the URL in the browser and reloading. When you finally get a url that works, you will need to translate the changes you made in the url back into changes to make to your baseurl or params dictionary.

If requests.get() executes without generating a runtime error, you are still not done with your error checking. No error means that your computer managed to connect to some web server and get some kind of response, but it doesn't mean that it got the data you were hoping to get.

Fortunately, the response object returned by requests.get() has the ``.url`` attribute, which will help you with debugging. It's a good practice during program development to have your program print it out. This is easier than calling ``requestURL()`` but is only available to you if ``requests.get()`` succeeds in returning a Response object.

More importantly, you'll want to print out the contents. Sometimes the text that's retrieved is an error message that you can read, such as ``{"request empty": "There is no data that corresponds to your search."}``. In other cases, it's just obviously the wrong data. Print out the first couple hundred characters of the response text to see if it makes sense.

.. sourcecode:: python


    import requests
    dest_url = <some expr>
    d = <some dictionary>
    resp = requests.get(dest_url, params = d)
    print(resp.url)
    print(resp.text[:200])

Now you try it. Use ``requests.get()`` and/or ``requestURL()`` to generate the following url, ``https://www.google.com/search?tbm=isch&q=%22violins+and+guitars%22``. (Don't look at the previous page of the textbook, at least not yet. If you can't figure it out after 15 minutes of trying the approaches on this page, then look back.)

Note that we don't have the requests module in the browser environment, so you'll have to try this on your local computer, by creating a file and then executing it with your native python interpreter, or by running it in a Jupyter notebook.

**TEST SPACE FOR THE NEW REQUESTS MODULE**

.. activecode:: ac400_5_1

   import restrictedrequests

   obj = restrictedrequests.get("https://www.michigandaily.com?")

   print(obj)


**Check your understanding**

.. mchoice:: question400_5_1
   :practice: T
   :answer_a: look at the .url attribute of the response object
   :answer_b: look at the first few characters of the .text attribute of the response object
   :answer_c: look at the .status attribute of the response object
   :answer_d: look carefully at your code and compare it to the sample code here
   :feedback_a: Checking the url that was generated may be helpful, but first check what the contents of the response are
   :feedback_b: Checking the contents that were returned is a good first step
   :feedback_c: Sometimes the status code will be informative, but it's worth starting with the actual contents first
   :feedback_d: Try to understand the nature of the problem rather than just matching code to a template; you may not always have a template
   :correct: b

   If the results you are getting back from a call to ``requests.get()`` are not what you expected, what's the first thing you should do?

.. mchoice:: question400_5_2
   :practice: T
   :answer_a: look at the .url attribute of the response object
   :answer_b: look at the values you passed in to requests.get()
   :answer_c: invoke the requestURL() function above with the same parameters you used to invoke requests.get()
   :answer_d: look carefully at your code and compare it to the sample code on this page
   :feedback_a: It's a good idea to examine the url that was generated, but you didn't get a response object so you can't get it this way
   :feedback_b: This is a reasonable approach, but it may be easier to figure out what's wrong if you look at the URL that was generated
   :feedback_c: It can be really helpful to see the URL that was generated; you may be able to spot what went wrong
   :feedback_d: Try to understand the nature of the problem rather than just matching code to a template; you may not always have a template
   :correct: c

   If there is a runtime error and you don't get a response object back from the call to ``requests.get()``, what should you do?
