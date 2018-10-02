..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: dictionaries-5-
   :start: 1

Introduction: Accumulating Multiple Results In a Dictionary
===========================================================

You have previously seen the accumulator pattern; it goes through the items in a sequence,
updating an accumulator variable each time. Rather than accumulating a single result, it's
possible to accumulate many results. Suppose, for example, we wanted to find out which
letters are used most frequently in English.

Suppose we had a reasonably long text that we thought was representative of general English
usage. For our purposes in the this chapter, we will use the text of the Sherlock Holmes story,
"A Study in Scarlet", by Sir Arthur Conan Doyle. The text actually includes a few
lines about the source of the transcription (Project Gutenberg), but those will not 
materially affect our analyses so we will just leave them in. You can access this text
within this chapter with the code ``open('scarlet.txt', 'r')``.

.. raw:: html
   
   <div class="alert alert-info">
   <p>As with other files that we access in this textbook environment, this one is actually pre-loaded in your browser, not retrieved from your computer's file system. That's why this chapter may be a little slower to load than others. You can view the text of "A Study in Scarlet" at the <a href="#scarlet.txt">bottom of the page.</a></p>
   </div>

If we want to find out how often the letter 't' occurs, we can accumulate the result
in a count variable.

.. activecode:: ac10_5_1

   f = open('scarlet.txt', 'r')
   txt = f.read()
   # now txt is one long string containing all the characters
   t_count = 0 #initialize the accumulator variable
   for c in txt:
       if c == 't':
           t_count = t_count + 1   #increment the counter
   print("t: " + str(t_count) + " occurrences")  

We can accumulate counts for more than one character as we traverse the text.
Suppose, for example, we wanted to compare the counts of 't' and 's' in the text.

.. activecode:: ac10_5_2

   f = open('scarlet.txt', 'r')
   txt = f.read()
   # now txt is one long string containing all the characters
   t_count = 0 #initialize the accumulator variable
   s_count = 0 # initialize the s counter accumulator as well
   for c in txt:
       if c == 't':
           t_count = t_count + 1   #increment the t counter
       elif c == 's':
           s_count = s_count + 1
   print("t: " + str(t_count) + " occurrences") 
   print("s: " + str(s_count) + " occurrences")
   
OK, but you can see this is going to get tedious if we try to accumulate counts
for all the letters. We will have to initialize a lot of accumulators, and there will
be a very long if..elif..elif statement. Using a dictionary, we can do a lot better.

One dictionary can hold all of the accumulator variables. Each key in the dictionary
will be one letter, and the corresponding value will be the count so far of how
many times that letter has occurred.

.. activecode:: ac10_5_3

   f = open('scarlet.txt', 'r')
   txt = f.read()
   # now txt is one long string containing all the characters
   x = {} # start with an empty dictionary
   x['t'] = 0  # initialize the t counter
   x['s'] = 0  # initialize the s counter
   for c in txt:
       if c == 't':
           x['t'] = x['t'] + 1  # increment the t counter
       elif c == 's':
           x['s'] = x['s'] + 1  # increment the s counter

   print("t: " + str(x['t']) + " occurrences")
   print("s: " + str(x['s']) + " occurrences")

This hasn't really improved things yet, but look closely at lines 8-11 in the code above.
Whichever character we're seeing, t or s, we're incrementing the counter for that 
character. So lines 9 and 11 could really be the same.

.. activecode:: ac10_5_4

   f = open('scarlet.txt', 'r')
   txt = f.read()
   # now txt is one long string containing all the characters
   x = {} # start with an empty dictionary
   x['t'] = 0  # intiialize the t counter
   x['s'] = 0  # initialize the s counter
   for c in txt:
       if c == 't':
           x[c] = x[c] + 1   # increment the t counter
       elif c == 's':
           x[c] = x[c] + 1   # increment the s counter

   print("t: " + str(x['t']) + " occurrences")
   print("s: " + str(x['s']) + " occurrences")

Lines 9 and 11 above may seem a little confusing at first. Previously, our assignment 
statements referred directly to keys, with ``x['s']`` and ``x['t']``. Here we 
are just using a variable ``c`` whose value is 's' or 't', or some other character.

If that made perfect sense to you, skip the next two paragraphs. Otherwise, read on. 
Let's break down that line in a little more detail. 

First, note that, as with all
assignment statements, the right side is evaluated first. In this case ``x[c]`` has to be
evaluated. As with all expressions, we first have to substitute values for variable names.
``x`` is a variable bound to a dictionary. ``c`` is a variable bound to one letter from the
string that ``txt`` is bound to (that's what the for statement says to do: 
execute lines 8-11 once for each character in txt, with the variable c bound to the current character 
on each iteration.) So, let's suppose that the current character is the letter ``s`` (we are on line 11). 
Then ``x[c]`` looks up the value associated with the key 's' in the dictionary x. If all is working correctly, that value should be the number of times 's' has previously occurred. For the sake of argument, suppose it's 25. Then
the right side evaluates to 25 + 1, 26. Watch this play out below.

