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
   :prefix: condition-14-
   :start: 1

Exercises
---------

#.

    .. tabbed:: q1

        .. tab:: Question

            .. actex:: ac7_14_1

                Write code that asks the user to enter a numeric score (0-100). In response, it should print out the score and corresponding letter grade, according to the table below.
            
                .. table::
            
                    =======   =====
                    Score     Grade
                    =======   =====
                    >= 90     A
                    [80-90)   B
                    [70-80)   C
                    [60-70)   D
                    < 60      F
                    =======   =====
            
                The square and round brackets denote closed and open intervals.
                A closed interval includes the number, and open interval excludes it. So 79.99999 gets grade C , but 80 gets grade B.
                ~~~~
                scores = [77.51, 92.86, 98.01, 69.71, 78.52, 59.69, 60.49, 85.04, 87.33, 91.04]

                ====
                from unittest.gui import TestCaseGui
                import re
                import math
                class myTests(TestCaseGui):
                    def testOne(self):
                        output = self.getOutput().split('\n')
                        editor = self.getEditorText().split('\n')
                        float_re = r'[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?'
                        _grades=[]
                        for score in scores:
                            _score = float(score)
                            if _score >= 90:
                                _grades.append('A')
                            elif _score >= 80:
                                _grades.append('B')
                            elif _score >= 70:
                                _grades.append('C')
                            elif _score >= 60:
                                _grades.append('D')
                            else:
                                _grades.append('F')
                    
                        self.assertEqual(grades, _grades)
                        # hardcode check
                        # LOOK FOR IF STATEMENTS
                        outer_ifs = re.findall(r'^(if[ (].*: *)$', self.getEditorText(), re.M)
                        outer_elifs = re.findall(r'^(elif[ (].*: *)$', self.getEditorText(), re.M)
                        outer_elses = re.findall(r'^(else *: *)$', self.getEditorText(), re.M)
                        inner_ifs = re.findall(r'^( +if[ (].*: *)$', self.getEditorText(), re.M)
                        inner_elifs = re.findall(r'^( +elif[ (].*: *)$', self.getEditorText(), re.M)
                        inner_elses = re.findall(r'^( +else *: *)$', self.getEditorText(), re.M)
                        self.assertTrue(len(outer_ifs)==0 and len(outer_elifs)==0 and len(outer_elses)==0 and
                                        len(inner_ifs)==1 and len(inner_elifs)==3 and len(inner_elses)==1, 
                                'Checking if-statements')
                        # LOOK FOR for STATEMENTS
                        outer_loops = re.findall(r'^(for[ (].* in.*: *)$', self.getEditorText(), re.M)
                        inner_loops = re.findall(r'^( +for[ (].* in.*: *)$', self.getEditorText(), re.M)
                        self.assertTrue(len(outer_loops)==1 and len(inner_loops)==0, 'Checking for-statements')
                myTests().main()
           
        .. tab:: Answer

            .. activecode:: ans7_14_1
            
               sc = input("Enter a score from 0 to 100 (decimal points are allowed)")
               fl_sc = float(sc)
               
               if fl_sc < 60:
                   gr = "F"
               elif fl_sc < 70:
                   gr = "D"
               elif fl_sc < 80:
                   gr = "C"
               elif fl_sc < 90:
                   gr = "B"
               else:
                   gr = "A"
               
               print("Score", fl_sc, "gets a grade of", gr)
                 

