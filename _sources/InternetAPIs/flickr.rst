..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _flickr_api_chap:

Searching for tags on flickr
============================

Consider another service, the image sharing site flickr. People interact with the site using a web browser. An API is available to make it easier for application programs to fetch data from the site and post data to the site. That allows third parties to make applications that integrate elements of flickr. Flickr provides the API as a way to increase the value of its service, and thus attract more customers. You can explore the `official documentation about the site <https://www.flickr.com/services/api/>`_.

Here we will explore some aspects of one endpoint that flickr provides for searching for photos matching certain criteria. Check out the `full documentation <https://www.flickr.com/services/api/flickr.photos.search.html>`_ for details.

This API is more complex than the APIs you examined in previous subchapters. Though it is not as complicated as others you may see, the Flickr API is a good introduction to some of the trickeries of REST APIs you'll encounter in the wild, and provides good practice for composing a function that deals with a complex REST API. Plus, photo data is pretty interesting to examine.

The structure of a URL for a photo search on flickr is:

* base URL is ``https://api.flickr.com/services/rest/``
* ``?``
* key=value pairs, separate by &s:
   * One pair is ``method=flickr.photos.search``. This says to do a photo search, rather than one of the many other operations that the API allows. Don't be confused by the word "method" here-- it is not a python method. That's just the name flickr uses to distinguish among the different operations a client application can request.
   * ``format=json``. This says to return results in JSON format.
   * ``per_page=10``. This says to return 10 results at a time.
   * ``tags=mountains``. This says to return photos that are tagged with the word "mountains".
   * ``api_key=...``. Flickr only lets authorized applications access the API. Each request must include a secret code as a value associated with api_key. Anyone can get a key. See the `documentation for how to get one <https://www.flickr.com/services/api/misc.api_keys.html>`_. We recommend that you get one so that you can test out the sample code in this chapter.
   * ``nojsoncallback=1``. This says to return the raw JSON result without a function wrapper around the JSON response. 

Let's put everything together to make a little retrieval tool for flickr images containing particular tags. Of course, in a browser, you can just use flickr's search tool. But doing this through the API opens up other possibilities that you can explore for features not provided on the regular flickr website.

Below is some code that queries the flickr API for images that have a particular tag (I have found that searching for "mountains" and "rivers" usually produces beautiful images that are "safe for work", so the example below does that search.)

.. sourcecode:: python

    # import statements
    import requests
    import json
    import webbrowser
    
    # apply for a flickr authentication key at http://www.flickr.com/services/apps/create/apply/?
    # paste the key (not the secret) as the value of the variable flickr_key
    flickr_key = 'yourkeyhere'

    def get_flickr_data(tags_string):
        baseurl = "https://api.flickr.com/services/rest/"
        params_diction = {}
        params_diction["api_key"] = flickr_key # from the above global variable
        params_diction["tags"] = tags_string # Input must follow some rules in order to work properly
        params_diction["tag_mode"] = "all"
        params_diction["method"] = "flickr.photos.search"
        params_diction["per_page"] = 3
        params_diction["media"] = "photos"
        params_diction["format"] = "json"
        params_diction["nojsoncallback"] = 1
        flickr_resp = requests.get(baseurl, params = params_diction)
        # Useful for debugging: print the url! Uncomment the below line to do so.
        #print(flickr_resp.url) # Paste the result into the browser to check it out...
        flickr_text = flickr_resp.text # Access the text attribute of the response object
        # Then, transform it into a Python object, once you have valid JSON formatted text
        flickr_data_obj = json.loads(flickr_text)
        return flickr_data_obj # And return it

    # A few different invocations to the get_flickr_data function
    result_sunset_mountains = get_flickr_data("mountains, sunset")
    result_river_mts = get_flickr_data("river,mountains")
    result_just_mountains = get_flickr_data("mountains")

    # And try printing one out to see what it's like... lots of data
    # (Recall the nested data and nested iteration chapter!)

    print(result_just_mountains)
    
    # Some code to open up a few photos that are tagged with the mountains and river tags...

    photos = result_river_mts['photos']['photo']
    for photo in photos:
        owner = photo['owner']
        photo_id = photo['id']
        url = 'https://www.flickr.com/photos/{}/{}'.format(owner, photo_id)
        try:
            webbrowser.open(url)
        except:
            print("Error -- perhaps that photo has been deleted? Check it out.")


For documentation on how to do a flickr search for a particular tag, see the official documentation at https://www.flickr.com/services/api/flickr.photos.search.html. 

Based on that documentation, we set the parameters ``method``, ``api_key``, ``format``, ``nojsoncallback``, ``tags``, ``tag_mode``, and ``per_page``. Note that you can print out the full url that is generated by ``requests.get`` if you uncomment the line that does so in the code above. Try pasting that URL into a browser window and then editing the URL manually to try to change the search.

The response sent back by flickr is loaded into a python dictionary using ``json.loads()``.

In the end, we loop through the list of photo dictionaries that were returned, extracting two fields, ``owner`` and ``photo_id``. Those are used to create new URLs that are in the format flickr expects for displaying a webpage containing a single image. Each of those URLs is passed to the ``webbrowser.open()`` function (webbrowser is a module built in to Python that can help open URLs in your default web browser). If all goes well, that should open five browser tabs, each with a picture that some flickr user had tagged with the words "mountains" and "rivers".

Because we specified ``"all"`` as the value for the ``"tag_mode"`` query parameter, we'll only get photos that are tagged with *both* "mountains" and "river". Of course, you could also try out some variations on this code to see photos that have different tags. 

.. note:

    If any of that code is puzzling, try adding some print calls or breaking down the complex expressions into a series of shorter statements.