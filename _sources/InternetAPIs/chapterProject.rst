..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: requests-13-
   :start: 1

Project - OMDB and TasteDive
============================

.. activecode:: assess_ac_24_1_1_1
    :autograde: unittest
    :language: python
    :practice: T

    This project will take you through the process of gathering data from APIs or caches to make recomendations. We will be using data extracted from the TasteDive API, which has been stored in a cache for your use, as well as making requests to the OMDB API to provide recommendations. To start the project, initialize a variable called ``omdb_key`` which stores your api key from omdb. You can obtain a key from https://www.omdbapi.com/ but be sure to activate the key in the email that you recieve from the site, otherwise your key will not work! Then write a function called ``get_movie_data`` that takes in one parameter which is a string that should represent the title of a movie you want to search. The function should make a request to the OMDB API to get data about that movie. The function should return ``False`` if you are unable to get data about that title, and otherwise should return the results as a python object if you are able to get data about that title.  
    ~~~~
    
    import requests

    omdb_key = "d9ef00e2"

    def get_movie_data(title):
        baseurl = "http://www.omdbapi.com/"
        params_diction = {} # Set up an empty dictionary for query parameters
        params_diction["apikey"] = omdb_key
        params_diction["t"] = title
        params_diction['r'] = 'json'
        resp = requests.get(baseurl, params=params_diction)
        if resp.json()["Response"] == 'False':
            return False
        return resp.json()
        
        
    # print(get_movie_data("The Matrix"))


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(type(get_movie_data("The Matrix")), type({}), "Testing that the correct python object is returned.")
        sample_name = "The Matrix"
        self.assertEqual(get_movie_data(sample_name)['Title'], sample_name, "Testing that the results match the query.")
        self.assertEqual(get_movie_data("afwawafd"), False, "Testing that False is returned when the title does not exist in OMDB database.")
        

    myTests().main()

.. activecode:: assess_ac_24_1_1_2
    :autograde: unittest
    :language: python
    :practice: T

    Please copy the completed function from above into this active code window. Next, you should write a function called ``set_of_movies`` which takes one parameter, a list, and iterates through the list to retain only movies which have provided valid data (i.e. a movie title that does not return ``False``.) The function should return the movies that have provided valid data. 
    ~~~~

    import requests

    omdb_key = "d9ef00e2"

    def get_movie_data(title):
        baseurl = "http://www.omdbapi.com/"
        params_diction = {} # Set up an empty dictionary for query parameters
        params_diction["apikey"] = omdb_key
        params_diction["t"] = title
        params_diction['r'] = 'json'
        resp = requests.get(baseurl, params=params_diction)
        if resp.json()["Response"] == 'False':
            return False
        return resp.json()

    def set_of_movies(movies):

        all_movies = [get_movie_data(data) for data in movies]
        valid_movies = [movie_data for movie_data in all_movies if movie_data != False]
        return valid_movies

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        data = set_of_movies(["The Great Gatsby", "dfhgjhkljhg", "The Giver", "Space Jam", "dfghjk"]
        self.assertEqual(len(data), 3, "Checking that the correct number of responses are returned when some titles are invalid."))
        self.assertEqual(data[-1]['Title'], "Space Jam", "Checking that the right response is stored in the ")
        
        

    myTests().main()

.. activecode:: assess_ac_24_1_1_3
    :autograde: unittest
    :language: python
    :practice: T

    Here your task is to create a function called ``read_from_file`` that takes in a string, which represents a file name. The function should read in the data from the file and return the data as a python object. If you would like to check that it is functioning, you can test it using the filename ``tastedive_cache.txt`` which we will be using later. 
    ~~~~

    def read_from_file(file_name):
        f = open(file_name).read()
        return json.loads(f)
    


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        file_to_test = "tastedive_cache.txt"
        self.assertEqual(type(read_from_file(file_to_test)), type({}), "Testing that your code returns the expected python object type. ")
        

    myTests().main()

