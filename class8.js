class Album {
    constructor(title, artist, yearReleased) {
        this.title = title;
        this.artist = artist;
        this.yearReleased = yearReleased; 
    }
   /*  calculateAge () {
        return (new Date().getFullYear() - this.yearReleased);
    } */

    calculateAge = () => new Date().getFullYear() - this.yearReleased;
}

const abbeyRoad = new Album('Abbey Road','The Beatles', 1969); //Instantiate new album
const sgtPepper = new Album('sgt pepper', 'Beatles', 1970);

console.log(abbeyRoad.calculateAge());

class CD extends Album {
    constructor(title, artist, yearReleased, digital){
        super(title, artist, yearReleased);
        this.digital = digital;
    }
}