..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-13-
   :start: 1

Reading in data from a .CSV File
================================

We are able to read in csv files the same way we have with other text files. Because of the standardized structure of the data, there is a common pattern for processing it. To practice this, 
we will be using data about olympic events.

Typically, CSV files will have a header as the first line, which contains column names. Then, 
each following row in the file will contain data that corresponds to the appropriate columns. 

All file methods that we have mentioned - ``read``, ``readline``, and ``readlines``, as simply iterating over the file object itself - will work on CSV files. In our examples, we will use ``readlines``, as that will make it easier for us to 
manipulate the data in Python.

.. activecode:: ac9_13_1

    fileconnection = open("olympics.txt", 'r')
    data = fileconnection.readlines()
    for row in data:
        print(row)
        print(row.split(",")[0])

In the above code, we open the file, olympics.txt, which contains data on some olympians. 
We then use readlines so that each line is an element in a new list. 
Then, we iterate over the list, and print out each row. Because the file is separated by commas, 
we can split on the comma, to further extract the data that we want. As a result, we can print 
the full data, as well as just the first column.

Note that the trick of splitting the text for each row based on the presence of commas only works because commas are not used in any of the field values. Suppose that some of our events were more specific, and used commas. For example, "Swimming, 100M Freestyle". 

How will a program processing a .csv file know when a comma is separating columns, and when it is just part of the text string giving a value within a column? The .csv format is actually a little more general than we have described and has a couple of solutions for that problem. One solution is to use a different column separator, such as `|` or a tab (sometimes, when a tab is used, the format is called tsv, for tab-separated values). The other solution is to enclose all values in double quotes. 

For example, the data file might look like:

.. raw:: html

    <pre id="sample.txt">
    "Name","Sex","Age","Team","Event","Medal"
    "A Dijiang","M","24","China","Basketball","NA"
    "Edgar Lindenau Aabye","M","34","Denmark/Sweden","Tug-Of-War","Gold"
    "Christine Jacoba Aaftink","F","21","Netherlands","Speed Skating","NA"
    </pre>

If you are reading a .csv file that has enclosed all values in double quotes, it's actually a pretty tricky programming problem to split the text for one row into a list of values. You won't want to try to do it directly. Instead, you should use python's built-in CSV module. However, there's a bit of a learning curve for that, and we find that students gain a better understanding of reading .csv files by first learning to read unquoted .csv file and splitting lines on commas.

.. raw:: html

    <pre hidden id="olympics.txt">
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
