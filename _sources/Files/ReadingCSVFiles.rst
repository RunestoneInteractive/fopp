..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-9-
   :start: 1

Reading in data from a .CSV File
================================

We are able to read in csv files like we have so far with regular text files. To practice this, 
we will be using data about olympic events.

Typically, CSV files will have a header as the first line, which contains column names. Then, 
each following row in the file will contain data that corresponds to the appropriate columns. 

All file methods that we have mentioned - ``read``, ``readline``, and ``readlines`` - will work 
on CSV files. In our examples, we will use ``readlines``, as that will make it easier for us to 
manipulate the data in Python.

.. activecode:: ac9_9_1

    fileconnection = open("olymics.txt", 'r')
    data = fileconnection.readlines()
    for row in data:
        print(row)
        print(row.split(",")[0])

In the above code, we open the file, olymics, which contains a bit of data on some olympians. 
We then use readlines so that each line is an element in a new list which is assigned to data. 
Then, we loop through data, and print out each row. Because the file is separated by commas, 
we can split on the comma, to further extract the data that we want. As a result, we can print 
the full data, as well as just the first column.

.. raw:: html

    <pre hidden id="olymics.txt">
    Name,Sex,Age,Team,Event,Medal
    A Dijiang,M,24,China,Basketball,NA
    A Lamusi,M,23,China,Judo,NA
    Gunnar Nielsen Aaby,M,24,Denmark,Football,NA
    Edgar Lindenau Aabye,M,34,Denmark/Sweden,Tug-Of-War,Gold
    Christine Jacoba Aaftink,F,21,Netherlands,Speed Skating,NA
    Christine Jacoba Aaftink,F,21,Netherlands,Speed Skating,NA
    Christine Jacoba Aaftink,F,25,Netherlands,Speed Skating,NA
    Christine Jacoba Aaftink,F,25,Netherlands,Speed Skating,NA
    Christine Jacoba Aaftink,F,27,Netherlands,Speed Skating,NA
    Christine Jacoba Aaftink,F,27,Netherlands,Speed Skating,NA
    Per Knut Aaland,M,31,United States,Cross Country Skiing,NA
    Per Knut Aaland,M,31,United States,Cross Country Skiing,NA
    Per Knut Aaland,M,31,United States,Cross Country Skiing,NA
    Per Knut Aaland,M,31,United States,Cross Country Skiing,NA
    Per Knut Aaland,M,33,United States,Cross Country Skiing,NA
    Per Knut Aaland,M,33,United States,Cross Country Skiing,NA
    Per Knut Aaland,M,33,United States,Cross Country Skiing,NA
    Per Knut Aaland,M,33,United States,Cross Country Skiing,NA
    John Aalberg,M,31,United States,Cross Country Skiing,NA
    John Aalberg,M,31,United States,Cross Country Skiing,NA
    John Aalberg,M,31,United States,Cross Country Skiing,NA
    John Aalberg,M,31,United States,Cross Country Skiing,NA
    John Aalberg,M,33,United States,Cross Country Skiing,NA
    John Aalberg,M,33,United States,Cross Country Skiing,NA
    John Aalberg,M,33,United States,Cross Country Skiing,NA
    John Aalberg,M,33,United States,Cross Country Skiing,NA
    "Cornelia ""Cor"" Aalten (-Strannood)",F,18,Netherlands,Athletics,NA
    "Cornelia ""Cor"" Aalten (-Strannood)",F,18,Netherlands,Athletics,NA
    Antti Sami Aalto,M,26,Finland,Ice Hockey,NA
    "Einar Ferdinand ""Einari"" Aalto",M,26,Finland,Swimming,NA
    Jorma Ilmari Aalto,M,22,Finland,Cross Country Skiing,NA
    Jyri Tapani Aalto,M,31,Finland,Badminton,NA
    Minna Maarit Aalto,F,30,Finland,Sailing,NA
    Minna Maarit Aalto,F,34,Finland,Sailing,NA
    Pirjo Hannele Aalto (Mattila-),F,32,Finland,Biathlon,NA
    Arvo Ossian Aaltonen,M,22,Finland,Swimming,NA
    Arvo Ossian Aaltonen,M,22,Finland,Swimming,NA
    Arvo Ossian Aaltonen,M,30,Finland,Swimming,Bronze
    Arvo Ossian Aaltonen,M,30,Finland,Swimming,Bronze
    Arvo Ossian Aaltonen,M,34,Finland,Swimming,NA
    Juhamatti Tapio Aaltonen,M,28,Finland,Ice Hockey,Bronze
    Paavo Johannes Aaltonen,M,28,Finland,Gymnastics,Bronze
    Paavo Johannes Aaltonen,M,28,Finland,Gymnastics,Gold
    Paavo Johannes Aaltonen,M,28,Finland,Gymnastics,NA
    Paavo Johannes Aaltonen,M,28,Finland,Gymnastics,Gold
    Paavo Johannes Aaltonen,M,28,Finland,Gymnastics,NA
    Paavo Johannes Aaltonen,M,28,Finland,Gymnastics,NA
    Paavo Johannes Aaltonen,M,28,Finland,Gymnastics,NA
    Paavo Johannes Aaltonen,M,28,Finland,Gymnastics,Gold
    Paavo Johannes Aaltonen,M,32,Finland,Gymnastics,NA
    Paavo Johannes Aaltonen,M,32,Finland,Gymnastics,Bronze
    Paavo Johannes Aaltonen,M,32,Finland,Gymnastics,NA
    Paavo Johannes Aaltonen,M,32,Finland,Gymnastics,NA
    Paavo Johannes Aaltonen,M,32,Finland,Gymnastics,NA
    Paavo Johannes Aaltonen,M,32,Finland,Gymnastics,NA
    Paavo Johannes Aaltonen,M,32,Finland,Gymnastics,NA
    Paavo Johannes Aaltonen,M,32,Finland,Gymnastics,NA
    Timo Antero Aaltonen,M,31,Finland,Athletics,NA
    Win Valdemar Aaltonen,M,54,Finland,Art Competitions,NA
    </pre>
