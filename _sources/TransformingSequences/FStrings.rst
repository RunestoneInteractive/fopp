..  Copyright (C)  Pei-Yao Hung, Steve Oney, and Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-f-
   :start: 1

f-Strings
---------

There is another (more modern) approach for generating fill-in-the-blanks, **f-strings**. They were introduced in version 3.6 of python.
f-strings are a Python-specific way of formatting strings.

You should develop the skill of reading
code that uses both ``.format()`` and f-strings, because you may encounter both. You will probably find that it's easier to
write code using f-strings, and we encourage you to use them for your own code, except when you have a specific reason to use ``.format()`` instead.

Let's revisit the example we used before. Pay attention to how the same outcome can be obtained first with the ``.format()`` method and then with the f-string approach.

.. activecode:: ac8_f_1

    name = "Rodney Dangerfield"
    score = -1
    print("Hello {}. Your score is {}.".format(name, score))
    print(f"Hello {name}. Your score is {score}.")

In the above example, using the *f-strings* approach, we fill each placeholder (i.e., each pair of braces) with a variable name whose value we want to display.

Note that to use an f-string, we must type the character "f" before the string content. We can then enter expressions within the string between curly braces ({}).
Whenever the python interpreter encounters curly braces inside an f-string, it will evaluate the expression and substitute the resulting value into the string.

We can use almost any expression inside the braces. It can be: a value; a variable that contains or references a value; an arithmetic expression; a string expression; a method call that returns a value such as a string or a number.
See the following examples illustrating these. Each ``print()`` statement produces the exact same output.


First, we can use values directly inside the braces.

.. activecode:: ac8_f_2

    first_name = "Peter"
    last_name = "Huang"
    score = 96.75
    print(f"Hello {'Peter Huang'}. Your score is {96.75}.")

We can use expressions (i.e., string operations and arithmetic operations) directly inside the braces.

.. activecode:: ac8_f_3

    first_name = "Peter"
    last_name = "Huang"
    score = 96.75
    print(f"Hello {'Peter' + ' ' + 'Huang'}. Your score is {90 + 6.75}.")

We can use expressions consisting of variables directly inside the braces.

.. activecode:: ac8_f_4

    first_name = "Peter"
    last_name = "Huang"
    score = 96.75
    print(f"Hello {first_name} {last_name}. Your score is {score}.")


We can call a function or a method directly inside the braces.
Note that in this example, we use ``max()``, a built-in function that will return the highest value among the values we provide.
Since the value ``96.75`` is assigned to the variable ``score`` and is greater than ``60``, the value returned from ``max(score, 60)`` will be ``96.75``.

.. activecode:: ac8_f_5

    first_name = "Peter"
    last_name = "Huang"
    score = 96.75
    print(f"Hello {first_name} {last_name}. Your score is {max(score, 60)}.")


Similar to the ``format()`` approach, we can use format specifiers (e.g., ``:.2f``) to further fine-tune the value being displayed.
For instance, if we want to display a floating-point number with one decimal place, we can use ``:.1f`` inside the braces and after the expression.
The example below shows how we can apply the format specifiers with both a variable and a method call inside the braces.

.. activecode:: ac8_f_6

    first_name = "Peter"
    last_name = "Huang"
    score = 96.75
    print(f"Hello {first_name} {last_name}. Your score is {score:.1f}.")
    print(f"Hello {first_name} {last_name}. Your score is {max(score, 60):.1f}.")

At this point, we might ask, are *f-strings* the best approach to use for formatting strings?

Generally, yes, f-strings make for code that's easier to read, and thus, also easier to write and debug. But there a couple things to watch out for.

First, note that we need to pay attention to using quotes inside *f-strings*. If we use quotes, that means we are embedding quotes inside the quotes required by f-strings.
If we use the same type of quotes, such as double quotes, the Python interpreter will have trouble determining how these double-quotes are paired with one another, and it will have trouble understanding what we want a computer to do.
A solution is to use a different kind of quotes, such as single quotes, so that the Python interpreter knows how to pair those quotes (e.g., double with double, single with single) and properly execute our code.
Take a look at the following example, which produces an error, and see if we can fix the bug to have the correct output similar to the previous example (hint: replacing a pair of double quotes).

.. activecode:: ac8_f_7

    first_name = "Peter"
    last_name = "Huang"
    score = 96.75
    print(f"Hello {first_name + " " + last_name}. Your score is {score}.")

Note that, as the ``.format()`` approach does not require using expressions directly inside the *format string*, we don't have to worry about the quotes-inside-quotes problem when using the ``.format()`` approach. The following example uses double quotes throughout.

.. activecode:: ac8_f_8

    first_name = "Peter"
    last_name = "Huang"
    score = 96.75
    print("Hello {}. Your score is {}.".format(first_name + " " + last_name, score))


Second, we need to pay attention when using braces inside *f-string*, as *f-strings* already require the use of braces as placeholders.
To display a pair of braces inside f-strings, we need to double the pair of braces.

This is also true with format strings used with ``.format()``. However, since the ``.format()`` approach does not require using expressions directly inside the *format string*, we can avoid the braces-inside-braces problem by including the braces in the substitution values instead,
as we can see in the following example.

.. activecode:: ac8_f_9

    print("{} {}".format("{I need braces.}", "{I also need braces.}"))

In summary, different string formatting methods have their own advantages and disadvantages in terms of readability and caveats. There are other considerations (e.g., speed), but we won't discuss them here.
One of the potential solutions to mitigate the issues raised above is to pre-calculate the values using different expressions and store them in variables.
We can then use mostly these variables with either ``.format()`` or *f-strings*, without using complex expressions directly. See the example inside the question below.

We have introduced various string methods in Python. Use the following question to check if you understand what has been discussed.

.. mchoice:: question8_f_10
   :answer_a: The percentage of r characters (upper or lower case): 6.061%. The number of r: 4.
   :answer_b: The number of r: 4. The percentage of r characters (upper or lower case): 6.061%.
   :answer_c: The percentage of r characters (upper or lower case): 6.06%. The number of r: 3.
   :answer_d: The number of r: 3. The percentage of r characters (upper or lower case): 6.06%.
   :correct: d
   :feedback_a: Check how many decimal places, sentence order, and how many lower case ‘r’ characters there are.
   :feedback_b: Check how many decimal places and how many lower case ‘r’ characters there are.
   :feedback_c: Check the sentence order.
   :feedback_d: Yes, the numbers and the order of sentences are correct.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

        s = "I saw the movie, Mary Poppins Returns, and I thought it was great."

        # all the expressions
        r_count = s.count("r")
        all_case_r_count = s.lower().count("r")
        r_precentage = all_case_r_count/len(s) * 100

        # use mostly variables inside f-strings or format()
        first_str = f"The number of r characters: {r_count}."
        second_str = "The percentage of r characters (upper or lower case): {:.2f}%.".format(r_precentage)

        # display
        print( first_str + " " + second_str)