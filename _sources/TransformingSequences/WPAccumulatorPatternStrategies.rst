..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-11-
   :start: 1

👩‍💻  Accumulator Pattern Strategies
=====================================

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
| concatenate    |                      |
+----------------+  string accumulation +
| join together  |                      |
+----------------+----------------------+
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

As mentioned previously in a previous Way of the Programmer segment, :ref:`naming_variables_in_for_loops`, the iterator variable should be a singular noun. It should describe what one item in the original sequence, not what one item in the final result will be. For example, when accumulating the cubes of the numbers from 1-25, don't write `for cube in range(25):`. Instead, write `for num in range(25):`.  If you name the iterator variable `cube` you run the risk of getting confused that it has already been cubed, when that's an operation that you still have to write in your code.

**Check Your Understanding**

.. mchoice:: question8_11_1
   :answer_a: Yes; "save... to a list"
   :answer_b: Yes; "add 'ed' to the end of the word"
   :answer_c: No
   :feedback_a: Correct!
   :feedback_b: Not quite - these words don't necessarily mean that we want to accumulate the new strings into a new variable.
   :feedback_c: In this case, an accumulation pattern would be good to use!
   :correct: a
   :practice: T

   Does the following prompt suggest an accumulation pattern? If so, what words indicate that? For each string in ``wrds``, add 'ed' to the end of the word (to make the word past tense). Save these past tense words to a list called ``past_wrds``.

.. mchoice:: question8_11_2
   :answer_a: Yes; "to sum up"
   :answer_b: Yes; "numbers in the list"
   :answer_c: No
   :feedback_a: Correct!
   :feedback_b: Not quite - these words don't necessarily mean that we want to do sum accumulation.
   :feedback_c: In this case, an accumulation pattern would be good to use!
   :correct: a
   :practice: T

   Does the following prompt suggest an accumulation pattern? If so, what words indicate that? Write code to sum up all of the numbers in the list ``seat_counts``. Store that number in the variable ``total_seat_counts``.

.. mchoice:: question8_11_3
   :answer_a: Yes; "print out each"
   :answer_b: Yes; "on a separate line"
   :answer_c: No
   :feedback_a: Incorrect, this prompt does not need to use the accumulation pattern.
   :feedback_b: Incorrect, this prompt does not need to use the accumulation pattern.
   :feedback_c: Correct!
   :correct: c
   :practice: T

   Does the following prompt suggest an accumulation pattern? If so, what words indicate that? Write code to print out each character of the string ``my_str`` on a separate line.

.. mchoice:: question8_11_4
   :answer_a: Yes; "vowels in the sentence"
   :answer_b: Yes; "code that will count"
   :answer_c: No
   :feedback_a: Not quite - these words don't necessarily mean that we want to do sum accumulation.
   :feedback_b: Correct!
   :feedback_c: In this case, an accumulation pattern would be good to use!
   :correct: b
   :practice: T

   Does the following prompt suggest an accumulation pattern? If so, what words indicate that? Write code that will count the number of vowels in the sentence ``s`` and assign the result to the variable ``num_vowels``.

.. mchoice:: question8_11_5
   :answer_a: string
   :answer_b: list
   :answer_c: integer
   :answer_d: none, there is no accumulator variable.
   :feedback_a: Incorrect, that is not the best type for the accumulator variable.
   :feedback_b: Incorrect, that is not the best type for the accumulator variable.
   :feedback_c: Yes, because we want to keep track of a number.
   :feedback_d: Incorrect, we will need an accumulator variable.
   :correct: c
   :practice: T

   What type should be used for the accumulator variable in the following prompt? Write code that will count the number of vowels in the sentence ``s`` and assign the result to the variable ``num_vowels``.

.. mchoice:: question8_11_6
   :answer_a: num_vowels
   :answer_b: s
   :answer_c: the prompt does not say
   :feedback_a: No, that is the accumulator variable.
   :feedback_b: Yes, that is the sequence you will iterate through!
   :feedback_c: It is stated in the prompt.
   :correct: b
   :practice: T

   What sequence will you iterate through as you accumulate a result in the following prompt? Write code that will count the number of vowels in the sentence ``s`` and assign the result to the variable ``num_vowels``.

.. mchoice:: question8_11_7
   :answer_a: string
   :answer_b: list
   :answer_c: integer
   :answer_d: none, there is no accumulator variable.
   :feedback_a: Incorrect, that is not the best type for the accumulator variable.
   :feedback_b: Yes, because we want a new list at the end of the code.
   :feedback_c: Incorrect, that is not the best type for the accumulator variable.
   :feedback_d: Incorrect, we will need an accumulator variable.
   :correct: b
   :practice: T

   What type should be used for the accumulator variable in the following prompt? For each string in ``wrds``, add 'ed' to the end of the word (to make the word past tense). Save these past tense words to a list called ``past_wrds``.

.. mchoice:: question8_11_8
   :answer_a: wrds
   :answer_b: past_wrds
   :answer_c: the prompt does not say
   :feedback_a: Yes, that is the sequence you will iterate through!
   :feedback_b: No, that is the accumulator variable.
   :feedback_c: It is stated in the prompt.
   :correct: a
   :practice: T

   What sequence will you iterate through as you accumulate a result in the following prompt? For each string in ``wrds``, add 'ed' to the end of the word (to make the word past tense). Save these past tense words to a list called ``past_wrds``.

