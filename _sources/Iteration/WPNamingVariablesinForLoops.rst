..  Copyright (C) Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: iter-8-
   :start: 1

.. _naming_variables_in_for_loops:

👩‍💻 Naming Variables in For Loops
===================================

We've mentioned before about carefully choosing your variable names. Though the
names you choose aren't meaningful to the program, they can be to you. When we 
choose names for variables in for loops, the more understandable they are to us,
the easier it will be to use them. Here are some tips to make your for loops more 
readable for yourself and anyone else who may read your programs:

1. Use singular nouns for the iterator variable, which is also called the loop variable (things like "song", "book", "post", "letter", "word").
2. Use plural nouns for the sequence variable (things like "songs", "books", "posts", "letters", "words").

While these two tips won't always apply, they are general best practices when it 
comes to choosing variable names. Below we have an example!

.. activecode:: ac6_8_1
   :include: ac6_8_3

   # x is a list defined elsewhere

   for y in x:
       print(y)

Since we can't see the contents of x right now - this might be the case if we have 
a long program - then these names would make the program hard to understand. Let's 
compare this to a program that does the same thing, but uses better names.

.. activecode:: ac6_8_2
   :include: ac6_8_3

   # genres is a list defined elsewhere

   for genre in genres:
       print(genre)

Here what we expect is much more clear, even if we didn't see how genres was initialized!

The code below was used to initialize x and genres so you're free to look at it but you 
don't need to run it!

.. activecode:: ac6_8_3
   :hidecode:

   x = ["jazz", "pop", "rock", "country", "punk", "folk", "hip-hop", "rap", "alternative"]
   genres = ["jazz", "pop", "rock", "country", "punk", "folk", "hip-hop", "rap", "alternative"]

