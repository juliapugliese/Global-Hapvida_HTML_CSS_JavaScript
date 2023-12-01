document.addEventListener('DOMContentLoaded', ()=> {



    const buttonTheme = document.querySelector('.js-theme');
    buttonTheme.addEventListener('click', ()=>{
        const body = document.querySelector('body');

        if (body.classList.contains('theme-light')) {

            body.classList.remove('theme-light');
            body.classList.add('theme-dark');

            document.querySelector('#icone-usuario').src = './assets/accountcircle-branco.png';
            document.querySelector('#logo-hapvida').src = './assets/hapvida-logo-branco.png';

            document.querySelector('#NotreDameIntermedica').src = './assets/grupo-notredame-branco.png';
            document.querySelector('#logo-hapvida-realizacao').src = './assets/hapvida-logo-branco.png';
            document.querySelector('#logo-fiap-realizacao').src = './assets/group.png';

            document.querySelector('#logos-footer').src = './assets/logos-1-oih-branco.png';
            document.querySelector('#logo-copyright').src = './assets/ph-copyright-branco.png';
            document.querySelector('#facebook').src = './assets/vector-FC-branco.png';
            document.querySelector('#twitter').src = './assets/vector-TW-branco.png';
            document.querySelector('#youtube').src = './assets/vector-Rmj-branco.png';
            document.querySelector('#linkedin').src = './assets/vector-GyX-branco.png';
            document.querySelector('#instagram').src = './assets/vector-k4R-branco.png';

            document.querySelector('#fichaMedica').src = './assets/vector-NWD-branco.png';
            document.querySelector('#agenda').src = './assets/vector-3F7-branco.png';
            document.querySelector('#alarme').src = './assets/vector-v2m-branco.png';
            document.querySelector('#historicoMedico').src = './assets/vector-RTf-branco.png';
            document.querySelector('#contatos').src = './assets/vector-vHX-branco.png';
            document.querySelector('#carteiraVacinacao').src = './assets/vector-b85-branco.png';






        }
        else {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');

            document.querySelector('#icone-usuario').src = './assets/accountcirclefill0wght400grad0opsz24-1.png';
            document.querySelector('#logo-hapvida').src = './assets/hapvida-logo-0.png';

            document.querySelector('#NotreDameIntermedica').src = './assets/grupo-notredame-intermedica-logo-2-2.png';
            document.querySelector('#logo-hapvida-realizacao').src = './assets/hapvida-logo-0.png';
            document.querySelector('#logo-fiap-realizacao').src = './assets/download-2.png';

            document.querySelector('#logos-footer').src = './assets/logos-1-oih.png';
            document.querySelector('#logo-copyright').src = './assets/ph-copyright.png';
            document.querySelector('#facebook').src = './assets/vector-WTB.png';
            document.querySelector('#twitter').src = './assets/vector-WyF.png';
            document.querySelector('#youtube').src = './assets/vector-Rmj.png';
            document.querySelector('#linkedin').src = './assets/vector-GyX.png';
            document.querySelector('#instagram').src = './assets/vector-k4R.png';

            document.querySelector('#fichaMedica').src = './assets/vector-NWD.png';
            document.querySelector('#agenda').src = './assets/vector-3F7.png';
            document.querySelector('#alarme').src = './assets/vector-v2m.png';
            document.querySelector('#historicoMedico').src = './assets/vector-RTf.png';
            document.querySelector('#contatos').src = './assets/vector-vHX.png';
            document.querySelector('#carteiraVacinacao').src = './assets/vector-b85.png';



            

        }
    })



});


