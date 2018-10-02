..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sequences-8-
   :start: 1

Count and Index
===============

As you create more complex programs, you will find that some tasks are commonly done. Python has some 
built-in functions and methods to help you with these tasks. This page will cover two helpful methods 
for both strings and lists: count and index.

You've learned about methods before when drawing with the turtle module. There, you used 
``.forward(50)`` and ``.color("purple")`` to complete actions. We refer to forward and color as methods 
of the turtle class. Objects like strings and lists also have methods that we can use.

Count
-----

The first method we'll talk about is called ``count``. It requires that you provide one argument, which 
is what you would like to count. The method then returns the number of times that the argument occured 
in the string/list the method was used on. There are some differences between count for strings and 
count for lists. When you use count on a string, the argument can only be a string. You can't count how 
many times the integer 2 appears in a string, though you can count how many times the string "2" appears 
in a string. For lists, the argument is not restricted to just strings.

.. activecode:: ac5_8_1
   
   a = "I have had an apple on my desk before!"
   print(a.count("e"))
   print(a.count("ha"))

The activecode window above demonstrates the use of count on a string. Just like with the turtle module 
when we had to specify which turtle was changing color or moving, we have to specify which string we are 
using count on.

.. activecode:: ac5_8_2
   
   z = ['atoms', 4, 'neutron', 6, 'proton', 4, 'electron', 4, 'electron', 'atoms']
   print(z.count("4"))
   print(z.count(4))
   print(z.count("a"))
   print(z.count("electron"))

When you run the activecode window above, you'll see how count with a list works. Notice how "4" has a 
count of zero but 4 has a count of three? This is because the list ``z`` only contains the integer 4. 
There are never any strings that are 4. Additionally, when we check the count of "a", we see that the 
program returns zero. Though some of the words in the list contain the letter "a", the program is 
looking for items in the list that are *just* the letter "a". 

Index
-----

The other method that can be helpful for both strings and lists is the ``index`` method. The ``index`` 
method requires one argument, and, like the ``count`` method, it takes only strings when index is used 
on strings, and any type when it is used on lists. For both strings and lists, ``index`` returns the 
leftmost index where the argument is found. If it is unable to find the argument in the string or list, 
then an error will occur.

.. activecode:: ac5_8_3

   music = "Pull out your music and dancing can begin"
   bio = ["Metatarsal", "Metatarsal", "Fibula", [], "Tibia", "Tibia", 43, "Femur", "Occipital", "Metatarsal"]

   print(music.index("m"))
   print(music.index("your"))

   print(bio.index("Metatarsal"))
   print(bio.index([]))
   print(bio.index(43))

All of the above examples work, but were you surprised by any of the return values? Remember that 
``index`` will return the left most index of the argument. Even though "Metatarsal" occurs many times 
in ``bio``, the method will only return the location of one of them.

Here's another example.

.. activecode:: ac5_8_4

   seasons = ["winter", "spring", "summer", "fall"]

   print(seasons.index("autumn"))  #Error! 

In the activecode window above, we're trying to see where "autumn" is in the list seasons. However, 
there is no string called autumn (though there is string called "fall" which is likely what the program 
is looking for). Remember that an error occurs if the argument is not in the string or list.

**Check your understanding**

.. mchoice:: question5_8_1
   :answer_a: 5
   :answer_b: 6
   :answer_c: 13
   :answer_d: 14
   :answer_e: There is an error.
   :correct: a
   :feedback_a: Yes, when we get the index of a string that is longer than one character, we get the index for the first character in the string.
   :feedback_b: When we get the index of a string that is longer than one character, we get the index for the first character in the string.
   :feedback_c: Remember that index returns the left most occurance of the argument.
   :feedback_d: Remember that index returns the left most occurance of the argument.
   :feedback_e: There is at least one 'we' in the string assigned to qu.
   :practice: T

   What will be stored in the variable ty below?

   .. sourcecode:: python

      qu = "wow, welcome week!"
      ty = qu.index("we")

.. mchoice:: question5_8_2
   :answer_a: 0
   :answer_b: 2
   :answer_c: 3
   :answer_d: There is an error.
   :correct: b
   :feedback_a: No, there is at least one e in the string.
   :feedback_b: Yes, there is a difference between "we" and "We" which means there are only two in the string.
   :feedback_c: there is a difference between "we" and "We".
   :feedback_d: There is no error in the code.
   :practice: T

   What will be stored in the variable ty below?

   .. sourcecode:: python

      qu = "wow, welcome week! Were you wanting to go?"
      ty = qu.count("we")

.. mchoice:: question5_8_3
   :answer_a: 0
   :answer_b: -1
   :answer_c: There is an error.
   :correct: c
   :feedback_a: No, the first element is 'bathroom', not 'garden'.
   :feedback_b: Though there is no 'garden' in the list, we do not get back -1 when we use index. Instead, we get an error.
   :feedback_c: Yes, there is no 'garden' in the list, so we get back an error.
   :practice: T

   What will be stored in the variable ht below?

   .. sourcecode:: python

      rooms = ['bathroom', 'kitchen', 'living room', 'bedroom', 'closet', "foyer"]
      ht = rooms.index("garden")
