// ***************************** Estrutura **********************************************

// Inicializa uma nova aplicação NODE ( npm init -y )
// Instalar dependencias: (npm install express) - Express
// Instalar Nodemon : (npm install nodemon --save-dev )
// Criar script ( "start" : "nodemon app.js" - no package.json)
// Criar gitignore
// Criar ' const express = require('express') '
// Instancia : ' const app = express() ' 
// Colocar aplicação para rodar em alguma porta " app.listen(3000, function(){
//   console.log('Acho que está funcionando')})

//******************************************************************************** */

const express = require('express')

const app = express()
app.use(express.json())

filmes = ['Harry Potter', 'Senhor dos aneis', 'O terno de um bilhão de dólares', 'Matrix', 'Hobbit', 'Vingadores']

app.get('/', function(req, res){
    return res.send('<h1>Primeira página<h1>')
})

app.get('/filmes', (req, res)=> res.send(filmes))


// Seleciona o Filme por ID (GET)
app.get('/filmes/:id', (req, res)=>{
    const id = req.params.id
    return res.send(filmes[id])
})


// Cria um novo item
app.post('/filmes', (req, res)=>{
    const novo = req.body.nome
    filmes.push(novo)
    return res.send('Deu certo')
})


// Edita um item
app.put('/filmes/:id', (req, res)=>{
    const id = req.params.id
    const edita = req.body.edita
    filmes[id] = edita
    return res.send('Opa, você alterou o nome do filme!')
})


// Deleta o id 
app.delete('/filmes/:id', (req, res)=>{
    const id = req.params.id
    filmes.splice(id, 1)
    return res.send('Apagoooooooou, foi se o melhor filme da lista...')
})


app.listen(3000, function(){
    console.log('Será que está funcionando')
})
