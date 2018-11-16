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

    This project will take you through the process of mashing up data from two different APIs to make movie recommendations. The TasteDive API lets you provide a movie (or bands, TV shows, etc.) as a query input, and returns a set of related items. The OMDB API lets you provide a movie title as a query input and get back data about the movie, including scores from various review sites (Rotten Tomatoes, IMDB, etc.).

    You will put those two together. You will use TasteDive to get related movies for a whole list of titles. You'll combine the resulting lists of related movies, and sort them according to their Rotten Tomatoes scores (which will require making API calls to the OMDB API.)

    To avoid problems with rate limits and site accessibility, we have provided a cache file with results for all the queries you need to make to both OMDB and TasteDive. Just use ``requests_with_caching.get()`` rather than ``requests.get()``. You're welcome to try other queries, but if you do, you will need to get an api key from OMDB.

    Your first task will be to fetch data from TasteDive. The documentation for the API is at https://tastedive.com/read/api.

    Define a function, called ``get_movies_from_tastedive``. It should take three input parameters, the first of which is a string that is the name of a movie or music artist, the second should be called use_limit which stores a boolean value, and the third should be called restrict_type and also stores a boolean value. The function should return the 5 TasteDive results that are associated with that string; be sure to only get movies, not other kinds of media. It will be a python dictionary with just one key, 'Similar'.

    Try invoking your function with the input "Black Panther".

    HINT: If, when you invoke the function, the results aren't found in the cache, you haven't passed the exact same key-value pairs in the params dictionary as you passed to ``requests_with_caching.get()``.

    ~~~~


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_get_movies_from_tastedive_typical(self):
        results = get_movies_from_tastedive("Bridesmaids")['Similar']["Info"][0]["Name"]
        expected = "Bridesmaids"
        self.assertEqual(results, expected, "Testing that the results for Bridesmaids is the expected result.")
        self.assertEqual(type(get_movies_from_tastedive("Black Panther")), type({}), "Testing that the correct python type is returned.")

      def test_get_movies_from_tastedive_limits(self):
        movies = get_movies_from_tastedive("Black Panther")['Similar']['Results']
        self.assertEqual(len(movies), 5, "Testing that get_movies_from_tastedive returns only 5 results")


      def test_get_movies_from_tastedive_restrictions(self):
        results = get_movies_from_tastedive("Tony Bennett")
        non_movies = filter((lambda x: x['Type'] != "movie"), results['Similar']["Results"])
        self.assertEqual(len(list(non_movies)), 0, "Testing that get_movies_from_tastedive retrieves only movies and not music.")



    myTests().main()

.. activecode:: assess_ac_24_1_1_2
    :autograde: unittest
    :language: python
    :practice: T

    Please copy the completed function from above into this active code window. Next, you will need to write a function that extracts just the list of movie titles from a dictionary returned by ``get_movies_from_tastedive``. Call it ``extract_movie_titles``.
    ~~~~


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_extract_movie_titles(self):
        results = ['A Place In The Sun','The Startup Kids','The Englishman Who Went Up A Hill But Came Down A Mountain','The Stand','The African Queen']
        self.assertEqual(extract_movie_titles(get_movies_from_tastedive("Tony Bennett")), results, "Testing that correct results are returned for 'Tony Bennett'.")
        sample_from_cache = extract_movie_titles(get_movies_from_tastedive("Black Panther"))
        self.assertEqual(type(sample_from_cache), type([]), "Testing that correct results are returned for 'Black Panther'." )
        
        

    myTests().main()

.. activecode:: assess_ac_24_1_1_3
    :autograde: unittest
    :language: python
    :practice: T

    Please copy the completed functions from the two code windows above into this active code window. Next, you'll write a function, called ``get_related_titles``. It takes *a list of movie titles* as input. It gets five related movies for each from TasteDive, extracts the titles for all of them, and combines them all into a single list. Don't include the same movie twice.
    ~~~~


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_related_titles(self):
        expected_results_from_cache = ['Avengers: Infinity War', 'Captain Marvel', 'Ant-Man And The Wasp', 'The Fate Of The Furious', 'Deadpool 2', 'Inhumans', 'Venom', 'American Assassin', 'Cars 3']
        actual_results_from_cache = get_related_titles(["Black Panther", "Captain Marvel"])
        self.assertEqual(get_related_titles([]), [], 'Testing that the correct response is returned when no titles are included.')
        self.assertEqual(actual_results_from_cache, expected_results_from_cache, 'Testing that the correct response is returned when searching for Black Panther and Captain Marvel.')
    
        

    myTests().main()

.. activecode:: assess_ac_24_1_1_4
    :autograde: unittest
    :language: python
    :practice: T

    Your next task will be to fetch data from OMDB. The documentation for the API is at https://www.omdbapi.com/

    Define a function called ``get_movie_data``. It takes in one parameter which is a string that should represent the title of a movie you want to search. The function should return a dictionary with information about that movie.

    Again, use ``requests_with_caching.get()``. For the queries on movies that are already in the cache, you won't need an api key. (If you want to run queries for other movies, you'll have to get an api key from OMDB).

    ~~~~


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_get_movie_data(self):
        self.assertEqual(type(get_movie_data("Venom")), type({}), "Testing that the correct python type is returned.")
        self.assertEqual(get_movie_data("Baby Mama")["Title"], "Baby Mama", "Testing that the results match the query.")
        
        

    myTests().main()

