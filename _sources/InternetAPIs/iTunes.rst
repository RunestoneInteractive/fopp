..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Searching for Media on iTunes
=============================

You've already seen an example using the iTunes API in :ref:`Generating Request URLs.<generating_request_urls>`
The iTunes API allows users to search for movies, podcasts, music, music videos, tv shows, and books that are hosted
on the iTunes site. You can explore the `official iTunes API documentation <https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/>`_.

Earlier we showed a possible query for podcasts about Ann Arbor. Now, we'll show you how to construct it yourself!

We will first need to write our import statements, so that we have access to the requests module and json module.

.. sourcecode:: python

    import requests
    import json

At this point, we look to our documentation to find out what the base of the url will be as well as what parameters are neeed to construct the request. In the `Searching <https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching>`_ section of the documentation, we can see that the url should be in the form of ``https://itunes.apple.com/search?parameterkeyvalue`` so we know the base url should be ``https://itunes.apple.com/search``. To determine what parameters are necessary, we can look at the table to learn what parameter keys are available, as well as get a description of the paramter, if it is required, and what values can be passed through it.

``term`` is a required parameter with no default value, so we'll have to provide that. 

.. fillintheblank:: question400_9_1

   What should be the value associated with term?

   .. sourcecode:: python

    import requests
    import json 

    params = {"term":        }

    The value of term is

   -  :Ann Arbor: Yes! We want to search for Ann Arbor, so that should be the value associated with term.
      :podcast: No, podcast is the kind of media we are searching for, not the term.
      :.*: Incorrect, try again.

We also want to make sure that we're searching for podcasts.

.. fillintheblank:: question400_9_2

   Look at the iTunes documentation. What is the parameter we need to use to only search for podcasts?

   -  :entity|media: Yes, you can use this parameter for this task!
      :media: Yes, for this task you can use media. But notice that entity can be more specific, so you may need to use that in other situations!
      :term: Remember, term is for the search term or query - not for the type of media.
      :podcast: No, podcast is the value, not the parameter
      :.*: Incorrect, try again. Look at the iTunes documentation

Note that both entity *and* media are parameters we can use for this task. Entity can be more specific though, so you may need to use that in other situations! 

Now, our code can now make a request to the iTunes API:

.. sourcecode:: python

    import requests
    import json 

    parameters = {"term": "Ann Arbor", "entity": "podcast"}
    iTunes_response = requests.get("https://itunes.apple.com/search", params = parameters)

In the textbook, this first step would look like this:

.. activecode:: ac400_11_1
    :include: ac400_11_3

    parameters = {"term": "Ann Arbor", "entity": "podcast"}
    iTunes_response = get("https://itunes.apple.com/search", params = parameters)    

All that is left to do is to convert the JSON response to a python object, and we'll be all set to work with the data we have retreived:

.. sourcecode:: python

    import requests
    import json 

    parameters = {"term": "Ann Arbor", "entity": "podcast"}
    iTunes_response = requests.get("https://itunes.apple.com/search", params = parameters)

    py_data = json.loads(iTunes_response.text)

Remember though, that we don't have json implemeted yet, so we can't convert the data into a python object just yet.

.. activecode:: ac400_11_3
    :hidecode:

    from urllib.request import urlopen

    class Response:

        def __init__(self, data, url):
            self.text = data
            self.url = url

        def __str__(self):
            return "A response object for the following request: {}".format(self.url)


    def requestURL(baseurl, params = {}):
        if len(params) == 0:
            return baseurl
        complete_url = baseurl + "?"
        pairs = [str(pair) + "=" + str(params[pair]).replace(" ", "+") for pair in params]
        complete_url += "&".join(pairs)
        return complete_url

    def get(baseurl, params = {}):
        user_req = requestURL(baseurl, params)
        data = urlopen(user_req)
        text_data = data.read().strip()
        if len(text_data) > 0:
            user_resp_obj = Response(text_data, user_req)
            return user_resp_obj
        else:
            # Right now I'm returning a string because 
            # when I have this activecode window included 
            # in the windows above, it will not pass on the 
            # exception, and instead say that there is a 
            # problem in another window. Not sure what the best
            # way around that is.


            return "requests.exceptions.ConnectionError: HTTPConnectionPool(host='{}', port=80): Max retries exceeded with url: /bat?key=val (Caused by <class 'socket.gaierror'>: [Errno 11004] getaddrinfo failed)".format(baseurl)
            #raise Exception("requests.exceptions.ConnectionError: HTTPConnectionPool(host='{}', port=80): Max retries exceeded with url: /bat?key=val (Caused by <class 'socket.gaierror'>: [Errno 11004] getaddrinfo failed)".format(baseurl))

