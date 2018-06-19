..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: data-18-
   :start: 1

Exercises
---------
.. question:: spd_ex_1
   :number: 1

   .. tabbed:: q1

        .. tab:: Question

            .. activecode:: ch02_ex1

               Evaluate the following numerical expressions in your head, then use
               the active code window to check your results:

               #. ``5 ** 2``
               #. ``9 * 5``
               #. ``15 / 12``
               #. ``12 / 15``
               #. ``15 // 12``
               #. ``12 // 15``
               #. ``5 % 2``
               #. ``9 % 5``
               #. ``15 % 12``
               #. ``12 % 15``
               #. ``6 % 6``
               #. ``0 % 7``
               ~~~~

               print(5**2)
        
        .. tab:: Answer

            #. ``5 ** 2  = 25``
            #. ``9 * 5 = 45``
            #. ``15 / 12 = 1.25``
            #. ``12 / 15 = 0.8``
            #. ``15 // 12 = 1``
            #. ``12 // 15 = 0``
            #. ``5 % 2 = 1``
            #. ``9 % 5 = 4``
            #. ``15 % 12 = 3``
            #. ``12 % 15 = 12``
            #. ``6 % 6 = 0``
            #. ``0 % 7 = 0``

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: c0a62044cac248859ce3695b46697ecc

.. question:: spd_ex_2

   .. actex:: ex_2_2

      What is the order of the arithmetic operations in the following expression.  Evaluate the expression by hand and then check your work.
      ~~~~
      2 + (3 - 1) * 10 / 5 * (2 + 3)



.. question:: spd_ex_3

    .. tabbed:: q2a

        .. tab:: Question

            .. actex:: spd_ex_3q

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


.. question:: spd_ex_4

        .. actex:: ex_2_4

           Give the **logical opposites** of these conditions, meaning an expression that would 
           produce False whenever this expression produces True, and vice versa.  You are not 
           allowed to use the ``not`` operator.

           #.  ``a > b``
           #.  ``a >= b``
           #.  ``a >= 18  and  day == 3``
           #.  ``a >= 18  or  day != 3``
           ~~~~

.. question:: spd_ex_5

    .. tabbed:: q5

        .. tab:: Question

            .. actex:: ex_2_5
        
               Optional. Many people keep time using a 24 hour clock (11 is 11am and 23 is 11pm, 0 is midnight).
               If it is currently 13 and you set your alarm to go off in 50 hours, it will be 15 (3pm).
               Write a Python program to solve the general version of the above problem.
               Ask the user for the time now (in hours), and then ask for the number of hours to wait for the alarm.
               Your program should output what the time will be on the clock when the alarm goes off.
               ~~~~

        .. tab:: Answer
            
            .. activecode:: spd_q5_answer
                :nocanvas:
                
                ## question 5 solution ##

                current_time_string = input("What is the current time (in hours)? ")
                waiting_time_string = input("How many hours do you have to wait? ")

                current_time_int = int(current_time_string)
                waiting_time_int = int(waiting_time_string)

                hours = current_time_int + waiting_time_int

                timeofday = hours % 24

                print(timeofday)

.. question:: spd_ex_6

   .. actex:: ex_2_6

       It is possible to name the days 0 thru 6 where day 0 is Sunday and day 6 is Saturday.
       If you go on a wonderful holiday leaving on day number 3 (a Wednesday) and you return 
       home after 10 nights you would return home on a Saturday (day 6). Write a general 
       version of the program which asks for the starting day number, and the length of your 
       stay, and it will tell you the number of day of the week you will return on.
       ~~~~

        # Problem 6
        # My Name:


.. question:: spd_ex_7

    .. tabbed:: q7

        .. tab:: Question

            Optional. Take the sentence: *All work and no play makes Jack a dull boy.*
            Store each word in a separate variable, then print out the sentence on
            one line using ``print``.

            .. actex:: ex_2_7

        .. tab:: Answer

            .. activecode:: spd_q7_answer    
                :nocanvas:

                ## question 7 solution ##

                word1 = "All"
                word2 = "work"
                word3 = "and"
                word4 = "no"
                word5 = "play"
                word6 = "makes"
                word7 = "Jack"
                word8 = "a"
                word9 = "dull"
                word10 = "boy."

                print(word1 + ' ' +  word2 + ' ' + word3 + ' ' +  word4 + ' ' +  word5 + ' ' +  word6 + ' ' +  word7 + ' ' +  word8 + ' ' +  word9 + ' ' +  word10)


.. question:: spd_ex_8

   .. actex:: ex_2_8

      Add parentheses to the expression ``6 * 1 - 2`` to change its value from 4 to -6.
      ~~~~
      
      print(6 * 1 -2)

  
.. question:: spd_ex_9

    .. tabbed:: q9

        .. tab:: Question

            Optional. The formula for computing the final amount if one is earning
            compound interest is given on Wikipedia as

            .. image:: Figures/compoundInterest.png
                :alt: formula for compound interest

            Write a Python program that assigns the principal amount of 10000 to
            variable ``P``, assign to ``n`` the value 12, and assign to ``r`` the interest
            rate of 8% (0.08).  Then have the program prompt the user for the number of years,
            ``t``, that the money will be compounded for.  Calculate and print the final
            amount after ``t`` years.

            .. actex:: ex_2_9
            
                P = 10000
                n = 12
                r = 0.08

                t = ??
                
        .. tab:: Answer

            .. activecode:: spd_q9_answer
                :nocanvas:

                ## question 9 solution ##

                P = 10000
                n = 12
                r = 0.08

                t = int(input("Compound for how many years? "))

                final = P * ( ((1 + (r/n)) ** (n * t)) )

                print("The final amount after", t, "years is", final)

    
.. question:: spd_ex_10

   .. actex:: ex_2_10

      Optional: Write a program that will compute the area of a circle.  Prompt the user to 
      enter the radius and print a nice messageback to the user with the answer.
      ~~~~

  
.. question:: spd_ex_11

    .. tabbed:: q11

        .. tab:: Question

            Optional. Write a program that will compute the area of a rectangle.  Prompt the user to enter the width and height of the rectangle.
            Print a nice message with the answer.

            .. actex:: ex_2_11
        
        .. tab:: Answer

            .. activecode:: spd_q11_answer
                :nocanvas:        

                ## question 11 solution

                width = int(input("Width? "))
                height = int(input("Height? "))

                area = width * height

                print("The area of the rectangle is", area)


.. question:: spd_ex_12

   .. actex:: ex_2_12

      Write a program that will compute MPG for a car. Prompt the user to enter the number of 
      miles driven and the number of gallons used. Print a nice message with the answer.
      ~~~~

  
.. question:: spd_ex_13

    .. tabbed:: q13

        .. tab:: Question

            Optional. Write a program that will convert degrees celsius to degrees fahrenheit.

            .. actex:: ex_2_13
        
        .. tab:: Answer

            .. activecode:: spd_q13_answer
                :nocanvas:

                ## question 13 solution ##

                deg_c = int(input("What is the temperature in Celsius? "))

                # formula to convert C to F is: (degrees Celcius) times (9/5) plus (32)
                deg_f = deg_c * (9 / 5) + 32

                print(deg_c, " degrees Celsius is", deg_f, " degrees Farenheit.")

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: c4a929d598ab4c46b484f6abbcec2655

.. question:: spd_ex_14

   .. actex:: ex_2_14

      Optional. Write a program that will convert degrees fahrenheit to degrees celsius.
      ~~~~