.. showeval:: eval10_5_4
   :trace_mode: true

   f = open('scarlet.txt', 'r')
   txt = f.read()
   # now txt is one long string containing all the characters
   x = {} # start with an empty dictionary
   x['t'] = 15  # intiialize the t counter
   x['s'] = 25  # initialize the s counter
   ~~~~
   for {{c}}{{'s'}} in txt: # we have reached the 26th s now
   {{for 's' in txt:}}{{if c == 't'}}
       if {{c}}{{'s'}} == 't':
       {{if 's' == 't':}}{{elif c == 's':}}
       elif {{c}}{{'s'}} == 's':
       {{elif 's' == 's':}}{{x[c] = x[c] + 1   # increment the s counter}}
           x[{{c] = x[c}}{{'s'] = x['s'}}] + 1   # increment the s counter
           x['s'] = {{x['s']}}{{25}} + 1   # increment the s counter
           x['s'] = {{25 + 1}}{{26}}   # increment the s counter


Now we have assigned the value 26 to ``x[c]``. That is, in dictionary x, we set the value associated with the 
key 's' (the current value of the variable c) to be 26. In other words, we have incremented the value associated with
the key 's' from 25 to 26.

We can do better still. One other nice thing about using a dictionary is that we don't have to prespecify
what all the letters will be. In this case, we know in advance what the alphabet for
English is, but later in the chapter we will count the occurrences of words, and 
we do not know in advance all the of the words that may be used. Rather than pre-specifying
which letters to keep accumulator counts for, we can start with an empty dictionary and
add a counter to the dictionary each time we encounter a new thing that we want to
start keeping count of.

.. _accumulating_counts:

.. activecode:: ac10_5_5

   f = open('scarlet.txt', 'r')
   txt = f.read()
   # now txt is one long string containing all the characters
   x = {} # start with an empty dictionary
   for c in txt:
       if c not in x:
           # we have not seen this character before, so initialize a counter for it
           x[c] = 0
      
       #whether we've seen it before or not, increment its counter
       x[c] = x[c] + 1

   print("t: " + str(x['t']) + " occurrences")
   print("s: " + str(x['s']) + " occurrences")

Notice that in the for loop, we no longer need to explicitly ask whether the current
letter is an 's' or 't'. The increment step on line 11 works for the counter
associated with whatever the current character is. Our code is now accumulating 
counts for all letters, not just 's' and 't'.

**Check your understanding**

.. mchoice:: question10_5_1
   :answer_a: print txt['e'] > txt['t']
   :answer_b: print x['e'] > x['t']
   :answer_c: print x[e] > x[t]
   :answer_d: print x[c] > txt[c]
   :answer_e: print e[x] > t[x]
   :feedback_a: txt is the variable that has the original text, not the dictionary of counts.   
   :feedback_b: x is the dictionary of counts; you want to compare the values associated with 'e' and 't'.
   :feedback_c: x is the dictionary of counts, but you don't want to evaluate e and t as variables in order to determine which keys to look up in the dictionary. 
   :feedback_d: It seems like maybe you're guessing. Please review the material above and then try again.
   :feedback_e: It seems like you've reversed things. The variable that refers to the dictionary goes outside the square brackets; the key you're looking up goes inside.
   :correct: b

   Which of the following will print out True if there are more occurrences of e than t in
   the text of A Study in Scarlet, and False if t occurred more frequently (assumming that the previous code, from dict_accum_5, has
   already run.)


Note that the print statements at the end pick out the specific keys 't' and 's'. We
can generalize that, too, to print out the occurrence counts for all of
the characters, using a for loop to iterate through the keys in x.  

.. activecode:: ac10_5_6

   f = open('scarlet.txt', 'r')
   txt = f.read()
   # now txt is one long string containing all the characters
   letter_counts = {} # start with an empty dictionary
   for c in txt:
       if c not in letter_counts:
           # we have not seen this character before, so initialize a counter for it
           letter_counts[c] = 0
      
       #whether we've seen it before or not, increment its counter
       letter_counts[c] = letter_counts[c] + 1

   for c in letter_counts.keys():
       print(c + ": " + str(letter_counts[c]) + " occurrences")
   
Note that only those letters that actually occur in the text are shown. Some
punctuation marks that are possible in English, but were never used in the 
text, are omitted completely. The blank line partway through the output may surprise you.
That's actually saying that the newline character, ``\\n``, appears 5155 times in
the text. In other words, there are 5155 lines of text in the file. Let's
test that hypothesis. 


.. activecode:: ac10_5_7

   f = open('scarlet.txt', 'r')
   txt_lines = f.readlines()
   # now txt_lines is a list, where each item is one
   # line of text from the story
   print(len(txt_lines))
   print(txt_lines[70:85])

Now, here are some additional problems to try.

.. activecode:: ac10_5_8
   :language: python
   :autograde: unittest
   :practice: T

   **2.** Provided is a string saved to the variable name ``sentence``. Split the string into a list of words, then create a dictionary that contains each word and the number of times it occurs. Save this dictionary to the variable name ``word_counts``.
   ~~~~
   sentence = "The dog chased the rabbit into the forest but the rabbit was too quick."

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(word_counts.items()), sorted([('The', 1), ('dog', 1), ('chased', 1), ('the', 3), ('rabbit', 2), ('into', 1), ('forest', 1), ('but', 1), ('was', 1), ('too', 1), ('quick.', 1)]), "Testing that word_counts was created correctly.")

   myTests().main()

.. activecode:: ac10_5_9
   :language: python
   :autograde: unittest
   :practice: T

   **3.** Create a dictionary called ``char_d`` from the string ``stri``, so that the key is a character and the value is how many times it occurs.
   ~~~~
   stri = "what can I do"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(char_d.items()), sorted([('w', 1), ('h', 1), ('a', 2), ('t', 1), (' ', 3), ('c', 1), ('n', 1), ('I', 1), ('d', 1), ('o', 1)]), "Testing that char_d has been created correctly.")

   myTests().main()


.. datafile:: scarlet.txt
   :fromfile: scarlet.txt
   :hide: