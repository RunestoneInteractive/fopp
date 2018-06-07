..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: data-5-
   :start: 1

Print()
=======

You may be wondering now if print is a function. As mentioned above, functions can compute 
new values when the functions are called or invoked. Fuctions can be used for more than 
mathmatical computation though. Print is also a function that programmers use often to output 
data or check what is happenning in their code. If you come across Python 2 code you may 
notice that print statements do not require parentheses even though print is still a function 
in that version of Python. This is one of the differences between Python 2 and Python 3. In 
this course, we will be teaching Python 3 and using the parentheses. Each time we use a print 
statement we are calling the print function to execute the code.

Remember in the last page how we demonstrated what it looks like to print a function? We can do the same thing with the print function, however it looks odd in the textbook. If you print the print function in the textbook, then you will see ``<function <native JS>>``.
Executing this code outside of the textbook though will return ``<built-in function print>``. 

.. activecode:: ac2_5_1
   :nocanvas:

   print(print)