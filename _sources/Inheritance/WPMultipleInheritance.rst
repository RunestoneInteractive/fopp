👩‍💻 Multiple inheritance
==========================

In Python, a class can inherit from multiple classes. This is called **multiple inheritance**. Multiple inheritance can be useful when you want to create a class that is a combination of multiple classes. For example, suppose we have a class ``Swimmer`` (which represents all of the aspects of a character that can swim) and a class ``Flyer`` (for all of the aspects of a character that relate to flying). We can create a class ``SwimmerFlyer`` that inherits from both ``Swimmer`` and ``Flyer`` by putting both these class names in parentheses: ``class SwimmerFlyer(Swimmer, Flyer)``. This class will have all the methods and attributes of both ``Swimmer`` and ``Flyer``:

.. activecode:: multiple_inheritance_example
    :nocanvas:

    class Swimmer:
        def swim(self):
            print("Swimming!")
    
    class Flyer:
        def fly(self):
            print("Flying!")
    
    class SwimmerFlyer(Swimmer, Flyer):
        pass
    
    sf = SwimmerFlyer()
    sf.swim() # Swimming!
    sf.fly()  # Flying!

Multiple inheritance can improve our ability to re-use code and classes. It can be particularly useful if the classes represent "features" that we can selectively apply to subclasses. However, **it's generally a good rule to avoid multiple inheritance unless it provides a clear and significant benefit**. Always consider simpler alternatives, such as composition (using an instance of one class as an instance variable inside of another class) or single inheritance, before turning to multiple inheritance.