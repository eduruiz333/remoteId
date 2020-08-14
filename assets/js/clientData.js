(getClientData = () => {
    const cliName = document.querySelectorAll('.cliName')
    const clientName = 'Juliana'
    for (let i = 0; i < cliName.length; i++) {
        cliName[i].innerHTML = `${clientName}`
    }

    const cliMail = document.querySelectorAll('.cliMail')
    const clientEmail = 'juliana.pisaneschi@certisign.com.br'
    for (let i = 0; i < cliMail.length; i++) {
        cliMail[i].innerHTML = clientEmail
    }

    const cliConfig = document.querySelectorAll('.cliConfig')
    const clientConfig = `<a href="#" class="my-account" title="Minha conta">Minha conta</a> | <a href="#" class="logout" title="Sair">Sair</a>`
    for (let i = 0; i < cliConfig.length; i++) {
        cliConfig[i].innerHTML = clientConfig
    }
})()