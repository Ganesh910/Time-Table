function rotate() {
    const btn = document.getElementById('rotate-btn');
    const btn_div = document.getElementById('add_div');
    const sub_list = document.getElementById('sub_list');
    const isMoved = btn.getAttribute('data-moved') == 'true';
    const textBox = document.createElement('input');
    textBox.setAttribute("type", "text");
    textBox.setAttribute("name", "new_sub");
    textBox.setAttribute("class", "inputBox");
    textBox.setAttribute("id", "new_sub");

    if (!isMoved) {
        console.log("Clockwise Move");
        btn.style.left = '81%';
        btn.style.transform = 'rotate(45deg)';
        btn.style.background = '#7E57C2';
        btn.setAttribute('data-moved', 'true');
        btn_div.insertBefore(textBox, btn_div.firstChild);
        setTimeout(() => {
            textBox.classList.add('visible');
        }, 350);
    } else {

        console.log("Anticlockwise move");
        btn.style.left = '5%';
        btn.style.transform = 'rotate(0deg)';
        btn.style.background = '#EF5350';
        btn.setAttribute('data-moved', 'false');
        const inputBox = document.getElementById('new_sub');
        var data = inputBox.value;
        if (data!=''){
            console.log("Running");
            const li = document.createElement('li');
            li.innerHTML=data;
            sub_list.appendChild(li);
        }
        inputBox.classList.remove('visible');
        setTimeout(() => {
            inputBox.parentNode.removeChild(inputBox);
        }, 1000);
    }
}
