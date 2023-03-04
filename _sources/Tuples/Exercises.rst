..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: tuples-7-
   :start: 1

Exercises
---------

#.

    .. tabbed:: q1

        .. tab:: Question

           .. actex:: ac12_7_1

              Fill in the left side of line 7 so that the following code runs without error
              ~~~~
              def circleInfo(r):
                  """ Return (circumference, area) of a circle of radius r """
                  c = 2 * 3.14159 * r
                  a = 3.14159 * r * r
                  return c, a

               = circleInfo(10) 
              print("area is " + str(area))
              print("circumference is " + str(circ))

#.

    .. tabbed:: q2

        .. tab:: Question

           .. actex:: ac12_7_2

              Use a for loop to print out the last name, year of birth, and city for each of the people. (There are multiple ways you could do this. Try out some code and see what happens!)
              ~~~~
              julia = ("Julia", "Roberts", 1967, "Duplicity", 2009, "Actress", "Atlanta, Georgia")
              claude = ("Claude", "Shannon", 1916, "A Mathematical Theory of Communication", 1948, "Mathematician", "Petoskey, Michigan")
              alan = ("Alan", "Turing", 1912, "Computing machinery and intelligence", 1950, "Mathematician", "London, England")
    
              people = [julia, claude, alan]

Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
