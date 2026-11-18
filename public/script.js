import express from 'express'
import Calcular from './calcular.js'
 
const app = express()
const servidor = 3000
 
 
app.use(express.static('public'))
 
 
app.listen(servidor, () => {
    console.log(`Servidor: ${servidor} ativo`)
})
 
app.get('/IMC', (req, res) => {
    const Altura = Number(req.query.Altura)
    const Peso = Number(req.query.Peso)
    const Resultado = Calcular(Peso, Altura);

 
    res.json({
        CalculoFeito: Resultado
    })
})
