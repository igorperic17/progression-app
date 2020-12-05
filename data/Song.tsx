
const allChords = ['C', 'Cm', 'D', 'Dm', 'E', 'Em', 'F', 'Fm'];

export default class Song {
    title: String;
    artist: String;
    chords: String;
    progression: String;
    id: String;

    constructor(id: String, title: String, artist: String, chords: String, progression: String) {
        this.title = title;
        this.artist = artist;
        this.chords = chords;
        this.progression = progression;
        this.id = id;
    }

    static getProgression(song: string) {

        console.log(song);
        var extractedChords = [];
        for (const chord in allChords) {
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
        const extractedChordsJoined = extractedChords.join(',');
        console.log('Extracted chords');
        console.log(extractedChordsJoined);
        return extractedChordsJoined;

    }

}