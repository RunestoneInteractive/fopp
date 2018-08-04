
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

Writing data to a .CSV File
===========================

The typical pattern for writing data to a CSV file will be to write a header row and loop 
through the items in a list, outputting one row for 
each. Here we a have a list of tuples, each representing one Olympian, a subset of the rows and columns from the file we have been reading from.

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
       outfile.write("{}, {}, {}\n".format(olympian[0], olympian[1], olympian[2]))
   outfile.close()
   
There are a couple of things worth noting in the code above. First, unlike the print statement, 
the .write() method on a file object does not automatically insert a newline. Instead, we had to 
explicitly add the character ``\n`` at the end of each line.

Second, we had to explicitly refer to each of the elements of olympian when building the string to write. Note just putting ``.format(olympian)`` wouldn't work because the interpreter would see only one value (a tuple) when it was expecting three values to try to substitute into the string template.  Later in the coruse we will see that python provides an advanced technique for automatically unpacking the three values from the tuple, with ``.format(*olympian)``.

As described previously, if one or more columns contain text, and that text could contain commas, we need to do something 
to distinguish a comma in the text from a comma that is separating different values (cells in the 
table). If we want to enclose each value in double quotes, it can start to get a little tricky, because we will 
need to have the double quote character inside the string output. But it is doable. Indeed, one 
reason Python allows strings to be delimited with either single quotes or double quotes is so 
that one can be used to delimit the string and the other can be a character in the string. If you get to the point where you need to quote all of the values, we recommend learning to use python's csv module.

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

