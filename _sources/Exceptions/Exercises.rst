..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

:skipreading:`True`

Exercises
=========

#.

    .. tabbed:: q1

        .. tab:: Question

            .. actex:: assess_ac23_5_1
               :practice: T
               :autograde: unittest
               :topics: Exceptions/intro-exceptions

               Below, we have provided buggy code. Add a try/except clause so the code runs without errors. If a blog post didn't get any likes, a 'Likes' key should be added to that dictionary with a value of 0.

               ~~~~
               blog_posts = [{'Photos': 3, 'Likes': 21, 'Comments': 2}, {'Likes': 13, 'Comments': 2, 'Shares': 1}, {'Photos': 5, 'Likes': 33, 'Comments': 8, 'Shares': 3}, {'Comments': 4, 'Shares': 2}, {'Photos': 8, 'Comments': 1, 'Shares': 1}, {'Photos': 3, 'Likes': 19, 'Comments': 3}]

               total_likes = 0

               for post in blog_posts:
                   total_likes = total_likes + post['Likes']

               =====

               from unittest.gui import TestCaseGui

               class myTests(TestCaseGui):

                   def testA(self):
                       self.assertEqual(total_likes, 86, "Testing that total_likes has the correct value.")
                   def testB(self):
                        accum = 0
                        for d in blog_posts:
                            if 'Likes' in d:
                                accum +=1
                        self.assertEqual(accum, 6, "Testing that blog_post dictionaries all have a 'Likes' key.")

               myTests().main()

#.

    .. tabbed:: q2

        .. tab:: Question

            .. actex:: assess_ac23_5_2
               :practice: T
               :autograde: unittest
               :topics: Exceptions/intro-exceptions

               The code below assigns the 5th letter of each word in ``food`` to the new list ``fifth``. However, the code currently produces errors. Insert a try/except clause that will allow the code to run and produce of list of the 5th letter in each word. If the word is not long enough, it should not print anything out. Note: The ``pass`` statement is a null operation; nothing will happen when it executes.
               ~~~~
               food = ["chocolate", "chicken", "corn", "sandwich", "soup", "potatoes", "beef", "lox", "lemonade"]
               fifth = []

               for x in food:
                   fifth.append(x[4])

               =====

               from unittest.gui import TestCaseGui

               class myTests(TestCaseGui):

                   def testOneA(self):
                       self.assertEqual(fifth, ['o', 'k', 'w', 't', 'n'], "Testing that fifth is assigned to correct values.")

               myTests().main()

Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
