..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: classes-16-
   :start: 1

Extra Exercises
---------------

.. question:: cb_ex_1
   :number: 1

   .. tabbed:: q1

        .. tab:: Question

           .. actex:: ac19_16_1

              Add a ``distanceFromPoint`` method that works similar to ``distanceFromOrigin`` except that it
              takes a ``Point`` as a parameter and
              computes the distance between that point and self.
              ~~~~

              import math

              class Point:
                  """ Point class for representing and manipulating x,y coordinates. """

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

        .. tab:: Answer

            .. activecode:: answer19_16_1

                import math

                class Point:
                    """ Point class for representing and manipulating x,y coordinates. """

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

                    def distanceFromPoint(self, otherP):
                        dx = (otherP.getX() - self.x)
                        dy = (otherP.getY() - self.y)
                        return math.sqrt(dy**2 + dx**2)

                p = Point(3, 3)
                q = Point(6, 7)
                print(p.distanceFromPoint(q))


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_090fe2d30b8d4fe58b829d06c58661f0


.. question:: cb_ex_2
   :number: 2


   .. tabbed:: q2

        .. tab:: Question

           .. actex:: ac19_16_2

              Add a method ``reflect_x`` to Point which returns a new Point, one which is the 
              reflection of the point about the x-axis.  For example, 
              ``Point(3, 5).reflect_x()`` is (3, -5)
              ~~~~

              class Point:
                  """ Point class for representing and manipulating x,y coordinates. """

                  def __init__(self, initX, initY):

                      self.x = initX
                      self.y = initY

                  def getX(self):
                      return self.x

                  def getY(self):
                      return self.y

                  def distanceFromOrigin(self):
                      return ((self.x ** 2) + (self.y ** 2)) ** 0.5
                    
                  def move(self, dx, dy):
                      self.x = self.x + dx
                      self.y = self.y + dy
                        
                  def __str__(self):
                      return str(self.x) + "," + str(self.y)

        .. tab:: Answer

            .. activecode:: answer19_16_2

                class Point:
                    """ Point class for representing and manipulating x,y coordinates. """

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

                    def reflect_x(self):
                        return(Point(self.getX(), -self.getY()))

                    def __str__(self):
                        return str(self.x) + "," + str(self.y)


                p = Point(3, 5)
                p2 = p.reflect_x()
                print(p2.getX())
                print(p2.getY())

.. question:: cb_ex_3
   :number: 3

    .. tabbed:: q3

        .. tab:: Question

           .. actex:: ac19_16_3

              Add a method called ``move`` that will take two parameters, call them ``dx`` and ``dy``.  The method will
              cause the point to move in the x and y direction the number of units given. (Hint: you will change the values of the
              state of the point)

              ~~~~

              class Point:
                  """ Point class for representing and manipulating x,y coordinates. """

                  def __init__(self, initX, initY):

                      self.x = initX
                      self.y = initY

                  def getX(self):
                      return self.x

                  def getY(self):
                      return self.y

                  def distanceFromOrigin(self):
                      return ((self.x ** 2) + (self.y ** 2)) ** 0.5
                    
                  # Put your new method here
                        
                  def __str__(self):
                      return str(self.x) + "," + str(self.y)       

        .. tab:: Answer
            
            .. activecode:: answer19_16_3
            
                class Point:
                    """ Point class for representing and manipulating x,y coordinates. """

                    def __init__(self, initX, initY):

                        self.x = initX
                        self.y = initY

                    def getX(self):
                        return self.x

                    def getY(self):
                        return self.y

                    def distanceFromOrigin(self):
                        return ((self.x ** 2) + (self.y ** 2)) ** 0.5
                    
                    def move(self, dx, dy):
                        self.x = self.x + dx
                        self.y = self.y + dy
                        
                    def __str__(self):
                        return str(self.x) + "," + str(self.y)


                p = Point(7, 6)
                print(p)
                p.move(5, 10)
                print(p)
