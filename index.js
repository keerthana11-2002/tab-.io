const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')


const tab1 = document.querySelector('.tab1')
const tab2 = document.querySelector('.tab2')
const tab3 = document.querySelector('.tab3')

tab1.addEventListener("click",close1);
tab2.addEventListener("click",close2);
tab3.addEventListener("click",close3);

function close1(){
    p1.style.display = "block"
    p2.style.display = "none"
    p3.style.display = "none"
}


function close2(){
    p2.style.display = "block"
    p1.style.display = "none"
    p3.style.display = "none"

}

function close3(){
    p3.style.display = "block"
    p1.style.display = "none"
    p2.style.display = "none"
}

   
