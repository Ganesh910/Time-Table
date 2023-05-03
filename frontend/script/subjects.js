function rotate(){
    const btn = document.getElementById('rotate-btn');
    const isMoved = btn.getAttribute('data-moved')=='true';

    if(!isMoved){
        console.log("Clockwise Move");
        btn.style.transform = 'rotate(45deg)';
        btn.style.left='80%';
        btn.setAttribute('data-moved', 'true')
    }
    else{
        console.log("Anticlockwise move");
        btn.style.transform = 'rotate(-45deg)';
        btn.setAttribute('data-moved', 'false')
    }
}