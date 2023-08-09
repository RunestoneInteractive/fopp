Public and Private Instance Variables
========================================

When we define a Python class, any instance's instance variables can be accessed within or outside of the class. For example, suppose we have a class named ``Person`` that represents a person and if they are a "child" (for our purposes, anyone under 18 years old is considered a child):

.. activecode:: ac20_11_1
    :language: python

    class Person:
        def __init__(self, name, age):
            self.name = name
            self.age = age

        def getGivenName(self): # returns the first name
            return self.name.split()[0]

        def getFamilyName(self): # returns the last name
            return self.name.split()[-1]

        def isChild(self):
            return self.age < 18
        
    p1 = Person("Ada B. Lovelace", 42)
    print(p1.getGivenName())  # prints "Ada"
    print(p1.getFamilyName()) # prints "Lovelace"
    print(p1.isChild())       # prints "False"


Now, suppose we hand our ``Person`` class off to another programmer (maybe you are working as part of a team or you are writing a library for other people to use). **They should not need to know exactly how you implemented your class; they should just be able to call the methods you have defined** (``getGivenName``, ``getFamilyName``, and ``isChild``) and get the correct results. Ideally, you should be able to change the implementation of your ``Person`` class without breaking any code that uses it. For example, you might decide to change the names of the instance variables or change how instances store and represent information (like storing given and family names separately). As long as the methods you have defined still work, these changes should not make the other programmer change their code. This idea is called **abstraction**.

However, there's a problem. The other programmer can also access ``Person``'s instance variables from outside of the class definition, by writing ``p1.name`` and ``p1.age``, if ``p1`` is our instance. If they do, then they are relying on the implementation details of our class. If we change the implementation, then their code will break. For example, suppose we change the name of the ``age`` instance variable to ``howOld``. Then their code that refers to ``.age`` will break. Further, if the other programmer's code makes changes to the instance variables, then they might break our code. For example, if they change ``p1.age`` to be a string instead of an integer, then our ``isChild`` method will break.

These problems get more severe with larger and more complex classes. For these reasons, it is a good idea to **hide** the implementation details of our class from other programmers.

One way to hide implementation details is to make our instance variables **private**, which signals to other programmers that they should not access them directly. Unlike some other programming languages, Python does not "enforce" the idea of private instance variables, meaning that it is technically always possible for other programmers to reference and modify any instance variables. However, we can use naming conventions that (1) send a signal to other programmers that they should not access the instance variable directly and (2) make it harder for other programmers to access the instance variable directly.

**Single underscores:** the first way to do this is to start an instance variable name with a single underscore (``_``). In the case of ``Person``, we would rename our instance variables to be ``_name`` and ``_age``. This signals to other programmers that they should not access the instance variables directly. However, it is still possible for them to do so. For example, they could write ``p1._age`` to access the ``_age`` instance variable. This is something they should realize is not a good idea, but it is still possible.

**Double underscores:** The second way to do this is to start any instance variables with a double underscore (``__``). In the case of ``Person``, we would rename our instance variables to be ``__name`` and ``__age``. As is the case with a single underscore, this is a signal to other programmers that they should not access the instance variables directly. Further, **Python "mangles" any instance variables that start with two underscores to make them more difficult (but not impossible) to access**. Python mangles these names by adding the name of the class to the beginning of the instance variable name (``_classname__variablename``). For example, ``__age`` becomes ``_Person__age``. Again, it is still possible for other programmers to do something they shouldn't, by accessing ``.__Person_age``, but they have to work harder to figure out what it's called, and that may deter them.

For example, the following code throws an error when we try to access ``p1.__age``:

.. activecode:: ac20_11_2
    :language: python

    class Person:
        def __init__(self, name, age):
            self.__name = name
            self.__age = age

        def getGivenName(self): # returns the first name
            return self.__name.split()[0]

        def getFamilyName(self): # returns the last name
            return self.__name.split()[-1]

        def isChild(self):
            return self.__age < 18
        
    p1 = Person("Ada B. Lovelace", 42)
    print(p1.getGivenName())  # prints "Ada"
    print(p1.getFamilyName()) # prints "Lovelace"
    print(p1.isChild())       # prints "False"
    print(p1.__age)           # ERROR: AttributeError: 'Person' object has no attribute '__age'


In the code above, we have made the ``__name`` and ``__age`` instance variables private. We can still access them within the class definition using ``self.__name`` and ``self.__age``, but we cannot access them directly outside of the class definition. Outside of the class definition, if we try to access ``p1.__age``, we get an ``AttributeError``. However, we can still access ``p1._Person__age``.


.. mchoice:: question20_11_1
    :answer_a: Abstraction
    :answer_b: Encapsulation
    :answer_c: Inheritance
    :answer_d: Polymorphism
    :correct: a
    :feedback_a: Correct! The idea of hiding implementation details of a class represents Abstraction.
    :feedback_b: Encapsulation is closely related but it refers to the bundling of data with the methods that operate on that data.
    :feedback_c: Inheritance refers to the ability of a class to inherit properties and methods from another class.
    :feedback_d: Polymorphism refers to the ability of an object to take many forms, depending on the data type or class.
    :practice: T

    What is the term for hiding implementation details of a class from other programmers?


.. mchoice:: question20_11_2
    :answer_a: By making them inaccessible from outside the class.
    :answer_b: By renaming them with a single underscore.
    :answer_c: By renaming them with a double underscore.
    :answer_d: Both b and c are correct.
    :correct: d
    :feedback_a: While it would be ideal to make them inaccessible, Python does not enforce hard restrictions.
    :feedback_b: Correct, a single underscore signals that the variable is private and shouldn't be accessed directly, though it can still be. But there's also another way.
    :feedback_c: Correct, a double underscore further discourages direct access by name mangling. But there's also another way.
    :feedback_d: Correct! Python uses both single and double underscores as conventions to indicate that a variable is private.
    :practice: T

    How can we hide implementation details of instance variables in a class from other programmers in Python?
