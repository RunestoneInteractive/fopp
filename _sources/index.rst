.. How to Think Like a Computer Scientist: Interactive Edition

.. meta::
   :description: An interactive version of the How to Think Like a Computer Scientist book
   :keywords: python, python3, introduction, computer science

.. toc_version: 2

.. _t_o_c:

.. raw:: html

   <div style="text-align:center" class="center-block">
   <h1>Foundations of Python Programming</h1>
   <style>
   button.reveal_button {
       margin-left: auto;
       margin-right: auto;
   }
   </style>
   </div>

.. reveal:: about
   :showtitle: About this Course
   :modal:
   :modalTitle: About this Course

   This interactive book is a product of the `Runestone Interactive <http://runestoneinteractive.org>`_ Project.

   * This book is based on the `Original work <http://www.openbookproject.net/thinkcs/python/english2e/>`_ by:  Jeffrey Elkner, Allen B. Downey, and Chris Meyers, the Interactive edition of `How to Think Like a Computer Scientist <https://runestone.academy/runestone/static/thinkcspy/index.html>`_ by Brad Miller, David Ranum and many more and `Programs Information and People <https://runestone.academy/runestone/static/pip2/index.html>`_ by Paul Resnick
   * Activecode based on `Skulpt <http://skulpt.org>`_
   * Codelens based on `Online Python Tutor <http://www.pythontutor.com>`_
   * Many contributions from the `CSLearning4U research group <http://home.cc.gatech.edu/csl/CSLearning4U>`_ at Georgia Tech.
   * ACM-SIGCSE for the special projects grant that funded our student Isaac Dontje Lindell for the summer of 2013.
   * NSF

   The Runestone Interactive tools are open source and we encourage you to contact us, or grab a copy from GitHub <https://github.com/RunestoneInteractive> if you would like to use them to write your own resources.


   We also `welcome your support <https://runestone.academy/runestone/default/donate/10>`_ to help keep Runestone growing.







Table of Contents
:::::::::::::::::

.. toctree::
   :numbered:
   :maxdepth: 4

   GeneralIntro/toctree.rst
   SimplePythonData/toctree.rst
   Debugging/toctree.rst
   PythonModules/toctree.rst
   PythonTurtle/toctree.rst
   Sequences/toctree.rst
   Iteration/toctree.rst
   Conditionals/toctree.rst
   TransformingSequences/toctree.rst
   Files/toctree.rst
   Dictionaries/toctree.rst
   Functions/toctree.rst
   Tuples/toctree.rst
   MoreAboutIteration/toctree.rst
   AdvancedFunctions/toctree.rst
   Sorting/toctree.rst
   NestedData/toctree.rst
   TestCases/toctree.rst
   Exceptions/toctree.rst
   Classes/toctree.rst
   BuildingPrograms/toctree.rst
   Inheritance/toctree.rst
   AdvancedAccumulation/toctree.rst

.. toctree::
    :hidden:

    Projects/toctree.rst

Appendices
::::::::::

.. ignore
   :caption: Appendices
   :maxdepth: 1

   Appendices/errorsAndDebug.rst
   Appendices/PrecedenceTable.rst

Project List
============

This book includes many projects.  These projects are not meant to *test* your knowledge they are here to give you an opportunity to *challenge yourself* and your teammates to learn new programming and problem solving skills.  Each project builds on the skills learned in the previous projects.  If you are brand new to programming you will want to start at the beginning, if you have some prior experience, you can dive in with any project that looks interesting to you.

