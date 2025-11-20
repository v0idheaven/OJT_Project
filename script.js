let screen = document.querySelector('#screen');
let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', function() {
        let btntext = btn.innerText;

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

        if (btntext === '=')
            try {
            screen.value = eval(screen.value);
        } catch {
            screen.value = 'Error'
        }
    });
});