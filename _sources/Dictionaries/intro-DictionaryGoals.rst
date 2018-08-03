..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: dictionary, mapping type, key-value pair
   single: [ ]; dictionary access
   value; dictionary

.. qnum::
   :prefix: dictionaries-1-
   :start: 1

Introduction: Dictionaries
==========================

The compound data types we have studied in detail so far --- strings and lists --- are sequential collections. This 
means that the items in the collection are ordered from left to right and they use integers as indices to access
the values they contain.

**Dictionaries** are a different kind of collection. They are Python's built-in **mapping type**. A map is an 
unordered, associative collection.  The association, or mapping, is from a **key**, which can be of any immutable type 
(e.g., a number of string), to a **value**, which can be any Python data object. You'll learn how to use these collections 
in the following chapter.

Learning Goals
--------------

* To introduce the idea of Key, Value pairs
* To introduce the idea of an unordered sequence
* To understand the use of parallel construction in lists
* To understand the performance benefit and simplicity of a dictionary over parallel lists
* To understand that dictionary iteration iterates over keys

Objectives
----------

To correctly use the following:

* The index operator to add a key,value pair to a dicionary
* The del operator to remove an antry
* index operator - retrieval by key
* search - contains in / not in
* items
* keys
* values
* get - with a default value
