do {
    var firstName=prompt('Введите Ваше имя:');
} while (!firstName);

do {
var secondName=prompt('Введите Ваше отчество:');
} while (!secondName);

do {
var surname=prompt('Введите Вашу фамилию:');
} while (!surname);

do {
    var ageStr=prompt('Введите Ваш возраст в годах:');
    var age=parseInt(ageStr);
} while (!ageStr || Number.isNaN(age));
  
let gender=confirm('вы мужчина? Если ДА, нажмите ОК, если НЕТ, нажмите ОТМЕНА');
let genderStr=gender?'мужской':'женский';

let pension=gender? ((age>=60)?'да':'нет') :((age>=55)?'да':'нет');

alert('ваше ФИО: '+ surname +' ' +  firstName + ' '  +  secondName + '\n' +
         'ваш возраст в годах: ' + age + '\n' +
         'ваш возраст в днях: ' + (age*365) + '\n' +
          'через 5 лет вам будет: ' + (age+5) + '\n' +
          'ваш пол: '+ genderStr + '\n' +
          'вы на пенсии: ' + pension);
          