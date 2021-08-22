
const express = require('express')

const app = express()
app.use(express.json())

games = ['League of Legens', 'DOTA', 'Need For Speed', 'GTA V', 'GTA - San Andreas', 'Pokemon GO', 'PUBG']

app.get('/', function(req, res){
    return res.send('<h1>Primeira página<h1>')
})

app.get('/games', (req, res)=> res.send(games))


// Seleciona o Jogo por ID (GET)
app.get('/games/:id', (req, res)=>{
    const id = req.params.id
    return res.send(games[id])
})


// Cria um novo jogo
app.post('/games', (req, res)=>{
    const novo = req.body.nome
    games.push(novo)
    return res.send('Deu certo')
})


// Edita um jogo
app.put('/games/:id', (req, res)=>{
    const id = req.params.id
    const edita = req.body.edita
    games[id] = edita
    return res.send('Opa, você alterou o nome do jogo!')
})


// Deleta o id 
app.delete('/games/:id', (req, res)=>{
    const id = req.params.id
    games.splice(id, 1)
    return res.send('Você apagou um jogo da lista! ')
})


app.listen(3000, function(){
    console.log('Será que está funcionando?')
})
