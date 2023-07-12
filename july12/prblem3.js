function list2(names) {
    let names_length = names.length
    let names_string = ''
    let last_name_index = names_length - 1

    if (names_length == 0) {
        return "''"
    }

    if (names_length == 1) {
        return names[0].name
    }

    for(let i=0; i < names_length; i++) {
        if (i == last_name_index) {
            names_string = names_string.slice(0, -1)
            return names_string += ' & ' + names[i].name

        }else {
            names_string += names[i].name + ','

        }
    }

    return names_string
}

console.log(list2([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
// returns 'Bart, Lisa & Maggie'
console.log(list2([ {name: 'Bart'}, {name: 'Lisa'} ]))
// returns 'Bart & Lisa'
console.log(list2([ {name: 'Bart'} ]))
// returns 'Bart'
console.log(list2([]))
// returns '' */


console.log(list2([{name: 'Bart'}, {name: 'Bart'}, {name: 'Bart'}]))