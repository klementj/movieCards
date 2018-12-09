import { store } from './model/store'
import MovieCard from './view/MovieCard';

class App {
  constructor() {
    // Create test data
    const testMovies = [
      {
        "Title": "Blade Runner",
        "Year": "1982",
        "Genre": "Sci-Fi, Thriller",
        "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "imdbID": "tt0083658",
        "Type": "movie"
      },
      {
        "Title":"They Live",
        "Year":"1988",
        "Genre":"Action, Horror, Sci-Fi, Thriller",
        "Plot":"A drifter discovers a pair of sunglasses that allow him to wake up to the fact that aliens have taken over the Earth.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTQ3MjM3ODU1NV5BMl5BanBnXkFtZTgwMjU3NDU2MTE@._V1_SX300.jpg",
        "imdbID":"tt0096256",
        "Type": "movie"
      },
      {
        "Title":"Groundhog Day",
        "Year":"1993",
        "Genre":"Comedy, Fantasy, Romance",
        "Plot":"A weatherman finds himself inexplicably living the same day over and over again.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "imdbID":"tt0107048",
        "Type": "movie"
      },
      {
        "Title":"Brazil",
        "Year":"1985",
        "Genre":"Drama, Sci-Fi",
        "Plot":"A bureaucrat, in a retro-future world, tries to correct an administrative error and becomes an enemy of the state.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMDM0YTM3Y2UtNzY5MC00OTc4LThhZTYtMmM0ZGZjMmU1ZjdmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "imdbID":"tt0088846",
        "Type": "movie"
      },
      {
        "Title":"Trading Places",
        "Year":"1983",
        "Genre":"Comedy",
        "Plot":"A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYTEzMjBiMzktMjQyMS00YzBhLTgzNWQtNzA0NmEwMTNmMDQ2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "imdbID":"tt0086465",
        "Type": "movie"
      },
      {
        "Title":"In the Mood for Love",
        "Year":"2000",
        "Genre":"Drama, Romance",
        "Plot":"Two neighbors, a woman and a man, form a strong bond after both suspect extramarital activities of their spouses. However, they agree to keep their bond platonic so as not to commit similar wrongs.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BYjVhMTE3YzEtOGEwYS00NjFmLWFjYzAtMGVjNjY3YWY4OTJhL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "imdbID":"tt0118694",
        "Type": "movie"
      }
    ]
    testMovies.forEach(movie => {
      store.add(movie)
    });

    // debug - Log status of store.instances
    console.log('Store.instances status:', store.getMovies)
    
    // Render movies
    const favoriteSection = document.getElementById('favoriteSection')
    let keys = Object.keys(store.getMovies)
    
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      favoriteSection.insertAdjacentHTML('afterbegin', new MovieCard(store.getMovies[key]).render())
    }


    // Add eventlistener to save to local before window closes
    window.addEventListener('beforeunload', (e) => store.save())
  }
}

document.addEventListener('DOMContentLoaded', (e) => new App())
