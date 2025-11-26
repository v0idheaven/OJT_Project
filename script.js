let screen = document.querySelector('#screen');
let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', function() {
        let btntext = btn.innerText;
        
        if (btntext === 'pi'){
            screen.value += Math.PI;
            return;
        }
        
        if (btntext === 'log') {
            screen.value += 'log(';
            return;
        }
        
        if (btntext === 'root'){
            screen.value += 'sqrt(';
            return;
        }

        if (btntext === 'x^y') {
            screen.value += '^';
            return;
        }

        if (btntext === 'sin') {
            screen.value += 'sin(';
            return;
        }

        if (btntext === 'cos') {
            screen.value += 'cos(';
            return;
        }

        if (btntext === 'tan') {
            screen.value += 'tan(';
            return;
        }

        if (btntext === 'e') {
            screen.value += 'e';
            return;
        }

        if (btntext !== 'AC' && btntext !== 'CE' && btntext !== '=') {
            
            if (btntext === '×') btntext = '*';
            if (btntext === '÷') btntext = '/';

            screen.value += btntext;
        }

        if (btntext === 'AC') {
            screen.value = '';
        }

        if (btntext === 'CE'){
            screen.value = screen.value.slice(0,-1)
        }

    if (btntext === '='){
        try {
            let val = screen.value;
            
            val = val.replace(/log/g, 'Math.log10');
            val = val.replace(/sqrt/g, 'Math.sqrt');
            val = val.replace(/\^/g, '**');
            val = val.replace(/sin/g, 'Math.sin');
            val = val.replace(/cos/g, 'Math.cos');
            val = val.replace(/tan/g, 'Math.tan');
            val = val.replace(/pi/g, 'Math.PI');
            val = val.replace(/e/g, 'Math.E');

            

            screen.value = eval(val); 
        } catch {
            screen.value = 'Error';
        }
        return;
    }

    if (btntext === 'x!'){
            let number = parseInt(screen.value);

            let fact = 1;

            if (number < 0){
                screen.value = 'Error';
            }
            else{
                for (let i = 1; i<=number; i++){
                    fact = fact * i
                }
                screen.value = fact;
            }
        }

    });

    

});