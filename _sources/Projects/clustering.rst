..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

:skipreading:`True`

.. _clustering:

🤔 Into the Unknown, clustering
=================================

Suppose someone gave you a file of data that looked like the following:

.. datafile:: plants_1.csv
    :rows: 20
    :fromfile: iris_nolabel_train.csv

You are told by your lead researcher that this dataset contains measurements of several species of plants. what you have to work with is the following:

1. The identifier of the plant
2. The width of the `sepal <https://en.wikipedia.org/wiki/Sepal>`_
3. The length of the sepal
4. The width of the `petal <https://en.wikipedia.org/wiki/Petal>`_
5. The length of the petal

How many different species of plants are there in the data?  Your research team has no idea but would like you to use your data science skills to answer the question.

Your first instinct (which is a good one) is to visualize the data using altair to see if you can see any patterns in the data that might help you figure this out.

.. activecode:: cluster_viz_1
    :nocodelens:


.. poll:: plants_poll
    :scale: 5

    After visualizing the data how many different species do you think are represented in the data?

No matter what your answer to the previous question, the majority of this project is to develop an algorithm called k-means clustering.

The idea behind k-means clustering is easy enough to describe, but will give you practice in all of your Python skills to implement.

1.  Determine the number of clusters you want to find call it N.  We will represent each cluster by a point in space called the **centroid**.  The centroid will be the point in the center of the cluster.  We will call each cluster :math:`N_i`
2.  Now randomly place N centroids for your data.
3.  Repeat the following until your clusters stop changing, or you have reached some predetermined limit.
    1.  For each point in your data find the centroid that it is closest to.  Add that point to the cluster :math:`N_i`  You can use a list of Id values to keep track of which plants belong to which cluster.
    2.  Now using the points you have put in each cluster compute new coordinates for the centroid by taking the average of each feature.  For example the average of PetalWidth and SepalWidth. would give us a new point in 2-d space for each plant.

.. raw:: html

    <div>
        <style>
        .range-slider {
        margin: 5px;
        display: inline;
        }

        .range-slider-track {
        width: 150px;
        height: 15px;
        display: inline-block;
        position: relative;
        }

        .range-slider-track:before {
        content: "";
        /*display: block;*/
        position: absolute;
        top: 7px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: black;
        }

        .range-slider-track .dragger {
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        position: absolute;
        z-index: 2;
        background-color: #428bca;
        }

        .no-select {
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -khtml-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        }

        .k-means-header {
        padding-left: 0px;
        }

        .kmeans-div {
        width: 600px;
        }

        #kmeans-vis {
        margin-top: 5px;
        margin-bottom: 5px;
        height: 400px;
        width: 400px;
        border: 1px solid black;
        }

        #kmeans-vis #voronoi path {
        fill-opacity: 0.2;
        }

        #num-clusters, #num-centroids {
        border: 0px;
        border-bottom: 1px solid black;
        padding-left: 8px;
        width: 30px;
        padding-top: 0px;
        padding-bottom: 0px;
        background-color: #fcfcfc;
        }

        a {
        margin-top: 5px;
        cursor: pointer;
        }

        .step {
        width: 160px;
        }

        .algorithm-start {
        padding-top: 10px;
        padding-bottom: 10px;
        }

        .step-title {
        padding-left: 10px;
        padding-top: 10px;
        font-size: 20px;
        }

        .step-description {
        padding-left: 10px;
        padding-bottom: 15px;
        }

        .active {
        /*color: #428bca;*/
        background-color: #fcf9ce;
        /*font-weight: bold;*/
        cursor: pointer;
        padding-right: 5px;
        }

        hr {
        margin-top: 30px;
        border-top: 1px solid #ccc;
        }

        .data-header {
        margin-top: 0px;
        }

        div.input {
        width: 148px;
        display: inline-block;
        }

        a.generate {
        margin-left: 2px;
        }

        </style>
        <div class='row col-xs-12'>
        <h1> Visualizing K-Means Clustering </h1>
        <br/>
        </div>
        <div class='row'>
        <div class='col-xs-8'>
            <div id='kmeans-vis'></div>
            <div class='mean-square-error'>Mean square point-centroid distance: <span class='mean-square-value'>not yet calculated</span></div>
        </div>
        <div class='col-xs-4'>
            <div class='row' style="max-width: 200px;">
            <h3>Algorithm</h3>
            <div class='algorithm-start'>
                Repeat until convergence:
            </div>
            <div class='step-title closest active'>
                Find closest centroid
            </div>
            <div class='step-description closest active'>
                Find the closest centroid to each point, and group points that share the same closest centroid.
            </div>
            <div class='step-title update'>
                Update centroid
            </div>
            <div class='step-description update'>
                Update each centroid to be the mean of the points in its group.
            </div>
            <a class='step btn btn-primary find'>Find closest centroid</a>
            <hr>
            </div>

        </div>
            <div class='row'>
            <div class='col-xs-6'>
            <h3 class='data-header'>Data</h3>
            Clustered points <div class='range-slider' id='range-slider'></div> Random
            <br/>
            <div class='input'>Number of clusters</div>: <input id='num-clusters' type='text' value='3'>
            <br/>
            <div class='input'>Number of centroids</div>: <input id='num-centroids' type='text' value='3'>
            <br/>
            <br />
            </div>
            <div class='col-xs-6'>
            <a class='new-points btn btn-danger'>New points</a>
            <a class='new-centroids btn btn-danger'>New centroids</a>
            </div>

        </div>
        <footer>
        Made by Karanveer Mohan, Source code on <a href='https://github.com/karanveerm/kmeans'>Github</a>.
        </footer>
    </div>
    <script src='../_static/d3.min.js'></script>
    <script src='../_static/range-slider.js'></script>
    <script src='../_static/kmeans.js'></script>

K-means is different than regression in that we are not using "the answers" to help us learn. This algorithm is part of a class of machine learning algorithms known as **unsupervised leanring** That is, the K-means algorithm just does its best to see if it can make sense of the data.


Implementing K-Means
--------------------

Now your task is to implement the algorithm we have described and you have experiemented with in the visualization.  At the end you should write a csv file that contains the Id number, The two measures you have chosen to cluster around -- chosen from your visualization, and the cluster number that each plant belongs to.  You will use this file in the next step.

.. activecode:: cluster_km_1


Now that you have clustered the points its time to graph them again, and color code them!  You'll need to add a new column in your Data object call it species, the value for each row will be the number of the cluster that it belongs to.  This will be fairly easy to do if you wrote a csv file in the previous step.

.. activecode:: cluster_km_2

In a typical application using k-means clusttering you would now begin a more thorough investigation of your clusters.  What can you figure out about them.  If you are doing an investigation for a web site, you may discover that you have 5 different kinds of customers.  This new knowledge that there are different kinds of customers can let you further develop campaigns to reach each customer in a way better suited to their category.  In the case of our plant data we would disover that in fact there are three species of plants in the data corresponding to a different kind of flower.

We have been visualizing the data in two dimensions, but we can calculate our distances in any number of dimensions.  The pythagorean theorem, which allows us to calculate the distance works for as many dimensions as we want.  math:`dist = \sqrt{x^ + y^2 + z^2 + ...}`  Update your code so that it can take advantage of all four of the features you are given.  Does this move any plants into a different cluster?

.. activecode:: cluster_km_3


