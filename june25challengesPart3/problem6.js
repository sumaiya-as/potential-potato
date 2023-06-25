function getCount(str) {
  let vowelNumber = 0;
  const newString = str.split("");
  for(let i= 0; i < newString.length; i++){
    if(newString[i] === "a"){
      vowelNumber ++;
    }
    else if(newString[i] === "e"){
      vowelNumber ++;
    }
    else if(newString[i] === "i"){
      vowelNumber ++;
    }
    else if(newString[i] === "o"){
      vowelNumber ++;
    }
    else if(newString[i] === "u"){
      vowelNumber ++;
    }
  }
  return vowelNumber;
}
//another solution by me using switch
function getCount(str) {
  let vowelNumber = 0;
  const newString = str.split("");
  for(let i= 0; i < newString.length; i++){
    switch(newString[i]){
        case 'a':
            vowelNumber ++;
            break;
        case 'e':
            vowelNumber ++;s
            break;
        case 'i':
            vowelNumber ++;
            break;
        case 'o':
            vowelNumber ++;
            break;
        case 'u':
            vowelNumber ++;
            break;
    }
  }
  return vowelNumber;
}
//found one easy solution
function getCount(str) {
  var vowelsCount = 0;
  str.split("").forEach(function(x){
    if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
      vowelsCount += 1;
    }
  });  
  return vowelsCount;
}