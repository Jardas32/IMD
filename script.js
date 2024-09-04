const search = document.querySelector('.search');
let inp = document.querySelector('.inp');

let initiall = inp.style.display = 'initial';
let none = inp.style.display = 'none';

search.addEventListener('click', function CliCk() {

    let style = getComputedStyle(inp);

    if ( style.display === 'none' )  {
         inp.style.display = 'initial'
    } 
    else if (style.display !== 'none') {
         inp.style.display = 'none' 
     }
        
});