.. activecode:: assess_ac_24_1_1_5
    :autograde: unittest
    :language: python
    :practice: T

    Please copy the completed function from above into this active code window. Now write a function called ``get_movie_rating``. It takes an OMDB dictionary result for one movie and extracts the Rotten Tomatoes rating as an integer. For example, if given the OMDB dictionary for "Black Panther", it would return 97. If there is no Rotten Tomatoes rating, return 0.
    ~~~~


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_type(self):
        self.assertEqual(type(get_movie_rating(get_movie_data("Deadpool 2"))), type(9), "Testing that a dictionary is returned.")

      def test_output(self):
        self.assertEqual(get_movie_rating(get_movie_data("Venom")), 0, "Testing that the code is acurate for Venom (no rating).")
        self.assertEqual(get_movie_rating(get_movie_data("Deadpool 2")), 82, "Testing that the code for 'Deadpool 2'.")

    myTests().main()

.. activecode:: assess_ac_24_1_1_6
    :autograde: unittest
    :language: python
    :practice: T

    Now, you'll put it all together. Don't forget to copy all of the functions that you have previously defined into this code window. Define a function ``get_sorted_recommendations``. It takes a list of movie titles as an input. It returns a sorted list of related movie titles as output, up to five related movies for each input movie title. The movies should be sorted in descending order by their Rotten Tomatoes rating, as returned by the ``get_movie_rating`` function.
    ~~~~


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        sample_actual_recommendations = get_sorted_recommendations(["Bridesmaids", "Sherlock Holmes"])
        sample_expected_recommendations = ['Date Night', 'Baby Mama', 'The Five-Year Engagement', 'Sherlock Holmes: A Game Of Shadows', 'Bachelorette', 'The A-Team', 'Bad Teacher', 'Angels & Demons', 'Prince Of Persia: The Sands Of Time', 'Pirates Of The Caribbean: On Stranger Tides']
        self.assertEqual(sample_actual_recommendations, sample_expected_recommendations, "Testing that actual value returned is the expected value returned.")
        self.assertEqual(type(sample_actual_recommendations), type([]), "Testing that the correct python type is returned.")



    myTests().main()

