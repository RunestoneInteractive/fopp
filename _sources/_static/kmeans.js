// Initial inspiration was from: http://www.bytemuse.com/post/k-means-clustering-visualization/
$(function() {

  // Number of points to be used in the K-Means Visualization
  var NUM_POINTS = 500;

  var $numClusters = $('#num-clusters');
  var numClusters = parseInt($numClusters.val(), 10);
  var $numCentroids = $('#num-centroids');
  var numCentroids = parseInt($numClusters.val(), 10);

  var $rangeSlider = $('#range-slider');
  var $meanSquareValue = $('.mean-square-value');

  var width = $('#kmeans-vis').width();
  var height = width;

  // Create SVG for d3
  var svg = d3.select('#kmeans-vis').append('svg')
    .attr('width', width)
    .attr('height', height);

  pointsGroup = svg.append('g').attr('id', 'points');
  var centroidsGroup = svg.append('g').attr('id', 'centroids');
  var voronoiGroup = svg.append('g').attr('id', 'voronoi');
  var triangle = d3.svg.symbol().type('triangle-up').size(function(d) { return 200; });
  var colors = d3.scale.category10();

  // Array of (x, y) points that will be classified
  var points = [];
  // Array of (x, y) centroids
  var centroids = [];
  var centroidBins = [];

  // Initial randomness. This is what the slider is set to.
  // 0 means data is very clustered, 100 means completely random
  var randomness = 25;
  var $step = $('.step');

  rangeSlider($rangeSlider[0], {
    value: randomness,
    drag: function(value) {
      // Update the randomness after the user drags the slider
      // and reset the points to be clustered
      randomness = value;
      resetPoints();
    }
  });

  // Resets the text on the centroid button
  function resetCentroidUpdateText() {
    $step.addClass('find');
    $step.html('Find closest centroid');

    $('.active').removeClass('active');
    $('.closest').addClass('active');
  }

  // Every time the step button is clicked, we alternate between finding the closest
  // centroid and updating the centroid
  $step.click(function() {
    if ($step.hasClass('find')) {
      findClosestCentroid();
      findClosestCentroidAnimation();
      $step.removeClass('find');
      $step.html('Update centroid');

      $('.active').removeClass('active');
      $('.update').addClass('active');
    } else {
      updateCentroid();
      updateCentroidAnimation();
      resetCentroidUpdateText();
    }
  });

  $('.closest').on('click', function() {
    if ($('.closest').hasClass('active')) {
      $step.click();
    }
  });

  $('.update').on('click', function() {
    if ($('.update').hasClass('active')) {
      $step.click();
    }
  });

  $('.new-points').click(function() {
    resetPoints();
  });

  $numClusters.blur(function() {
    var numClustersNew = parseInt($numClusters.val(), 10);
    if (!isNaN(numClustersNew) && numClustersNew != numClusters) {
      resetPoints();
    }
  });

  $numCentroids.blur(function() {
    var numCentroidsNew = parseInt($numCentroids.val(), 10);
    if (!isNaN(numCentroidsNew) && numCentroidsNew != numCentroids) {
      generateClusters();
    }
  });

  $('.new-centroids').click(function() {
    generateClusters();
  });

  $numClusters.blur(function() {
    var numClustersNew = parseInt($numClusters.val(), 10);
    if (!isNaN(numClustersNew) && numClustersNew != numClusters) {
      resetPoints();
    }
  });

  $numCentroids.blur(function() {
    var numCentroidsNew = parseInt($numCentroids.val(), 10);
    if (!isNaN(numCentroidsNew) && numCentroidsNew != numCentroids) {
      generateClusters();
    }
  });

  function uncolorPoints() {
    pointsGroup.selectAll('*').remove();
    pointsGroup.selectAll('circle')
      .data(points).enter()
      .append('circle')
      .attr('cx', function(d) {
        return d[0];
      }).attr('cy', function(d) {
        return d[1];
      }).attr('r', 3);
  }

  function resetPoints() {
    resetCentroidUpdateText();
    points = [];

    // Arbitrarily chosen variance and percentageClusteredPoints
    // There is no signficance behind the constants except that they looked good
    // with the slider.
    var variance = randomness / 2 + 5;
    var percentageClusteredPoints = (100 - 0.8 * randomness) / 100;

    numClusters = parseInt($numClusters.val(), 10);

    for (var i = 0; i < numClusters; i++) {
      // Creates a normal distribution with mean randomCenter(parameter)
      // and variance
      var xNorm = d3.random.normal(randomCenter(width), variance);
      var yNorm = d3.random.normal(randomCenter(height), variance);

      for (var j = 0; j < percentageClusteredPoints * NUM_POINTS / numClusters; j++) {
        points.push([normalPt(xNorm), normalPt(yNorm)]);
      }
    }

    // Scatter the remaining points randomly
    var length = points.length;
    for (var i = 0; i < NUM_POINTS - length; i++) {
      points.push([randomCenter(width), randomCenter(height)]);
    }

    uncolorPoints();
    resetCentroidUpdateText();
    voronoiGroup.selectAll('*').remove();

    $meanSquareValue.html('not yet calculated');
  }

  // Randomly generates the clusters and initializes the d3 animation
  function generateClusters() {
    centroids = [];
    numCentroids = parseInt($numCentroids.val(), 10);
    uncolorPoints();
    resetCentroidUpdateText();

    // Generate completely random centroids
    for (var k = 0; k < numCentroids; k++) {
      var randomX = randomCenter(width);
      var randomY = randomCenter(height);
      centroids.push([randomX, randomY]);
    }

    // Render initial centroid display
    centroidsGroup.selectAll('*').remove();
    voronoiGroup.selectAll('*').remove();

    centroidsGroup.selectAll('path')
      .data(centroids).enter()
      .append('path')
      .attr('d', triangle)
      .attr('fill', function(d, ndx){ return colors(ndx); })
      .style('stroke', 'black')
      .style('stroke-width', '0.7')
      .attr('transform', function(d){ return 'translate(' + d[0] + ',' + d[1] + ')'; });

    $meanSquareValue.html('not yet calculated');
  }

  // For each point, we find the centroid it is the closest to.
  function findClosestCentroid() {
    centroidBins = [];
    for (var i = 0; i < numCentroids; i++) {
      centroidBins.push([]);
    }

    for (var i = 0; i < points.length; i++) {
      var point = points[i];
      var minDist = Infinity;
      var minIndex = 0;
      for (var j = 0; j < centroids.length; j++) {
        centroid = centroids[j];
        var d = distance(point, centroid);
        if (d < minDist) {
          minDist = d;
          minIndex = j;
        }
      }
      centroidBins[minIndex].push(point);
    }

    var meanSquaredDistance = 0;
    for (var i = 0; i < centroidBins.length; i++) {
      bin = centroidBins[i];

      for (var j = 0; j < bin.length; j++) {
        var dist = distance(centroids[i], bin[j]);
        meanSquaredDistance += dist * dist;
      }
    }

    meanSquaredDistance /= NUM_POINTS;
    $meanSquareValue.html(meanSquaredDistance.toFixed(2));
  }

  function findClosestCentroidAnimation() {
    // TODO: This is terribly inefficient, fix later
    // Color the points according to the centroid to which they belong
    pointsGroup.selectAll('*')
      .data(points)
      .transition()
      .attr('fill', function(d, ndx){
        for (var i = 0; i < centroidBins.length; i++) {
          if (centroidBins[i].indexOf(d) != -1) {
            return colors(i);
          }
        }
      });

    // Render voronoi
    voronoiGroup.selectAll('*').remove();

    // Comment these lines out to get rid of Voronoi
    voronoiGroup.selectAll('path')
      .data(d3.geom.voronoi(centroids))
      .enter().append('path')
      .style('fill', function(d, ndx) {
        return colors(ndx);
      }).attr('d', function(d) {
        return 'M' + (d.join('L')) + 'Z';
      });
  }

  // Once the points have been assigned to the centroids, updates the
  // centroid to be the mean of all points assigned to it
  function updateCentroid() {
    var meanSquaredDistance = 0;
    // Find new centroids
    for (var i = 0; i < centroidBins.length; i++) {
      bin = centroidBins[i];
      newCentroid = avgXY(bin);

      for (var j = 0; j < bin.length; j++) {
        var dist = distance(newCentroid, bin[j]);
        meanSquaredDistance += dist * dist;
      }
      // If there are no points in the bin, newCentroid may be NaN
      // In this case, we don't update the centroid location
      if (!isNaN(newCentroid[0]) && !isNaN(newCentroid[1])) {
        centroids[i] = newCentroid;
      }
    }

    meanSquaredDistance /= NUM_POINTS;
    $meanSquareValue.html(meanSquaredDistance.toFixed(2));
  }

  function updateCentroidAnimation() {
    centroidsGroup.selectAll('path')
      .data(centroids)
      .transition()
      .attr('transform',function(d){ return 'translate(' + d[0] + ',' + d[1] + ')'; });
  }

  // Initial generation of clusters
  generateClusters();

  // Helper functions

  // Generate centers for dist centers and centroids
  function randomCenter(n) {
    return Math.random() * n;
  };

  // Euclidean distance between points a and b
  function distance(a, b) {
    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
  }

  // Finds the average x value and average y value of all the points in arr
  function avgXY(arr) {
    var avgX = d3.sum(arr, function(d) { return d[0]; }) / arr.length;
    var avgY = d3.sum(arr, function(d) { return d[1]; }) / arr.length;
    return [avgX, avgY];
  }

  // Given a function normalFn, uses it to generate a value. If the value
  // is not within the range (0, width), continues to do so.
  function normalPt(normalFn) {
    var val = normalFn();
    if (val > 0 && val < width) {
      return val;
    } else {
      return normalPt(normalFn);
    }
  }
});
