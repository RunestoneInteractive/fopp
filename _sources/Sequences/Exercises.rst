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
   :prefix: seq-11-
   :start: 1

Exercises
---------

#.

   .. parsonsprob:: pp5_11_1

      Write a program that will print out the length of each item in the list as well as the first and last characters of the item.
      -----
      weather = ["sunny", "cloudy", "partially sunny", 
                 "rainy", "storming", "windy", "foggy", 
                 "snowy", "hailing"]
      =====
      for condition in weather:
      =====
          print("The word is", len(condition), "characters")
      =====
          first_char = condition[0]
          last_char = condition[-1]
      =====
          print("The first character is: " + first_char)
          print("The last character is: " + last_char)

#.

   .. parsonsprob:: pp5_11_2

      Write code to determine how many t's are in the following sentences.
      -----
      phrases = ["My, what a lovely day today is!", 
      "Have you mastered cooking yet? A tasty treat could be in your future.", 
      "Have you ever seen the leaves change color?"]
      =====
      for sentence in phrases:
      =====
          print(sentence.count("t"))


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
