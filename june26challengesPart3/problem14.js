/*It's pretty straightforward. 
Your goal is to create a function that removes the 
first and last characters of a string. You're given 
one parameter, the original string. You don't have to 
worry with strings with less than two characters.*/

function removeChar(str){
  let lastIndex = str.length - 1;
  let arraY = str.split('');
  arraY.splice(lastIndex,1);
  arraY.splice(0,1);
  const newString = arraY.join('');
  return newString;

};
