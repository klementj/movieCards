import Movie from './movie';
import { getMovie } from './api';
import { loadFromLocal, saveToLocal } from './localStorage';

// Singleton pattern boilerplate
class Store {
  constructor() {
    this.instances = {}
  }
  
  /**
   * Get movies from store
   */
  get getMovies() {
    return this.instances
    // console.log('movie', this.instances)  
  }

  // set addMovie() {

  // }

  /**
   * Add a movie object to the store
   * @param {Object} movie The Movie Object to add to Store instances
   */
  add(movie){
    const _key = movie.imdbID
    this.instances[_key] = new Movie(movie)

    // GET more movie information when adding to store!!
    // api.getMovie(_key)
  }
  
  /**
   * Load movies from localStorage into store
   */
  load(){
    const _movies = loadFromLocal()
    
  }

  /**
   * Save movies from store into localStorage
   */
  save(){
    saveToLocal(this.instances)
  }

}

// Export intance. Singleton pattern?
export let store = new Store