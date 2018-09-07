..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Fetching a page
===============

The web works with a metaphor of "pages". When you put a URL into a browser, you see a "page" of content.

For example, if you visit `<https://github.com/presnick/runestone>`_, you will see the home page for the open source project whose contents are used to run this online textbook.

The browser is just a computer program that fetches the contents and displays them in a nice way. If you want to see what the contents are, in plain text, right click your mouse on the page and select ``View source``, or whatever the equivalent is in your browser.

You don't need to use a browser to fetch the contents of a page, though. 

Fetching in python with requests.get
------------------------------------

In Python, there's a module available, called ``requests``. You can use the get function in the ``requests`` module to fetch the contents of a page. 

Here, the code is only printing the first 1000 characters. It turns out that somewhere later on the page there is an ellipsis character (a single character representing an ellipsis ``...``). If we try to print out the whole contents, we get an error. (You'll learn a little bit more about handling unicode characters in another chapter.) For now, if you try this code, just extract the first 1000 characters when printing it out.

Note that you must save this code in a program file of your own and run it on your own machine, because it relies on the ``requests`` external Python module being installed!

.. sourcecode:: python

   import requests
 
   page = requests.get("https://github.com/presnick/runestone")   
   print(page.text[:1000])