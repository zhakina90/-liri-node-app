require("dotenv").config();

var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys");
var userCoice = process.argv[2];
switch (userCoice) {
    case "concert-this":
        console.log("concert");
        break;
    case "spotify-this-song":
        console.log("spotify");
        break;
    case "movie-this":
        console.log("movie");
        break;
    case "do-what-it-says":
        console.log("whatever");
        break;
}