#.

    .. tabbed:: q2

        .. tab:: Question

           .. actex:: ac7_14_2

                A year is a **leap year** if it is divisible by 4; however, if the year can be evenly divided by 100, it is NOT a leap year, unless the year is **also** evenly divisible by 400 then it is a leap year. Write code that asks the user to input a year and output True if it's a leap year, or False otherwise. Use if statements.
        
                .. table::
        
                    =======  =====
                    Year     Leap?
                    =======  =====
                    1944     True
                    2011     False
                    1986     False
                    1800     False     
                    1900     False
                    2000     True
                    2056     True
                    =======  =====
                    
                Above are some examples of what the output should be for various inputs.
                ~~~~
                years = [1967, 1900, 1400, 1628, 1701, 1217, 1359, 1300, 2000, 1054,
                1724, 1000, 1800, 1100, 2100, 1023, 1600, 1500, 1358, 1160,
                1700, 1744, 2009, 1200]
    
                ====
                from unittest.gui import TestCaseGui
                import re
                import math
                class myTests(TestCaseGui):
                    def testOne(self):
                        output = self.getOutput().split('\n')
                        editor = self.getEditorText().split('\n')
                        float_re = r'[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?'
                    
                        _is_leap_year = []
                        for _year in years:
                            if _year % 4 == 0 :
                                if _year % 100 == 0:
                                    _is_leap_year.append( _year % 400 == 0)
                                else:
                                    _is_leap_year.append(True)
                            else:
                                _is_leap_year.append(False)
                        
                        self.assertEqual(is_leap_year, _is_leap_year, 'Checking answer')
                        
                        # hardcode check
                        float_re = r'[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?'
                        print_float_re = r'print\( *'+float_re+' *\)'
                        self.assertFalse(re.search(print_float_re, self.getEditorText()), 'Checking for hardcoding')
                        # LOOK FOR IF STATEMENTS
                        outer_ifs = re.findall(r'^(if[ (].*: *)$', self.getEditorText(), re.M)
                        outer_elifs = re.findall(r'^(elif[ (].*: *)$', self.getEditorText(), re.M)
                        outer_elses = re.findall(r'^(else *: *)$', self.getEditorText(), re.M)
                        inner_ifs = re.findall(r'^( +if[ (].*: *)$', self.getEditorText(), re.M)
                        inner_elifs = re.findall(r'^( +elif[ (].*: *)$', self.getEditorText(), re.M)
                        inner_elses = re.findall(r'^( +else *: *)$', self.getEditorText(), re.M)
                        self.assertTrue(len(outer_ifs)==0 and len(outer_elifs)==0 and len(outer_elses)==0 and len(inner_ifs)>=1 and len(inner_elifs)>=0 and len(inner_elses)>=0, 'Checking if-statements')
                        # LOOK FOR for STATEMENTS
                        outer_loops = re.findall(r'^(for[ (].* in.*: *)$', self.getEditorText(), re.M)
                        inner_loops = re.findall(r'^( +for[ (].* in.*: *)$', self.getEditorText(), re.M)
                        self.assertTrue(len(outer_loops)==1 and len(inner_loops)==0, 'Checking for-statements')
                myTests().main()



#.

    .. tabbed:: q3

        .. tab:: Question

            .. actex:: ac7_14_3

                What do these expressions evaluate to?
            
                #.  ``3 == 3``
                #.  ``3 != 3``
                #.  ``3 >= 4``
                #.  ``not (3 < 4)``
                ~~~~        
        

        .. tab:: Answer
            
            #. True
            #. False
            #. False
            #. False



#.
    .. tabbed:: q4

        .. tab:: Question

            .. actex:: ac7_14_4

                Give the **logical opposites** of these conditions, meaning an expression that would 
                produce False whenever this expression produces True, and vice versa.  You are not 
                allowed to use the ``not`` operator.

                #.  ``a > b``
                #.  ``a >= b``
                #.  ``a >= 18  and  day == 3``
                #.  ``a >= 18  or  day != 3``
                ~~~~

#.

    .. tabbed:: q5

        .. tab:: Question

            .. actex:: ac7_14_5
                :nocodelens:

                Provided are the lengths of two sides of a right-angled triangle. Assign the length of the hypotenuse the the variable ``hypo_len``.  (Hint:  ``x ** 0.5`` will return the square root, or use ``sqrt`` from the math module)
                ~~~~
                side1 = 3
                side2 = 4

                ====

                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(hypo_len,5,"Testing that hypo_len has been set correctly")

                myTests().main()

