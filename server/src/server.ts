import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    console.log('Listagem de Usuarios')

    response.json([
        'Paulo',
        'Max',
        'Igor',
        'Adreas',
        'Jairo'
    ])
})

app.listen(3333)