let count = 1;

let total = 0;


const form =
document
.getElementById(
"studentForm"
);

const table =
document
.getElementById(
"studentTable"
);



form.addEventListener(

"submit",

function(e){

e.preventDefault();


let name =
document
.getElementById(
"name"
).value;

let program =
document
.getElementById(
"program"
).value;

let year =
document
.getElementById(
"year"
).value;


let row =
table.insertRow();


row.innerHTML=`

<td>${count++}</td>

<td>${name}</td>

<td>${program}</td>

<td>${year}</td>

<td>

<button
onclick=
"removeStudent(this)">

Delete

</button>

</td>

`;

total++;

updateTotal();

form.reset();

}

);



function removeStudent(btn){

btn
.parentElement
.parentElement
.remove();

total--;

updateTotal();

}



function updateTotal(){

document
.getElementById(
"total"
)

.innerHTML=

total;

}



document
.getElementById(
"search"
)

.addEventListener(

"keyup",

function(){

let value =
this.value
.toLowerCase();

let rows =
table.rows;

for(

let row
of rows

){

row.style.display=

row.innerText
.toLowerCase()

.includes(
value
)

?

""

:

"none";

}

}



);



function clock(){

document
.getElementById(
"time"
)

.innerHTML=

new Date()

.toLocaleString();

}

setInterval(
clock,
1000
);