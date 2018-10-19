..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _requests_details_chap:

More Details of the Requests Module
===================================

Once we run requests.get, we get a response object. It's an instance of a class called Response that is defined in the requests module. We won't look at it's definition. Indeed, we haven't even learned how to define our own classes at this point in the course. Think of it as analogous to the Turtle class. Each instance of the class has some attributes; different instances have different values for the same attribute. All instances can also invoke certain methods that are defined for the class.

Previously, we saw that a response object has an attribute (instance variable) *.text*, which contains the contents of the page, the stuff after all the HTTP headers. Response objects have some other useful attributes and methods that we can access. A few are used and explained below. Others will be introduced in later chapters.

.. sourcecode:: python

   import requests
   
   page1 = requests.get("https://github.com/presnick/runestone")
   page2 = requests.get("https://github.com/presnick/nonsense")
   page3 = requests.get("http://github.com/presnick/runestone")
   
   for p in [page1, page2, page3]:
       print("********")
       print("url:", p.url)
       print("status:", p.status_code)
       print("content type:", p.headers['Content-type'])
       if len(p.text) > 1040:
           print("content snippet:", p.text[1000:1040])
       if len(p.history) > 0:
           print("redirection history")
           for h in p.history:
               print("  ", h.url, h.status_code)
               
Here's the output that is produced when I run that code.

::

   $ python fetching.py
   ********
   url: https://github.com/presnick/runestone
   status: 200
   content type: text/html; charset=utf-8
   content snippet: ontent="@github" name="twitter:site" /><
   ********
   url: https://github.com/presnick/nonsense
   status: 404
   content type: application/json; charset=utf-8
   ********
   url: https://github.com/presnick/runestone
   status: 200
   content type: text/html; charset=utf-8
   content snippet: ontent="@github" name="twitter:site" /><
   redirection history
      http://github.com/presnick/runestone 301
      
First, consider the *.url* attribute. It is the URL that was actually accessed. We will see in a later chapter that requests.get lets us pass additional parameters that are used to construct the full URL, so this will be useful for seeing the full URL.

Next, consider the *.status_code* attribute. 

* When a server thinks that it is sending back what was requested, it send the code 200. 

* When the requested page doesn't exist, it sends back code 404, which is sometimes described as "File Not Found". In the above example, that's what happened for page2, https://github.com/presnick/nonsense

* When the page has moved to a different location, it sends back code 301 and a different URL where the client is supposed to retrieve from. The request.get method is so smart that when it gets a 301, it looks at the new url and fetches it. For example, github redirects all requests using http to the corresponding page using https (the secure http protocol). Thus, when we asked for page3, http://github.com/presnick/runestone, github sent back a 301 code and the url https://github.com/presnick/runestone. The requests.get function then fetched the other url. It reports a status of 200 and the updated url. We have to do further inquiry to find out that a redirection occurred (see below).

The *.headers* attribute has as its value a dictionary consisting of keys and values. To find out all the headers, you can run the code and add a statement ``print(p.headers.keys())``. One of the headers is 'Content-type'. For pages 1 and 3 its value is ``text/html; charset-utf-8``. For page2, where we got an error, the contents are of type ``application/json; charset=utf-8``.

The *.text* attribute we have seen before. It contains the contents of the file (or sometimes the error message).

The *.history* attribute contains a list of previous responses, if there were redirects. That list is empty, except for page3. For page3, we are able to see what happened in the original request: what the url was and the response code of 301.

To summarize, a Request object has the following useful attributes that can be accessed in your program:

    * .text
    * .url
    * .status_code
    * .headers
    * .history

**Check Your Understanding**

.. mchoice:: question400_3_1
   :multiple_answers:
   :answer_a: resp.json()
   :answer_b: resp.json
   :answer_c: json.dumps(resp.text)
   :answer_d: json.loads(resp.text)
   :answer_e: json.loads(resp.url)
   :feedback_a: .json() invokes the json method
   :feedback_b: .json refers to the method, but doesn't invoke it
   :feedback_c: dumps turns a list or dictionary into a json-formatted string
   :feedback_d: loads turns a json-formatted string into a list or dictionary
   :feedback_e: loads turns a json-formatted string into a list or dictionary, but .url returns the url used to get the response, not the text of the response.
   :correct: a,d
   :practice: T

   If ``resp`` is a response object returned by a call to ``requests.get()``, which of the following is a way to extract the contents into a python dictionary or list?

