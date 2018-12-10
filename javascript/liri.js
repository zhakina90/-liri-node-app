require("dotenv").config();

var axios = require("axios");
var keys = require("./keys");
var bands = new axios(keys.band.id);
var movies = new axios(keys.omdb.id);
var userInput = process.argv[3];
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");

// console.log(keys);
var userChoice = process.argv[2];


switch (userChoice) {
    case "concert-this":
        console.log("concert");
        concertThis();
        break;
    case "spotify-this-song":
        console.log("spotify");
        spotifyThisSong();
        break;
    case "movie-this":
        console.log("movie");
        thisMovie();
        break;
    case "do-what-it-says":
        console.log("whatever");
        break;


};



// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

var artist = process.argv[4];
function concertThis() {

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + bands).then(function (response) {

        console.log(response.data);

    }).catch(function (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);


        } else if (err.request) {
            console.log(err.request);
        } else {
            console.log("Error occured: ", err.message);
        }
        console.log(err.config);
    })
}

function spotifyThisSong() {

    var userSong = process.argv[3];
    console.log(userSong);
    spotify.search({ type: 'track', query: userSong }).then(function (response) {
        console.log(response);
        // if (err) {
        //     console.log(err);
        // } else {

        //     console.log("Artist:" + data.traks.items[0].artist[0].name);

        // }

    }).catch(function (err) {
        console.log(err);
    })
}


function thisMovie() {
    var listOfMovies = "";
    console.log(listOfMovies);
    //run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);
    axios.get(queryUrl).then(function (error, response, body) {

        console.log(moviesData);
        if (error && response.statusCode === 200) {
            var moviesData = JSON.parse(body);
            listOfMovies.push("title of movie:" + moviesData.Title +
                "\nYear of the movie:" + moviesData.Year +
                "\nIMDB Rating of the movie:" + moviesData.Ratings[0].value +
                "\nRotten Tomatoes Rating of the movie:" + moviesData.Ratings[1].Value +
                "\nCountry of Production:" + moviesData.Counrty +
                "\nLanguage of the movie:" + moviesData.Language +
                "\nPlot of the movie:" + moviesData.Plot +
                "\nActors in the movie:" + moviesData.Actors)

        } else {

        }

    }).catch(function (error) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body);
    })
}

concertThis();
spotifyThisSong();
thisMovie();
