/*Given: an array containing hashes of names
Return: a string formatted as a list of names
separated by commas except for the last two names, which should be separated by an 
ampersand.
Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'
list([ {name: 'Bart'} ])
// returns 'Bart'
list([])
// returns '' */


function list(names){
  let newArray = []; 
  let newString = '';

  names.forEach(item  => {
    newArray.push(item.name);
  });
  const len = newArray.length;
  if(len === 0 || len === 1){
    console.log(newArray.toString());
  }

  for(let i = 0; i < len - 1; i++ ){
    newString += newArray[i] + ', ' ;
  }
  let result = newString.slice(0, -2);
  if (len > 1){
    result = result + ' & ' + newArray[len-1];
  }
  console.log(result);
}


list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);
list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'
list([ {name: 'Bart'} ])
// returns 'Bart'
list([])
