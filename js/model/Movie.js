class Movie {
    constructor(slots){
        this.title = slots.title;
        this.description = slots.description;
        this.director = slots.director;
        this.year = slots.year;
        this.genre = slots.genre;
        this.img = slots.img;
        this.favorite = slots.favorite;
    }

    static convertRow2Obj(movieRow){
        let movie = new Movie(movieRow);
        return movie;
    }

    // Load all movies from localStorage. If no data exists createTestData() is called
    static loadAll(){
        let i = 0, 
            keys=[], 
            moviesString='', 
            movies={};
        
        if (localStorage['movieDB']) {
            moviesString = localStorage['movieDB'];
        } else {
            this.createTestData();
            console.log('Test data created from loadAll()')
        }

        if (moviesString) {
            movies = JSON.parse(moviesString);
            keys = Object.keys(movies);
            console.log(keys.length + ' movies loaded');

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                Movie.instances[key] = this.convertRow2Obj(movies[key])
                console.log(movies[key])
            }
        }
    }

    // Check if instances are empty. If true createTestData, else save to localStorage
    static saveAll(){
        let numberOfMovies = Object.keys(Movie.instances).length;
        
        if (numberOfMovies === 0) {
            this.createTestData();
        } else {
            localStorage['movieDB'] = JSON.stringify(Movie.instances);
            console.log(numberOfMovies + ' movies saved')
        }
    }

    // Create test data in Movie.instances property and save to localStorage['movieDB']
    static createTestData(){
        Movie.instances['movie1'] = {
            "title" : "A Sunday in Hell",
            "description" : "The film follows the French Paris-Roubaix spring classic, notorious for the hellish paves or cobbled roads of the north, which are no longer used for traffic but only for transporting,",
            "director" : "Jørgen Leth",
            "year" : 1977,
            "genre" : "Documentary",
            "img" : "a_sunday_in_hell.bmp",
            "favorite" : true
        };
        Movie.instances['movie2'] = {
            "title" : "Reptilicus",
            "description" : "After copper miners discover part of the frozen tail of a prehistoric monster in Lapland, scientists inadvertently bring it back to life",
            "director" : "Poul Bang",
            "year" : "1961",
            "genre" : "Sci-Fi",
            "img" : "reptilicus.bmp",
            "favorite" : false
        };
        Movie.instances['movie3'] = {
            "title" : "The Live",
            "description" : "A drifter discovers a pair of sunglasses that allow him to wake up to the fact that aliens have taken over the Earth.",
            "director" : "John Carpenter",
            "year" : "1988",
            "genre" : "Sci-Fi",
            "img" : "they_live.bmp",
            "favorite" : true
        };
        Movie.instances['movie4'] = {
            "title" : "Pi",
            "description" : "A paranoid mathematician searches for a key number that will unlock the universal patterns found in nature.",
            "director" : "Darren Aronofsky",
            "year" : "1998",
            "genre" : "Thriller",
            "img" : "pi.bmp",
            "favorite" : false
        };
        Movie.instances['movie5'] = {
            "title" : "Groundhog Day",
            "description" : "A weatherman finds himself inexplicably living the same day over and over again. ",
            "director" : "Harold Ramis",
            "year" : "1993",
            "genre" : "Comedy",
            "img" : "groundhog_day.bmp",
            "favorite" : false
        };
        Movie.instances['movie6'] = {
            "title" : "Trading Places",
            "description" : "A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires. ",
            "director" : "John Landis",
            "year" : "1983",
            "genre" : "Comedy",
            "img" : "trading_places.bmp",
            "favorite" : false
        };
        Movie.instances['movie7'] = {
            "title" : "Brazil",
            "description" : "A bureaucrat, in a retro-future world, tries to correct an administrative error, and becomes an enemy of the state.",
            "director" : "Terry Gilliam",
            "year" : "1085",
            "genre" : "Dystopian",
            "img" : "brazil.bmp",
            "favorite" : false
        };

        this.saveAll();

    }
}

Movie.instances = {}