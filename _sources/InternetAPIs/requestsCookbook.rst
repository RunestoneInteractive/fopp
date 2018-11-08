..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: requests-9-
   :start: 1

.. _using_RESTAPIs_chap:

Requests Cookbook
=================

The basic process involves three steps:

1. Make the appropriate call to requests.get(). If you have trouble, print out the URL that's generated and work with it in the browser.
2. Extract content from response object, by accessing the .text attribute and calling json.loads if the string is in json format.
3. Process the data you've extracted. Often, when you get back data in json format, it will be a highly nested data structure. You may only need a little of that data. You may want to review the chapter on nested data and nested iteration, especially the section on the cycle of :ref:`Understand. Extract. Repeat.<debug_nested_chap>`

The key to success is to make sure that you debug each of those steps before going on to the next one. This is just a particular case of the general advice we gave early in the course: start small and keep it working at every stage, growing the amount that your program does over time.