.. datafile:: permanent_cache.txt

    {
      "https://tastedive.com/api/similark-249694-JazzComp-89VNLWSG_limit-10_q-Black Panther_type-movies": "{\"Similar\": {\"Info\": [{\"Name\": \"Black Panther\", \"Type\": \"movie\"}], \"Results\": [{\"Name\": \"Avengers: Infinity War\", \"Type\": \"movie\"}, {\"Name\": \"Captain Marvel\", \"Type\": \"movie\"}, {\"Name\": \"Ant-Man And The Wasp\", \"Type\": \"movie\"}, {\"Name\": \"The Fate Of The Furious\", \"Type\": \"movie\"}, {\"Name\": \"Deadpool 2\", \"Type\": \"movie\"}, {\"Name\": \"Ready Player One\", \"Type\": \"movie\"}, {\"Name\": \"Jumanji: Welcome To The Jungle\", \"Type\": \"movie\"}, {\"Name\": \"Solo: A Star Wars Story\", \"Type\": \"movie\"}, {\"Name\": \"Independence Day: Resurgence\", \"Type\": \"movie\"}, {\"Name\": \"Thor: Ragnarok\", \"Type\": \"movie\"}]}}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Pirates Of The Caribbean: On Stranger Tides": "{\"Title\":\"Pirates of the Caribbean: On Stranger Tides\",\"Year\":\"2011\",\"Rated\":\"PG-13\",\"Released\":\"20 May 2011\",\"Runtime\":\"136 min\",\"Genre\":\"Action, Adventure, Fantasy\",\"Director\":\"Rob Marshall\",\"Writer\":\"Ted Elliott (screenplay), Terry Rossio (screenplay), Ted Elliott (screen story), Terry Rossio (screen story), Ted Elliott (characters), Terry Rossio (characters), Stuart Beattie (characters), Jay Wolpert (characters), Tim Powers (novel)\",\"Actors\":\"Johnny Depp, Pen\u00e9lope Cruz, Geoffrey Rush, Ian McShane\",\"Plot\":\"Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.\",\"Language\":\"English, Spanish\",\"Country\":\"USA, UK\",\"Awards\":\"2 wins & 31 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.6/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"32%\"},{\"Source\":\"Metacritic\",\"Value\":\"45/100\"}],\"Metascore\":\"45\",\"imdbRating\":\"6.6\",\"imdbVotes\":\"431,511\",\"imdbID\":\"tt1298650\",\"Type\":\"movie\",\"DVD\":\"18 Oct 2011\",\"BoxOffice\":\"$241,063,875\",\"Production\":\"Walt Disney Pictures\",\"Website\":\"http://Disney.com/Pirates\",\"Response\":\"True\"}",
      "https://tastedive.com/api/similark-249694-JazzComp-89VNLWSG_limit-5_q-Black Panther": "{\"Similar\": {\"Info\": [{\"Name\": \"Black Panther\", \"Type\": \"movie\"}], \"Results\": [{\"Name\": \"Avengers: Infinity War\", \"Type\": \"movie\"}, {\"Name\": \"Captain Marvel\", \"Type\": \"movie\"}, {\"Name\": \"Ant-Man And The Wasp\", \"Type\": \"movie\"}, {\"Name\": \"The Fate Of The Furious\", \"Type\": \"movie\"}, {\"Name\": \"Deadpool 2\", \"Type\": \"movie\"}]}}",
      "https://tastedive.com/api/similark-249694-JazzComp-89VNLWSG_limit-5_q-Bridesmaids_type-movies": "{\"Similar\": {\"Info\": [{\"Name\": \"Bridesmaids\", \"Type\": \"movie\"}], \"Results\": [{\"Name\": \"Baby Mama\", \"Type\": \"movie\"}, {\"Name\": \"The Five-Year Engagement\", \"Type\": \"movie\"}, {\"Name\": \"Date Night\", \"Type\": \"movie\"}, {\"Name\": \"Bachelorette\", \"Type\": \"movie\"}, {\"Name\": \"Bad Teacher\", \"Type\": \"movie\"}]}}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Deadpool 2": "{\"Title\":\"Deadpool 2\",\"Year\":\"2018\",\"Rated\":\"R\",\"Released\":\"18 May 2018\",\"Runtime\":\"119 min\",\"Genre\":\"Action, Adventure, Comedy, Sci-Fi\",\"Director\":\"David Leitch\",\"Writer\":\"Rhett Reese, Paul Wernick, Ryan Reynolds\",\"Actors\":\"Ryan Reynolds, Josh Brolin, Morena Baccarin, Julian Dennison\",\"Plot\":\"Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.\",\"Language\":\"English\",\"Country\":\"USA\",\"Awards\":\"N/A\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"7.8/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"82%\"},{\"Source\":\"Metacritic\",\"Value\":\"66/100\"}],\"Metascore\":\"66\",\"imdbRating\":\"7.8\",\"imdbVotes\":\"294,178\",\"imdbID\":\"tt5463162\",\"Type\":\"movie\",\"DVD\":\"21 Aug 2018\",\"BoxOffice\":\"N/A\",\"Production\":\"20th Century Fox\",\"Website\":\"https://www.foxmovies.com/movies/deadpool-2\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Cars 3": "{\"Title\":\"Cars 3\",\"Year\":\"2017\",\"Rated\":\"G\",\"Released\":\"16 Jun 2017\",\"Runtime\":\"102 min\",\"Genre\":\"Animation, Adventure, Comedy, Family, Sport\",\"Director\":\"Brian Fee\",\"Writer\":\"Brian Fee (original story by), Ben Queen (original story by), Eyal Podell (original story by), Jonathon E. Stewart (original story by), Kiel Murray (screenplay by), Bob Peterson (screenplay by), Mike Rich (screenplay by), Scott Morse (additional story material)\",\"Actors\":\"Owen Wilson, Cristela Alonzo, Chris Cooper, Nathan Fillion\",\"Plot\":\"Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world.\",\"Language\":\"English\",\"Country\":\"USA\",\"Awards\":\"20 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.8/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"68%\"},{\"Source\":\"Metacritic\",\"Value\":\"59/100\"}],\"Metascore\":\"59\",\"imdbRating\":\"6.8\",\"imdbVotes\":\"51,309\",\"imdbID\":\"tt3606752\",\"Type\":\"movie\",\"DVD\":\"07 Nov 2017\",\"BoxOffice\":\"$152,603,003\",\"Production\":\"Walt Disney Pictures\",\"Website\":\"http://movies.disney.com/cars-3\",\"Response\":\"True\"}",
      "https://tastedive.com/api/similark-249694-JazzComp-89VNLWSG_limit-5_q-Captain Marvel_type-movies": "{\"Similar\": {\"Info\": [{\"Name\": \"Captain Marvel\", \"Type\": \"movie\"}], \"Results\": [{\"Name\": \"Inhumans\", \"Type\": \"movie\"}, {\"Name\": \"Venom\", \"Type\": \"movie\"}, {\"Name\": \"American Assassin\", \"Type\": \"movie\"}, {\"Name\": \"The Fate Of The Furious\", \"Type\": \"movie\"}, {\"Name\": \"Cars 3\", \"Type\": \"movie\"}]}}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Bad Teacher": "{\"Title\":\"Bad Teacher\",\"Year\":\"2011\",\"Rated\":\"R\",\"Released\":\"24 Jun 2011\",\"Runtime\":\"92 min\",\"Genre\":\"Comedy, Romance\",\"Director\":\"Jake Kasdan\",\"Writer\":\"Gene Stupnitsky, Lee Eisenberg\",\"Actors\":\"Cameron Diaz, Lucy Punch, Jason Segel, Justin Timberlake\",\"Plot\":\"A lazy, incompetent middle school teacher who hates her job, her students, and her co-workers is forced to return to teaching to make enough money for breast implants after her wealthy fianc\u00e9 dumps her.\",\"Language\":\"English\",\"Country\":\"USA\",\"Awards\":\"6 wins & 4 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMTQ5NDI4MDM0Nl5BMl5BanBnXkFtZTcwNDYwODU2NA@@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"5.7/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"45%\"},{\"Source\":\"Metacritic\",\"Value\":\"47/100\"}],\"Metascore\":\"47\",\"imdbRating\":\"5.7\",\"imdbVotes\":\"176,581\",\"imdbID\":\"tt1284575\",\"Type\":\"movie\",\"DVD\":\"18 Oct 2011\",\"BoxOffice\":\"$100,292,856\",\"Production\":\"Sony Pictures\",\"Website\":\"http://www.areyouabadteacher.com/\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Captain Marvel": "{\"Title\":\"Captain Marvel\",\"Year\":\"1962\",\"Rated\":\"N/A\",\"Released\":\"N/A\",\"Runtime\":\"10 min\",\"Genre\":\"Short, Action, Adventure\",\"Director\":\"Donald F. Glut\",\"Writer\":\"Donald F. Glut\",\"Actors\":\"Rich Hagopian, Dick Andersen, Bill Bungert, Donald F. Glut\",\"Plot\":\"Captain Marvel saves the world from an oncoming asteroid, but in doing so, comes to the attention of criminals.\",\"Language\":\"English\",\"Country\":\"USA\",\"Awards\":\"N/A\",\"Poster\":\"https://images-na.ssl-images-amazon.com/images/M/MV5BYWQwNTE2YzItNjViYy00ODdmLWI1MDctMGEyODNlYzI5ZDcyXkEyXkFqcGdeQXVyMzI2MDEwNA@@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.1/10\"}],\"Metascore\":\"N/A\",\"imdbRating\":\"6.1\",\"imdbVotes\":\"27\",\"imdbID\":\"tt3959390\",\"Type\":\"movie\",\"DVD\":\"N/A\",\"BoxOffice\":\"N/A\",\"Production\":\"N/A\",\"Website\":\"N/A\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-American Assassin": "{\"Title\":\"American Assassin\",\"Year\":\"2017\",\"Rated\":\"R\",\"Released\":\"15 Sep 2017\",\"Runtime\":\"112 min\",\"Genre\":\"Action, Thriller\",\"Director\":\"Michael Cuesta\",\"Writer\":\"Stephen Schiff (screenplay by), Michael Finch (screenplay by), Edward Zwick (screenplay by), Marshall Herskovitz (screenplay by), Vince Flynn (based on the novel by)\",\"Actors\":\"Dylan O'Brien, Charlotte Vega, Christopher Bomford, Chris Webster\",\"Plot\":\"After the death of his girlfriend at the hands of terrorists, Mitch Rapp is drawn into the world of counterterrorism, mentored by tough-as-nails former U.S. Navy S.E.A.L. Stan Hurley.\",\"Language\":\"English, Spanish, Arabic, Polish, Turkish, Russian, Italian, Persian\",\"Country\":\"USA\",\"Awards\":\"1 nomination.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMjM0MjY4MTk5NV5BMl5BanBnXkFtZTgwNDE2NTQyMzI@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.2/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"35%\"},{\"Source\":\"Metacritic\",\"Value\":\"45/100\"}],\"Metascore\":\"45\",\"imdbRating\":\"6.2\",\"imdbVotes\":\"52,161\",\"imdbID\":\"tt1961175\",\"Type\":\"movie\",\"DVD\":\"05 Dec 2017\",\"BoxOffice\":\"$34,449,582\",\"Production\":\"Lionsgate and CBS Films\",\"Website\":\"http://www.cbsfilms.com/american-assassin/\",\"Response\":\"True\"}",
      "https://tastedive.com/api/similark-249694-JazzComp-89VNLWSG_limit-5_q-Sherlock Holmes_type-movies": "{\"Similar\": {\"Info\": [{\"Name\": \"Sherlock Holmes\", \"Type\": \"movie\"}], \"Results\": [{\"Name\": \"Sherlock Holmes: A Game Of Shadows\", \"Type\": \"movie\"}, {\"Name\": \"Prince Of Persia: The Sands Of Time\", \"Type\": \"movie\"}, {\"Name\": \"Pirates Of The Caribbean: On Stranger Tides\", \"Type\": \"movie\"}, {\"Name\": \"Angels & Demons\", \"Type\": \"movie\"}, {\"Name\": \"The A-Team\", \"Type\": \"movie\"}]}}",
      "https://tastedive.com/api/similark-249694-JazzComp-89VNLWSG_q-Black Panther_type-movies": "{\"Similar\": {\"Info\": [{\"Name\": \"Black Panther\", \"Type\": \"movie\"}], \"Results\": [{\"Name\": \"Avengers: Infinity War\", \"Type\": \"movie\"}, {\"Name\": \"Captain Marvel\", \"Type\": \"movie\"}, {\"Name\": \"Ant-Man And The Wasp\", \"Type\": \"movie\"}, {\"Name\": \"The Fate Of The Furious\", \"Type\": \"movie\"}, {\"Name\": \"Deadpool 2\", \"Type\": \"movie\"}, {\"Name\": \"Ready Player One\", \"Type\": \"movie\"}, {\"Name\": \"Jumanji: Welcome To The Jungle\", \"Type\": \"movie\"}, {\"Name\": \"Solo: A Star Wars Story\", \"Type\": \"movie\"}, {\"Name\": \"Independence Day: Resurgence\", \"Type\": \"movie\"}, {\"Name\": \"Thor: Ragnarok\", \"Type\": \"movie\"}, {\"Name\": \"Pitch Perfect 3\", \"Type\": \"movie\"}, {\"Name\": \"Power Rangers\", \"Type\": \"movie\"}, {\"Name\": \"Ocean's 8\", \"Type\": \"movie\"}, {\"Name\": \"The Divergent Series: Allegiant\", \"Type\": \"movie\"}, {\"Name\": \"Daddy's Home 2\", \"Type\": \"movie\"}, {\"Name\": \"A Quiet Place\", \"Type\": \"movie\"}, {\"Name\": \"Game Night\", \"Type\": \"movie\"}, {\"Name\": \"The Cloverfield Paradox\", \"Type\": \"movie\"}, {\"Name\": \"Star Wars: The Last Jedi\", \"Type\": \"movie\"}, {\"Name\": \"American Assassin\", \"Type\": \"movie\"}]}}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Venom": "{\"Title\":\"Venom\",\"Year\":\"2018\",\"Rated\":\"N/A\",\"Released\":\"05 Oct 2018\",\"Runtime\":\"112 min\",\"Genre\":\"Action, Sci-Fi\",\"Director\":\"Ruben Fleischer\",\"Writer\":\"Jeff Pinkner (screenplay by), Scott Rosenberg (screenplay by), Kelly Marcel (screenplay by), Jeff Pinkner (screen story by), Scott Rosenberg (screen story by), Todd McFarlane (Marvel's Venom Character created by), David Michelinie (Marvel's Venom Character created by)\",\"Actors\":\"Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze\",\"Plot\":\"When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego \\\"Venom\\\" to save his life.\",\"Language\":\"English\",\"Country\":\"USA, China\",\"Awards\":\"N/A\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"7.0/10\"},{\"Source\":\"Metacritic\",\"Value\":\"35/100\"}],\"Metascore\":\"35\",\"imdbRating\":\"7.0\",\"imdbVotes\":\"114,862\",\"imdbID\":\"tt1270797\",\"Type\":\"movie\",\"DVD\":\"18 Jun 2013\",\"BoxOffice\":\"N/A\",\"Production\":\"Vis\",\"Website\":\"N/A\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Angels & Demons": "{\"Title\":\"Angels & Demons\",\"Year\":\"2009\",\"Rated\":\"PG-13\",\"Released\":\"15 May 2009\",\"Runtime\":\"138 min\",\"Genre\":\"Mystery, Thriller\",\"Director\":\"Ron Howard\",\"Writer\":\"David Koepp (screenplay), Akiva Goldsman (screenplay), Dan Brown (novel)\",\"Actors\":\"Tom Hanks, Ewan McGregor, Ayelet Zurer, Stellan Skarsg\u00e5rd\",\"Plot\":\"Harvard symbologist Robert Langdon works with a nuclear physicist to solve a murder and prevent a terrorist act against the Vatican during one of the significant events within the church.\",\"Language\":\"English, Italian, Latin, French, Swiss German, German, Chinese, Spanish, Polish\",\"Country\":\"USA, Italy\",\"Awards\":\"1 win & 5 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMjEzNzM2MjgxMF5BMl5BanBnXkFtZTcwNTQ1MTM0Mg@@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.7/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"37%\"},{\"Source\":\"Metacritic\",\"Value\":\"48/100\"}],\"Metascore\":\"48\",\"imdbRating\":\"6.7\",\"imdbVotes\":\"244,217\",\"imdbID\":\"tt0808151\",\"Type\":\"movie\",\"DVD\":\"24 Nov 2009\",\"BoxOffice\":\"$133,375,846\",\"Production\":\"Sony/Columbia Pictures\",\"Website\":\"http://www.angelsanddemons.com/\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-The Fate Of The Furious": "{\"Title\":\"The Fate of the Furious\",\"Year\":\"2017\",\"Rated\":\"PG-13\",\"Released\":\"14 Apr 2017\",\"Runtime\":\"136 min\",\"Genre\":\"Action, Crime, Thriller\",\"Director\":\"F. Gary Gray\",\"Writer\":\"Gary Scott Thompson (based on characters created by), Chris Morgan\",\"Actors\":\"Vin Diesel, Jason Statham, Dwayne Johnson, Michelle Rodriguez\",\"Plot\":\"When a mysterious woman seduces Dom into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.\",\"Language\":\"English, Russian\",\"Country\":\"China, USA, Japan\",\"Awards\":\"1 win & 9 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.7/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"67%\"},{\"Source\":\"Metacritic\",\"Value\":\"56/100\"}],\"Metascore\":\"56\",\"imdbRating\":\"6.7\",\"imdbVotes\":\"168,071\",\"imdbID\":\"tt4630562\",\"Type\":\"movie\",\"DVD\":\"11 Jul 2017\",\"BoxOffice\":\"$225,697,400\",\"Production\":\"Universal Pictures\",\"Website\":\"N/A\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Ant-Man And The Wasp": "{\"Title\":\"Ant-Man and the Wasp\",\"Year\":\"2018\",\"Rated\":\"PG-13\",\"Released\":\"06 Jul 2018\",\"Runtime\":\"118 min\",\"Genre\":\"Action, Adventure, Comedy, Sci-Fi\",\"Director\":\"Peyton Reed\",\"Writer\":\"Chris McKenna, Erik Sommers, Paul Rudd, Andrew Barrer, Gabriel Ferrari, Stan Lee (based on the Marvel Comics by), Larry Lieber (based on the Marvel Comics by), Jack Kirby (based on the Marvel Comics by)\",\"Actors\":\"Paul Rudd, Evangeline Lilly, Michael Pe\u00f1a, Walton Goggins\",\"Plot\":\"As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.\",\"Language\":\"English\",\"Country\":\"USA\",\"Awards\":\"N/A\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"7.2/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"88%\"},{\"Source\":\"Metacritic\",\"Value\":\"70/100\"}],\"Metascore\":\"70\",\"imdbRating\":\"7.2\",\"imdbVotes\":\"140,723\",\"imdbID\":\"tt5095030\",\"Type\":\"movie\",\"DVD\":\"02 Oct 2018\",\"BoxOffice\":\"N/A\",\"Production\":\"Walt Disney Pictures\",\"Website\":\"https://marvel.com/antman\",\"Response\":\"True\"}",
      "https://tastedive.com/api/similark-249694-JazzComp-89VNLWSG_limit-10_q-Black Panther": "{\"Similar\": {\"Info\": [{\"Name\": \"Black Panther\", \"Type\": \"movie\"}], \"Results\": [{\"Name\": \"Avengers: Infinity War\", \"Type\": \"movie\"}, {\"Name\": \"Captain Marvel\", \"Type\": \"movie\"}, {\"Name\": \"Ant-Man And The Wasp\", \"Type\": \"movie\"}, {\"Name\": \"The Fate Of The Furious\", \"Type\": \"movie\"}, {\"Name\": \"Deadpool 2\", \"Type\": \"movie\"}, {\"Name\": \"Ready Player One\", \"Type\": \"movie\"}, {\"Name\": \"Jumanji: Welcome To The Jungle\", \"Type\": \"movie\"}, {\"Name\": \"Solo: A Star Wars Story\", \"Type\": \"movie\"}, {\"Name\": \"Independence Day: Resurgence\", \"Type\": \"movie\"}, {\"Name\": \"Thor: Ragnarok\", \"Type\": \"movie\"}]}}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Avengers: Infinity War": "{\"Title\":\"Avengers: Infinity War\",\"Year\":\"2018\",\"Rated\":\"PG-13\",\"Released\":\"27 Apr 2018\",\"Runtime\":\"149 min\",\"Genre\":\"Action, Adventure, Fantasy, Sci-Fi\",\"Director\":\"Anthony Russo, Joe Russo\",\"Writer\":\"Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)\",\"Actors\":\"Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans\",\"Plot\":\"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.\",\"Language\":\"English\",\"Country\":\"USA\",\"Awards\":\"N/A\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"8.6/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"84%\"},{\"Source\":\"Metacritic\",\"Value\":\"68/100\"}],\"Metascore\":\"68\",\"imdbRating\":\"8.6\",\"imdbVotes\":\"505,383\",\"imdbID\":\"tt4154756\",\"Type\":\"movie\",\"DVD\":\"14 Aug 2018\",\"BoxOffice\":\"$664,987,816\",\"Production\":\"Walt Disney Pictures\",\"Website\":\"http://marvel.com/movies/movie/223/avengers_infinity_war\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Date Night": "{\"Title\":\"Date Night\",\"Year\":\"2010\",\"Rated\":\"PG-13\",\"Released\":\"09 Apr 2010\",\"Runtime\":\"88 min\",\"Genre\":\"Comedy, Crime, Romance, Thriller\",\"Director\":\"Shawn Levy\",\"Writer\":\"Josh Klausner\",\"Actors\":\"Steve Carell, Tina Fey, Mark Wahlberg, Taraji P. Henson\",\"Plot\":\"In New York City, a case of mistaken identity turns a bored married couple's attempt at a glamorous and romantic evening into something more thrilling and dangerous.\",\"Language\":\"English, Hebrew\",\"Country\":\"USA\",\"Awards\":\"4 wins & 8 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BODgwMjM2ODE4M15BMl5BanBnXkFtZTcwMTU2MDcyMw@@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.3/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"67%\"},{\"Source\":\"Metacritic\",\"Value\":\"56/100\"}],\"Metascore\":\"56\",\"imdbRating\":\"6.3\",\"imdbVotes\":\"141,068\",\"imdbID\":\"tt1279935\",\"Type\":\"movie\",\"DVD\":\"10 Aug 2010\",\"BoxOffice\":\"$98,710,290\",\"Production\":\"20th Century Fox\",\"Website\":\"http://www.datenight-movie.com/\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-The A-Team": "{\"Title\":\"The A-Team\",\"Year\":\"2010\",\"Rated\":\"PG-13\",\"Released\":\"11 Jun 2010\",\"Runtime\":\"117 min\",\"Genre\":\"Action, Adventure, Comedy\",\"Director\":\"Joe Carnahan\",\"Writer\":\"Joe Carnahan, Brian Bloom, Skip Woods, Frank Lupo (television series \\\"The A-Team\\\"), Stephen J. Cannell (television series \\\"The A-Team\\\")\",\"Actors\":\"Liam Neeson, Bradley Cooper, Jessica Biel, Quinton 'Rampage' Jackson\",\"Plot\":\"A group of Iraq War veterans look to clear their name with the U.S. Military, who suspect the four men of committing a crime for which they were framed.\",\"Language\":\"English, Spanish, French, Swahili, German\",\"Country\":\"USA\",\"Awards\":\"2 wins & 4 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMTc4ODc4NTQ1N15BMl5BanBnXkFtZTcwNDUxODUyMw@@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.8/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"48%\"},{\"Source\":\"Metacritic\",\"Value\":\"47/100\"}],\"Metascore\":\"47\",\"imdbRating\":\"6.8\",\"imdbVotes\":\"230,261\",\"imdbID\":\"tt0429493\",\"Type\":\"movie\",\"DVD\":\"14 Dec 2010\",\"BoxOffice\":\"$77,213,489\",\"Production\":\"20th Century Fox\",\"Website\":\"http://www.ateam-movie.com/\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Sherlock Holmes: A Game Of Shadows": "{\"Title\":\"Sherlock Holmes: A Game of Shadows\",\"Year\":\"2011\",\"Rated\":\"PG-13\",\"Released\":\"16 Dec 2011\",\"Runtime\":\"129 min\",\"Genre\":\"Action, Adventure, Crime, Mystery, Thriller\",\"Director\":\"Guy Ritchie\",\"Writer\":\"Michele Mulroney, Kieran Mulroney, Arthur Conan Doyle (characters)\",\"Actors\":\"Robert Downey Jr., Jude Law, Noomi Rapace, Rachel McAdams\",\"Plot\":\"Sherlock Holmes and his sidekick Dr. Watson join forces to outwit and bring down their fiercest adversary, Professor Moriarty.\",\"Language\":\"English, French, Italian, German, Romany\",\"Country\":\"USA\",\"Awards\":\"3 wins & 11 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"7.5/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"59%\"},{\"Source\":\"Metacritic\",\"Value\":\"48/100\"}],\"Metascore\":\"48\",\"imdbRating\":\"7.5\",\"imdbVotes\":\"383,271\",\"imdbID\":\"tt1515091\",\"Type\":\"movie\",\"DVD\":\"12 Jun 2012\",\"BoxOffice\":\"$186,830,669\",\"Production\":\"Warner Bros. Pictures\",\"Website\":\"http://www.sherlockholmes2.com\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Prince Of Persia: The Sands Of Time": "{\"Title\":\"Prince of Persia: The Sands of Time\",\"Year\":\"2010\",\"Rated\":\"PG-13\",\"Released\":\"28 May 2010\",\"Runtime\":\"116 min\",\"Genre\":\"Action, Adventure, Fantasy\",\"Director\":\"Mike Newell\",\"Writer\":\"Boaz Yakin (screenplay), Doug Miro (screenplay), Carlo Bernard (screenplay), Jordan Mechner (screen story), Jordan Mechner (video game series \\\"Prince of Persia\\\")\",\"Actors\":\"Jake Gyllenhaal, Gemma Arterton, Ben Kingsley, Alfred Molina\",\"Plot\":\"A young fugitive prince and princess must stop a villain who unknowingly threatens to destroy the world with a special dagger that enables the magic sand inside to reverse time.\",\"Language\":\"English\",\"Country\":\"USA\",\"Awards\":\"1 win & 10 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMTMwNDg0NzcyMV5BMl5BanBnXkFtZTcwNjg4MjQyMw@@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.6/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"36%\"},{\"Source\":\"Metacritic\",\"Value\":\"50/100\"}],\"Metascore\":\"50\",\"imdbRating\":\"6.6\",\"imdbVotes\":\"247,770\",\"imdbID\":\"tt0473075\",\"Type\":\"movie\",\"DVD\":\"14 Sep 2010\",\"BoxOffice\":\"$90,755,643\",\"Production\":\"Walt Disney Pictures\",\"Website\":\"http://Disney.com/PrinceOfPersia\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-The Five-Year Engagement": "{\"Title\":\"The Five-Year Engagement\",\"Year\":\"2012\",\"Rated\":\"R\",\"Released\":\"27 Apr 2012\",\"Runtime\":\"124 min\",\"Genre\":\"Comedy, Romance\",\"Director\":\"Nicholas Stoller\",\"Writer\":\"Jason Segel, Nicholas Stoller\",\"Actors\":\"Jason Segel, Emily Blunt, Chris Pratt, Alison Brie\",\"Plot\":\"One year after meeting, Tom proposes to his girlfriend, Violet, but unexpected events keep tripping them up as they look to walk down the aisle together.\",\"Language\":\"English, Spanish\",\"Country\":\"USA, Japan\",\"Awards\":\"N/A\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMTk3MDE1NTA3M15BMl5BanBnXkFtZTcwNDcwNTMxNw@@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.2/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"63%\"},{\"Source\":\"Metacritic\",\"Value\":\"62/100\"}],\"Metascore\":\"62\",\"imdbRating\":\"6.2\",\"imdbVotes\":\"85,940\",\"imdbID\":\"tt1195478\",\"Type\":\"movie\",\"DVD\":\"04 Sep 2012\",\"BoxOffice\":\"$28,644,770\",\"Production\":\"Universal Pictures\",\"Website\":\"http://www.thefiveyearengagementmovie.com/\",\"Response\":\"True\"}",
      "https://tastedive.com/api/similark-249694-JazzComp-89VNLWSG_limit-5_q-Black Panther_type-movies": "{\"Similar\": {\"Info\": [{\"Name\": \"Black Panther\", \"Type\": \"movie\"}], \"Results\": [{\"Name\": \"Avengers: Infinity War\", \"Type\": \"movie\"}, {\"Name\": \"Captain Marvel\", \"Type\": \"movie\"}, {\"Name\": \"Ant-Man And The Wasp\", \"Type\": \"movie\"}, {\"Name\": \"The Fate Of The Furious\", \"Type\": \"movie\"}, {\"Name\": \"Deadpool 2\", \"Type\": \"movie\"}]}}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Baby Mama": "{\"Title\":\"Baby Mama\",\"Year\":\"2008\",\"Rated\":\"PG-13\",\"Released\":\"25 Apr 2008\",\"Runtime\":\"99 min\",\"Genre\":\"Comedy, Romance\",\"Director\":\"Michael McCullers\",\"Writer\":\"Michael McCullers\",\"Actors\":\"Amy Poehler, Tina Fey, Greg Kinnear, Dax Shepard\",\"Plot\":\"A successful, single businesswoman who dreams of having a baby discovers she is infertile and hires a working class woman to be her unlikely surrogate.\",\"Language\":\"English\",\"Country\":\"USA\",\"Awards\":\"1 win & 5 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BMTYwNTc1Nzk1N15BMl5BanBnXkFtZTcwNjE4OTI2MQ@@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"6.0/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"64%\"},{\"Source\":\"Metacritic\",\"Value\":\"55/100\"}],\"Metascore\":\"55\",\"imdbRating\":\"6.0\",\"imdbVotes\":\"37,454\",\"imdbID\":\"tt0871426\",\"Type\":\"movie\",\"DVD\":\"09 Sep 2008\",\"BoxOffice\":\"$60,269,340\",\"Production\":\"Universal Pictures\",\"Website\":\"http://www.babymamamovie.net/\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Bachelorette": "{\"Title\":\"Bachelorette\",\"Year\":\"2012\",\"Rated\":\"R\",\"Released\":\"06 Sep 2012\",\"Runtime\":\"87 min\",\"Genre\":\"Comedy, Romance\",\"Director\":\"Leslye Headland\",\"Writer\":\"Leslye Headland (screenplay), Leslye Headland (based on the play by)\",\"Actors\":\"Kirsten Dunst, Rebel Wilson, Lizzy Caplan, Paul Corning\",\"Plot\":\"Three friends are asked to be bridesmaids at a wedding of a woman they used to ridicule back in high school.\",\"Language\":\"English\",\"Country\":\"USA\",\"Awards\":\"1 win & 2 nominations.\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BZGQ1YjkyZGQtZDk0ZS00ZDgwLTlhYjgtNzQxNjkwMmQ0Mzk5XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"5.3/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"56%\"},{\"Source\":\"Metacritic\",\"Value\":\"53/100\"}],\"Metascore\":\"53\",\"imdbRating\":\"5.3\",\"imdbVotes\":\"42,043\",\"imdbID\":\"tt1920849\",\"Type\":\"movie\",\"DVD\":\"19 Mar 2013\",\"BoxOffice\":\"$400,000\",\"Production\":\"Radius-TWC\",\"Website\":\"http://www.facebook.com/bachelorettemovie\",\"Response\":\"True\"}",
      "http://www.omdbapi.com/apikey-d9ef00e2_r-json_t-Inhumans": "{\"Title\":\"Inhumans\",\"Year\":\"2017\",\"Rated\":\"TV-PG\",\"Released\":\"29 Sep 2017\",\"Runtime\":\"43 min\",\"Genre\":\"Action, Adventure, Sci-Fi\",\"Director\":\"N/A\",\"Writer\":\"Scott Buck\",\"Actors\":\"Anson Mount, Serinda Swan, Ken Leung, Eme Ikwuakor\",\"Plot\":\"An isolated community of superhumans fight to protect themselves.\",\"Language\":\"English\",\"Country\":\"USA\",\"Awards\":\"N/A\",\"Poster\":\"https://m.media-amazon.com/images/M/MV5BZjI0ODcwODAtYzZjOS00ZmQ3LWE4ZGItOWMwYTI0Y2YyYWMyXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"5.1/10\"}],\"Metascore\":\"N/A\",\"imdbRating\":\"5.1\",\"imdbVotes\":\"17,590\",\"imdbID\":\"tt4154858\",\"Type\":\"series\",\"totalSeasons\":\"1\",\"Response\":\"True\"}",
      "https://tastedive.com/api/similark-249694-JazzComp-89VNLWSG_limit-5_q-Tony Bennett_type-movies": "{\"Similar\": {\"Info\": [{\"Name\": \"Tony Bennett\", \"Type\": \"music\"}], \"Results\": [{\"Name\": \"A Place In The Sun\", \"Type\": \"movie\"}, {\"Name\": \"The Startup Kids\", \"Type\": \"movie\"}, {\"Name\": \"The Englishman Who Went Up A Hill But Came Down A Mountain\", \"Type\": \"movie\"}, {\"Name\": \"The Stand\", \"Type\": \"movie\"}, {\"Name\": \"The African Queen\", \"Type\": \"movie\"}]}}",
      "https://tastedive.com/api/similark-249694-JazzComp-89VNLWSG_limit-5_q-Tony Bennett": "{\"Similar\": {\"Info\": [{\"Name\": \"Tony Bennett\", \"Type\": \"music\"}], \"Results\": [{\"Name\": \"Ricky Nelson\", \"Type\": \"music\"}, {\"Name\": \"Fred Astaire\", \"Type\": \"music\"}, {\"Name\": \"Natalie Cole\", \"Type\": \"music\"}, {\"Name\": \"Doris Day\", \"Type\": \"music\"}, {\"Name\": \"Perry Como\", \"Type\": \"music\"}]}}"
    }

