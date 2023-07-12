function arrayDiff(a, b) {
    if (a.length === 0 || b.length === 0) {
        return a;
    }
    let newArray = a.slice(); // creating a copy of a

    for (let j = 0; j < b.length; j++) {
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i] === b[j]) {
                newArray.splice(i, 1);
                i--;
            }
        }
    }
    console.log(newArray);
}

arrayDiff([1, 2, 3, 1, 3, 2,0,2,2,2,8,8,0,8,7], [1, 2, 8]);
