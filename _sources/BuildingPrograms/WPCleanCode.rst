..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: buildP-4-
   :start: 1

👩‍💻 Clean Up
==============

Congrats! We've solved the problem now, but our code isn't very nice to read. We can clean it up now and remove the print statements.

.. activecode:: ac500_4_1
   
    # initialize a dictionary
    user_dictionary = {}

    # write a for loop that will iterate five times. I can use the range function for this!
    for _ in range(5):
        # in the for loop, I should ask for input from the user
        response = input("Please enter two words to add to a dictionary. The first word is the definition, the second will be the word associated with it.")

        # next, I should separate the words
        separated_response = response.split()
        response_key = separated_response[0]
        response_value = separated_response[1]

        # finally, I should add the key value pair to the dictionary
        user_dictionary[response_key] = response_value


We can also fix the comments so that they aren't so obvious. 

.. activecode:: ac500_4_2
   
    user_dictionary = {}

    # asks a user for two words to add to the user dictionary - will do this five times.
    # the first word will be the key, the second word will be the value.
    for _ in range(5):
        response = input("Please enter two words to add to a dictionary. The first word is the definition, the second will be the word associated with it.")

        separated_response = response.split()
        response_key = separated_response[0]
        response_value = separated_response[1]

        user_dictionary[response_key] = response_value

At this point, the code has been cleaned up fully - you could easily write the comments in a different way but this should be easy for other programmers to understand, and ourselves to understand if we come back to the code days, weeks, or months later!
