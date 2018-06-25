..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: intro-3-
   :start: 1

.. index:: programming language, portable, high-level language,
           low-level language, compile, interpret

The Python Programming Language
-------------------------------

The programming language you will be learning is Python. Python is an example
of a **high-level language**; other high-level languages you might have heard
of are C++, PHP, and Java.

As you might infer from the name high-level language, there are also
**low-level languages**, sometimes referred to as machine languages or assembly
languages. Loosely speaking, computers can only execute programs written in
low-level languages. Thus, programs written in a high-level language have to be
processed before they can run. This extra processing takes some time, which is
a small disadvantage of high-level languages.
However, the advantages to high-level languages are enormous.

First, it is much easier to program in a
high-level language. Programs written in a high-level language take less time
to write, they are shorter and easier to read, and they are more likely to be
correct. Second, high-level languages are **portable**, meaning that they can
run on different kinds of computers with few or no modifications. Low-level
programs can run on only one kind of computer and have to be rewritten to run
on another.

Due to these advantages, almost all programs are written in high-level
languages. Low-level languages are used only for a few specialized
applications.

Two kinds of programs process high-level languages into low-level languages:
**interpreters** and **compilers**. An interpreter reads a high-level program
and executes it, meaning that it does what the program says. It processes the
program a little at a time, alternately reading lines and performing
computations.

.. image:: Figures/interpret.png
   :alt: Interpret illustration

A compiler reads the program and translates it completely before the program
starts running. In this case, the high-level program is called the **source
code**, and the translated program is called the **object code** or the
**executable**. Once a program is compiled, you can execute it repeatedly
without further translation.

.. image:: Figures/compile.png
   :alt: Compile illustration

Many modern languages use both processes. They are first compiled into a lower
level language, called **byte code**, and then interpreted by a program called
a **virtual machine**. Python uses both processes, but because of the way
programmers interact with it, it is usually considered an interpreted language.

For the core material in this book, you will not need to install
or run python natively on your computer. Instead, you'll be writing simple
programs and executing them right in your browser.

At some point, you will find it useful to have a complete python environment, rather than the limited environment
available in this online textbook. To do that, you will either
install python on your computer so that it can run natively, or use a remote server that provides either a
command line shell or a jupyter notebook environment.

**Check your understanding**

.. mchoice:: question1_3_1
   :answer_a: the instructions in a program, written in a high-level language.
   :answer_b: the language that you are programming in (e.g., Python).
   :answer_c: the environment/tool in which you are programming.
   :answer_d: the number (or “code”) that you must input at the top of each program to tell the computer how to execute your program.
   :correct: a
   :feedback_a: If the instructions are strored in a file, it is called the source code file.
   :feedback_b: This language is simply called the programming language, or simply the language. Programs are writte in this language.
   :feedback_c: The environment may be called the IDE, or integrated development environment, though not always.
   :feedback_d: There is no such number that you must type in at the start of your program.

   Source code is another name for:

.. mchoice:: question1_3_2
   :answer_a: It is high-level if you are standing and low-level if you are sitting.
   :answer_b: It is high-level if you are programming for a computer and low-level if you are programming for a phone or mobile device.
   :answer_c: It is high-level if the program must be processed before it can run, and low-level if the computer can execute it without additional processing.
   :answer_d: It is high-level if it easy to program in and is very short; it is low-level if it is really hard to program in and the programs are really long.
   :correct: c
   :feedback_a: In this case high and low have nothing to do with altitude.
   :feedback_b: High and low have nothing to do with the type of device you are programming for.  Instead, look at what it takes to run the program written in the language.
   :feedback_c: Python is a high level language but must be interpreted into machine code (binary) before it can be executed.
   :feedback_d: While it is true that it is generally easier to program in a high-level language and programs written in a high-level language are usually shorter, this is not always the case.

   What is the difference between a high-level programming language and a low-level programming language?

.. mchoice:: question1_3_3
   :answer_a: 1 = a process, 2 = a function
   :answer_b: 1 = translating an entire book, 2 = translating a line at a time
   :answer_c: 1 = software, 2 = hardware
   :answer_d: 1 = object code, 2 = byte code
   :correct: b
   :feedback_a: Compiling is a software process, and running the interpreter is invoking a function, but how is a process different than a function?
   :feedback_b: Compilers take the entire source code and produce object code or the executable and interpreters execute the code line by line.
   :feedback_c: Both compilers and interpreters are software.
   :feedback_d: Compilers can produce object code or byte code depending on the language.  An interpreter produces neither.

   Pick the best replacements for 1 and 2 in the following sentence: When comparing compilers and interpreters, a compiler is like 1 while an interpreter is like 2.


