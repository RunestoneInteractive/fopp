..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _with_page:

.. qnum::
   :prefix: files-12-
   :start: 1

Using ``with`` for Files
========================

.. note:: 
   This section is a bit of an advanced topic and can be easily skipped. But with statements are becoming very common and it doesn't hurt to know about them in case you run into one in the wild.

Now that you have seen and practiced a bit with opening and closing files, there is another mechanism that Python 
provides for us that cleans up the often forgotten close. Forgetting to close a file does not necessarily cause a runtime 
error in the kinds of programs you typically write in an introductory programing course. However if you are writing a 
program that may run for days or weeks at a time that does a lot of file reading and writing you may run into trouble. 

Python has the notion of a context manager that automates the process of doing
common operations at the start of some task, as well as automating certain operations at the end of some task. For reading and writing a file, the normal operation is to open the file and assign it to a variable. At the end 
of working with a file the common operation is to make sure that file is closed.

The Python with statement makes using context managers easy. The general form of a with statement is::

    with <create some object that understands context> as <some name>:
        do some stuff with the object
        ...

When the program exits the with block, the context manager handles the common stuff that normally happens at the end, in our case closing a file. A simple example will clear up all of this abstract discussion of contexts. Here are the contents of a file called "mydata.txt".

.. datafile:: mydata.txt

   1 2 3
   4 5 6

.. activecode:: ac9_12_1
   :nocodelens:
   :available_files: mydata.txt
   
   with open('mydata.txt', 'r') as md:
       for line in md:
           print(line)
   # continue on with other code          

The first line of the `with` statement opens the file and assigns it to the variable ``md``. Then we can iterate over the file in any of the usual ways. When we are done we simply stop indenting and let Python take care of closing the file and cleaning up. 

This is equivalent to code that specifically closes the file at the end, but neatly marks the set of code that can make use of the open file as an indented block, and ensures that the programmer won't forget to include the ``.close()`` invocation.

.. activecode:: ac9_12_2
   :nocodelens:
   :available_files: mydata.txt
   
   md = open('mydata.txt', 'r')
   for line in md:
       print(line)
   md.close()
   # continue with other code
    
