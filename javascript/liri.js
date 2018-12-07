require("dotenv").config();

var axios = require("axios");
var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var keys = require("./keys");
console.log(keys);
var userChoice = process.argv[2];


switch (userChoice) {
    case "concert-this":
        console.log("concert");
        break;
    case "spotify-this-song":
        console.log("spotify");
        spotifyThisSong();
        break;
    case "movie-this":
        console.log("movie");
        break;
    case "do-what-it-says":
        console.log("whatever");
        break;


};

// * Artist(s)

// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

function spotifyThisSong() {
    var userSong = process.argv[3];
    // for (let i = 4; i < process.argv.length; i++) {
    //     userSong = " " + process.argv[i];
    // }

    // console.log(userSong);

    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: userSong }).then(function (response) {
        console.log(response.tracks.items[0]);

    })
        .catch(function (err) {
            console.log(err);
        });
}
// var movieName = process.argv[3];

// // // // Then run a request with axios to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + keys.omdb.id;
// // 
// // // This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// axios.get(queryUrl).then(
//     function (response) {
//         console.log(response);

//     }
//     // .catch(function (error) {
//     //     console.log(error);
//     // })

// );

        // Title of the movie.
        // * Year the movie came out.
        // * IMDB Rating of the movie.
        // * Rotten Tomatoes Rating of the movie.
        // * Country where the movie was produced.
        // * Language of the movie.
        // * Plot of the movie.
        // * Actors in the movie.


