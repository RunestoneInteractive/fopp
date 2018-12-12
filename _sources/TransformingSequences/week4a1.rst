..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. Week 4 Assessment 1

Chapter Assessment - List Methods
---------------------------------

**Check your understanding**

.. mchoice:: assess_question4_1_1_1
   :answer_a: I.
   :answer_b: II.
   :answer_c: Neither is the correct reference diagram.
   :feedback_a: Yes, when we are using the remove method, we are just editing the existing list, not making a new copy.
   :feedback_b: When we use the remove method, we just edit the existing list. We do not make a new copy that does not include the removed object. 
   :feedback_c: One of the diagrams is correct - look again at what is happening to lst.
   :correct: a
   :practice: T
   :topics: TransformingSequences/MutatingMethods

   Which of these is a correct reference diagram following the execution of the following code?

   .. sourcecode:: python
   
    lst = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
    lst.remove('pluto')
    first_three = lst[:3]

   I. 

   .. image:: Figures/week3a1_1.png
      :alt: First Potential Solution

   II. 

   .. image:: Figures/week3a1_2.png
      :alt: Second Potential Solution

.. mchoice:: assess_question4_1_1_2
   :answer_a: .pop()
   :answer_b: .insert()
   :answer_c: .count()
   :answer_d: .index()
   :feedback_a: pop removes and returns items (default is to remove and return the last item in the list) 
   :feedback_b: insert will add an item at whatever position is specified.
   :feedback_c: count returns the number of times something occurs in a list
   :feedback_d: Yes, index will return the position of the first occurance of an item.
   :correct: d
   :practice: T
   :topics: TransformingSequences/MutatingMethods

   Which method would you use to figure out the position of an item in a list?

.. mchoice:: assess_question4_1_1_3
   :answer_a: .insert()
   :answer_b: .pop()
   :answer_c: .append()
   :answer_d: .remove()
   :feedback_a: While you can use insert, it is not the best method to use because you need to specify that you want to stick the new item at the end.
   :feedback_b: pop removes an item from a list
   :feedback_c: Yes, though you can use insert to do the same thing, you don't need to provide the position.
   :feedback_d: remove gets rid of the first occurance of any item that it is told. It does not add an item.
   :correct: c
   :practice: T
   :topics: TransformingSequences/MutatingMethods

   Which method best to use when adding an item to the end of a list?


.. activecode:: assess_ac4_1_1_4
    :language: python
    :practice: T
    :topics: TransformingSequences/MutatingMethods

    Write code to add 'horseback riding' to the third position (english third) in the list ``sports``.
    ~~~~
    sports = ['cricket', 'football', 'volleyball', 'baseball', 'softball', 'track and field', 'curling', 'ping pong', 'hockey']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(sports, ['cricket', 'football', 'horseback riding', 'volleyball', 'baseball', 'softball', 'track and field', 'curling', 'ping pong', 'hockey'], "Testing that sports is set correctly (Don't worry about actual and expected values).")

    myTests().main()

.. activecode:: assess_ac4_1_1_5
    :language: python
    :practice: T
    :topics: TransformingSequences/MutatingMethods

    Write code to take 'London' out of the list ``trav_dest``.
    ~~~~
    trav_dest = ['Beirut', 'Milan', 'Pittsburgh', 'Buenos Aires', 'Nairobi', 'Kathmandu', 'Osaka', 'London', 'Melbourne']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(trav_dest, ['Beirut', 'Milan', 'Pittsburgh', 'Buenos Aires', 'Nairobi', 'Kathmandu', 'Osaka', 'Melbourne'], "Testing that trav_dest is set correctly (Don't worry about actual and expected values).")

    myTests().main()

