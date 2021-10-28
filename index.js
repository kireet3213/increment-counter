
let mycount = document.getElementById("mycount");
let savel= document.getElementById("save-el");
console.log(mycount);

let count=0;

function increment() {
  count = count + 1;
  mycount.innerText = count;
}
function save(){
    let entry = count +' - ';
    savel.textContent += entry;
    console.log(count)
    mycount.textContent=0;
    count=0;
}


//textcontent takes into account css styles