function titleCase(str) {
  var str = str.toLowerCase().split(" "); 
  var firstLetter = [];
  for(var i = 0; i < str.length; i++) {
    var k = str[i].substring(1);
    var j = str[i].charAt(0).toUpperCase();
    firstLetter.push(j + k);
  }
  firstLetter = firstLetter.join(" ");
  return firstLetter;
  
}

titleCase("I'm a little tea pot", "");
