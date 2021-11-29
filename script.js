"use strict";

let lang = 'ru';
//let lang = 'en';
//Первый способ
if (lang == 'ru') {
    console.log('Понедельник');
    console.log('Вторник');
    console.log('Среда');
    console.log('Четверг');
    console.log('Пятница');
    console.log('Суббота');
    console.log('Воскресенье');
} else if (lang == 'en') {
    console.log('Sunday');
    console.log('Monday');
    console.log('Tuesday');
    console.log('Wednesday');
    console.log('Thursday');
    console.log('Friday');
    console.log('Saturday');
}

//Второй способ
switch (lang) {
    case 'ru': {
    console.log('Понедельник');
    console.log('Вторник');
    console.log('Среда');
    console.log('Четверг');
    console.log('Пятница');
    console.log('Суббота');
    console.log('Воскресенье');
    break;        
    }
    case 'en': {
    console.log('Sunday');
    console.log('Monday');
    console.log('Tuesday');
    console.log('Wednesday');
    console.log('Thursday');
    console.log('Friday');
    console.log('Saturday');
    break;
    } 
}

//Третий способ

lang = [['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']];

//let i = 0; //для ру
let i = 1 //для en

for (let index = 0; index < lang[i].length; index++) {
    console.log(lang[i][index]);
    
}



//Задача вторая

//let namePerson = 'Артем';
let namePerson = 'Александр';
//let namePerson = 'Андрей';

(namePerson == 'Артем')?console.log('Директор'):(namePerson == 'Александр')?console.log('преподаватель'):console.log('студент');


