function rotate(){
    const btn = document.getElementById('rotate-btn');
    const isMoved = btn.getAttribute('data-moved')=='true';

    if(!isMoved){
        console.log("Clockwise Move");
        btn.style.left='40%';
        btn.style.transform = 'rotate(45deg)';
        btn.style.background='#7E57C2';
        btn.setAttribute('data-moved', 'true');
    }
    else{
        console.log("Anticlockwise move");
        btn.style.left='5%';
        btn.style.transform = 'rotate(-45deg)';
        btn.style.background='#EF5350';
        btn.setAttribute('data-moved', 'false');
    }
}