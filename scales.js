const E_String = ['E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E'];
const A_String = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A'];
const D_String = ['D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D'];
const G_String = ['G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G'];
const B_String = ['B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];

const Minor_Pentatonic = [0,3,5,7,10];


function getRootIndex(string, note) {
  let index = string.indexOf(note);
  return index
}

function getScaleNotes(rootIndex, scale, string) {
  // return array of notes representing the complete scale in a given key
  let scaleNotes = [string[rootIndex]];
  scale.slice(1).forEach(element => {
    scaleNotes.push(string[rootIndex + element]); //TODO: need to wrap to start of string once the notes become undefined.
  });
  console.log(scaleNotes);
}

function getStringIntervals(string, key, scale) {
  // return array of intigers reprisenting the notes in the scale on a given string
  let root = getRootIndex(string, key);
  let notes = getScaleNotes(root, scale, string);
  let intervals = [];
  scale.forEach(element => { //TODO: Change this so it locates the index of each note on the string.
    intervals.push(root + element);
  });
  console.log(intervals)
}

getStringIntervals(E_String, 'E', Minor_Pentatonic);