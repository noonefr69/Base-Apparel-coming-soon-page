const email = document.getElementById('value');
const danger = document.getElementById('khatar');
const dangerText = document.getElementById('errorr');
const form = document.getElementById('formm');
const btn = document.getElementById('click') ;

// form.addEventListener('submit' , (e) => {
//     if(email.validaty.typeMismatch){
//         e.preventDefault();
//         danger.style.display = "flex" ;
//         dangerText.style.display = 'flex'
//     }else{
//         danger.style.display = 'none';
//         dangerText.style.display = 'none'
//     }
// })

btn.addEventListener('click' , (e) => {
    e.preventDefault();
    const er = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/ ;

    if(!er.test(email.value.toLowerCase())){
        dangerText.style.display = 'block' ;
        email.style.borderColor = 'red';
        danger.style.display = 'block' ;
    } else {
        email.style.borderColor = 'green'
        dangerText.style.display = 'none' ;
        danger.style.display = 'none' ;
    }

    email.value = '' ;
})