.. activecode:: assess_ac4_1_1_6
    :language: python
    :practice: T
    :topics: TransformingSequences/MutatingMethods

    Write code to add 'Guadalajara' to the end of the list ``trav_dest`` using a list method.
    ~~~~
    trav_dest = ['Beirut', 'Milan', 'Pittsburgh', 'Buenos Aires', 'Nairobi', 'Kathmandu', 'Osaka', 'Melbourne']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(trav_dest, ['Beirut', 'Milan', 'Pittsburgh', 'Buenos Aires', 'Nairobi', 'Kathmandu', 'Osaka', 'Melbourne', 'Guadalajara'], "Testing that trav_dest is set correctly (Don't worry about actual and expected values).")
        self.assertNotIn('+', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
        self.assertIn('.', self.getEditorText(), "Testing that a method was used in your code (Don't worry about actual and expected values).")

    myTests().main()

.. activecode:: assess_ac4_1_1_7
    :language: python
    :practice: T
    :topics: TransformingSequences/MutatingMethods

    Write code to rearrage the strings in the list ``winners`` so that they are in alphabetical order from A to Z.
    ~~~~
    winners = ['Kazuo Ishiguro', 'Rainer Weiss', 'Youyou Tu', 'Malala Yousafzai', 'Alice Munro', 'Alvin E. Roth']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(winners, ['Alice Munro', 'Alvin E. Roth', 'Kazuo Ishiguro', 'Malala Yousafzai', 'Rainer Weiss', 'Youyou Tu'], "Testing that winners is set correctly (Don't worry about actual and expected values).") 

    myTests().main()      

.. activecode:: assess_ac4_1_1_8
    :language: python
    :practice: T
    :topics: TransformingSequences/MutatingMethods

    Write code to switch the order of the ``winners`` list so that it is now Z to A. Assign this list to the variable ``z_winners``. 
    ~~~~
    winners = ['Alice Munro', 'Alvin E. Roth', 'Kazuo Ishiguro', 'Malala Yousafzai', 'Rainer Weiss', 'Youyou Tu']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(z_winners, ['Youyou Tu','Rainer Weiss', 'Malala Yousafzai','Kazuo Ishiguro', 'Alvin E. Roth', 'Alice Munro'], "Testing that z_winners is set correctly (Don't worry about actual and expected values).")

    myTests().main()

Chapter Assessment - Aliases and References
===========================================

**Check your understanding**

.. fillintheblank:: assess_question3_3_1_1
   :practice: T
   :topics: TransformingSequences/ObjectsandReferences

   What will be the value of ``a`` after the following code has executed?

   .. sourcecode:: python

    a = ["holiday", "celebrate!"]
    quiet = a
    quiet.append("company")


   The value of ``a`` will be

   -  :\[["']holiday["'], ["']celebrate!["'], ["']company["']\]: Good work!
      :\[["']holiday["'], ["']celebrate!["']\]: This is the old value of a - a has changed.
      :.*: Incorrect, try again.

.. mchoice:: assess_question3_3_1_2
   :answer_a: yes
   :answer_b: no
   :feedback_a: Yes, the intent by the programmer was not executed properly if they wanted to print the list ['q', 'u'] because of aliasing.
   :feedback_b: If the intent was to print the list ['q', 'u'] then aliasing would cause a problem because z also replaces the 'u' with an 'i'.
   :correct: a
   :practice: T
   :topics: TransformingSequences/Aliasing

   Could aliasing cause potential confusion in this problem?

   .. sourcecode:: python

    b = ['q', 'u', 'i']
    z = b
    b[1] = 'i'
    z.remove('i')
    print(z)

.. mchoice:: assess_question3_3_1_3
   :answer_a: yes
   :answer_b: no
   :feedback_a: Though both lists have changed, it is not as likely to cause confusion.
   :feedback_b: These operations on the lists are not likely to cause confusion.
   :correct: b
   :practice: T
   :topics: TransformingSequences/Aliasing

   Could aliasing cause potential confusion in this problem?

   .. sourcecode:: python
  
    b = ['q', 'u', 'i']
    z = b
    b[1] = 'i'
    for elem in b:
        print(elem)
    for item in z:
        print(item)

.. mchoice:: assess_question3_3_1_4
   :answer_a: yes
   :answer_b: no
   :feedback_a: Since a string is immutable, aliasing won't be as confusing. Beware of using something like item = item + new_item with mutable objects though because it creates a new object. However, when we use += then that doesn't happen.
   :feedback_b: Since a string is immutable, aliasing won't be as confusing. Beware of using something like item = item + new_item with mutable objects though because it creates a new object. However, when we use += then that doesn't happen.
   :correct: b
   :practice: T
   :topics: TransformingSequences/Aliasing

   Could aliasing cause potential confusion in this problem?

   .. sourcecode:: python

    sent = "Holidays can be a fun time when you have good company!"
    phrase = sent
    phrase = phrase + " Holidays can also be fun on your own!"

.. mchoice:: assess_question3_3_1_5
   :answer_a: I.
   :answer_b: II.
   :answer_c: III.
   :answer_d: IV.
   :feedback_a: When an object is concatenated with another using +=, it extends the original object. If this is done in the longer form (item = item + object) then it makes a copy.
   :feedback_b: When an object is concatenated with another using +=, it extends the original object. If this is done in the longer form (item = item + object) then it makes a copy.
   :feedback_c: When an object is concatenated with another using +=, it extends the original object. If this is done in the longer form (item = item + object) then it makes a copy.
   :feedback_d: Yes, the behavior of obj = obj + object_two is different than obj += object_two when obj is a list. The first version makes a new object entirely and reassigns to obj. The second version changes the original object so that the contents of object_two are added to the end of the first.
   :correct: d
   :practice: T
   :topics: TransformingSequences/ObjectsandReferences

   Which of these is a correct reference diagram following the execution of the following code?
   
   .. sourcecode:: python

    x = ["dogs", "cats", "birds", "reptiles"]
    y = x
    x += ['fish', 'horses']
    y = y + ['sheep']

   I.

   .. image:: Figures/week3a3_1.png
      :alt: First Potential Solution
   
   II.

   .. image:: Figures/week3a3_2.png
      :alt: Second Potential Solution
   
   III.

   .. image:: Figures/week3a3_3.png
      :alt: Third Potential Solution
   
   IV.

   .. image:: Figures/week3a3_4.png
      :alt: Fourth Potential Solution

Chapter Assessment - Split and Join
===================================

.. mchoice:: assess_question4_1_3_1
   :answer_a: I.
   :answer_b: II.
   :answer_c: III.
   :answer_d: IV.
   :feedback_a: Yes, when we make our own diagrams we want to keep the old information because sometimes other variables depend on them. It can get cluttered though if there is a lot of information.
   :feedback_b: Not quite, we want to keep track of old information because sometimes other variables depend on them. 
   :feedback_c: Look again at what is happening when join is executed.
   :feedback_d: What happens to the spaces in a string when it is split by whitespace?
   :correct: a
   :practice: T
   :topics: TransformingSequences/MutatingMethods

   Which of these is a correct reference diagram following the execution of the following code?

   .. sourcecode:: python

    sent = "The mall has excellent sales right now."
    wrds = sent.split()
    wrds[1] = 'store'
    new_sent = " ".join(wrds)

   I.

   .. image:: Figures/week3a2_1.png
      :alt: First Potential Solution
   
   II.

   .. image:: Figures/week3a2_2.png
      :alt: Second Potential Solution
   
   III.

   .. image:: Figures/week3a2_3.png
      :alt: Third Potential Solution
   
   IV.

   .. image:: Figures/week3a2_4.png
      :alt: Fourth Potential Solution


.. activecode:: assess_ac_4_1_3_2
    :language: python
    :autograde: unittest
    :practice: T
    :topics: TransformingSequences/MutatingMethods

    Write code to find the postion of the string "Tony" in the list ``awards`` and save that information in the variable ``pos``.
    ~~~~
    awards = ['Emmy', 'Tony', 'Academy', 'Grammy']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(pos, 1, "Testing that pos is set correctly (Don't worry about actual and expected values).")

    myTests().main()

Chapter Assessment - For Loop Mechanics
=======================================

**Check your understanding**

.. mchoice:: assess_question5_1_1_1
   :answer_a: byzo
   :answer_b: x
   :answer_c: z
   :answer_d: c
   :correct: d
   :feedback_a: This is the variable with our string, but it does not accumulate anything.
   :feedback_b: This is the iterator variable. It changes each time but does not accumulate.
   :feedback_c: This is a variable inside the for loop. It changes each time but does not accumulate or retain the old expressions that were assigned to it.
   :feedback_d: Yes, this is the accumulator variable. By the end of the program, it will have a full count of how many items are in byzo.
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithStrings

   Which of these is the accumulator variable?
   
   .. sourcecode:: python

    byzo = 'hello world!'
    c = 0
    for x in byzo:
        z = x + "!"
        print(z)
        c = c + 1

.. mchoice:: assess_question5_1_1_2
   :answer_a: cawdra
   :answer_b: elem
   :answer_c: t
   :correct: a
   :feedback_a: Yes, this is the sequence that we iterate over.
   :feedback_b: This is the iterator variable. It changes each time but is not the whole sequence itself.
   :feedback_c: This is the accumulator variable. By the end of the program, it will have a full count of how many items are in cawdra.
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithLists

   Which of these is the sequence?
   
   .. sourcecode:: python

    cawdra = ['candy', 'daisy', 'pear', 'peach', 'gem', 'crown']
    t = 0
    for elem in cawdra:
        t = t + len(elem)

.. mchoice:: assess_question5_1_1_3
   :answer_a: item
   :answer_b: lst
   :answer_c: num
   :correct: a
   :feedback_a: Yes, this is the iterator variable. It changes each time but is not the whole sequence itself.
   :feedback_b: This is the sequence that we iterate over.
   :feedback_c: This is the accumulator variable. By the end of the program, it will have the total value of the integers that are in lst.
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithLists

   Which of these is the iterator variable?
   
   .. sourcecode:: python

    lst = [5, 10, 3, 8, 94, 2, 4, 9]
    num = 0
    for item in lst:
        num += item

.. fillintheblank:: assess_question5_1_1_4
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithLists

   What is the iterator variable in the following?

   .. sourcecode:: python

    rest = ["sleep", 'dormir', 'dormire', "slaap", 'sen', 'yuxu', 'yanam']
    let = ''
    for phrase in rest:
        let += phrase[0]

   The iterator variable is

   -  :phrase: Good work!
      :rest: rest is the sequence, not the iterator variable.
      :let: let is the accumulator variable, not the iterator variable.
      :.*: Incorrect, try again.

.. activecode:: assess_week5_01
   :language: python
   :autograde: unittest
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithStrings

   Currently there is a string called ``str1``. Write code to create a list called ``chars`` which should contain the characters from ``str1``. Each character in ``str1`` should be its own element in the list ``chars``.
   ~~~~
   str1 = "I love python"
   # HINT: what's the accumulator? That should go here.
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(chars, ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'p', 'y', 't', 'h', 'o', 'n'], "Testing that chars is assigned to correct values.")

   myTests().main()

Chapter Assessment - Accumulator Pattern
========================================

**Check your understanding**

.. mchoice:: assess_question5_2_1_1
   :answer_a: I.
   :answer_b: II.
   :answer_c: III.
   :answer_d: none of the above would be appropriate for the problem.
   :correct: c
   :feedback_a: This pattern will only count how many items are in the list, not provide the total accumulated value.
   :feedback_b: This would reset the value of s each time the for loop iterated, and so by the end s would be assigned the value of the last item in the list plus the last item in the list.
   :feedback_c: Yes, this will solve the problem.
   :feedback_d: One of the patterns above is a correct way to solve the problem.
   :practice: T
   :topics: TransformingSequences/WPAccumulatorPatternStrategies

   Given that we want to accumulate the total sum of a list of numbers, which of the following accumulator patterns would be appropriate?
   
   I.
   
   .. sourcecode:: python
   
    nums = [4, 5, 2, 93, 3, 5]
    s = 0
    for n in nums:
        s = s + 1
   
   II.
   
   .. sourcecode:: python
   
    nums = [4, 5, 2, 93, 3, 5]
    s = 0
    for n in nums:
        s = n + n
   
   III.
   
   .. sourcecode:: python
   
    nums = [4, 5, 2, 93, 3, 5]
    s = 0
    for n in nums:
        s = s + n

.. mchoice:: assess_question5_2_1_2
   :answer_a: I.
   :answer_b: II.
   :answer_c: III.
   :answer_d: IV.
   :answer_e: none of the above would be appropriate for the problem. 
   :correct: d
   :feedback_a: How does this solution know that the element of lst is a string and that s should be updated?
   :feedback_b: What happens to s each time the for loop iterates?
   :feedback_c: Reread the prompt again, what do we want to accumulate?
   :feedback_d: Yes, this will solve the problem.
   :feedback_e: One of the patterns above is a correct way to solve the problem.
   :practice: T
   :topics: TransformingSequences/WPAccumulatorPatternStrategies

   Given that we want to accumulate the total number of strings in the list, which of the following accumulator patterns would be appropriate?

   I.
   
   .. sourcecode:: python
   
    lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
    s = 0
    for n in nums:
        s = s + n
   
   II.
   
   .. sourcecode:: python
   
    lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
    for n in nums:
        s = 0
        if type(n) == type("string"):
            s = s + 1
   
   III.
   
   .. sourcecode:: python
   
    lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
    s = ""
    for n in nums:
        s = s + n
   
   IV.
   
   .. sourcecode:: python
   
    lst = ['plan', 'answer', 5, 9.29, 'order, items', [4]]
    s = 0
    for n in nums:
        if type(n) == type("string"):
            s = s + 1
 
.. mchoice:: assess_question5_2_1_3
   :multiple_answers:
   :answer_a: sum
   :answer_b: x
   :answer_c: total
   :answer_d: accum
   :answer_e: none of the above
   :correct: c,d
   :feedback_a: No, though sum might be clear, it is also the name of a commonly used function in Python, and so there can be issues if sum is used as an accumulator variable.
   :feedback_b: No, x is not a clear enough name to be used for an accumulator variable.
   :feedback_c: Yes, total is a good name for accumulating numbers.
   :feedback_d: Yes, accum is a good name. It's both short and easy to remember.
   :feedback_e: At least one of the answers above is a good name for an accumulator variable.
   :practice: T
   :topics: TransformingSequences/WPAccumulatorPatternStrategies

   Which of these are good names for an accumulator variable? Select as many as apply.

.. mchoice:: assess_question5_2_1_4
   :multiple_answers:
   :answer_a: item
   :answer_b: y
   :answer_c: elem
   :answer_d: char
   :answer_e: none of the above
   :correct: a,c,d
   :feedback_a: Yes, item can be a good name to use as an iterator variable.
   :feedback_b: No, y is not likely to be a clear name for the iterator variable.
   :feedback_c: Yes, elem can be a good name to use as an iterator variable, especially when iterating over lists.
   :feedback_d: Yes, char can be a good name to use when iterating over a string, because the iterator variable would be assigned a character each time.
   :feedback_e: At least one of the answers above is a good name for an iterator variable.
   :practice: T
   :topics: TransformingSequences/WPAccumulatorPatternStrategies

   Which of these are good names for an iterator variable? Select as many as apply.

.. mchoice:: assess_question5_2_1_5
   :multiple_answers:
   :answer_a: num_lst
   :answer_b: p
   :answer_c: sentence
   :answer_d: names
   :answer_e: none of the above
   :correct: a,c,d
   :feedback_a: Yes, num_lst is good for a sequence variable if the value is actually a list of numbers.
   :feedback_b: No, p is not likely to be a clear name for the iterator variable.
   :feedback_c: Yes, this is good to use if the for loop is iterating through a string.
   :feedback_d: Yes, names is good, assuming that the for loop is iterating through actual names and not something unrelated to names.
   :feedback_e: At least one of the answers above is a good name for a sequence variable
   :practice: T
   :topics: TransformingSequences/WPAccumulatorPatternStrategies

   Which of these are good names for a sequence variable? Select as many as apply.

.. mchoice:: assess_question5_2_1_6
   :answer_a: accumulator variable: x | iterator variable: s | sequence variable: lst
   :answer_b: accumulator variable: total | iterator variable: s | sequence variable: lst
   :answer_c: accumulator variable: x | iterator variable: sentences | sequence variable: word_lst
   :answer_d: accumulator variable: total | iterator variable: sentences |sequence variable: word_lst
   :answer_e: none of the above
   :correct: d
   :feedback_a: Though lst may be a good name, x and s are not clear names for accumulator and iterator variables.
   :feedback_b: Though total, and lst may be good names, there is a more clear option since s is not very clear.
   :feedback_c: Though sentences and word_lst are good names, x is not the best name for an accumulator variable.
   :feedback_d: Yes, this combination of variable names is the most clear.
   :feedback_e: One of the options above has good names for the scenario.
   :practice: T
   :topics: TransformingSequences/WPAccumulatorPatternStrategies

   Given the following scenario, what are good names for the accumulator variable, iterator variable, and sequence variable? You are writing code that uses a list of sentences and accumulates the total number of sentences that have the word 'happy' in them.

.. activecode:: access_ac_5_2_1_1
   :language: python
   :autograde: unittest
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithStrings

   For each character in the string saved in ``ael``, append that character to a list that should be saved in a variable ``app``.
   ~~~~
   ael = "python!"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(app, ['p','y','t','h','o','n', "!"], "Testing that app has the correct elements." )
         self.assertIn('append', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: access_ac_5_2_1_2
   :language: python
   :autograde: unittest
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithLists

   For each string in ``wrds``, add 'ed' to the end of the word (to make the word past tense). Save these past tense words to a list called ``past_wrds``.
   ~~~~
   wrds = ["end", 'work', "play", "start", "walk", "look", "open", "rain", "learn", "clean"]
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(past_wrds, ["ended", 'worked', "played", "started", "walked", "looked", "opened", "rained", "learned", "cleaned"], "Testing that past_wrds has the correct value." )

   myTests().main()

.. activecode:: assess_ps_02_06
    :language: python
    :autograde: unittest
    :practice: T
    :topics: TransformingSequences/TheAccumulatorPatternwithLists

    Write code to create a **list of word lengths** for the words in ``original_str`` using the accumulation pattern and assign the answer to a variable ``num_words_list``. (You should use the ``len`` function).

    ~~~~
    original_str = "The quick brown rhino jumped over the extremely lazy fox."


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
           self.assertEqual(num_words_list, map(len, original_str.split()), "Testing whether num_words_list has the correct value")
           self.assertIn('for', self.getEditorText(), "Testing that you are using a for loop in your code. (Don't worry about Actual and Expected Values.)")

    myTests().main()


.. activecode:: assess_pc_02_10
   :language: python
   :autograde: unittest
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithStrings

   Create an empty string and assign it to the variable ``lett``. Then using range, write code such that when your code is run, ``lett`` has 7 b's (``"bbbbbbb"``).
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(lett, "bbbbbbb", "Testing that lett has the correct value." )
         self.assertNotIn("bbbbbbb", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

Chapter Assessment - Problem Solving
====================================

.. activecode:: asign_c01_01
   :language: python
   :autograde: unittest
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithStrings

   Below are a set of scores that students have received in the past semester. Write code to determine how many are 90 or above and assign that result to the value ``a_scores``.
   ~~~~
   scores = "67 80 90 78 93 20 79 89 96 97 92 88 79 68 58 90 98 100 79 74 83 88 80 86 85 70 90 100"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(a_scores, 10, "Testing that num_vowels is a number that contains the correct elements.")
         self.assertIn('for', self.getEditorText(), "Testing your code (Don't worry about actual and expected values.)")
         self.assertIn('if', self.getEditorText(), "Testing your code (Don't worry about actual and expected values.)")

   myTests().main()

.. activecode:: asign_c01_02
   :language: python
   :autograde: unittest
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithStrings

   Write code that uses the string stored in ``org`` and creates an acronym which is assigned to the variable ``acro``. Only the first letter of each word should be used, each letter in the acronym should be a captial letter, and there should be nothing to separate the letters of the acronym. Words that should not be included in the acronym are stored in the list ``stopwords``. For example, if ``org`` was assigned the string "hello to world" then the resulting acronym should be "HW".
   ~~~~
   stopwords = ['to', 'a', 'for', 'by', 'an', 'am', 'the', 'so', 'it', 'and']
   org = "The organization for health, saftey, and education"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(acro, 'OHSE', 'Checking that acro has been set correctly.')
         self.assertTrue(type(acro) == type("string"), "Checking that acro is a string.")
         self.assertIn('for', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: asign_c01_03
   :language: python
   :autograde: unittest
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithStrings

   Write code that uses the string stored in ``sent`` and creates an acronym which is assigned to the variable ``acro``. The first two letters of each word should be used, each letter in the acronym should be a captial letter, and each element of the acronym should be separated by a ". ". Words that should not be included in the acronym are stored in the list ``stopwords``. For example, if ``sent`` was assigned the string "height and ewok wonder" then the resulting acronym should be "HE. EW. WO". 
   ~~~~
   stopwords = ['to', 'a', 'for', 'by', 'an', 'am', 'the', 'so', 'it', 'and']
   sent = "The water, earth, and air are vital."

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(acro, 'WA. EA. AI. AR. VI', 'Checking that acro has been set correctly.')
         self.assertTrue(type(acro) == type("string"), "Checking that acro is a string.")
         self.assertIn('for', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: asign_c01_04
   :language: python
   :autograde: unittest
   :practice: T
   :topics: TransformingSequences/TheAccumulatorPatternwithStrings

   Write code that checks if ``p_phrase`` is a palindrome. A palindrome is a phrase that, if reversed, would read the exact same. Assign the reversed version of ``p_phrase`` to the variable ``r_phrase``.  
   ~~~~
   p_phrase = "was it a car or a cat I saw"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(r_phrase, "was I tac a ro rac a ti saw", "checking that r_phrase is set correctly")
         stripped_phrase = p_phrase.replace(" ", "").lower()
         stripped_r_phrase = r_phrase.replace(" ", "").lower()
         self.assertEqual(stripped_phrase, stripped_r_phrase, "checking that r_phrase and p_phrase are equivalent if the spaces are placed in the correct locations.")
         self.assertIsNot(p_phrase, r_phrase, "checking that r_phrase and p_phrase are not the same object.")

   myTests().main()

.. activecode:: asign_c01_05
   :language: python
   :autograde: unittest
   :practice: T
   :topics: TransformingSequences/NonmutatingMethodsonStrings

   Provided is a list of data about a store's inventory where each item in the list represents the name of an item, how much is in stock, and how much it costs. Print out each item in the list with the same formatting. For example, the first print statment should read ``The store has 12 shoes, each for 29.99 USD.``
   ~~~~
   inventory = ["shoes, 12, 29.99", "shirts, 20, 9.99", "sweaters, 10, 30.00", "sweatpants, 25, 15.00", "scarves, 13, 7.75"]


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
          self.assertIn('for', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
          self.assertIn('.format(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
          self.assertIn('The store has 12 shoes, each for 29.99 USD.\nThe store has 20 shirts, each for 9.99 USD.\nThe store has 25 sweatpants, each for 15.00 USD.\nThe store has 13 scarves, each for 7.75 USD.\n', self.getOutput(), "Testing your code (Don't worry about actual and expected values).")

         

   myTests().main()
