console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];
function addToCollection(title,artist,yearPublished){
  let newAlbum= {
    title,
    artist,
   yearPublished
  };

collection.push(newAlbum);
return newAlbum;
}

addToCollection(myCollection,"Thriller","Michael Jackson",1982);
addToCollection(myCollection,"Damn","Kendrick Lamar", 2017);
addToCollection(myCollection,"2014 Forest Hills Drive", "J.Cole",2014);
addToCollection(myCollection,"Candy Rain", "Soul for Real",1995);
addToCollection(myCollection,"What's Going On", "Marvin Gaye",1971);
addToCollection(myCollection,"Abbey Road", "The Beatles",1969);
console.log(myCollection);

function showCollection(collection){
  for(let i = 0; i<collection.length; i++){
     let album = collection[i];
    console.log(album.title + album.artist + album.yearPublished);
  }
}
function findByArtist(collection, artist){
  let mat
  for(let i =0; i<collection.length; i++){

  }
}

















// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
