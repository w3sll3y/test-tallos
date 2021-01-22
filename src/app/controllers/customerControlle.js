const express = require('express')
const authMiddleware = require('../middlewares/auth')

const Customer = require('../models/customer')
const Task = require('../models/task')

const router = express.Router()

router.use(authMiddleware)

router.get('/', async (req, res) => {
    try{
        const customers = await Customer.find()
        
        return res.send({ customers })
    }catch(err){
        return res.status(400).send({ error:'Erro ao carregar contatos'})
    }
})

router.get('/:customerId', async (req, res) => {
    try{
        const customer = await Customer.findById(req.params.customerId)
        
        return res.send({ customer })
    }catch(err){
        return res.status(400).send({ error:'Erro ao carregar contato'})
    }
})

router.post('/', async (req, res) => {
    try{
        const customer = await Customer.create(req.body)

        return res.send({ customer })

    }catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Criar projeto'})
    }
})

router.put('/:customerId', async (req, res) => {
    try{
        const { name, contact, address} = req.body

        const customer = await Customer.findByIdAndUpdate(req.params.customerId,{
            name,
            contact,
            address       
        }, {new: true})


    }catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Criar ao atualizar'})
    }
})

router.delete('/:customerId', async (req, res) => {
    try{
        await Customer.findByIdAndRemove(req.params.customerId)
        
        return res.send()
    }catch(err){
        return res.status(400).send({ error:'Erro ao deletar contato'})
    }
})

module.exports = app => app.use('/customer', router)