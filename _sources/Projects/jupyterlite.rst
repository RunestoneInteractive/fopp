JupyterLite
===========

Here is a scratch Jupyter Notebook you can use right in the browser!

.. jupyterlite::
   :width: 90%
   :height: 700px
   :prompt: Try Jupyter Lab in Runestone
   :prompt_color: #00aa42
   

   
Matplotlib, numpy, pandas and many others are pre-installed , if you want to use Altair   you will need to execute a cell like this::

    import piplite
    await piplist.install('altair')
    
I don't know how many packages are supported by piplite but its worth trying to see if your favorite is not available.

Changes to the notebook are saved to localstorage, they are not saved on the Runestone servers (yet).  There is no integration with the Runestone grading system (yet).
    