..  Copyright (C)  Paul Resnick and Lauren Murphy.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Testing Optional Parameters
===========================

If a function takes an optional parameter, one of the edge cases to test for is when no parameter value is supplied during execution. That will test whether the default value is being set correctly when the parameter is omitted.

Consider the following function, which counts the number of "long enough" words in a list. What counts as long enough is determined by an optional parameter, ``min_length``.

.. activecode:: ac19_2_3

    def count_long_words(words, min_length=5):
        ct = 0
        for word in words:
            if len(word) >= min_length:
                ct += 1
        return ct

What return value tests could we write to check whether it is implemented correctly? First, we could construct a list of words that has words of many lengths, including a degenerate empty string that has length 0. One return value test would omit ``min_length`` and check that we got the right count. Other return value tests would supply ``min_length`` and would include the edge case where ``min_length`` is 0 and one where it is very large.

.. activecode:: ac19_2_3b

    def count_long_words(words, min_length=5):
        ct = 0
        for word in words:
            if len(word) >= min_length:
                ct += 1
        return ct

    test_words = ["", "1", "12", "123", "1234", "12345", "123456"]
    assert count_long_words(test_words) == 2
    assert count_long_words(test_words, min_length=0) == 7
    assert count_long_words(test_words, min_length=4) == 3
    assert count_long_words(test_words, min_length=100) == 0



