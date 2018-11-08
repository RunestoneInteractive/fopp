..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: requests-11-
   :start: 1

.. _flickr_api_chap:

Searching for tags on flickr
============================

Consider another service, the image sharing site flickr. People interact with the site using a web browser or mobile apps. Users who upload photos can assign one or more short "tags" to each photo. Tags are words like "sunset" or "spaghetti" that describe something about the photo. They can be used for searching or finding related photos.

An API is available to make it easier for application programs to fetch data from the site and post data to the site. That allows third parties to make applications that integrate elements of flickr. Flickr provides the API as a way to increase the value of its service, and thus attract more customers. You can explore the `official documentation about the site <https://www.flickr.com/services/api/>`_.

Here we will explore some aspects of one endpoint that flickr provides, for searching for photos matching certain criteria. Check out the `full documentation for photo search <https://www.flickr.com/services/api/flickr.photos.search.html>`_ for details.

This API is more complex than the APIs you examined in previous subchapters, because it requires authentication, and because it requires you to specify that you want results to be returned in JSON format. It also provide more good practice at learning to use an API from the documentation. Plus, photo data is pretty interesting to examine.

The structure of a URL for a photo search on flickr is:

* base URL is ``https://api.flickr.com/services/rest/``
* ``?``
* key=value pairs, separated by &s:
   * One pair is ``method=flickr.photos.search``. This says to do a photo search, rather than one of the many other operations that the API allows. Don't be confused by the word "method" here-- it is not a python method. That's just the name flickr uses to distinguish among the different operations a client application can request.
   * ``format=json``. This says to return results in JSON format.
   * ``per_page=5``. This says to return 5 results at a time.
   * ``tags=mountains,river``. This says to return things that are tagged with "mountains" and "river".
   * ``tag_mode=all``. This says to return things that are tagged with *both* mountains and river.
   * ``media=photos``. This says to return photos
   * ``api_key=...``. Flickr only lets authorized applications access the API. Each request must include a secret code as a value associated with api_key. Anyone can get a key. See the `documentation for how to get one <https://www.flickr.com/services/api/misc.api_keys.html>`_. We recommend that you get one so that you can test out the sample code in this chapter creatively. We have included some cached responses, and they are accessible even without an API key.
   * ``nojsoncallback=1``. This says to return the raw JSON result without a function wrapper around the JSON response. 

Let's put everything together to make a little retrieval tool for flickr images containing particular tags. Of course, in a browser, you can just use flickr's search tool. But doing this through the API opens up other possibilities that you can explore for features not provided on the regular flickr website.

Below is some code that queries the flickr API for images that have a particular tag.

.. note::

    Searching for "mountains" and "rivers" usually produces beautiful images that are "safe for work", so the example below does that search. We have already cached a response for the particular search in the code window below. That allows the code to run even if you don't provide a valid flickr api_key. We've also checked to make sure that the five returned images are indeed safe for work. If you run this code outside of a browser, or if you do other searches, you will need to provide a valid flickr api_key.

.. activecode:: ac27_10_1

    # import statements
    import requests_with_caching
    import json
    # import webbrowser
    
    # apply for a flickr authentication key at http://www.flickr.com/services/apps/create/apply/?
    # paste the key (not the secret) as the value of the variable flickr_key
    flickr_key = 'yourkeyhere'

    def get_flickr_data(tags_string):
        baseurl = "https://api.flickr.com/services/rest/"
        params_diction = {}
        params_diction["api_key"] = flickr_key # from the above global variable
        params_diction["tags"] = tags_string # must be a comma separated string to work correctly
        params_diction["tag_mode"] = "all"
        params_diction["method"] = "flickr.photos.search"
        params_diction["per_page"] = 5
        params_diction["media"] = "photos"
        params_diction["format"] = "json"
        params_diction["nojsoncallback"] = 1
        flickr_resp = requests_with_caching.get(baseurl, params = params_diction, permanent_cache_file="flickr_cache.txt")
        # Useful for debugging: print the url! Uncomment the below line to do so.
        print(flickr_resp.url) # Paste the result into the browser to check it out...
        return flickr_resp.json()

    result_river_mts = get_flickr_data("river,mountains")

    # Some code to open up a few photos that are tagged with the mountains and river tags...

    photos = result_river_mts['photos']['photo']
    for photo in photos:
        owner = photo['owner']
        photo_id = photo['id']
        url = 'https://www.flickr.com/photos/{}/{}'.format(owner, photo_id)
        print(url)
        # webbrowser.open(url)