#.
   .. tabbed:: q6

        .. tab:: Question

           .. actex:: ac7_14_6
               :practice: T
               :topics: Conditionals/TheAccumulatorPatternwithConditionals
               :nocodelens:

               Provided is a list of numbers. For each of the numbers in the list, determine whether they are even. If the number is even, add ``True`` to a new list called ``is_even``. If the number is odd, then add ``False``.
               ~~~~
               num_lst = [3, 20, -1, 9, 10]

               ====

               from unittest.gui import TestCaseGui

               class myTests(TestCaseGui):
                    def testOne(self):
                        self.assertEqual(is_even, [False, True, False, False, True],"Testing that is_even is set correctly.")

               myTests().main()


#.
   .. tabbed:: q7

        .. tab:: Question

           .. actex:: ac7_14_7
               :practice: T
               :topics: Conditionals/TheAccumulatorPatternwithConditionals
               :nocodelens:

               Provided is a list of numbers. For each of the numbers in the list, determine whether they are odd. If the number is odd, add ``True`` to a new list called ``is_odd``. If the number is even, then add ``False``.
               ~~~~
               num_lst = [3, 20, -1, 9, 10]


               ====
               from unittest.gui import TestCaseGui
               import re

               class myTests(TestCaseGui):
                   def testOne(self):
                       self.assertEqual(is_odd, [True, False, True, True, False],"Testing that is_odd is set correctly.")

                       # LOOK FOR IF STATEMENTS
                       outer_ifs = re.findall(r'^(if[ (].*: *)$', self.getEditorText(), re.M)
                       outer_elifs = re.findall(r'^(elif[ (].*: *)$', self.getEditorText(), re.M)
                       outer_elses = re.findall(r'^(else *: *)$', self.getEditorText(), re.M)
                       inner_ifs = re.findall(r'^( +if[ (].*: *)$', self.getEditorText(), re.M)
                       inner_elifs = re.findall(r'^( +elif[ (].*: *)$', self.getEditorText(), re.M)
                       inner_elses = re.findall(r'^( +else *: *)$', self.getEditorText(), re.M)
                       self.assertTrue(len(outer_ifs)==0 and len(outer_elifs)==0 and len(outer_elses)==0 and len(inner_ifs)==1 and len(inner_elifs)==0 and len(inner_elses)==1, 'Checking if-statements')
                       
               myTests().main() 

#.
   .. tabbed:: q8

        .. tab:: Question

            .. actex:: ac7_14_8

                Given the lengths of three sides of a triange, determine whether the triangle is right angled. If it is, the assign ``True`` to the variable ``is_rightangled``. If it's not, then assign ``False`` to the variable ``is_rightangled``.

                Hint: floating point arithmetic is not always exactly accurate,
                so it is not safe to test floating point numbers for equality.
                If a good programmer wants to know whether
                ``x`` is equal or close enough to ``y``, they would probably code it up as
                
                .. sourcecode:: python
                
                    if  abs(x - y) < 0.001:      # if x is approximately equal to y
                        ...
                
                ~~~~
                a = 5
                b = 6
                c = 8

                ====
                from unittest.gui import TestCaseGui
                import re
                import math
                class myTests(TestCaseGui):
                    def testOne(self):
                        output = self.getOutput().split('\n')
                        editor = self.getEditorText().split('\n')
                        float_re = r'[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?'
                
                        _is_rightangled = False
                        if abs(a**2 + b**2 - c**2) < 1e-7:
                            _is_rightangled = True
                        elif abs(a**2 - b**2 + c**2) < 1e-7:
                            _is_rightangled = True
                        elif abs(-a**2 + b**2 + c**2) < 1e-7:
                            _is_rightangled = True
                
                        self.assertEqual(is_rightangled, _is_rightangled, 'Checking answer')
                
                        # hardcode check
                        float_re = r'[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?'
                        print_float_re = r'print\( *'+float_re+' *\)'
                        self.assertFalse(re.search(print_float_re, self.getEditorText()), 'Checking for hardcoding')
                            # LOOK FOR IF STATEMENTS
                        outer_ifs = re.findall(r'^(if[ (].*: *)$', self.getEditorText(), re.M)
                        outer_elifs = re.findall(r'^(elif[ (].*: *)$', self.getEditorText(), re.M)
                        outer_elses = re.findall(r'^(else *: *)$', self.getEditorText(), re.M)
                        inner_ifs = re.findall(r'^( +if[ (].*: *)$', self.getEditorText(), re.M)
                        inner_elifs = re.findall(r'^( +elif[ (].*: *)$', self.getEditorText(), re.M)
                        inner_elses = re.findall(r'^( +else *: *)$', self.getEditorText(), re.M)
                        self.assertTrue(len(outer_ifs)>=1 and len(outer_elifs)>=0 and len(outer_elses)>=0 and
                                        len(inner_ifs)>=0 and len(inner_elifs)>=0 and len(inner_elses)>=0, 
                                'Checking if-statements')
                        # LOOK FOR for STATEMENTS
                        outer_loops = re.findall(r'^(for[ (].* in.*: *)$', self.getEditorText(), re.M)
                        inner_loops = re.findall(r'^( +for[ (].* in.*: *)$', self.getEditorText(), re.M)
                        self.assertTrue(len(outer_loops)>=0 and len(inner_loops)>=0, 'Checking for-statements')
                myTests().main()
                
