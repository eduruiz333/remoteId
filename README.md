## INSTALAÇAO DO GULP

Podemos instalar o Gulp usando npm. Adicionaremos um sinalizador -g para garantir que o Gulp esteja disponível globalmente para qualquer projeto:
sudo npm install gulp-cli -g

Para verificar se o Gulp foi instalado, digite:
gulp -v

Agora execute o comando npm init -y dentro do diretório do projeto.

Uma vez criado o arquivo package.json, podemos instalar o Gulp dentro da pasta do projeto usando o seguinte comando:
npm install gulp --save-dev

Adicionamos --save-dev, com o objetivo de adicionar o gulp como uma dependência de desenvolvimento (dev dependency) no arquivo package.json.

Podemos compilar o Sass para CSS através do Gulp com a ajuda de um plugin chamado gulp-sass. Você pode instalar o gulp-sass em seu projeto usando a instalação do npm.
npm install node-sass gulp-sass --save-dev

Repare que na linha de comando acima instalamos também uma outro plugin chamadonode-sass que é necessário para o funcionamento do gulp-sass .

### Configurando as Tarefas

Você precisará criar um arquivo dentro do diretório raiz do seu projeto chamado gulpfile.js e incluir todas as variáveis dos plugins que acabamos de instalar. Neste arquivo, vamos criar a tarefa chamada “sass”.

### EXEMPLO DE CONFIGURAÇÃO DO PACKAGE.JSON

https://gist.github.com/eduruiz333/f2ba26fd412604696974f2b7f9283c36