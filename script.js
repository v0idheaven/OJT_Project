let screen = document.querySelector('#screen');
let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', function() {
        let btntext = btn.innerText;
        
        //we added the pi value here because niche pi value k aage btntext bhi print ho rha thaa
        if (btntext === 'pi'){
            screen.value += Math.PI;
            return;
        }
        
        if (btntext === 'log') {
            screen.value += 'log(';
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
                
                // Just change the name so computer understands
                val = val.replace(/log/g, 'Math.log10');
            screen.value = eval(screen.value);
        } catch {
            screen.value = 'Error'
        }
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