..  Copyright (C)  Paul Resnick, Jaclyn Cohen.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _classes_rep_data:

.. qnum::
   :prefix: classes-12-
   :start: 1

Defining Classes with Data from the Internet
--------------------------------------------

Considering those questions when you write a new class definition is always important, but it can be especially tricky 
when you are using classes to deal with data that you get from an API (Application Programming Interface) request. An API 
request specifies how external programs can perform a computation. A REST API is a certain kind of API that deals with 
data from the internet using HTTP requests (if you look at the url address for this page, you should see http or https at 
the beginning of it).

Using the `iTunes Search API <https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api>`_ as an example, we'll look at an example of defining a class to represent a song.

This API has several parameters, some of which are optional. The ones we'll care about for now are ``term``, whose value 
is a string term to search for (``the beatles`` maybe), and ``entity``, which can be ``song`` or ``album``.

You can read the documentation and make a few requests to the API to see what the nested data response you get looks like. 

It turns out that if you make a request like this:

``resp = requests.get("https://itunes.apple.com/search",params={"term":"beatles","entity":"song"}).json()``

you get data back that *includes* a big list of dicitionaries that represent songs. You have to parse through the nested 
data a little bit to save that list in a variable (remember the Nested Data Structures chapter), but once you're there, 
you can play around with it and look at the information it contains. 

It's a little difficult to parse (try using the API yourself, and look back at the Nested Data chapter!), but for the 
purposes of this chapter, we can skip ahead to the class definition.

You know that once you've made a request to this API and gotten some data, you'll be able to access a bunch of 
dictionaries, and each dictionary holds a bunch of information about a song. 

Next, you can answer the questions we posed in the last section about your class definition. Here, we'll choose some 
answers so we can write an example class definition -- but the way you answer these questions will depend upon what 
program you want to write! If you want your class instances to be able to do slightly different things, you would write 
different methods. If different information is important to you, you would create different instance variables, and so on.

**What is the data that you want to deal with?** Dictionaries that represent songs, where each contains key-value pairs that hold information about a song.

**What will one instance of your class represent?** One song.

**What information should each instance have as instance variables?** Each instance represents one song, and each song has an artist and a title as instance variables.

**What instance methods should each instance have?** Each song instance should have a method that returns the artist's name. And each song instance should have a method that returns the number of vowels in the song's title. (Maybe because you want to do some linguistic analysis about song titles in your program.)

**What should the printed version of an instance look like?** A printed version of a song instance should show the song title and the artist's name.

Finally, you should ask yourself: what information gets passed into the constructor of the class to create an instance of 
this class? 

In this case, you have a bunch of dictionaries available in the data you got back from the API request above. And each 
dictionary represents a song. So you can pass in a song dictionary to the constructor!

Below is an example of the class definition we just described. (You can't run this code and create instances here with 
live data because we can't use the ``requests`` module in the textbook environment, but you can copy this into a program 
file of your own and play with it!)

.. activecode:: ac19_12_1

    class Song:
        """ A class to represent one song, from data received from the iTunes API. """

        def __init__(self, song_dictionary):

            self.title = song_dictionary["trackName"]
            self.artist = song_dictionary["artistName"]

        def get_song_artist(self):
            return self.artist

        def title_number_vowels(self):
            vowels = "aeiou"
            tot = 0
            for ch in self.title:
                if ch in vowels:
                    tot = tot + 1
            return tot

        def __str__(self):
            return "Title: " + self.title +"\nArtist: "  + self.artist
