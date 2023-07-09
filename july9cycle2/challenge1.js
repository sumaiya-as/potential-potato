/*In this kata you will create a function that takes a list of non-negative 
integers and strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */


function filter_list(l) {
  const newList = l.filter(callback);
  console.log(newList);
}

function callback(listItem){
    if(typeof listItem === 'number'){
        return true;
    }
    else{
      return false;
    }
}
filter_list(['a', 1, 3, 'g', 'fr', 4, 5, 7, 'r']);
