let movieDataObj = {
    'title': 'hej',
    'year': 200,
    'genre': 'scify'
}

class MovieCard {

    constructor(slots){
        this.state = {
            title: slots.title,
            year: slots.year,
            genre: slots.genre
        }
    }

     render(){
        return  `<article class="col s4">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">${this.state.title}</span>
                            <p class="card-year">${this.state.year}</p>
                            <p class="card-genre">${this.state.genre}</p>
                        </div>
                    </div>
                </article>`;
    }

    static createMovieCards(){

    }

}

movieCardSection = new MovieCard(movieDataObj);

document.getElementById('movieSection').innerHTML = movieCardSection.render();