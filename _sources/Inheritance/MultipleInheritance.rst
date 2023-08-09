..  Copyright (C)  Steve Oney.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".
    
    
Multiple inheritance
========================

In Python, a class can inherit from more than one parent class. This is called **multiple inheritance**. Multiple inheritance can be useful when you want to create a class that is a combination of multiple classes. For example, suppose we have a class ``Swimmer`` (which represents all of the aspects of a character that can swim) and a class ``Flyer`` (for all of the aspects of a character that relate to flying). We can create a class ``Goose`` that inherits from both ``Swimmer`` and ``Flyer`` by putting both these class names in parentheses: ``class Goose(Swimmer, Flyer)``. This class will have all the methods and attributes of both ``Swimmer`` and ``Flyer``:

.. activecode:: multiple_inheritance_example
    :nocanvas:

    class Swimmer:
        def swim(self):
            print("Swimming!")
    
    class Flyer:
        def fly(self):
            print("Flying!")
    
    class Goose(Swimmer, Flyer):
        pass
    
    my_goose = Goose()
    my_goose.swim() # Swimming!
    my_goose.fly()  # Flying!

Multiple inheritance can improve our ability to re-use code and classes. It can be particularly useful if the classes represent "features" that we can selectively apply to subclasses. However, **it's generally a good rule to avoid multiple inheritance unless it provides a clear and significant benefit**. Always consider simpler alternatives, such as composition (using an instance of one class as an instance variable inside of another class) or single inheritance, before turning to multiple inheritance.