.. list-table::
    :header-rows: 1
    :widths: 4,32,32,32
    :stub-columns: 1

    * -
      - Project
      - Skills Required
      - Learning Goal
    * - 1
      - :ref:`A Preview of the End Goal <scaffolded_code>`
      - An Open Mind
      - What is programming?
    * - 2
      - :ref:`Driving the Turtle <turtle_driving>`
      - Turtle Graphics Basics
      - Your First Program
    * - 3
      - :ref:`How Many Handshakes? <input_compute_output>`
      - `Statements and Expressions </runestone/books/published/fopp/SimplePythonData/toctree.html>`_
      - Breaking down a problem
    * - 4
      - :ref:`Drawing a Circle with a Turtle <drawing_a_circle>`
      - `🐢 Turtle Graphics </runestone/books/published/fopp/PythonTurtle/toctree.html>`_ | `Repetition </runestone/books/published/fopp/PythonTurtle/RepetitionwithaForLoop.html>`_
      -
    * - 5
      - :ref:`Generating a Password XKCD Style <xkcd_pass>`
      - `Sequences </runestone/books/published/fopp/Sequences/toctree.html>`_ |
        `Repetition </runestone/books/published/fopp/PythonTurtle/RepetitionwithaForLoop.html>`_
      - Working with Strings
    * - 6
      - :ref:`Computing statistics with Kiva <kiva_statistics>`
      - `Iteration </runestone/books/published/fopp/Iteration/toctree.html>`_ |
        `[Optional] Functions 12.1-12.5 </runestone/books/published/fopp/Functions/toctree.html>`_
      - Computing statistics on tabular data
    * - 7
      - :ref:`Graphing Kiva Data with a Turtle <kiva_graphs>`
      - `Conditionals </runestone/books/published/fopp/Conditionals/toctree.html>`_ |
        `[Optional] Functions 12.1-12.5 </runestone/books/published/fopp/Functions/toctree.html>`_
      - Practice with Turtle Graphics, Graphing Basics
    * - 8
      - :ref:`Graphing Kiva Data with Altair <graphing_with_altair>`
      - `Conditionals </runestone/books/published/fopp/Conditionals/toctree.html>`_ |
        `[Optional] Functions 12.1-12.5 </runestone/books/published/fopp/Functions/toctree.html>`_
      - Transforming Data, Declarative Graphing
    * - 9
      - :ref:`Substitution Cipher <encryption>`
      - `Transforming Sequences </runestone/books/published/fopp/TransformingSequences/toctree.html>`_ |
        `[Optional] Functions 12.1-12.5 </runestone/books/published/fopp/Functions/toctree.html>`_
      - String manipulation
    * - 10
      - :ref:`Image Processing <image_processing>`
      - `Nested Iteration </runestone/books/published/fopp/Iteration/NestedIterationImageProcessing.html>`_ |
        `[Optional] 12.1-12.5 </runestone/books/published/fopp/index.html>`_
      - Nested Iteration, Function Practice
    * - 11
      - :ref:`Exploring Common Words and SETI <common_words>`
      - `Files </runestone/books/published/fopp/Files/toctree.html>`_
      - Reading data from files
    * - 12
      - :ref:`Monte Carlo Simulation <monte_carlo_simulations>`
      - `Files </runestone/books/published/fopp/Files/toctree.html>`_
      - Working with CSV files
    * - 13
      - :ref:`Converting Roman Numerals <roman_numerals>`
      - `Dictionaries </runestone/books/published/fopp/Dictionaries/toctree.html>`_
      - Practice with dictionary operations
    * - 14
      - :ref:`Stack Overflow Developer Survey <split_apply_combine>`
      - `Dictionaries </runestone/books/published/fopp/Dictionaries/toctree.html>`_
      - Learn the split-apply-combine pattern
    * - 15
      - :ref:`Image Processing Revisited <image_processing_revisited>`
      - `Functions </runestone/books/published/fopp/Functions/toctree.html>`_
      - Using Functions
    * - 16
      - :ref:`Turtles and Strings and L-Systems <l_systems>`
      - `Functions </runestone/books/published/fopp/Functions/toctree.html>`_
      - Using Functions
    * - 17
      - :ref:`Predicting Pizza Prices - Linear Regression <regression_analysis>`
      - `Functions </runestone/books/published/fopp/Functions/toctree.html>`_
      - Functions and Statistics
    * - 18
      - :ref:`Build your own Google <diy_google>`
      - `Functions </runestone/books/published/fopp/Functions/toctree.html>`_
      -  Functions, Dictionary, HTML, Web API's
    * - 19
      - :ref:`Better Pizza Predictions <better_pizza_predictions>`
      - `More Iteration </runestone/books/published/fopp/MoreAboutIteration/toctree.html>`_
      - Multiple Regression
    * - 20
      - :ref:`K-means clustering <clustering>`
      - `Advanced Functions </runestone/books/published/fopp/AdvancedFunctions/toctree.html>`_
      - Clustering, Data Science
    * - 21
      - :ref:`Sentiment Analysis of Climate Change Tweets <sentiment_analysis>`
      - `Advanced Functions </runestone/books/published/fopp/AdvancedFunctions/toctree.html>`_
      - Text Processing, Bayes, Functions




Acknowledgements
::::::::::::::::

.. toctree::
    :caption: Acknowledgements
    :maxdepth: 1

    FrontBackMatter/copyright.rst
    FrontBackMatter/foreword.rst
    FrontBackMatter/contrib.rst
    FrontBackMatter/fdl-1.3.rst

Index and Search
::::::::::::::::::

* :ref:`genindex`
* :ref:`search`
