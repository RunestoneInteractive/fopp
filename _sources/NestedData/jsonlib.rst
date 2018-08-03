..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Processing JSON results
=======================

JSON stands for JavaScript Object Notation. It looks a lot like the representation of nested dictionaries and lists in 
python when we write them out as literals in a program, but with a few small differences (e.g., the word null instead of 
None). When your program receives a JSON-formatted string, generally you will want to convert it into a python object, a 
list or a dictionary.

Again, python provides a module for doing this. The module is called json. We will be using two functions in this module, 
``loads`` and ``dumps``.

``json.loads()`` takes a string as input and produces a python object (a dictionary or a list) as output.

Consider, for example, the iTunes REST API. If we request data from iTunes, the response we get back will be a string 
that begins with the following:

``'\n\n\n{\n "resultCount":25,\n "results": [\n{"wrapperType":"track", "kind":"podcast", "collectionId":10892'``

If you pass that string into ``json.loads()`` you will get a python dictionary object. This is such a common operation to do with json-formatted results that the requests module provides a shortcut, the ``.json()`` method for response objects.

The other function we will use is ``dumps``. It does the inverse of ``loads``. It takes a python object, typically a dictionary or a list, and returns a string, in JSON format. It has a few other parameters. Two useful parameters are sort_keys and indent. When the value True is passed for the sort_keys parameter, the keys of dictionaries are output in alphabetic order with their values. The indent parameter expects an integer. When it is provided, dumps generates a string suitable for displaying to people, with newlines and indentation for nested lists or dictionaries. For example, the following function uses json.dumps to make a human-readable printout of a nested data structure.

.. sourcecode:: python

   def pretty(obj):
       return json.dumps(obj, sort_keys=True, indent=2)


.. mchoice:: question17_3_1
   :multiple_answers:
   :answer_a: result.json()
   :answer_b: resp.json()
   :answer_c: resp.json
   :answer_d: json.dumps(resp.text)
   :answer_e: json.loads(resp.text)
   :feedback_a: result was the name of the variable in the examples on this page, but not for this question.
   :feedback_b: .json() invokes the json method
   :feedback_c: .json refers to the method, but doesn't invoke it
   :feedback_d: dumps turns a list or dictionary into a json-formatted string
   :feedback_e: loads turns a json-formatted string into a list or dictionary
   :correct: b,e

   If ``resp`` is a response object returned by a call to ``requests.get()``, which of the following is a way to extract the contents into a python dictionary or list?