The response sent back by flickr is loaded into a python dictionary using ``json.loads()``.

In the end, we loop through the list of photo dictionaries that were returned, extracting two fields, ``owner`` and ``photo_id``. Those are used to create new URLs that are in the format flickr expects for displaying a webpage containing a single image. In the runestone environment, you'll have to copy those URLs to new tabs to see the photos. In a full python environment, you can uncomment the line of code that imports the webbrowser module and the line of code that calls the ``webbrowser.open()`` function. If all goes well, that should open five browser tabs, each with a picture that some flickr user had tagged with the words "mountains" and "rivers".


.. note:

    If any of that code is puzzling, try adding some print calls or breaking down the complex expressions into a series of shorter statements.

**Check your understanding**

.. mchoice:: 24_flickr_1
   :practice: T
   :answer_a: Make two calls, ``get_flickr_data('mountains')`` and ``get_flickr_data('river')``
   :answer_b: Call ``get_flickr_data('mountains | river')``
   :answer_c: Set ``params_diction["tag_mode"] = "any"``
   :answer_d: Set ``params_diction["method"] = "any"``
   :answer_e: Set ``params_diction["tag_mode"] = "OR"``
   :feedback_a: This would work, but then you'd have to merge the two sets of results.
   :feedback_b: The | character (pronounced "pipe") is often used to mean "or" in computing languages, but the documentation doesn't suggest that that will work here.
   :feedback_c: You're a careful documentation reader!
   :feedback_d: The method paramater says what kind of operation to do. In this case we need it to be flickr.photos.search.
   :feedback_e: You're on the right track, but check the documentation a little more carefully.
   :correct: c

   If you wanted to search for photos tagged with *either* river or mountains, rather than requiring both, what would you change in the code? (Hint: check the `documentation <https://www.flickr.com/services/api/flickr.photos.search.html>`_)

.. datafile:: flickr_cache.txt

    {
      "https://api.flickr.com/services/rest/format-json_media-photos_method-flickr.photos.search_nojsoncallback-1_per_page-5_tag_mode-all_tags-river,mountains": "{\"photos\":{\"page\":1,\"pages\":20572,\"perpage\":5,\"total\":\"102860\",\"photo\":[{\"id\":\"44858440865\",\"owner\":\"45934971@N07\",\"secret\":\"f95d6c07c2\",\"server\":\"4850\",\"farm\":5,\"title\":\"The golden pond\",\"ispublic\":1,\"isfriend\":0,\"isfamily\":0},{\"id\":\"43953569330\",\"owner\":\"145056248@N07\",\"secret\":\"1bc1639464\",\"server\":\"4809\",\"farm\":5,\"title\":\"260417\",\"ispublic\":1,\"isfriend\":0,\"isfamily\":0},{\"id\":\"43953448610\",\"owner\":\"145056248@N07\",\"secret\":\"cec92e6fb9\",\"server\":\"4878\",\"farm\":5,\"title\":\"Lenticular cloud over Hot Creek in the Eastern Sierra, California\",\"ispublic\":1,\"isfriend\":0,\"isfamily\":0},{\"id\":\"44857602655\",\"owner\":\"131540074@N08\",\"secret\":\"02435f898c\",\"server\":\"4841\",\"farm\":5,\"title\":\"Lechtal\",\"ispublic\":1,\"isfriend\":0,\"isfamily\":0},{\"id\":\"44857423045\",\"owner\":\"145056248@N07\",\"secret\":\"ba18b0efe3\",\"server\":\"4883\",\"farm\":5,\"title\":\"Glacial river, Altai Tavan Bogd National Park, Mongolia\",\"ispublic\":1,\"isfriend\":0,\"isfamily\":0}]},\"stat\":\"ok\"}"
    }