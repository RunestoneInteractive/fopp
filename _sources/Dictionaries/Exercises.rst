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

#.
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

2. Avast, try this one, swabbies!

    .. tabbed:: q5

        .. tab:: Question

            .. actex:: ac10_8_2

               Here's a table of English to Pirate translations

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

        .. tab:: Answer

            .. activecode:: answer10_8_2

                pirate = {}
                pirate['sir'] = 'matey'
                pirate['hotel'] = 'fleabag inn'
                pirate['student'] = 'swabbie'
                pirate['boy'] = 'matey'
                pirate['restaurant'] = 'galley'
                #and so on

                sentence = input("Please enter a sentence in English")

                psentence = []
                words = sentence.split()
                for aword in words:
                    if aword in pirate:
                        psentence.append(pirate[aword])
                    else:
                        psentence.append(aword)

                print(" ".join(psentence))

#. (challenge exericse)

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

.. question:: dict_ex_4
   :number: 4

   .. tabbed:: q4

        .. tab:: Question

           .. actex:: ac10_8_4

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
               
        .. tab:: Answer

            .. activecode:: answer10_8_4

                x = input("Enter a sentence")

                x = x.lower()   # convert to all lowercase

                alphabet = 'abcdefghijklmnopqrstuvwxyz'

                letter_count = {} # empty dictionary
                for char in x:
                    if char in alphabet: # ignore any punctuation, numbers, etc
                        if char in letter_count:
                            letter_count[char] = letter_count[char] + 1
                        else:
                            letter_count[char] = 1

                keys = letter_count.keys()
                for char in sorted(keys):
                    print(char, letter_count[char])

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_de4f21e35d3a41a4a3ac4ac888f78d1a


.. datafile:: scarlet3.txt
   :fromfile: scarlet.txt
   :hide:
