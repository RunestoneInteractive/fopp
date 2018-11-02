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

At this point, we look to our documentation to find out what the base of the url will be as well as what parameters are neeed to construct the request. In the `Searching <https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching>`_ section of the documentation, we can see that the url should be in the form of ``https://itunes.apple.com/search?parameterkeyvalue`` so we know the base url should be ``https://itunes.apple.com/search``. To determine what parameters are necessary, we can look at the table in the documentation to learn what parameter keys and values will be understood by the iTuens API server.

``term`` is a required parameter with no default value, so we'll have to provide that.

.. fillintheblank:: question27_9_1

   Look at the iTunes API documentation. If we're looking for podcasts originating in Ann Arbor, what value should be associated with the key "term"?

   .. sourcecode:: python

    import requests
    import json 

    params = {"term":        }

   -  :["']Ann Arbor["']: Yes! We want to search for Ann Arbor, so that should be the value associated with "term".
      :Ann Arbor: Don't forget the quotes; it needs to be a string.
      :["']podcast["']: That value should be associated with a different key.
      :'podcast': That value should be associated with a different key.
      :podcast: That value should be associated with a different key.
      :.*: Incorrect, try again.

We also want to make sure that we're searching for podcasts.

.. fillintheblank:: question27_9_2

   Look at the iTunes API documentation. What is the key we need to use to only search for podcasts?

   .. sourcecode:: python

    import requests
    import json

    params = {      : "podcast"}

   -  :["']entity|media["']: Yes, you can use this parameter for this task!
      :entity|media: Don't forget the quotes; it needs to be a string
      :term: Remember, term is for the search term or query - not for the type of media.
      :podcast: No, podcast is the value, not the key
      :.*: Incorrect, try again. Look at the iTunes documentation

Note that both entity *and* media are parameters we can use for this task. Entity can be more specific though, so you may need to use that in rather than media!

Now, our code can now make a request to the iTunes API:

.. activecode:: ac27_9_1

    import requests
    import json

    parameters = {"term": "Ann Arbor", "entity": "podcast"}
    iTunes_response = get("https://itunes.apple.com/search", params = parameters)

    py_data = json.loads(iTunes_response.text)

With that result in hand, you will have to go through the process previously described as :ref:`Understand. Extract. Repeat. <debug_nested_chap>` . For example, to print out the names of all the podcasts returned, one could run the following code.

.. activecode:: ac27_9_2

    import requests
    import json

    parameters = {"term": "Ann Arbor", "entity": "podcast"}
    iTunes_response = get("https://itunes.apple.com/search", params = parameters)

    py_data = json.loads(iTunes_response.text)
    for r in py_data['results']:
        print(r['trackName'])

