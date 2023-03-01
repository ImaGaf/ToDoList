const {Router, request} = require('express');
const List = require('../models/todo.models');
const router = Router();

router.get('/api/v1/todo', async (req, res)=>{
    try{
        const list = await List.findAll({
            attributes: ['id', 'title', 'description', 'status']
        })
        res.json(list) 
    }catch(error){
        res.status(400).json(error)
    }
})


router.post('/api/v1/todo', async (req, res)=>{
    try{
        const newActivity = req.body;
        const result = await List.create(newActivity);
        res.status(201).send(result);
    }catch(error){
        res.status(400).json(error);
    }
});

router.put('/api/v1/todo/:id', async (req,res)=>{
        try{
            const {id} = req.params;
            const data = req.body;
            await List.update(data,{
                where: {id}
            })
            res.status(204).send()
        }catch(error){
            res.status(400).json(error)
        }
});

router.delete('/api/v1/todo/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        await List.destroy({
            where: {id} //id: id
        })
        res.status(204).send()
    }catch(error){
        res.status(400).json(error)
    }
});

module.exports = router;