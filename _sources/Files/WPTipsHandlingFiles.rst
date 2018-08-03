..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-11-
   :start: 1

👩‍💻 Tips to Handling Files
============================

When working with files, there are a few things to keep in mind. When naming files, it's best to not include spaces. 
While most operating systems can handle opening files with spaces in their names, not all can.

Additionally, suffixes in files names, for example the .txt in ``FileNameExample.txt``, are not magic. Instead, these 
suffixes are convention. For some operating systems the suffixes have no special significance, and only have meaning when 
used in a program. Other operating systems infer information from the suffixes - for example, ``.EXE`` is a suffix that 
means a file is executable. 

When dealing with CSV files specifically, there are a few things to keep in mind. First is that because CSV files separate cells by using commas, you may have issues using commas inside of a value. For example, imagine the following data is inside a file that is being read:

:: 
    
    "19-9-1999", 89.99, "A date, price, and description"

Not only are commas used to separate the cells but are used within one of the values. It's important to keep that in mind when dealing with csv files.

Because programmers often have to use CSV files, there is a Python module built specifically to deal with them (aptly named csv!). However, this module is beyond the scope of this course, so we will not teach more about it.