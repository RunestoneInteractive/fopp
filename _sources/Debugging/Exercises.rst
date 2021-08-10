Exercises
=========


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {{for q in questions:}}
        <div class='oneq full-width'>
            {{=XML(q['htmlsrc'], sanitize=False)}}
        </div>
    {{pass}}
