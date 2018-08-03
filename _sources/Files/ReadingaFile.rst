..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-3-
   :start: 1

Reading a File
~~~~~~~~~~~~~~

As an example, suppose we have a text file called ``olypmics.txt`` that contains
the following data representing statistics about olypians across different years. Although it
would be possible to consider entering this data by hand each time it is used,
you can imagine that it would be time-consuming and error-prone to do this. In
addition, it is likely that there could be data from more olypians and
other years. The format of the data file is as follows

::

    Name,                           Sex,  Age,   Team,            Event

.. raw:: html

    <pre id="olypmics.txt">
    A Dijiang,                      M,    24,     China,          Basketball
    A Lamusi,                       M,    23,     China,          Judo
    Gunnar Nielsen Aaby,            M,    24,     Denmark,        Football
    Edgar Lindenau Aabye,           M,    34,     Denmark/Sweden, Tug-Of-War
    Christine Jacoba Aaftink,       F,    21,     Netherlands,    Speed Skating
    Christine Jacoba Aaftink,       F,    25,     Netherlands,    Speed Skating
    Christine Jacoba Aaftink,       F,    27,     Netherlands,    Speed Skating
    Per Knut Aaland,                M,    31,     United States,  Cross Country Skiing
    Per Knut Aaland,                M,    33,     United States,  Cross Country Skiing
    John Aalberg,                   M,    31,     United States,  Cross Country Skiing
    John Aalberg,                   M,    33,     United States,  Cross Country Skiing
    Antti Sami Aalto,               M,    26,     Finland,        Ice Hockey
    Jorma Ilmari Aalto,             M,    22,     Finland,        Cross Country Skiing
    Jyri Tapani Aalto,              M,    31,     Finland,        Badminton
    Minna Maarit Aalto,             F,    30,     Finland,        Sailing
    Minna Maarit Aalto,             F,    34,     Finland,        Sailing
    Pirjo Hannele Aalto (Mattila-), F,    32,     Finland,        Biathlon
    Timo Antero Aaltonen,           M,    31,     Finland,        Athletics
    Win Valdemar Aaltonen,          M,    54,     Finland,        Art Competitions
    </pre>

To open this file, we would call the ``open`` function. The variable,
``fileref``, now holds a reference to the file object returned by
``open``. When we are finished with the file, we can close it by using
the ``close`` method. After the file is closed any further attempts to
use ``fileref`` will result in an error.

::

   fileref = open("olypmics.txt","r")
   ## other code here that refers to variable fileref
   fileref.close()

.. note::

    A common mistake is to get confused about whether you are providing a variable name or a string literal as an input to the open function. In the code above, "olypmics.txt" is a string literal that should correspond to the name of a file on your computer. If you put something without quotes, like ``open(x, "r")``, it will be treated as a variable name. In this example, x should be a variable that's already been bound to a string value like "olypmics.txt".
