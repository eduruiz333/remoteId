(menu = () => {
    const menu = document.querySelectorAll('.nav-main')
    const menuItens = `
        <li>
            <div class="user-info text-right">
                <p class="font-italic cliMail mb-1">juliana.pisaneschi@certisign.com.br</p>
                <p class="cliConfig"><a href="#" class="my-account" title="Minha conta">Minha conta</a> | <a href="#" class="logout" title="Sair">Sair</a></p>
            </div>
        </li>
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