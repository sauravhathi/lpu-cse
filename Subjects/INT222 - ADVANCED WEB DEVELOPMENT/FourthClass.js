let x = function (e) // e is event object gives us pointer events 
{
    alert("Content1")
}
let y = function(e)
{
    alert("Another content")
}
let btn = document.querySelector('.btn');

btn.addEventListener('click',x)
btn.addEventListener('click',y)
let a = prompt('Enter Number : - ')
if(a=="2")
{
    btn.removeEventListener('click',y)
}
