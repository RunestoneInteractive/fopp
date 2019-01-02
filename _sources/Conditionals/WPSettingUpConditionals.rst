..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: condition-11-
   :start: 1

👩‍💻 Setting Up Conditionals
=============================

Before writing your conditionals, it can be helpful to make your own flowchart that will 
plot out the flow of each condition. By writing out the flow, you can better determine how 
complex the set of conditionals will be as well as check to see if any condition is not 
taken care of before you begin writing it out.

To make sure that your code covers all of the conditions that you intend for it to cover, you 
should add comments for each clause that explains what that clause is meant to do. Then, you 
should add tests for each possible path that the program could go though. What leads 
to certain conditional statements being executed? Is that what you intended?

Choosing your type of Conditional
---------------------------------

When adding conditionals to your program, you should also consider the kinds of conditionals 
that are at your disposal and what would fit best.

.. image:: Figures/valid_conditionals.png

Though you'll use them often, remember that conditional statements don't always need an else clause.
When deciding the flow, ask yourself what you want to have happen under a certain condition. 
For example, if you wanted to find all of the words that have the letter 'n' in them. If there's nothing
that needs to happen when a word does not contain the letter 'n' then you won't need an else 
clause. The program should just continue onward!

.. mchoice:: question7_11_1
   :answer_a: If statement - Else statement
   :answer_b: If statement - Elif statement
   :answer_c: If statement - If statement
   :answer_d: If statement - Elif statemenet - Else statement
   :correct: c
   :feedback_a: Using if/else either uses an unnecessary else statement or would improperly keep track of one of the accumulator variables.
   :feedback_b: Using if/elif means that words that have both a "t" and a "z" would not be propperly counted by the two variables.
   :feedback_c: Yes, two if statements will keep track of - and properly update - the two different accumulator variables.
   :feedback_d: Using if/elif/else here will provide an unnecessary else statement and improperly update one of the accumulator variables in the case where a word has both a "t" and a "z".
   :practice: T

   What is the best set of conditonal statements provided based on the following prompt? You want to keep track of all the words that have the letter 't' and in a separate variable you want to keep track of all the words that have the letter 'z' in them.

.. mchoice:: question7_11_2
   :answer_a: If statement - Elif statemenet - Else statement
   :answer_b: If statement - Else statement
   :answer_c: If statement - Nested If statement
   :answer_d: If statement
   :answer_e: If statement - Nested If statement - Else statement
   :correct: d
   :feedback_a: The elif and else statements are both unnecessary.
   :feedback_b: The else statement is unnecessary.
   :feedback_c: Though you could write a set of conditional statements like this and answer the prompt, there is a more concise way.
   :feedback_d: Yes, this is the most concise way of writing a conditional for that prompt.
   :feedback_e: The else statement is unnecessary.
   :practice: T

   Select the most appropriate set of conditonal statements for the situation described: You want to keep track of all the words that contain both "t" and "z".
