
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

    // var songName = process.argv[3];

    // if(!songName){
    //   songName = "The Sign";
    // }
    // params = songName;
    // spotify.search({ type: "track", query: params }, function(err, data) {
    //   if(!err){
    //     var songInfo = data.tracks.(something);
    //     for (var i = 0; i < 5; i++) {
    //       if (songInfo[i] != undefined) {
    //         var spotifyResults = (HTML results here)
    //         console.log(spotifyResults);
    //         log(spotifyResults);
    //       }
    //     }
    //   }
    //  else {
    //     console.log("Error :"+ err);
    //     return;
    //   }
    // });

  };

  function movieThis(){

    var movie = process.argv[3];

        request('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&tomatoes=true&apikey=40e9cece&r=json', function(error, response, body) {

        if (movie != "") {

            console.log("Title: " + JSON.parse(body).Title);
            console.log("");
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("");
            console.log("Rating: " + JSON.parse(body).imdbRating);
            console.log("");
            console.log("Rotten Tomato Rating: " + JSON.parse(body).tomatoRating);
            console.log("");
            console.log("Country: " + JSON.parse(body).Country);
            console.log("");
            console.log("Language:: " + JSON.parse(body).Language);
            console.log("");
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("");
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("");

        }

        else {

            var request = require('request');

            request('http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&tomatoes=true&apikey=40e9cece&r=json', function(error, response, body) {

                console.log("Title: " + JSON.parse(body).Title);
                console.log("");
                console.log("Release Year: " + JSON.parse(body).Year);
                console.log("");
                console.log("Rating: " + JSON.parse(body).imdbRating);
                console.log("");
                console.log("Rotten Tomato Rating: " + JSON.parse(body).tomatoRating);
                console.log("");
                console.log("Country: " + JSON.parse(body).Country);
                console.log("");
                console.log("Language: " + JSON.parse(body).Language);
                console.log("");
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("");
                console.log("Actors: " + JSON.parse(body).Actors);
                console.log("");
            });
        }
    });

  };

  function doWhatItSays() {

      fs.readFile("random.txt", "utf8", function(error, data){
      if (!error) {
        dWISquery = data.split(",");
        spotifyThisSong(dWISquery[0], dWISquery[1]);
      }
      else {
        console.log("Error!" + error);
      }
    });
  };

  // log function
  function log(logResults) {
    fs.appendFile("log.txt", logResults, {
      if(error) {
        throw error;
      }
    });
  }