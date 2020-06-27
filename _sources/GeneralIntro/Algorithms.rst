..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: intro-2-
   :start: 1

.. index:: programming language, algorithm, pseudocode,
           program

Algorithms
----------
           
If problem solving is a central part of computer science, then the solutions that you create through
the problem solving process are also important.  In computer science, we refer to these solutions
as **algorithms**.  An algorithm is a step by step list of instructions that if followed exactly will solve the problem under consideration.

For example, an algorithm to compute the area of a circle given its radius might look like this:

.. admonition:: Algorithm Example 1 (English)

    1. Ask for radius 
    2. Compute area by squaring radius and multiplying the result by pi
    3. Display the computed area 

Notice that this algorithm consists of a set of numbered steps. It is written in English, for ease of 
understanding. Although simple algorithms are easily understood when written in English, more complicated
algorithms need more precise notation. For improved precision, algorithms are often written in pseudocode. **Pseudocode** is
a notation that is more precise than English but generally not as precise as a programming language.
The same algorithm expressed in pseudocode might look something like this:

.. admonition:: Algorithm Example 2 (Pseudocode)

    1. Ask for radius 
    2. let area = (radius\ :sup:`2`) × π
    3. Display area 

Note how the pseudocode example expresses step 2 more precisely, specifying the formula in mathematical
terms.

Our goal in computer science is to take a problem and develop an algorithm that can serve as a general solution.  
Once we have such a solution, we can use our computer to automate its execution using programming. 
Programming is a skill that allows a computer scientist to take an algorithm and represent it in
a notation (a program) that can be followed by a computer.  A program is written in a **programming language**
such as Python, the language you will learn in this book.

To help you understand the difference between an algorithm and a program, consider this program to compute
the area of a circle:

.. activecode:: alg_impl
   :nocodelens:

   radius = int(input("Enter the radius:"))
   area = (radius * radius) * 3.1415
   print("The area of a circle with radius", radius, "is:", area)

A **program** is an algorithm expressed in a programming language. We might also say
that a program is an *implementation* of an algorithm. In this example, both the
algorithm and the program have three steps. The first step gets some input from
the user and the input into something the computer can do math with; 
the second step performs a calculation using the information obtained
in the first step; and the final step displays the result to the user. Even
though we haven't covered any details of Python, hopefully you can see the
correspondence between the steps of the algorithm, which could be followed by a
human (but not executed by a computer), and the steps of the program, which can
be executed by a computer (try executing this one using the Run button).

Algorithms are important because the process of solving a problem through programming often begins
by designing an algorithm. The programmer often expresses the algorithm in
pseudocode, then converts the algorithm to a program for the computer to execute.
In the next section, you will learn how to execute Python programs on a computer.


**Check your understanding**

.. mchoice:: question1_2_2
   :answer_a: A solution to a problem that can be solved by a computer.
   :answer_b: A step by step sequence of instructions that if followed exactly will solve the problem under consideration.
   :answer_c: A series of instructions implemented in a programming language.
   :answer_d: A special kind of notation used by programmers.
   :correct: b
   :feedback_a: While it is true that algorithms often do solve problems, this is not the best answer.  An algorithm is more than just the solution to the problem for a computer.  An algorithm can be used to solve all sorts of problems, including those that have nothing to do with computers.
   :feedback_b: Algorithms are like recipes:  they must be followed exactly, they must be clear and unambiguous, and they must end.
   :feedback_c: Programming languages are used to express algorithms, but an algorithm does not have to be expressed in terms of a programming language.
   :feedback_d: Programmers sometimes use a special notation to illustrate or document an algorithm, but this is not the definition of an algorithm.

   An algorithm is:
