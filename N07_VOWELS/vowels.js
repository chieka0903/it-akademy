
var b = prompt('Введите строку');
var bStr = b.toLowerCase();

var  vowels2 = str => {
    let v = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let count = 0;
    for (let vow of str) {
        if (v.includes(vow)) {
            count++
        }
    }
    return count
}

console.log(vowels2(bStr));


function vowels(str) {
    let v ='аиеёоуыэюя';
    let count = [...str].filter(vow => 
        v.includes(vow)).length;
return count;
}
console.log(vowels(bStr));

function vowels4(str) {
    let v = "аоиеёэыуюя";
    let count = [...str].reduce((a, b) => v.includes(b) ? a + 1 : a, 0);
    return count;
}

function vowels2(str) {
    let v = "аоиеёэыуюя";
    let count = 0;
    [...str].forEach(char => {
        if (v.includes(char))
            ++count;
    });
    return count;
}



