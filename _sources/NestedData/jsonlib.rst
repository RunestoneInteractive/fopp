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

Consider, for example, some data that we might get from Apple's iTunes, in the JSON format:

``'\n\n\n{\n "resultCount":25,\n "results": [\n{"wrapperType":"track", "kind":"podcast", "collectionId":10892'``

If you pass that string into ``json.loads()`` you will get a python dictionary object. This is such a common operation to do with json-formatted results that the requests module provides a shortcut, the ``.json()`` method for response objects.

The other function we will use is ``dumps``. It does the inverse of ``loads``. It takes a python object, typically a dictionary or a list, and returns a string, in JSON format. It has a few other parameters. Two useful parameters are sort_keys and indent. When the value True is passed for the sort_keys parameter, the keys of dictionaries are output in alphabetic order with their values. The indent parameter expects an integer. When it is provided, dumps generates a string suitable for displaying to people, with newlines and indentation for nested lists or dictionaries. For example, the following function uses json.dumps to make a human-readable printout of a nested data structure.

.. sourcecode:: python

   def pretty(obj):
       return json.dumps(obj, sort_keys=True, indent=2)


