..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-1-
   :start: 1

Introduction: Working with Data Files
=====================================

.. youtube:: zASE-UA2YKg
    :divid: filesintrovideo
    :height: 315
    :width: 560
    :align: left

So far, the data we have used in this book have all been either coded right into the program, or have been
entered by the user. In real life data reside in files. For example the images we worked with in the image
processing unit ultimately live in files on your hard drive. Web pages, and word processing documents, and
music are other examples of data that live in files. In this short chapter we will introduce the Python
concepts necessary to use data from files in our programs.

For our purposes, we will assume that our data files are text files--that is, files filled with characters.
The Python programs that you write are stored as text files.  We can create these files in any of a number of
ways. For example, we could use a text editor to type in and save the data.  We could also download the data
from a website and then save it in a file. Regardless of how the file is created, Python will allow us to
manipulate the contents.

In Python, we must **open** files before we can use them and **close** them when we are done with them. As
you might expect, once a file is opened it becomes a Python object just like all other data.
:ref:`Table 1<filemethods1a>` shows the functions and methods that can be used to open and close files.

.. _filemethods1a:

================ ======================== =====================================================
**Method Name**   **Use**                  **Explanation**
================ ======================== =====================================================
``open``          ``open(filename,'r')``    Open a file called filename and use it for reading.  This will return a reference to a file object.
``open``          ``open(filename,'w')``    Open a file called filename and use it for writing.  This will also return a reference to a file object.
``close``        ``filevariable.close()``   File use is complete.
================ ======================== =====================================================

Learning Goals
--------------

* To understand the structure of file systems
* To understand opening files with different modes
* To introduce files as another kind of sequence that one can iterate over
* To introduce the read/transform/write pattern
* To introduce parallel assignment to two or three variables

Objectives
----------

* Demonstrate that you can read a single value from each line in a file
* Convert the line to the appropriate value
* Read a line and convert it into multiple values using split and assignment to multiple variables

