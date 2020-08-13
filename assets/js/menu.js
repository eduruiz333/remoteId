(menu = () => {

    const menu = document.querySelectorAll('.nav-main')
     const menuItens = `
        <li class="nav-item">
            <a class="nav-link certificados" href="#" title="Meus Certificados">Meus Certificados</a>
        </li>
        <li class="nav-item">
            <a class="nav-link extrato" href="#" title="Extrato de Uso">Extrato de Uso</a>
        </li>
        <li class="nav-item">
            <a class="nav-link funcionalidades" href="#" title="Funcionalidades">Funcionalidades</a>
        </li>
        <li class="nav-item">
            <a class="nav-link suporte" href="#" title="Ajuda e Suporte">Ajuda e Suporte</a>
        </li>
         `
    for (let i = 0; i < menu.length; i++) {
        menu[i].innerHTML = menuItens
    }
})()