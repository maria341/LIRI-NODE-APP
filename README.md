# liri-node-app

### OVERVIEW

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

# TECHNOLOGIES/API's USE

* Spotify API
* Node.js
* DotEnv Node package
* BandsInTown API
* Moment.js Node package
* OMDB (Open Movie Database) API
* Request Node Package
* Node-Spotify-API Node package

# Here's some of my screenshots that referrence for command line

# COMMAND LINE

* `node liri.js concert-this <artist/band name here>`

* This will search the Bands in Town Artist Events API , for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

![](https://github.com/maria341/liri-node-app/blob/master/readme.images/concert-this.png)

* `node liri.js spotify-this-song '<song name here>'`

* This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

![](https://github.com/maria341/liri-node-app/blob/master/readme.images/spotify.png)

* `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


