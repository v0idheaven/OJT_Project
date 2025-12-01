let basicscreen = document.querySelector('#basic-screen');
let sciscreen = document.querySelector('#scientific-screen');
let btns = document.querySelectorAll('.btn');
let modeBtns = document.querySelectorAll('.mode-btn');
let container = document.querySelector('.container');

modeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (btn.dataset.mode === "scientific") {
            container.classList.add('mode-scientific');
            currentScreen = sciscreen;
        } else {
            container.classList.remove('mode-scientific');
            currentScreen = basicscreen;
        }
    });
});

btns.forEach((btn) => {
    btn.addEventListener('click', function() {
        let btntext = btn.innerText;
        
        if (btntext === 'pi'){
            currentScreen.value += Math.PI;
            return;
        }
        
        if (btntext === 'log') {
            currentScreen.value += 'log(';
            return;
        }
        
        if (btntext === 'root'){
            currentScreen.value += 'sqrt(';
            return;
        }

        if (btntext === 'x^y') {
            currentScreen.value += '^';
            return;
        }

        if (btntext === 'sin') {
            currentScreen.value += 'sin(';
            return;
        }

        if (btntext === 'cos') {
            currentScreen.value += 'cos(';
            return;
        }

        if (btntext === 'tan') {
            currentScreen.value += 'tan(';
            return;
        }

        if (btntext === 'e') {
            currentScreen.value += 'e';
            return;
        }

        if (btntext !== 'AC' && btntext !== 'CE' && btntext !== '=') {
            
            if (btntext === '×') btntext = '*';
            if (btntext === '÷') btntext = '/';

            currentScreen.value += btntext;
        }

        if (btntext === 'AC') {
            currentScreen.value = '';
        }

        if (btntext === 'CE'){
            currentScreen.value = currentScreen.value.slice(0,-1)
        }

    if (btntext === '='){
        try {
            let val = currentScreen.value;
            
            val = val.replace(/log/g, 'Math.log10');
            val = val.replace(/sqrt/g, 'Math.sqrt');
            val = val.replace(/\^/g, '**');
            val = val.replace(/sin/g, 'Math.sin');
            val = val.replace(/cos/g, 'Math.cos');
            val = val.replace(/tan/g, 'Math.tan');
            val = val.replace(/pi/g, 'Math.PI');
            val = val.replace(/e/g, 'Math.E');

            

            currentScreen.value = eval(val); 
        } catch {
            currentScreen.value = 'Error';
        }
        return;
    }

    if (btntext === 'x!'){
            let number = parseInt(currentScreen.value);

            let fact = 1;

            if (number < 0){
                currentScreen.value = 'Error';
            }
            else{
                for (let i = 1; i<=number; i++){
                    fact = fact * i
                }
                currentScreen.value = fact;
            }
        }

    });

    

});