.. mchoice:: question8_11_9
   :answer_a: string
   :answer_b: list
   :answer_c: integer
   :answer_d: none, there is no accumulator variable.
   :feedback_a: Incorrect, that is not the best type for the accumulator variable.
   :feedback_b: Incorrect, that is not the best type for the accumulator variable.
   :feedback_c: Yes, because we want to keep track of a number.
   :feedback_d: Incorrect, we will need an accumulator variable.
   :correct: c
   :practice: T

   What type should be used for the accumulator variable in the following prompt? Write code to sum up all of the numbers in the list ``seat_counts``. Store that number in the variable ``total_seat_counts``.

.. mchoice:: question8_11_10
   :answer_a: seat_counts
   :answer_b: total_seat_counts
   :answer_c: the prompt does not say
   :feedback_a: Yes, that is the sequence you will iterate through!
   :feedback_b: No, that is the accumulator variable.
   :feedback_c: It is stated in the prompt.
   :correct: a
   :practice: T

    What sequence will you iterate through as you accumulate a result in the following prompt? Write code to sum up all of the numbers in the list ``seat_counts``. Store that number in the variable ``total_seat_counts``.

.. mchoice:: question8_11_11
   :answer_a: string
   :answer_b: list
   :answer_c: integer
   :answer_d: none, there is no accumulator variable.
   :feedback_a: Incorrect, there should not be an accumulator variable.
   :feedback_b: Incorrect, there should not be an accumulator variable.
   :feedback_c: Incorrect, there should not be an accumulator variable.
   :feedback_d: Correct, because this prompt does not suggest an accumulator pattern
   :correct: d
   :practice: T

   What type should be used for the accumulator variable in the following prompt? Write code to print out each character of the string ``my_str`` on a separate line.

.. mchoice:: question8_11_12
   :answer_a: my_str
   :answer_b: my_str.split()
   :answer_c: the prompt does not say
   :feedback_a: Yes, that is the sequence you will iterate through!
   :feedback_b: Close, but read the prompt again - did it say to iterate through words?
   :feedback_c: It is stated in the prompt.
   :correct: a
   :practice: T

   What sequence will you iterate through as you accumulate a result in the following prompt? Write code to print out each character of the string ``my_str`` on a separate line.

.. mchoice:: question8_11_13
   :answer_a: Accumulator Variable: wrds_so_far     ; Iterator Variable: wrd
   :answer_b: Accumulator Variable: wrds_so_far     ; Iterator Variable: x
   :answer_c: Accumulator Variable: changed_wrds    ; Iterator Variable: ed
   :feedback_a: Yes, this is the most clear combination of accumulator and iterator variables.
   :feedback_b: The iterator variable is not the clearest here, something else may be better.
   :feedback_c: The iterator variable is not the clearest here
   :correct: a
   :practice: T

   Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? For each string in ``wrds``, add 'ed' to the end of the word (to make the word past tense). Save these past tense words to a list called ``past_wrds``.

.. mchoice:: question8_11_14
   :answer_a: Accumulator Variable: count_so_far  ; Iterator Variable: l
   :answer_b: Accumulator Variable: total_so_far  ; Iterator Variable: letter
   :answer_c: Accumulator Variable: n_v           ; Iterator Variable: letter
   :feedback_a: Though the accumulator variable is good, the iterator variable is not very clear.
   :feedback_b: Yes! Both the accumulator and iterator variable are clear.
   :feedback_c: Though the iterator variable is good, the accumulator variable is not very clear.
   :correct: b
   :practice: T

   Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code that will count the number of vowels in the sentence ``s`` and assign the result to the variable ``num_vowels``.

.. mchoice:: question8_11_15
   :answer_a: Accumulator Variable: total_so_far        ; Iterator Variable: seat
   :answer_b: Accumulator Variable: total_seats_so_far  ; Iterator Variable: seat_count
   :answer_c: Accumulator Variable: count               ; Iterator Variable: n
   :feedback_a: Though the accumulator variable is good, the iterator variable is not clear enough.
   :feedback_b: Yes, this is the most clear combination.
   :feedback_c: Neither the accumulator nor iterator variable are clear enough. The accumulator variable is better, but could be more clear.
   :correct: b
   :practice: T

   Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code to sum up all of the numbers in the list ``seat_counts``. Store that number in the variable ``total_seat_counts``.

.. mchoice:: question8_11_16
   :answer_a: Accumulator Variable: character_so_far    ; Iterator Variable: char
   :answer_b: Accumulator Variable: no variable needed  ; Iterator Variable: c
   :answer_c: Accumulator Variable: no variable needed  ; Iterator Variable: char
   :feedback_a: Incorrect, there is no accumulator variable neccessary
   :feedback_b: Though no accumulator variable is needed, the iterator variable is not clear enough
   :feedback_c: Yes, there is no accumulator variable needed and the iterator variable is clear (char is a common short form of character)
   :correct: c
   :practice: T

   Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code to print out each character of the string ``my_str`` on a separate line.
