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

👩‍💻 Tips on Handling Files
============================

When working with files, there are a few things to keep in mind. When naming files, it's best to not include spaces. 
While most operating systems can handle files with spaces in their names, not all can.

Additionally, suffixes in files names, for example the .txt in ``FileNameExample.txt``, are not magic. Instead, these 
suffixes are a convention. For some operating systems the suffixes have no special significance, and only have meaning when 
used in a program. Other operating systems infer information from the suffixes - for example, ``.EXE`` is a suffix that 
means a file is executable. 

It's a good idea to follow the conventions. If a file contains CSV formatted data, name it with the extension ``.csv``, not ``.txt``. A Python program will be able to read it either way, but if you follow the convention you will help other people guess what's in the file. And you will also help the computer's operating system to guess what application program it should open when you double-click on the file.
