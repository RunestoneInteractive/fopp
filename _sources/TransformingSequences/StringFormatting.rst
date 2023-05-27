..  Copyright (C)  Brad Miller, Paul Resnick, and Steve Oney.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-sf-
   :start: 1


.. _Format-Strings:

String Format Method
====================

Until now, we have created strings with variable content using the + operator to concatenate
partial strings together. That works, but it's very hard for people to read or debug a code
line that includes variable names and strings and complex expressions. Consider the following:

.. activecode:: ac8_8_4

   name = "Rodney Dangerfield"
   score = -1  # No respect!
   print("Hello " + name + ". Your score is " + str(score))

Or perhaps more realistically:

.. activecode:: ac8_8_5

   scores = [("Rodney Dangerfield", -1), ("Marlon Brando", 1), ("You", 100)]
   for person in scores:
       name = person[0]
       score = person[1]
       print("Hello " + name + ". Your score is " + str(score))

In this section, you will learn to write that in a more readable way:

.. activecode:: ac8_8_6

   scores = [("Rodney Dangerfield", -1), ("Marlon Brando", 1), ("You", 100)]
   for person in scores:
       name = person[0]
       score = person[1]
       print("Hello {}. Your score is {}.".format(name, score))

In grade school quizzes a common convention is to use fill-in-the blanks. For instance,

    Hello _____!


and you can fill in the name of the person greeted, and combine given text with a chosen
insertion. *We use this as an analogy:* Python has a similar construction, better called
fill-in-the-braces. The string method ``format``, makes substitutions into places in a string
enclosed in braces. Run this code:

.. activecode:: ac8_8_7

    person = input('Your name: ')
    greeting = 'Hello {}!'.format(person)
    print(greeting)


There are several new ideas here!

The string for the ``format`` method has a special form, with braces embedded.
Such a string is called a *format string*.  Places where
braces are embedded are replaced by the value of an expression
taken from the parameter list for the ``format`` method. There are many
variations on the syntax between the braces. In this case we use
the syntax where the first (and only) location in the string with
braces has a substitution made from the first (and only) parameter.

In the code above, this new string is assigned to the identifier
``greeting``, and then the string is printed.

The identifier ``greeting`` was introduced to break the operations into a clearer sequence of
steps. However, since the value of ``greeting`` is only referenced once, it can be eliminated
with the more concise version:

.. activecode:: ac8_8_8

    person = input('Enter your name: ')
    print('Hello {}!'.format(person))

There can be multiple substitutions, with data of any type.
Next we use floats.  Try original price $2.50  with a 7% discount:

.. activecode:: ac8_8_9

    origPrice = float(input('Enter the original price: $'))
    discount = float(input('Enter discount percentage: '))
    newPrice = (1 - discount/100)*origPrice
    calculation = '${} discounted by {}% is ${}.'.format(origPrice, discount, newPrice)
    print(calculation)

It is important to pass arguments to the ``format`` method in the correct order, because they
are matched *positionally* into the ``{}`` places for interpolation where there is more than
one.

If you used the data suggested, this result is not satisfying.
Prices should appear with exactly two places beyond the decimal point,
but that is not the default way to display floats.

Format strings can give further information inside the braces
showing how to specially format data.
In particular floats can be shown with a specific number of decimal places.
For two decimal places, put ``:.2f`` inside the braces for the monetary values:

.. activecode:: ac8_8_10

    origPrice = float(input('Enter the original price: $'))
    discount = float(input('Enter discount percentage: '))
    newPrice = (1 - discount/100)*origPrice
    calculation = '${:.2f} discounted by {}% is ${:.2f}.'.format(origPrice, discount, newPrice)
    print(calculation)

The 2 in the format modifier can be replaced by another integer to round to that
specified number of digits.

This kind of format string depends directly on the order of the
parameters to the format method. There are other approaches that we will
skip here, such as explicitly numbering substitutions.

It is also important that you give ``format`` the same amount of arguments as there are ``{}`` waiting for interpolation in the string. If you have a ``{}`` in a string that you do not pass arguments for, you may not get an error, but you will see a weird ``undefined`` value you probably did not intend suddenly inserted into your string. You can see an example below.

For example,

.. activecode:: ac8_8_11

   name = "Sally"
   greeting = "Nice to meet you"
   s = "Hello, {}. {}."

   print(s.format(name,greeting)) # will print Hello, Sally. Nice to meet you.

   print(s.format(greeting,name)) # will print Hello, Nice to meet you. Sally.

   print(s.format(name)) # 2 {}s, only one interpolation item! Not ideal.

A technical point: Since braces have special meaning in a format string, there must be a
special rule if you want braces to actually be included in the final *formatted* string. The
rule is to double the braces: ``{​{`` and ``}​}``. For example mathematical set notation uses
braces. The initial and final doubled braces in the format string below generate literal
braces in the formatted string::

    a = 5
    b = 9
    setStr = 'The set is {​{​{}, {}​}​}.'.format(a, b)
    print(setStr).

Unfortunately, at the time of this writing, the ActiveCode format implementation has a bug,
printing doubled braces, but standard Python prints ``{5, 9}``.

.. mchoice:: question8_8_3
   :answer_a: Nothing - it causes an error
   :answer_b: sum of {} and {} is {}; product: {}. 2 6 8 12
   :answer_c: sum of 2 and 6 is 8; product: 12.
   :answer_d: sum of {2} and {6} is {8}; product: {12}.
   :correct: c
   :feedback_a: It is legal format syntax:  put the data in place of the braces.
   :feedback_b: Put the data into the format string; not after it.
   :feedback_c: Yes, correct substitutions!
   :feedback_d: Close:  REPLACE the braces.
   :practice: T


   What is printed by the following statements?

   .. code-block:: python

       x = 2
       y = 6
       print('sum of {} and {} is {}; product: {}.'.format( x, y, x+y, x*y))


.. mchoice:: question8_8_4
   :answer_a: 2.34567 2.34567 2.34567
   :answer_b: 2.3 2.34 2.34567
   :answer_c: 2.3 2.35 2.3456700
   :correct: c
   :feedback_a: The numbers before the f in the braces give the number of digits to display after the decimal point.
   :feedback_b: Close, but round to the number of digits and display the full number of digits specified.
   :feedback_c: Yes, correct number of digits with rounding!
   :practice: T


   What is printed by the following statements?

   .. code-block:: python

       v = 2.34567
       print('{:.1f} {:.2f} {:.7f}'.format(v, v, v))


