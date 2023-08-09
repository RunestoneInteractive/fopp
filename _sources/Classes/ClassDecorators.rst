Class Decorators
========================

Recall that Python has a :ref:`"decorator" syntax"<decorators>` that allows us to modify the behavior of functions. We can use this same syntax to modify the behavior of classes. There are two ways we can use decorators with classes: (1) by decorating individual class methods or (2) by decorating the class itself.

**Decorating class methods** is analogous to the function decorators we've already seen. For example, suppose we have the ``addLogging`` function from :ref:`earlier <decorators>`::
    
    def addLogging(func): # The argument, func is a function

        def wrapper(x): # x is the argument that we're going to pass to func
            print(f"About to call the function with argument {x}")
            result = func(x) # actually call our function and store the result
            print(f"Done with the function with argument {x}. Result: {result}")
            return result # return whatever our function returned

        return wrapper # return our new function

We first need to modify this function slightly to add ``self`` as the first argument, since it will be a method of a class. Then, we can use the function to decorate any class method that accepts one argument:

.. activecode:: ac20_15_1

    def addLogging(func): # The argument, func is a method of a class

        def wrapper(self, x): # x is the argument that we're going to pass to func
            print(f"About to call the method with argument {x}")
            result = func(self, x) # actually call the method and store the result
            print(f"Done with the method invocation with argument {x} on instance {self}. Result: {result}")
            return result # return whatever our function returned

        return wrapper # return our new function
    
    class Car:
        def __init__(self, make, model, color, mileage):
            self.make = make
            self.model = model
            self.color = color
            self.mileage = mileage

        @addLogging
        def drive(self, miles):
            self.mileage += miles
            return self.mileage

        @addLogging
        def rePaint(self, color):
            self.color = color

        def __str__(self):
            return(f"***{self.color} {self.make} {self.model} with {self.mileage} miles***")
    
    corvette = Car("Chevrolet", "Corvette", "red", 0)

    corvette.drive(100)
    print("-"*20)
    corvette.rePaint("blue")
    print("-"*20)
    corvette.drive(6)

Beyond decorating class methods, we can also **decorate the class itself**. Just like functions in Python, classes are "first class", meaning they can be referenced like any other object, passed as arguments, returned, and wrapped. We decorate classes in almost the same way that we decorate functions, except that our decorator accepts a *class* as an argument, rather than a function. We could then modify the class, or return a new class. For example, suppose we want to create a decorator (named ``addBeep``) that adds an extra method (named ``beep``) to any class. We could do that as follows:

.. activecode:: ac20_15_2

    def addBeep(cls):
        cls.beep = lambda self: print(f"{self.model} says 'Beep!'")
        return cls
    
    @addBeep
    class Car:
        def __init__(self, make, model, color, mileage):
            self.make = make
            self.model = model
            self.color = color
            self.mileage = mileage
    
    mustang = Car("Ford", "Mustang", "blue", 0)
    mustang.beep() # Mustang says 'Beep!'
