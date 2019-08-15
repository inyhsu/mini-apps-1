var model = require('../model/index.js');

module.exports ={
    get: (req, res) => {
        model.get((err, datas) => {
            if(err){
                res.status(404).send(err)
            }else{
                console.log('in controller', datas);
                res.send(datas)
            }
        })
    },

    post: (req, res) =>{
        console.log('this is req.body', req.body);
        model.post((err, result) => {
            if(err){
                res.status(404).send(err)
            }else{
                console.log('in controller', result);
                res.send(result)
            }
        })
    }
}