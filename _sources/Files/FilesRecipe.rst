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

Here's a foolproof recipe for processing the contents of a text file. If you've fully digested the previous sections, 
you'll understand that there are other options as well. Some of those options are preferable for some situations, and 
some are preferred by python programmers for efficiency reasons. In this course, though, you can always succeed by 
following this recipe.

#1. Open the file using ``with`` and ``open``.

#2. Use ``.readlines()`` to get a list of the lines of text in the file.

#3. Use a ``for`` loop to iterate through the strings in the list, each being one line from the file. On each iteration, process that line of text

#4. When you are done extracting data from the file, continue writing your code outside of the indentation. Using ``with`` will automatically close the file once the program exits the with block.

::

   fname = "yourfile.txt"
   with open(fname, 'r') as fileref:         # step 1
       lines = fileref.readlines()           # step 2
       for lin in lines:                     # step 3
           #some code that references the variable lin
   #some other code not relying on fileref   # step 4


However, this will not be good to use when you are working with large data. Imagine working with a datafile that has 1000 
rows of data. It would take a long time to read in all the data and then if you had to iterate over it, even more time 
would be necessary. This would be a case where programmers prefer another option for efficiency reasons.

This option involves iterating over the file itself while still iterating over each line in the file:

::

   with open(fname, 'r') as fileref:
    for lin in fileref:
        ## some code that uses line as the current line of the file
        ## some more code
