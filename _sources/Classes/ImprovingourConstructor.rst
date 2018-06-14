..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: classes-4-
   :start: 1

Adding Parameters to the  Constructor
-------------------------------------

Our constructor so far can only create points at location ``(0,0)``. To create a point at position (7, 6) requires 
that we provide some additional capability for the user to pass information to the constructor. Since constructors 
are simply specially named functions, we can use parameters (as we've seen before) to provide the specific 
information. 
    
We can make our class constructor more generally usable by putting extra parameters into the ``__init__`` method, 
as shown in this example.

.. sourcecode:: python
    
    class Point:
        """ Point class for representing and manipulating x,y coordinates. """
        
        def __init__(self, initX, initY):
 
            self.x = initX
            self.y = initY
    
    p = Point(7,6)

Now when we create new points, we supply the x and y coordinates as parameters. When the point is created, the values of 
``initX`` and ``initY`` are assigned to the state of the object, in the **instance variables** x and y.

This process is animated below:

.. image:: Figures/creating_instance.gif
   :alt: the steps a computer takes to create a new instance of a class that takes two arguments and makes three instance variables.

This is a common thing to do in the ``__init__`` method for a class: take in some parameters and save them as 
instance variables. Why is this useful? Keep in mind that the parameter variables will go away when the method is 
finished executing. The instance variables, however, will still be accessible anywhere that you have a handle on the 
object instance. This is a way of saving those initial values that are provided when the class constructor is invoked.

Later on, you will see classes where the ``__init__`` method does more than just save parameters as instance variables. 
For example, it might parse the contents of those variables and do some computation on them, storing the results in 
instance variables. It might even make an Internet connection, download some content, and store that in instance variables.

.. image:: Figures/objectpic5.png
   :alt: Simple object has state and methods   
