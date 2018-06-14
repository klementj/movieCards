class Movie {
    constructor(title, year, genre){
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    static createTestData(){
        Movie.instances[0] = {title: 'lille per på glat is', year: 2018, genre: 'sci-fi'};
        Movie.instances[1] = {title: 'Jackass', year:2000, genre: 'documentary'}
    }
}

Movie.instances = {}