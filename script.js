const COLORS=document.querySelectorAll('.color');
COLORS.forEach(color =>{
    color.addEventListener('click',()=>{
        let className=color.className;
        if(!color.classList.contains('active')){
            let colorName = className.slice(className.indexOf('-')+1,className.length);
            color.classList.add('active');
            setNewColor(colorName);
        }
    });
})
function resetActiveColors(){
    COLORS.forEach(color=>{
        color.classList.remove('active');
    });
}
function setNewColor(color){
    document.querySelector('.gallery img').src='img_${color}.jpg';


}