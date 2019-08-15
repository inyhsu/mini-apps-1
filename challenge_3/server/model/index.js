const MongoClient = require('mongodb').MongoClient;

module.exports ={
    get: (callback) => {
        MongoClient.connect('mongodb://localhost:27017/checkout',(err, client) => {
            if(err) {
                throw err;
            } else {
                db = client.db('checkout');
                db.collection('users').find({}).toArray((err, datas)=>{
                    console.log('in model', datas);
                    if(err){
                        callback(err,null)
                    }else{
                        callback(null, datas);
                    }
                })
            }
        })
    },

    post: (data, callback) =>{
        MongoClient.connect('mongodb://localhost:27017/checkout',(err, client) => {
            if(err) {
                throw err;
            } else {
                db = client.db('checkout');
                db.collection('users').insert(data, (err, res)=>{
                    console.log('in model', data);
                    if(err){
                        console.log(err);
                    }else{
                        callback(null, res);
                    }
                })
            }
        })
    }
}