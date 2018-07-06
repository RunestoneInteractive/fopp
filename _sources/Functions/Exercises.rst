..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-14-
   :start: 1

Exercises
=========
#.

    .. tabbed:: q1

        .. tab:: Question

           .. actex:: ac11_14_1

              **1.** Write a function named ``num_test`` that takes a number as input. If the number is greater than 10, the function should return "Greater than 10." If the number is less than 10, the function should return "Less than 10." If the number is equal to 10, the function should return "Equal to 10."
              ~~~~
              

              ====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(num_test(5), "Less than 10.", "Testing the num_test function on input 5.")
                    self.assertEqual(num_test(0), "Less than 10.", "Testing the num_test function on input 0.")
                    self.assertEqual(num_test(12.99), "Greater than 10.", "Testing the num_test function on input 12.99.")
                    self.assertEqual(num_test(10.00), "Equal to 10.", "Testing the num_test function on input 10.00.")



              myTests().main()

#.

    .. tabbed:: q2

        .. tab:: Question

           .. actex:: ac11_14_2

              Write a function that will return the number of digits in an integer.
              ~~~~
              def numDigits(n):
                  # your code here

              ====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(numDigits(2),1,"Tested numDigits on input of 2")
                    self.assertEqual(numDigits(55),2,"Tested numDigits on input of 55")
                    self.assertEqual(numDigits(1352),4,"Tested numDigits on input of 1352")
                    self.assertEqual(numDigits(444),3,"Tested numDigits on input of 444")



              myTests().main()


        .. tab:: Answer

            .. activecode:: answer11_14_2

                def numDigits(n):
                    n_str = str(n)
                    return len(n_str)


                print(numDigits(50))
                print(numDigits(20000))
                print(numDigits(1))

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_bfd6f74a183c4682b29c72c4411200fb


#.

    .. tabbed:: q3

        .. tab:: Question 

           .. actex:: ac11_14_3
      
              Write a function that reverses its string argument.
              ~~~~
              def reverse(astring):
                  # your code here

              ====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(reverse("happy"),"yppah","Tested reverse on input of 'happy'")
                      self.assertEqual(reverse("Python"),"nohtyP","Tested reverse on input of 'Python'")
                      self.assertEqual(reverse(""),"","Tested reverse on input of ''")




              myTests().main()

#.

    .. tabbed:: q4

        .. tab:: Question

           Write a function that mirrors its string argument, 
           generating a string containing the original string and the string backwards.

           .. actex:: ac11_14_4
              :nocodelens:

              def mirror(mystr):
                  # your code here

              ====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(mirror("good"),"gooddoog","Tested mirror on input of 'good'")
                      self.assertEqual(mirror("Python"),"PythonnohtyP","Tested mirror on input of 'Python'")
                      self.assertEqual(mirror(""),"","Tested mirror on input of ''")
                      self.assertEqual(mirror("a"),"aa","Tested mirror on input of 'a'")


              myTests().main()



        .. tab:: Answer

            .. activecode:: answer11_14_4
                :nocodelens:

                from test import testEqual

                def reverse(mystr):
                    reversed = ''
                    for char in mystr:
                        reversed = char + reversed
                    return reversed

                def mirror(mystr):
                    return mystr + reverse(mystr)

                testEqual(mirror('good'), 'gooddoog')
                testEqual(mirror('Python'), 'PythonnohtyP')
                testEqual(mirror(''), '')
                testEqual(mirror('a'), 'aa')

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_70b7ac515456497c952a2de5caa27ab9

#.

    .. tabbed:: q5

        .. tab:: Question 

           .. actex:: ac11_14_5
              :nocodelens:

              Write a function that removes all occurrences of a given letter from a string.
              ~~~~
              def remove_letter(theLetter, theString):
                  # your code here

              ====


              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(remove_letter("a","apple"),"pple","Tested remove_letter on inputs of 'a' and 'apple'")
                      self.assertEqual(remove_letter("a","banana"),"bnn","Tested remove_letter on inputs of 'a' and 'banana'")
                      self.assertEqual(remove_letter("z","banana"),"banana","Tested remove_letter on inputs of 'z' and 'banana'")



              myTests().main()


#.

   .. tabbed:: q6

        .. tab:: Question

           .. actex:: ac11_14_6

              Although Python provides us with many list methods, it is good practice and very instructive to think about how they are implemented.  Implement a Python function that works like the following:
   
              a. count
              #. in
              #. reverse
              #. index
              #. insert
              ~~~~ 

        .. tab:: Answer

            .. activecode:: answer11_14_6

                def count(obj, lst):
                    count = 0
                    for e in lst:
                        if e == obj:
                            count = count + 1
                    return count

                def is_in(obj, lst):  # cannot be called in() because in is a reserved keyword
                    for e in lst:
                        if e == obj:
                            return True
                    return False

                def reverse(lst):
                    reversed = []
                    for i in range(len(lst)-1, -1, -1): # step through the original list backwards
                        reversed.append(lst[i])
                    return reversed

                def index(obj, lst):
                    for i in range(len(lst)):
                        if lst[i] == obj:
                            return i
                    return -1

                def insert(obj, index, lst):
                    newlst = []
                    for i in range(len(lst)):
                        if i == index:
                            newlst.append(obj)
                        newlst.append(lst[i])
                    return newlst

                lst = [0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9]
                print(count(1, lst))
                print(is_in(4, lst))
                print(reverse(lst))
                print(index(2, lst))
                print(insert('cat', 4, lst))

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_39ee0274e51d4c888cc20b6fefa4069c

#.

    .. tabbed:: q5

        .. tab:: Question 

           .. actex:: ac11_14_7

              Write a function ``replace(s, old, new)`` that replaces all occurences of
              ``old`` with ``new`` in a string ``s``::
   
                 test(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')
   
                 s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
                 test(replace(s, 'om', 'am'), 
                        'I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!')
   
                 test(replace(s, 'o', 'a'), 
                        'I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!')
   
              *Hint*: use the ``split`` and ``join`` methods.
              ~~~~
              def replace(s, old, new):
                  # your code here

              ====
              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(replace('Mississippi','i','I'),'MIssIssIppI',"Tested replace on input 'Mississippi','i','I'")
                      self.assertEqual(replace('Bookkeeper','e','A'),'BookkAApAr',"Tested failed on input 'Bookkeeper','e','A'")
                      self.assertEqual(replace('Deeded','e','q'),'Dqqdqd',"Tested failed on input 'Deeded','e','q'")

              myTests().main()

