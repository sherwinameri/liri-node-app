
  // modules
  var fs = require("fs");
  var request = require("request");
  var keys = require("./keys.js");
  var twitter = require("twitter");
  var spotify = require ("spotify");
  var liriArgument = process.argv[2];


  // commands
  switch(liriArgument) {
    case "my-tweets": myTweets(); break;
    case "spotify-this-song": spotifyThisSong(); break;
    case "movie-this": movieThis(); break;
    case "do-what-it-says": doWhatItSays(); break;
    // Instructions displayed in terminal to the user
    default: console.log("\r\n" +"After typing 'node liri.js', type one of these four commands : " +"\r\n"+
      "1. my-tweets 'enter a twitter name' " +"\r\n"+
      "2. spotify-this-song 'enter a song name' "+"\r\n"+
      "3. movie-this 'enter a movie name' "+"\r\n"+
      "4. do-what-it-says.");
  };

// functions

  function myTweets() {

    var twitterUsername = process.argv[3];

  };

  function spotifyThisSong(songName) {

    var songName = process.argv[3];

  };

  function movieThis(){

    var movie = process.argv[3];

  };

  function doWhatItSays() {

  };

  // log function
  function log(logResults) {
    fs.appendFile("log.txt", logResults, {
      if(error) {
        throw error;
      }
    });
  }