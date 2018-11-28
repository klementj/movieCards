import { Movie } from '../model/Movie'
// Load from localStorage. If empty createTestData() is run creating Movie.instances and saving to localStorage['movieDB'];
// Movie.loadAll();

export class MovieCard {
    
    constructor(slots, key, state){
        this.title = slots.title;
        this.description = slots.description;
        this.director = slots.director;
        this.year = slots.year;
        this.genre = slots.genre;
        this.img = slots.img;
        this.favorite = slots.favorite;
        
        this.key = key;
        this.state = state;
    }
    
    render(){
        return  `<article class="col s12 m6 l4 xl3">
                    <div class="card medium hoverable">
                        <div class="card-image">
                            <img src="./src/img/${this.img}">
                        </div>
                    <div class="card-content black white-text">
                        <span class="card-title activator">${this.title}<i class="material-icons right">&#8593;</i></span>
                        <p class="card-year">Year: ${this.year}</p>
                        <p class="card-genre">Genre: ${this.genre}</p>
                        <p><a id="favBtn" href="#" onclick="clickHandler()" data-key="${this.key}">Add to Favorites</a></p>
                    </div>
                    <div class="card-reveal black white-text">
                        <span class="card-title white-text ">${this.title}<i class="material-icons right">x</i></span>
                        <p class="card-description">${this.description}</p>                            
                        </div>
                    </div>
                </article>`;
    }
    
    // static createMovieCards(){
        
    // }
    
    // Change MovieCard.favorite to true;
    // ????
    // static clickHandler(){
    //     console.log('link clicked')
    // }

    static changeState(){
        let movie = Movie.instances[key];

        document.querySelector(`[data-key="${movie}"]`).innerHTML = 'Remove';
        // this.favorite = true;
        // let favoriteMovies = [];
        return movie.favorite;
        
    }
    
    static setupUserInterface(){
        
        let movieSection = document.getElementById('movieSection'),
            favoriteSection = document.getElementById('favoriteSection'),
            keys = [],
            movies = {};
        
        Movie.loadAll();
        
        keys = Object.keys(Movie.instances)
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const movieCard = new MovieCard(Movie.instances[key], key, Movie.instances[key].favorite) ;
            
            if (movieCard.favorite === true) {
                document.getElementById('favoritePlaceholderText').style.display = "none";
                
                favoriteSection.insertAdjacentHTML('afterbegin', movieCard.render());
            } else {
                movieSection.insertAdjacentHTML('afterbegin', movieCard.render());
            }
            
        }
        
    }
    
}

// MovieCard.setupUserInterface();