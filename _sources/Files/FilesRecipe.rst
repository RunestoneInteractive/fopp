..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-6-
   :start: 1

Recipe for Reading and Processing a File
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here's a foolproof recipe for processing the contents of a text file. If you've fully digested the previous 
sections, you'll understand that there are other options as well. Some of those options are preferable for some 
situations, and some are preferred by python programmers for efficiency reasons. In this course, though, you can 
always succeed by following this recipe.

#1. Open the file with ``open``

#2. Use ``.readlines()`` to get a list of the lines of text in the file.

#3. Use a ``for`` loop to iterate through the strings in the list, each being one line from the file. On each iteration, process that line of text

#4. Close the file with ``.close()``

::

   fname = "yourfile.txt"
   fileref = open(fname,"r")   # step 1
   lines = fileref.readlines() # step 2
   for lin in lines:           # step 3
       ## some code that reference the variable lin
   fileref.close()             # step 4