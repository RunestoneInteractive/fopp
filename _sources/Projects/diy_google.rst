..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

:skipreading:`True`

.. _diy_google:

🤔 Build your own Google
==========================

How does the Google search engine work?  That is the big question we are going to investigate in this project.  Of course only a few people know exactly how the search engine works today because that is a closely guarded secret, but we can make our own simple version.  The original `PageRank algorithm <https://en.wikipedia.org/wiki/PageRank>`_ Is interesting to read about and is widely considered to be an algorithm that has truly changed the world.

Before we can understand how to to make our own search engine, we need to understand a bit about the data it has to work with.  That is the source for the web pages, written in a language called HyperText Markup Language or HTML.  HTML is a plain text programming language that lets you create documents, these documents are displayed (or rendered) by a web browser.  Without the browser HTML pages are not so easy to read.

If you think about common things that you do with a word processor to format a document that is a good starting point for us to learn about HTML.  The things you commonly do with a word processor include:

* Create headings and subheadings
* Create bullet lists of things
* Create numbered lists of things
* Format text
* Add page or line breaks
* Insert images, graphs, and videos
* Create tables of data

Whereas your word processor does all of this formatting in a What you See is What you get (WYSIWYG) way, HTML as its name implies is a markup language.  So what you will ultimately see is described by a set of **tags**.  Lets look at some examples of the tasks we described above an the tags we would use to create them.

.. csv-table::

    Task,Tag(s)
    create headings, h1, h2, ... h6, p
    create bullet lists, ul, li
    create numbered lists, ol, li
    insert images, img
    create tables, table, tr, td

Now lets put those tags to use to create a simple web page.

.. activecode:: act_html_page
    :language: html
    :nocodelens:

    <h1>Hello World</h1>

    <p>This is a paragraph of text about the top three things I like most about <strong>Python</strong>.
    <ol>
       <li>It is easy to read</li>
       <li>It is open source</li>
       <li>It has many modules to do cool things</li>
    </ol>
    </p>

If you click on the Save and Run button The HTML description of the page will be rendered right next to it as output.  Feel free to experiment and make some changes to the html.  For example change the ol tag to a ul tag to make our list unnumbered, or add your own list.

The thing that gives HTML superpowers is the simple `a` tag. This tag allows us to add links that take us from one document to another.  Copy and paste this tag to the bottom of the source code above and then re-run it.  ``<a href="/runestone/static/fopp/_static/home.html">Home</a>``  You will notice that the word Home has now become a link.  You can even click on it in the little mini-browser window and it will take you to a new page.

Of course modern web pages get much more complex than our simple example, but it does a good job of illustrating the basics.  Modern web pages are built on a three legged stool of:

* HTML
* Cascading Style Sheets (CSS)
* Javascript

For purposes of a simple search engine we can ignore CSS and Javascript as we don't care how the page looks or functions and focus simply on the content of the page.

Bare Essentials of a Web Spider
-------------------------------

1. Read (or visit) a web page
2. Strip away all of the formatting tags
3. Associate the words in this page with the URL -- Sounds like a great job for dicttionaries.  We will call this the **index**
4. Find all of the links on the page
5. Add any **new** URLs to a list of pages to visit in the future.

Bare Essentials of a Search Engine
----------------------------------

1. Wait for a user to enter some words to look for
2. Using the index created by the spider find all of the URL's containing that have all of the words in the query.
3. Present the user with a list of URLs (web pages) that satisfy the query.

Sounds easy right!?  Like many great ideas it is pretty simple at its core, but of course doing this for all 130 trillion web pages!

Part I
------

1. Identify and save all of the links in the page to a list
2. Remove all tags from the page text
   a. This could be done by reading a character at a time and recognizing the beginning of a tag by the < and the end by the > throwing away all of the <, > and text in between.
   b. This could also be done as a regex search / replace
3. Split the page into individual words and add an entry to the dictionary for each word on the page


.. datafile:: home.html
    :rows: 25
    :fromfile: ../_static/home.html
    :edit:

.. activecode:: act_google_p1
    :nocodelens:


Part II
-------

Next we will introduce you to a powerful Python package called ``requests``.  The requests package makes it easy for you to read the contents of a web page -- just like you read the file above -- but it allows you to get the page directly from the web server.

.. activecode:: act_google_req

    import requests

    res = requests.get("/runestone/static/fopp/_static/home.html")

    page_text = res.text
    # Now the whole page is just one big string!

    print(page_text)


Now the main takeaway from this is that the page is just a big string, AND pay careful attention to the fact that the URL is also just a string.

In this part, you are going to start with the URL for the home page and repeat all of the steps.  But in addition to those steps you will find that there are five additional pages you can get to.  We have tried to keep your spider inside a small "walled garden" so your spider doesn't attempt to reach all 130 trillion pages.

When you complete your "spidering" of these six pages you can then write teh code to do a search engine as described above.

.. activecode:: act_google_p2
    :nocodelens:


Some Challenge Problems
-----------------------

* How can you test your search engine?
* Research and try to implement the original page rank algorithm

