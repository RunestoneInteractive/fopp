
..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-10-
   :start: 1

Writing in data from a .CSV File
================================

The typical pattern for writing data to a CSV file will be to write a header row and loop 
through the items in a list (or dictionary which you will learn later), outputting one row for 
each. 

.. sourcecode:: python

   olympians = [("John Aalberg", 31, "Cross Country Skiing"),
               ("Minna Maarit Aalto", 30, "Sailing"),
               ("Win Valdemar Aaltonen", 54, "Art Competitions"),
               ("Wakako Abe", 18, "Cycling")]

   outfile = open("reduced_olympics.csv","w")
   # output the header row
   outfile.write("Name, Age, Sport\n")
   # output each of the rows:
   for olympian in olympians:
       outfile.write("{}, {}, {}\n".format(*olympian))
   outfile.close()
   
There are a couple of things worth noting in the code above. First, unlike the print statement, 
the .write() method on a file object does not automatically insert a newline. Instead, we had to 
explicitly add the character ``\n`` at the end of each line.

Second, we used string interpolation on the second to last line. That makes it clear that we're 
taking the contents of the tuple ``olympian``, unpacking it into separate arguments, using the 
``*``, and putting the component values into the three spots in the string. We could have written 
that line with a bunch of strings and variables combined with + signs, but that code would be 
much harder for humans to read and understand.

Also fine, and possibly clearer, would be to write it like this: ``outfile.write("{}, {}, {}\n".format(olympian[0],olympian[1],olympian[2]))``. 

(Note that just putting ``olympian``, the tuple, with no ``*``, as the argument to ``.format`` 
will cause an error -- in that case Python sees only one argument, but three spaces to put 
component values in, which does not work!)

If one or more columns contain text, and that text could contain commas, we need to do something 
to distinguish a comma in the text from a comma that is separating different values (cells in the 
table). There are a few options for doing that in CSV format, but the most common one is to 
enclose each of the values in double quotes. This starts to get a little tricky, because we will 
need to have the double quote character inside the string output. But it is doable. Indeed, one 
reason Python allows strings to be delimited with either single quotes or double quotes is so 
that one can be used to delimit the string and the other can be a character in the string.

.. sourcecode:: python

   olympians = [("John Aalberg", 31, "Cross Country Skiing"),
               ("Minna Maarit Aalto", 30, "Sailing"),
               ("Win Valdemar Aaltonen", 54, "Art Competitions"),
               ("Wakako Abe", 18, "Cycling")]
   
   outfile = open("reduced_olympics.csv","w")
   # output the header row
   outfile.write('"Name, Age, Sport\n"')
   # output each of the rows:
   for olympian in olympians:
       outfile.write('"{}", "{}", "{}"\n'.format(olympian))
   outfile.close()

