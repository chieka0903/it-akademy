var str = prompt('Введите строку');

function vowels(str) {
    str = str.toLowerCase();
    let arr=Array.from(str);
    let count=0;
    const v ='аиеёоуыэюя';
    arr.forEach(vow => {
       if (v.includes(vow)) {
            count++
       };
});
return count;
}
console.log(vowels(str));

function vowels2(str) {
    str = str.toLowerCase();
    let v ='аиеёоуыэюя';
    let count = [...str].filter(vow => 
        v.includes(vow)).length;
return count;
}
console.log(vowels2(str));

function vowels3(str) {
    str = str.toLowerCase();
    let arr=Array.from(str);
    const v ='аиеёоуыэюя';
    let count = arr.reduce((a, b) => v.includes(b) ? a + 1 : a, 0);
    return count;
}
console.log(vowels3(str));