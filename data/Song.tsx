
const allChords = ['C', 'Cm', 'D', 'Dm', 'E', 'Em', 'F', 'Fm'];

export default class Song {


    constructor({id, title, artist, chords, progression}) {
        this.title = title;
        this.artist = artist;
        this.chords = chords;
        this.progression = progression;
        this.id = id;
    }

    static getProgression(song) {

        console.log(song);
        var extractedChords = [];
        for (chord in allChords) {
            // console.log(chord);
            const template = ' ' + allChords[chord] + ' ';
            const searchResult = song.search(template);

            console.log(template);
            console.log(searchResult);

            const found = (searchResult != -1);
            console.log(found);
            if (found) {
                extractedChords.push(allChords[chord]);
            }
        }
        extractedChords = extractedChords.join(',');
        console.log('Extracted chords');
        console.log(extractedChords);
        return extractedChords;

    }

}