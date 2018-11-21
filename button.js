function linksSetcolor(color){
    var links=document.querySelectorAll('a');
    for (i=0;i<links.length;i++){
            links[i].style.color=color;
        }
}
function bodySetcolor(color, backgroundcolor){
    var target = document.querySelector('body');
    target.style.color=color;
    target.style.backgroundColor=backgroundcolor;
}
function nightdayhandler(self){
    var links=document.querySelectorAll('a');
    var i;
    if(self.value === 'Night') {
        self.value='Day';
        bodySetcolor('white', 'black');
        linksSetcolor('powderblue');
        
    } 
    else {
        self.value='Night';
        bodySetcolor('black', 'white');
        linksSetcolor('black');
        
    }  
}