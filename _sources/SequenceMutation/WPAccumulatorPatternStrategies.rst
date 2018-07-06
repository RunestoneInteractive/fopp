..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

WP: Accumulator Pattern Strategies
==================================

When to Use it
--------------

When you first start learning accumulation patterns it's sometimes difficult to determine what pattern, if any, 
is best for the problem you're trying to solve. Depending on what information you're given and what result you want, 
using accumulation may or may not be necessary. If the problem is simple, such as determining how many e's are in a 
string, then you may be better off using existing methods, such as the ``count`` method. If it's more complicated, 
such as counting the number of occurrances of multiple things in a string or list, then accumulation may be 
appropriate.

Certain actions are likely to involve accumulation patterns. This includes counting the frequency of something, 
determining a total, and creating a string or list from another string or list. Though this is not a complete list of 
cases where accumulation may be necessary, keeping this in mind can help when creating solutions to prompts and 
problems.

Before Writing it
-----------------

One aspect of writing an accumulation pattern is determining the type of the accumulator variable. In this textbook, a 
prompt will specify what the returned value should be (like asking for the 'biggest number' or 'a list of first words 
in sentences'). However, not every problem will be clearly defined. Regardless, as a programmer you're tasked with coming 
up with a solution. When it comes to deciding the type the accumulator variable should be, this may be dictated by the 
problem you're solving but it can also depend on how *you* want to solve something. 

For example, say you want to extract different parts of a string and then recombine those parts into a new string. 
Think about what type your accumulator variable could be. So far you know of two options that might make sense. A 
string is the most obvious choice as that's what you want the end result to be. However, this task could also be 
accomplished with an accumulator variable that is a list. The solution could then use the ``join`` method or even another 
accumulation pattern to get the desired final outcome. Using either the string or the list is fine, but one of them might 
make your job easier so it's important to think about how the type would affect your actions.

Something that can make this process easier before you start coding the program is to describe the accumulation you want 
to do in a comment. It can help to get your thoughts down, notice if there are any faults or holes in the logic, and also 
serve as a guide when you are writing the code. 

.. qnum::
   :prefix: seqmut-11-
   :start: 1

While Writing it
----------------

The final piece of advice regarding accumulation strategies is to be intentional when choosing variable names for the 
accumulator and iterator variables. A good name can help remind you of what the value is assigned to the variable as 
well as what you should have by the end of your code. While it might be tempting at first to use a short variable name, 
such as ``a`` or ``x``, if you run into any bugs or look at your code later, you may have trouble understanding what you 
intended to do and what your code is actually doing.

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
   :topics: 

   Does the following prompt require an accumulation pattern? If so, what words indicate that? For each string in ``wrds``, add 'ed' to the end of the word (to make the word past tense). Save these past tense words to a list called ``past_wrds``.

.. mchoice:: question8_11_2
   :answer_a: Yes; "to sum up"
   :answer_b: Yes; "numbers in the list"
   :answer_c: No
   :feedback_a: Correct!
   :feedback_b: Not quite - these words don't necessarily mean that we want to do sum accumulation.
   :feedback_c: In this case, an accumulation pattern would be good to use!
   :correct: a
   :practice: T
   :topics: 

   Does the following prompt require an accumulation pattern? If so, what words indicate that? Write code to sum up all of the numbers in the list ``seat_counts``. Store that number in the variable ``total_seat_counts``.

.. mchoice:: question8_11_3
   :answer_a: Yes; "print out each"
   :answer_b: Yes; "on a separate line"
   :answer_c: No
   :feedback_a: Incorrect, this prompt does not need to use the accumulation pattern.
   :feedback_b: Incorrect, this prompt does not need to use the accumulation pattern.
   :feedback_c: Correct!
   :correct: c
   :practice: T
   :topics: 

   Does the following prompt require an accumulation pattern? If so, what words indicate that? Write code to print out each character of the string ``my_str`` on a separate line.

.. mchoice:: question8_11_4
   :answer_a: Yes; "vowels in the sentence"
   :answer_b: Yes; "code that will count"
   :answer_c: No
   :feedback_a: Not quite - these words don't necessarily mean that we want to do sum accumulation.
   :feedback_b: Correct!
   :feedback_c: In this case, an accumulation pattern would be good to use!
   :correct: b
   :practice: T
   :topics: 

   Does the following prompt require an accumulation pattern? If so, what words indicate that? Write code that will count the number of vowels in the sentence ``s`` and assign the result to the variable ``num_vowels``.

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
   :topics: 

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
   :topics: 

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
   :topics: 

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
   :topics: 

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
   :topics: 

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
   :topics: 

    What sequence will you iterate through as you accumulate a result in the following prompt? Write code to sum up all of the numbers in the list ``seat_counts``. Store that number in the variable ``total_seat_counts``.

.. mchoice:: question8_11_11
   :answer_a: string
   :answer_b: list
   :answer_c: integer
   :answer_d: none, there is no accumulator variable.
   :feedback_a: Incorrect, there should not be an accumulator variable.
   :feedback_b: Incorrect, there should not be an accumulator variable.
   :feedback_c: Incorrect, there should not be an accumulator variable.
   :feedback_d: Correct, because this prompt does not require an accumulator pattern
   :correct: d
   :practice: T
   :topics: 

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
   :topics: 

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
   :topics: 

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
   :topics: 

   WWhich of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code that will count the number of vowels in the sentence ``s`` and assign the result to the variable ``num_vowels``.

.. mchoice:: question8_11_15
   :answer_a: Accumulator Variable: total_so_far        ; Iterator Variable: seat
   :answer_b: Accumulator Variable: total_seats_so_far  ; Iterator Variable: seat_count
   :answer_c: Accumulator Variable: count               ; Iterator Variable: n
   :feedback_a: Though the accumulator variable is good, the iterator variable is not clear enough.
   :feedback_b: Yes, this is the most clear combination.
   :feedback_c: Neither the accumulator nor iterator variable are clear enough. The accumulator variable is better, but could be more clear.
   :correct: b
   :practice: T
   :topics: 

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
   :topics: 

   Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code to print out each character of the string ``my_str`` on a separate line.
