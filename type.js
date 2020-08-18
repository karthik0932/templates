console.log('test');
var text = document.getElementById("fancy");
var str_txt = text.textContent;
console.log(str_txt);
var splittext = str_txt.split('');
console.log(splittext);

text.innerHTML = ''

let timer = setInterval(add,150);
var c = 0
function add()
{
    
    text.innerHTML += splittext[c] ;
    c++;
    if (c > splittext.length-1){
        c = 0;
        text.innerHTML = '';
        
    }
}