..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: classes-8-
   :start: 1

Instances as Return Values
--------------------------

Functions and methods can return objects. This is actually nothing new since everything in Python is an object and we have
been returning values for quite some time. (You can also have lists or tuples of object instances, etc.) The difference 
here is that we want to have the method create an object using the constructor and then return it as the value of the 
method.

Suppose you have a point object and wish to find the midpoint halfway between it and some other target point. We would 
like to write a method, let's call it ``halfway``, which takes another ``Point`` as a parameter and returns the ``Point`` 
that is halfway between the point and the target point it accepts as input.

.. activecode:: ac19_8_1

    class Point:

        def __init__(self, initX, initY):
            """ Create a new point at the given coordinates. """ 
            self.x = initX
            self.y = initY

        def getX(self):
            return self.x

        def getY(self):
            return self.y

        def distanceFromOrigin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5
          
        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y)

        def halfway(self, target): 
            mx = (self.x + target.x) / 2
            my = (self.y + target.y) / 2
            return Point(mx, my)

    p = Point(3, 4)
    q = Point(5, 12)
    mid = p.halfway(q)
    # note that you would have exactly the same result if you instead wrote
    # mid = q.halfway(p)
    # because they are both Point objects, and the middle is the same no matter what

    print(mid)
    print(mid.getX())
    print(mid.getY())
       
The resulting Point, ``mid``, has an x value of 4 and a y value of 8. We can also use any other methods on ``mid`` since 
it is a ``Point`` object.

In the definition of the method ``halfway`` see how the requirement to always use dot notation with attributes 
disambiguates the meaning of the attributes ``x`` and ``y``: We can always see whether the coordinates of Point ``self`` 
or ``target`` are being referred to.  
