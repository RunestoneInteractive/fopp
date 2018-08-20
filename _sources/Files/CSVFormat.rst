..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-8-
   :start: 1

CSV Format
==========

CSV stands for Comma Separated Values. If you print out tabular data in CSV format, it can be easily imported into other programs like Excel, Google spreadsheets, or a statistics package (R, stata, SPSS, etc.).

For example, we can make a file with the following contents. If you save it as a file name grades.csv, then you could import it into one of those programs. The first line gives the column names and the later lines each give the data for one row.

.. sourcecode:: python

   Name,score,grade
   Jamal,98,A+
   Eloise,87,B+
   Madeline,99,A+
   Wei,94,A
