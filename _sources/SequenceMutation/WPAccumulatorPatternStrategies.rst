..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

👩‍💻  Accumulator Pattern Strategies
===================================

When to Use it
--------------

When children first encounter word problems in their math classes, they find it difficult to translate those words into arithmetic expressions involving addition, subtraction, multiplication, and division. Teachers offer heuristics. If the problem says "how many...altogether", that's an addition problem. If it says "how many are left", that's going to be a subtraction problem.

Learning to use the accumulator pattern can be similarly confusing. The first step is to recognizing something in the problem statement that suggests an accumulation pattern. Here are a few. You might want to try adding some more of your own.

+----------------+----------------------+
| Phrase         | Accumulation Pattern |
+----------------+----------------------+
| how many       | count accumulation   |
+----------------+                      +
| how frequently |                      |
+----------------+----------------------+
| total          | sum accumulation     |
+----------------+----------------------+
| a list of      | list accumulation    |
+----------------+----------------------+
| concatenate    | string accumulation  |
+----------------+                      +
| join together  |                      |
+----------------+----------------------+

For example, if the problem is to compute the total distance traveled in a series of small trips, you would want to accumulate a sum. If the problem is to make a list of the cubes of all the numbers from 1-25, you want a list accumulation, starting with an empty list and appending one more cube each time. If the problem is to make a comma separated list of all the people invited to a party, you should think of concatenating them; you could start with an empty string and concatenate one more person on each iteration through a list of name.


Before Writing it
-----------------

Before writing any code, we recommend that you first answer the following questions:

- What sequence will you iterate through as you accumulate a result? It could be a range of numbers, the letters in a string, or some existing list that you have just as a list of names.

- What type of value will you accumulate? If your final result will be a number, your accumulator will start out with a number and always have a number even as it is updated each time. Similarly, if your final result will be a list, start with a list. If your final result will be a string, you'll probably want to start with a string; one other option is to accumulate a list of strings and then use the `.join()` method at the end to concatenate them all together.

We recommend writing your answers to these questions in a comment. As you encounter bugs and have to look things up, it will help remind you of what you were trying to implement. Sometimes, just writing the comment can help you to realize a potential problem and avoid it before you ever write any code.

Choosing Good Accumulator and Iterator Variable Names
-----------------------------------------------------

The final piece of advice regarding accumulation strategies is to be intentional when choosing variable names for the 
accumulator and iterator variables. A good name can help remind you of what the value is assigned to the variable as 
well as what you should have by the end of your code. While it might be tempting at first to use a short variable name, 
such as ``a`` or ``x``, if you run into any bugs or look at your code later, you may have trouble understanding what you 
intended to do and what your code is actually doing.

For the accumulator variable, one thing that can help is to make the variable name end with "so_far". The prefix can be something that helps remind you of what you're supposed to end up with. For example: `count_so_far`, `total_so_far`, or `cubes_so_far`.

As mentioned previously in a previous Way of the Programmer segment, `👩‍💻 Naming Variables in For Loops`_, the iterator variable should be a singular noun. It should describe what one item in the original sequence, not what one item in the final result will be. For example, when accumulating the cubes of the numbers from 1-25, don't write `for cube in range(25):`. Instead, write `for num in range(25):`.  If you name the iterator variable `cube` you run the risk of getting confused that it has already been cubed, when that's an operation that you still have to write in your code.

