..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: nested-9-
   :start: 1

👩‍💻 Structuring Nested Data
-----------------------------

When constructing your own nested data, it is a good idea to keep the structure consistent across each level. For example,
if you have a list of dictionaries, then each dictionary should have the same structure. Meaning the same keys and the same type of value associated with a particular key in all the dictionaries. The reason
for this is because any deviation in the structure that is used will require extra code to handle those special cases. The
more the structure deviates, the more you will have to use special cases.
