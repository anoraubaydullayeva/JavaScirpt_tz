let films = [
    {
        time: "10:00",
        name:  "Человек-паук",
        genre: "Фантастика, боевик, приключения",
    },
    
    {
        time: " 12:00",
        name:  "Собачья жизнь 2",
        genre: "Фэнтэзи, драма, комедия",
    },
    
    {
        time: "14:00",
        name:  "История игрушек 4",
        genre: "Мультфильм, фэнтэзи, комедия",
    },
    
    {
        time: "16:00",
        name:  "Люди в чёрном: Интэрнэшнл",
        genre: "Фантастика, боевик, комедия",
    },
];

let table_body = document.getElementById('film__table');

for(i = 0; i < 4; i++){

    table_body.innerHTML += `
   <tr>  
    <td class="table__row">
    <img class="ckeck__mark" src="./image/check__mark.png" alt="check_mark">
    </td>
    <td>  ${films[i].time}</td>
   
    <td> ${films[i].name}</td>
    
    <td>${films[i].genre}</td>
    
    </tr>
    `
}

let person =["person", 12, true ]

for( i =0; i < person.length; i++){
if(i%2===0){console.log(i, person[i])}
}

let b=1;
if(b%2===0){console.log("juft")}
else(console.log("tog"))

