import express from 'express'

const app = express()

app.get('/users', () => {
    console.log('Listagem de Usuarios')
})

app.listen(3333)