.. activecode:: assess_ac_24_1_1_4
    :autograde: unittest
    :language: python
    :practice: T

    Copy the code from the previous active code window into this window. Now create a function called ``get_from_tastedive`` that takes one parameter which is a string that is the name of a movie or music artist. The function should return the TasteDive results that are associated with that string. The information from TasteDive should be in the cache which is called ``tastedive_cache.txt``. Remember that the cache is limited, it doesn't contain an infinite amount of data. In the case where the data does not exist in the cache, return ``False``. If you would like to test your work on your own, try it out with the name "Black Panther".
    ~~~~
    def read_from_file(file_name):
        f = open(file_name).read()
        return json.loads(f)

    file_name = "tastedive_cache.txt"

    def get_from_tastedive(name):
        data = read_from_file(file_name)
        response = False
        for key in data:
            if name in key:
                response = data[key]
        return response

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(get_from_tastedive("Tony Bennett"), {"Similar": {"Results": [{"Type": "movie", "Name": "A Place In The Sun"}, {"Type": "movie", "Name": "The Startup Kids"}, {"Type": "movie", "Name": "The Englishman Who Went Up A Hill But Came Down A Mountain"}, {"Type": "movie", "Name": "The Stand"}, {"Type": "movie", "Name": "The African Queen"}, {"Type": "movie", "Name": "Sleuth"}, {"Type": "movie", "Name": "Venus In Fur"}, {"Type": "movie", "Name": "The Man With Two Brains"}], "Info": [{"Type": "music", "Name": "Tony Bennett"}]}}, "Testing that the correct data is extracted when searching for Tony Bennett")
        self.assertEqual(get_from_tastedive("Avengers"), False, "Testing that the correct response is sent back when data is not in the cache")
        self.assertEqual(type(get_from_tastedive("Your Name")), type({}), "Testing that the correct response type is sent back when a query is in the cache")
        
        

    myTests().main()

.. activecode:: assess_ac_24_1_1_5
    :autograde: unittest
    :language: python
    :practice: T

    Now it's time to start combining the work you've done so far. Copy the code from the active code windows above so that you have the unique code that you've written so far, in the order that the active code windows are arranged. Here your task is to write a function called ``make_rec`` which takes in a list of queries to the TasteDive cache. Based on the movie recommendations from the cache, sort the movies from highest to lowest based on their IMDB rating, and return the top 10 movies, incuding the movie title and it's IMDB rating, in a list of tuples.
    ~~~~
    
    import requests

    omdb_key = "d9ef00e2"

    def get_movie_data(title):
        baseurl = "http://www.omdbapi.com/"
        params_diction = {} # Set up an empty dictionary for query parameters
        params_diction["apikey"] = omdb_key
        params_diction["t"] = title
        params_diction['r'] = 'json'
        resp = requests.get(baseurl, params=params_diction)
        if resp.json()["Response"] == 'False':
            return False
        return resp.json()

    def set_of_movies(movies):

        all_movies = [get_movie_data(data) for data in movies]
        valid_movies = [movie_data for movie_data in all_movies if movie_data != False]
        return valid_movies

    def read_from_file(file_name):
        f = open(file_name).read()
        return json.loads(f)

    file_name = "tastedive_cache.txt"
    
    def get_from_tastedive(name):
        data = read_from_file(file_name)
        response = False
        for key in data:
            if name in key:
                response = data[key]
        return response

    def make_rec(queries):
        recommendations = []
        for name in queries:
            taste_recs = json.loads(get_from_tastedive(name))
            for rec in taste_recs["Similar"]["Results"]:
                recommendations.append(rec["Name"])
        results_omdb = set_of_movies(recommendations)
        interesting_data = [(movie["Title"], float(movie['imdbRating'])) for movie in results_omdb]
        sorted_data = sorted(interesting_data, key = lambda x: x[1], reverse = True)
        if len(sorted_data) > 10:
            return sorted_data[:10]
        else:
            return sorted_data


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        results  = make_rec(["Your Name", "Black Panther"])
        self.assertEqual(len(results), 10, )
        self.assertEqual(type(results[0]), type(("tuple", "example")), "Testing that your code is returning the correct type")
        self.assertEqual(type(results), type([]), "Testing that your code is returning the correct type")
      def test_output2(self):
        results = make_rec(["Tony Bennett"])
        self.assertNotEqual(len(results), 10, "Testing that your code returns correctly if there are less than 10 items")
        

    myTests().main()