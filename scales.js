const E_String = ['E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E'];
const A_String = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A'];
const D_String = ['D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D'];
const G_String = ['G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G'];
const B_String = ['B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];

const E_Minor_Pentatonic = [0,3,5,7,10];


function getRootIndex(string, note) {
  let index = string.indexOf(note);
  console.log(index);
}

// getRootIndex(B_String, 'Bb');

function getScaleIntervals(string, key, scale) {
  //TODO: return array of intigers reprisenting the notes in the scale
}