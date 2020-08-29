var x = document.getElementsByTagName("h1");
for(var i=0; i<x.length;i++ ){
    x[i].innerHTML = './ '+x[i].innerHTML;
}



var all_ul = document.getElementsByTagName("ul");


for(var i=0; i<all_ul.length;i++ ){
    var all_li = all_ul[i].getElementsByTagName("li");
    
    
    
    for(var j=0; j<all_li.length;j++ ){
        all_li[j].innerHTML = '<h5 style="display:inline"> &gt;&gt;</h5> &nbsp;' + all_li[j].innerHTML;
       
    }
}