#.

   .. tabbed:: q9

        .. tab:: Question

            .. actex:: ac7_14_9

               Implement the calculator for the date of Easter.
   
               The following algorithm computes the date for Easter Sunday for any year between 1900 to 2099.
   
               Ask the user to enter a year.
               Compute the following:
   
   
   
                   1. a = year % 19
                   #. b = year % 4
                   #. c = year % 7
                   #. d = (19 * a + 24) % 30
                   #. e = (2 * b + 4 * c + 6 * d + 5) % 7
                   #. dateofeaster = 22 + d + e
   
   
               Special note: The algorithm can give a date in April.  You will know that the date is in April if the calculation gives you an answer greater than 31.  (You'll need to adjust)  Also, if the year is one of four special
               years (1954, 1981, 2049, or 2076) then subtract 7 from the date.
   
               Your program should print an error message if the user provides a date that is out of range.
               ~~~~

        .. tab:: Answer

            .. activecode:: answer_ex_6_13

                year = int(input("Please enter a year"))
                if year >= 1900 and year <= 2099:
                    a = year % 19
                    b = year % 4
                    c = year % 7
                    d = (19*a + 24) % 30
                    e = (2*b + 4*c + 6*d + 5) % 7
                    dateofeaster = 22 + d + e

                    if year == 1954 or year == 2981 or year == 2049 or year == 2076:
                        dateofeaster = dateofeaster - 7

                    if dateofeaster > 31:
                        print("April", dateofeaster - 31)
                    else:
                        print("March", dateofeaster)
                else:
                    print("ERROR...year out of range")

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_2dfd6acf1ca849c2853dad606d1ba255

#.

   .. tabbed:: q9

        .. tab:: Question

            .. actex:: ac7_14_10

               Get the user to enter some text and print out True if it's a palindrome, False otherwise. (Hint: Start by reversing the input string, and then use the == operator to compare two values to see if they are the same)
               ~~~~

#.

   .. parsonsprob:: pp7_14_11

      Write a program that will print out a greeting to each student in the list. This list should also keep track of how many students have been greeted and note that each time a new student has been greeted. When only one student has entered, the program should say "The first student has entered!". Afterwards, the program should say "There are {number here} students in the classroom!".
      -----
      students = ["Jay", "Stacy", "Iman", "Trisha", "Ahmed", "Daniel", "Shadae", "Tosin", "Charlotte"]
      =====
      num_students = 0
      =====
      for student in students:
      =====
          print("Welcome to class, " + student)
          num_students += 1
      =====
          if num_students == 1:
              print("The first student has entered!")
      =====
          elif num_students > 1:
              print("There are " + str(num_students) + " students in the classroom!")

#.

   .. parsonsprob:: pp7_14_12

      Piece together a program so that it can successfully print out one print statement, given the value of x.
      -----
      x = 16
      =====
      if x > 10:
      =====
          if x > 20:
              print("This is a large number!")
      =====
          else:
              print("This is a pretty big number.")


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
