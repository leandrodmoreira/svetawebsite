function clickMenu(){

}
const button = document.querySelector('#burg');
button.addEventListener('click', function(event) {
document.querySelector('.buttons')
.classList.toggle('fade');

document.querySelector('.pointer1')
.classList.toggle('section1');

document.querySelector('.pointer2')
.classList.toggle('section2');

})