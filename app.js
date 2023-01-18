let ArrTag = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
let result = {}
ArrTag.forEach(function(a){

    let  arrTagElement = ArrTag [a]
    if (result[a] != undefined )
        ++result[a];
    else
        result[a] = 1;
})

for (var key in result)
    console.log(ArrTag);
let tagging = Object.values(result);
let Arrtag = Object.keys(result);

for (let i = 0; i < tagging.length; i++) {
    Arrtag[i] = Arrtag[i] + ": " + tagging[i];
}
let arrObj = { ...Arrtag };
console.log(arrObj);

