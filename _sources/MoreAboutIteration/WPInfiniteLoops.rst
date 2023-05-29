..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: moreiter-11-
   :start: 1

👩‍💻 Infinite Loops
--------------------

Although the textbook has a time limit which prevents an active code window from running 
indefinitely, you'll still have to wait a little while if your program has an ininite loop. If 
you accidentally make one outside of the textbook, you won't have that same protection.

So how can you recognize when you are in danger of making an infinite loop?

First off, if the variable that you are using to determine if the while loop should continue is 
never reset inside the while loop, then your code will have an infinite loop. (Unless of course you use ``break`` to 
break out of the loop.) 

Additionally, if the while condition is ``while True:`` and there is no break, then that is another case of an infinite loop!

.. sourcecode:: python

    while True:
        print("Will this stop?")

    print("We have escaped.")

Another case where an infinite loop is likely to occur is when you have reassigned the value of the variable used in the while statement in a way that prevents the loop from completing. This is an example below. We're showing it in codelens, which stops the execution after a certain number of steps.

.. codelens:: ac14_11_1

    b = 15

    while b < 60:
        b = 5
        print("Bugs")
        b = b + 7

Notice how in this case, b is initally set to 15 outside of the while loop, and then reassigned 
the value of 5 inside, on line 4. By the time 7 has been added to b on line 6, we then have to 
check if b is less than 60. Because it isn't we again run line 4, and set the value of b to 5 
again. There is no way to break out of this loop.

Sometimes programs can take a while to run, so how can you determine if your code is just talking a while or if it is stuck inside an infinite loop? Print statements are for people, so take advantage of them! You can add print statements to keep track of how your variables are changing as the program processes the instructions given to them. Below is an example of an infinite loop. Try adding print statements to see where it's coming from. When you're done, check out the answer to see what our solution was.

#.

   .. tabbed:: q1

        .. tab:: Question

            .. actex:: ac14_11_2

                d = {'x': []}

                while len(d.keys()) <= 2:
                    print('Dictionaries')
                    d['x'].append('d')


        .. tab:: Answer

            .. actex:: ac14_11_3

                d = {'x': []}
                print("starting the while loop")
                while len(d.keys()) <= 2:
                    print("number of keys in d:", len(d.keys()))
                    print('Dictionaries')
                    d['x'].append('d')
                    print("number of keys in d after appending:", len(d.keys()))
                print("end of the while loop")
