require("dotenv").config();
//Load exports from keys.js
let keys = require("./keys.js");
//Required libraries
let moment = require("moment");
let Spotify = require("node-spotify-api");
let axios = require("axios");
let spotify = new Spotify(keys.spotify);
let fs = require("fs")

//Create a function concert-this to get the information of the artist.
function searchThis(artist) {
    // Run the axios.get function...
    // The axios.get function takes in a URL and returns a promise (just like $.ajax)
    let queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function (response) {

            if (response.data[0].venue != undefined) {
                //It will console.log the response that back like the venue name, venue location and the date. 
                console.log("Venue: " + response.data[0].venue.name);
                console.log("Location: " + response.data[0].venue.city);
                let eventDateTime = moment(response.data[0].datetime);
                console.log("Date & Time: " + eventDateTime.format("dddd, MM do YYYY"));
            }
            else {
                console.log("Results not found!");
            }
        }
    )
        .catch(function (error) {
            console.log(error);
        });
}

//Create a function spotify-this-song 
function spotifyThis(song) {
    //Spotify API request (if an object is returned, output the first search result's artists, song, preview_url an album)
    spotify.search({ type: "track", query: song })
        .then(function (response) {
            if (response.tracks.total === 0) {
                errorConditionForSpotify();
            }
            else {
                console.log("Artist: " + response.tracks.items[0].artists[0].name);
                console.log("Track: " + response.tracks.items[0].name);
                console.log("Preview URL: " + response.tracks.items[0].preview_url);
                console.log("Album: " + response.tracks.items[0].album.name);
            }
        })
        .catch(function (error) {
            console.log(error);
            console.log("Results not found. Showing result for 'The sign' by Ace of Base");
        });
}

//Create a movie function
function movieInfo(movie) {
    // Run the axios.get function...
    // The axios.get function takes in a URL and returns a promise (just like $.ajax)
    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=tue&apikey=trilogy")

        .then(function (response) {
            //The request was made and the server response with status code
            if (response.data.Title != undefined) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("imdbRating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            }
            else {
                movieInfo("Mr.Nobody");
            }
        })
        .catch(function (error) {
            console.log(error);
            console.log("Results not found!")
        });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {

        let dataArr = data.split(",");

        spotifyThis(dataArr[1])
        if (error) {
            return console.log(error);
        }
    });
}

//pull in required variables
let command = process.argv[2]
let liriString = process.argv[3]

fs.appendFile('log.txt', command + ",", function (err) {
    if (err) throw err;
});

//Using switch command
switch (command) {
    case "concert-this":
        searchThis(liriString);
        break;

    case "spotify-this-song":
        spotifyThis(liriString);
        break;

    case "movie-this":
        movieInfo(liriString);
        break;

    case "do-what-it-says":
        doWhatItSays(liriString);
        break;
};
