
var racers = [
    "mario", "luigi", "toad", "bowser", "peach"
]
console.log(racers)
function displayRacerInfo() {

    var racer = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + racer + "&api_key=Jz71lM9n4HP1yRWdkvCHUr0RA6q4WiGL&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        // var rating = results[i].rating;
        for (var i = 0; i < results.length; i++) {
            // Creating a div to hold the movie
        var racerDiv = $("<div class='racer'>");
            console.log(results);
            var rating = results[i].rating;
            var pOne = $("<p>").text("Rating: " + rating);
            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;
            var racerImage = $("<img>");
            racerImage.attr("src", still);
            racerImage.attr("data-still", still);
            racerImage.attr("data-animate", animated);
            racerImage.attr("data-state", "still");
            racerImage.addClass("racer-image")
            // Displaying the rating
            racerDiv.append(pOne);
            // Retrieving the URL for the image
            // var imgURL = results[i].images.fixed_height_still.url;

            // Creating an element to hold the image
            // var image = $("<img>").attr("src", imgURL);

            // Appending the image
            racerDiv.append(racerImage);

            // Putting the entire movie above the previous movies
            $("#buttons-view").prepend(racerDiv);
        }
    });
};



function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < racers.length; i++) {
        var a = $("<button>");
        // Adding a class
        a.addClass("racer-btn");
        // Adding a data-attribute with a value of the racer at index i
        a.attr("data-name", racers[i]);
        // Providing the button's text with a value of the racer at index i
        a.text(racers[i]);
        // Adding the button to the HTML
        $("#buttons-view").prepend(a);
    }
}
$("#add-racer").on("click", function (event) {
    event.preventDefault();
    var racer = $("#racer-input").val().trim();
    racers.push(racer);
    renderButtons();
})

$(document).on("click", ".racer-btn", displayRacerInfo);

renderButtons();







//create an array holding button data

//create a function to create buttons
//run for loop through your array

//createa on-click for button (search button)

//make ajax call
//make .then response after data comes back

//for loop through results
//after for loop drill into object

//creat an image tag using jquery 
