..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: test-2-
   :start: 1

Writing Test Cases for Functions
================================

It is a good idea to write one or more test cases for each function that you define.

A function defines an operation that can be performed. If the function takes one or more parameters, it is supposed to 
work properly on a variety of possible inputs. Each test case will check whether the function works properly on 
**one set of possible inputs**. 

A useful function will do some combination of three things, given its input parameters:

* Return a value. For these, you will write **return value tests**.
* Modify the contents of some mutable object, like a list or dictionary. For these you will write **side effect tests**.
* Print something or write something to a file. Tests of whether a function generates the right printed output are beyond the scope of this testing framework; you won't write these tests.

Return Value Tests
~~~~~~~~~~~~~~~~~~

Testing whether a function returns the correct value is the easiest test case to define. You simply check whether the 
result of invoking the function on a particular input produces the particular output that you expect. If ``f`` is your 
function, and you think that it should transform inputs ``x`` and ``y`` into output ``z``, then you could write a test as 
``test.testEqual(f(x, y), z)``. Or, to give a more concrete example, if you have a function ``square``, you could have 
a test case ``test.testEqual(square(3), 9)``. Call this a **return value test**.

Because each test checks whether a function works properly on specific inputs, the test cases will never be complete: in 
principle, a function might work properly on all the inputs that are tested in the test cases, but still not work 
properly on some other inputs. That's where the art of defining test cases comes in: you try to find specific inputs that 
are representative of all the important kinds of inputs that might ever be passed to the function.

The first test case that you define for a function should be an "easy" case, one that is prototypical of the kinds of 
inputs the function is supposed to handle. Additional test cases should handle "extreme" or unusual inputs, sometimes 
called **edge cases**. For example, if you are defining the "square" function, the first, easy case, might be an input 
like 3. Additional extreme or unusual inputs around which you create test cases might be a negative number, 0, and a 
floating point number.

One way to think about how to generate edge cases is to think in terms of **equivalence classes** of the different kinds of inputs the function might get. For example, the input to the ``square`` function could be either positive or negative. We then choose an input from each of these classes.
**It is important to have at least one test for each equivalence class of inputs.**

Semantic errors are often caused by improperly handling the boundaries between equivalence classes. The boundary for this
problem is zero. **It is important to have a test at each boundary.**

Another way to think about edge cases is to imagine things that could go wrong in the implementation. For example, in the square function we might mistakenly use addition instead of multiplication. Thus, we shouldn't rely on a test that uses 2 as input, but we might be fooled into thinking it was working when it produced an output of 4, when it was really doubling rather than squaring.

Try adding one or two more test cases for the square function in the code below, based on the suggestions for edge cases.

.. activecode:: ac19_2_1

    def square(x):
        return x*x

    import test

    test.testEqual(square(3), 9)


Side Effect Tests
~~~~~~~~~~~~~~~~~

To test whether a function makes correct changes to a mutable object, you will need more than one line of code. You will 
first set the mutable object to some value, then run the function, then check whether the object has the expected value. 
Call this a **side effect test** because you are checking to see whether the function invocation has had the correct side 
effect on the mutable object.

An example follows, testing the ``update_counts`` function (which is deliberately implemented incorrectly...). This 
function takes a string called ``letters`` and updates the counts in ``counts_diction`` that are associated with each 
character in the string. To do a side effect test, we first create a dictionary with initial counts for some letters. 
Then we invoke the function. Then we test that the dictionary has the correct counts for some letters (those correct 
counts are computed manually when we write the test. We have to know what the correct answer should be in order to write 
a test). You can think of it like writing a small exam for your code -- we would not give you an exam without knowing the 
answers ourselves.

.. activecode:: ac19_2_2

    def update_counts(letters, counts_d):
        for c in letters:
            counts_d[c] = 1
            if c in counts_d:
                counts_d[c] = counts_d[c] + 1

    import test

    counts = {'a': 3, 'b': 2}
    update_counts("aaab", counts)
    # 3 more occurrences of a, so 6 in all
    test.testEqual(counts['a'], 6)
    # 1 more occurrence of b, so 3 in all
    test.testEqual(counts['b'], 3)


Testing Conditionals and Loops
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If the code has a conditional execution, or a for loop, then you'll want to include test cases that exercise different 
possible paths through the code. For example, if there is a for loop, edge cases would include iteration through an empty 
sequence or a sequence with just one item. With a conditional, you would want different inputs that cause the if and else 
clauses to execute.

If you were writing tests on a function that takes any list as input and returns a value that is a computation on that 
input list, you might test the function's return value when it is invoked on an empty list, a list with only one value, a 
list with an element that is a list itself, a list that has many elements...

Try adding those some of those tests in the code window above, for the update_counts function. What if you start with an 
empty counts dictionary? What if the string passed to update_counts is empty? What if the string includes letters that 
aren't in the dictionary yet?

Testing Optional Parameters
~~~~~~~~~~~~~~~~~~~~~~~~~~~

If a function takes an optional parameter, one of the edge cases to test for is when no parameter value is supplied 
during execution. Below are some tests for the built-in sorted function.

.. activecode:: ac19_2_3

    import test

    test.testEqual(sorted([1, 7, 4]), [1, 4, 7])
    test.testEqual(sorted([1, 7, 4], reverse=True), [7, 4, 1])


.. mchoice:: question19_2_1
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: No matter how many tests you write, there may be some input that you didn't test, and the function could do the wrong thing on that input.
   :feedback_b: The tests should cover as many edge cases as you can think of, but there's always a possibility that the function does badly on some input that you didn't include as a test case.

   If you write a complete set of tests and a function passes all the tests, you can be sure that it's working correctly.
