..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

:skipreading:`True`

.. qnum::
   :prefix: dictionaries-8-
   :start: 1

Exercises
=========

.. question:: ac10_8_1_q
    :number: 1

    .. tabbed:: q1

        .. tab:: Question

            .. actex:: ac10_8_1

               Predict what will print out from the following code. If a line causes a run-time error, comment it out and see whether the rest of your predictions were correct.

               ~~~~
               d = {'apples': 15, 'grapes': 12, 'bananas': 35}
               print(d['banana'])
               d['oranges'] = 20
               print(len(d))
               print('grapes' in d)
               print(d['pears'])
               print(d.get('pears', 0))
               fruits = d.keys()
               print(fruits)
               del d['apples']
               print('apples' in d)

.. fillintheblank:: assess_question1_11_11_1
    :practice: T
    :topics: Dictionaries/DictionaryLookup

    What would the following code print?

    .. sourcecode:: python

        d = {'spring': 'autumn', 'autumn': 'fall', 'fall': 'spring'}
        print d['autumn']

    -   :fall: Good work!
        :autumn: This is a value when the key is 'spring'.
        :spring: This ia a value when the key is 'fall'.
        :.*: Incorrect, try again.


.. question:: ac10_8_2_q
    :number: 2

    .. tabbed:: q5

        .. tab:: Question

            .. actex:: ac10_8_2
               :tie: pirateTranslator

               Avast!  Try this one swabbies.  Here's a table of English to Pirate translations

               .. table::

                  ==========  ==============
                  English     Pirate
                  ==========  ==============
                  sir         matey
                  hotel       fleabag inn
                  student     swabbie
                  boy         matey
                  madam       proud beauty
                  professor   foul blaggart
                  restaurant  galley
                  your        yer
                  excuse      arr
                  students    swabbies
                  are         be
                  lawyer      foul blaggart
                  the         th'
                  restroom    head
                  my          me
                  hello       avast
                  is          be
                  man         matey
                  ==========  ==============

               Write a program that asks the user for a sentence in English and then translates that sentence to Pirate.
               ~~~~


.. fillintheblank:: assess_question1_11_11_2
    :practice: T
    :topics: Dictionaries/DictionaryLookup

    In order to get the last line to print "success", what should the value *x* (in the last line) be?

    .. sourcecode:: python

        d = { 'work': 'success', 'success': 'failure', 'failure': 'money', 'time': 'work', 'industry': 'time'}
        print d[d[x]]

    -   :(^time$)|('time')|("time"): Good Work!  The word time with quotes around it is better as it indicates that you understand that we were referring to a literal string value.
        :industry: It prints "work".
        :work: It prints "failure".
        :success: It prints "money".
        :.*: Incorrect, try again.


.. question:: ac10_8_3_1

      .. tabbed:: q2

            .. tab:: Question

                  .. actex:: ac10_8_3

                     Write a program that finds the most used 7 letter word in scarlet3.txt.
                     ~~~~
                     f = open('scarlet3.txt', 'r')

            .. tab:: Answer

                  .. activecode:: answer10_8_3

                      f = open('scarlet3.txt', 'r')
                      contents = f.read()
                      d = {}

                      for w in contents.split():
                          if len(w) == 7:
                              if w not in d:
                                  d[w] = 1
                              else:
                                  d[w] = d[w] + 1

                      dkeys = d.keys()
                      most_used = dkeys[0]
                      for k in dkeys:
                          if d[k] > d[most_used]:
                              most_used = k

                      print("The most used word is '"+most_used+"', which is used "+str(d[most_used])+" times")

.. mchoice:: assess_question1_11_11_3
    :multiple_answers:
    :answer_a: It creates a new copy of <code>d</code>.
    :answer_b: It creates a new dictionary which swaps the keys and values in <code>d</code>.
    :answer_c: It throws an error.
    :answer_d: It creates a new dictionary which maps each of <code>d</code>'s keys to itself.
    :answer_e: It creates a new dictionary which maps each of <code>d</code>'s values to itself.
    :correct: b
    :feedback_a: It is not exactly a copy.
    :feedback_b: Yes, <code>d[c]</code> gets the value from dictionary <code>d</code>  with key <code>c</code>. In dictionary <code>e</code>, we are putting <code>d[c]</code> as a key and value as <code>c</code>.
    :feedback_c: It is a valid code.
    :feedback_d: The key of dictionary <code>e</code> is different from that of <code>d</code>.
    :feedback_e: The value of dictionary <code>e</code> is different from that of <code>d</code>.
    :practice: T
    :topics: Dictionaries/DictionaryKeyValueAssignment

    What does the following block of code do?

    .. sourcecode:: python

        d =  {'a': 2, 'b': 3, 'c': 1}
        e = {}
        for c in d:
            e[d[c]] = c
        print e


.. question:: dict_ex_4
   :number: 4

   .. tabbed:: q4

        .. tab:: Question

           .. actex:: ac10_8_4
               :tie: findMostCommonCharacter

               Write a program that allows the user to enter a string.  It then prints a
               table of the letters of the alphabet in alphabetical order which occur in
               the string together with the number of times each letter occurs. Case should
               be ignored. A sample run of the program might look this this::

                   Please enter a sentence: ThiS is String with Upper and lower case Letters.
                   a  2
                   c  1
                   d  1
                   e  5
                   g  1
                   h  2
                   i  4
                   l  2
                   n  2
                   o  1
                   p  2
                   r  4
                   s  5
                   t  5
                   u  1
                   w  2
                   $
               ~~~~


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_de4f21e35d3a41a4a3ac4ac888f78d1a

.. fillintheblank:: assess_question1_11_11_4
    :practice: T
    :topics: Dictionaries/KeyValueLookupAssignment

    Consider the following function:

    .. sourcecode:: python

	def foo(s):
		alphabet = 'abcdefghijklmnopqrstuvwxyz'
		values = {}
		for i in range(len(alphabet)):
			values[alphabet[i]] = i+1;
		answer  = 0
		for c in s:
			answer += values[c]
		return answer

    When the ``foo()`` is called with the input "baa", what value does it return? (Write "error" if you think it would raise an error instead.)

    -   :4: Good Work!
        :error: The code is valid.
        :.*: Incorrect, try again. (*Hint:* Lookup value of each character of "baa" in ``values``.)





.. datafile:: scarlet3.txt
   :fromfile: scarlet.txt
   :hide:


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
