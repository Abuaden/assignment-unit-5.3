console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

var myCollection = [];
function addToCollection(collection,title,artist,yearPublished){
  var newAlbum= {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

collection.push(newAlbum);
return newAlbum;
}


var album1 = addToCollection(myCollection,"Thriller","Michael Jackson",1982);
var album2 = addToCollection(myCollection,"Damn","Kendrick Lamar", 2017);
var album3 = addToCollection(myCollection,"2014 Forest Hills Drive", "J.Cole",2014);
var album4 = addToCollection(myCollection,"Candy Rain", "Soul for Real",1995);
var album5 = addToCollection(myCollection,"What's Going On", "Marvin Gaye",1971);
var album6 = addToCollection(myCollection,"Abbey Road", "The Beatles",1969);

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
console.log(album5);
console.log(album6);
console.log(myCollection);



















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
