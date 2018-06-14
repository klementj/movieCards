MovieObj = {
    'title': 'hej',
    'year': 2000,
    'genre': 'scify'
}

class MovieCardUI{
    constructor(MovieObj){
        this.title = MovieObj.title;
        this.year = MovieObj.year;
        this.genre = MovieObj.genre;

        if (MovieObj.title === undefined) {
            console.log("Movie Objekt har ingen title")
        } else {
            console.log("Movie Object har en titel!! :D")
        }
    }

    static testMovieCardConstructor(MovieObj){
        return new MovieCardUI(MovieObj)
    }

    // static get template(){
    //     return this.template;
    // }

    // static set template(value){
    //     this.template = value;
    // }

    static createMovieCardUI(){
        
        // Opret testdata.
        Movie.createTestData();
        
        // createMovieCard for hver instans i Movie.Instances. 
        let movieInstanceKeys = Object.keys(Movie.instances);
        
        
        // Hvordan får du returneret dine instanser keys i et array?
        for (let index = 0; index < movieInstanceKeys.length; index++) {
            const key = movieInstanceKeys[index];
            let movie = Movie.instances[key];
            console.log(movie);
            
            let movieElement = document.getElementById('movieSection');
            


            let card = '<article class="test">' + Movie.instances[key].title + '</article>';

            movieElement.innerHTML = card;


            // let productClone = document.importNode(MovieCardUI.template.content, false);
            
            // let productData = {
            //     title: productClone.querySelector('.card-title'),
            //     year: productClone.querySelector('.card-year'),
            //     genre: productClone.querySelector('.card-genre')
            // }
            
            // productData.title.innerHTML = key.title;
            // productData.year.innerHTML = key.year;
            // productData.genre.innerHTML = key.genre;
            
            // movieElement.appendChild(productClone)
        }

        // Iterer over hver key og lav et card til hver.

        // Hver card samles med én variabel
        // let allMovieCards = 


        // 
    }

    static addCard(){
        
    }
}