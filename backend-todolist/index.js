const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect( erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('Database Conectada');
        const app = customExpress();
        const port = 8080;

        app.listen(port, () => console.log(`Servidor iniciado em http://localhost:${port}/`));
    }
})