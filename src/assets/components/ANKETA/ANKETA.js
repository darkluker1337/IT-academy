export const Anketa = ()=>{
    let firstName = prompt('Ваше имя');
    let secondName = prompt('Ваша Фамилия');
    let fatherName = prompt('Ваше Отчество'); 

    while(!firstName || !secondName || !fatherName || !isNaN(firstName) || !isNaN(secondName) || !isNaN(fatherName)){
     firstName = prompt('Ваше имя');
     secondName = prompt('Ваша Фамилия');
     fatherName = prompt('Ваше Отчество');
    }

    let age = prompt('Ваш возраст')
    while(isNaN(age) || !age ){
        age = prompt('Ваш возраст')
    }

    let sex = confirm('Ваш пол - мужской?');
    let isPansion = confirm('Вы на пенсии?');

    if(sex){
        sex = 'мужской'
    }else{
        sex = 'женский'
    }
    if(isPansion){
        isPansion = 'да'
    }else{
        isPansion = 'нет'
    }
    let InDays = age * 365;

    alert(`
    ваше ФИО:${secondName} ${firstName} ${fatherName}
    ваш возраст в годах: ${age}
    ваш возраст в днях: ${InDays}
    через 5 лет вам будет: ${+age + 5}
    ваш пол: ${sex}
    вы на пенсии: ${isPansion}
    `)
}