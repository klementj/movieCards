
// Load from localStorage. If empty createTestData() is run creating Movie.instances and saving to localStorage['movieDB'];
Movie.loadAll();

class MovieCard {

    constructor(slots){
        this.title = slots.title;
        this.description = slots.description;
        this.director = slots.director;
        this.year = slots.year;
        this.genre = slots.genre;
        this.img = slots.img;
        this.favorite = slots.favorite;
    }

    render(){
        return  `<article class="col s12 m6 l3">
                    <div class="card medium ">
                        <div class="card-image">
                            <img src="./img/${this.img}">
                        </div>
                        <div class="card-content grey darken-4 white-text">
                            <span class="card-title activator">${this.title}<i class="material-icons right">more</i></span>
                            <p class="card-year">Year: ${this.year}</p>
                            <p class="card-genre">Genre: ${this.genre}</p></br>
                            <p><a href="#" onclick="this.addToFavorite()">Add to Favorites</a></p>
                        </div>
                        <div class="card-reveal grey darken-3 white-text">
                            <span class="card-title grey-text text-darken-4">${this.title}<i class="material-icons right">close</i></span>
                            <p class="card-description">${this.description}</p>                            
                        </div>
                    </div>
                </article>`;
    }

    static createMovieCards(){

    }

    // Change MovieCard.favorite to true;
    addToFavorite(){
        // this.favorite = true;
        // let favoriteMovies = [];
        return this.favorite;
        
    }

    static setupUserInterface(){
        console.log('test')
    }

}


movieCardSection = new MovieCard(Movie.instances['movie1']);

document.getElementById('movieSection').innerHTML = movieCardSection.render();

movieCard2 = new MovieCard(Movie.instances['movie2'])

document.getElementById('movieSection').insertAdjacentHTML('afterbegin', movieCard2.render())