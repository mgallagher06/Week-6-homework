


 $(document).ready();

 var topics = ["Mulan", "Tangled", "Little Mermaid", "Cinderella", "Aladdin", "Moana", "Zootopia", "The Black Cauldron", "Up", "Sleeping Beauty"];

        for (i = 0; i < topics.length; i++) { 
      
        var button = $("button").text(topics[i]);

        // 2. Append to html
        var body = document.getElementsByTagName("body")[0];
        var body = $('body');
        body.append(button);

   $("button").on("click", function() {
      var movie = $(this).attr("data-movie");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        movie + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating:" + rating);

            var movieImage = $("<img>");
            movieImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(movieImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });