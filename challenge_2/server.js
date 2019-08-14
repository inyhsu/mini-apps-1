const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
//parse parameters from request body and get it inside scope of your POST handler

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// app.set('view engine', 'ejs');
app.use(express.static('client'));
app.get('/', (req, res)=>{
    res.render('index.html')
})


app.post('/upload_json', (req, res) => {
    const jsonStuff = JSON.parse(req.body.value);
    console.log(jsonStuff);
    let obj = {};
    let arrKey =[];
    let arrVal =[];

    const helper = (anObj) => {

        for(let key in anObj){
            if(key === 'children' && anObj.children.length > 0){
                anObj.children.forEach(o => {
                    helper(o);
                })
            }else{
                if(!obj[key]){
                    obj[key] = [];
                }
                obj[key].push(anObj[key]);
            }
        }
    }

    helper(jsonStuff);
    console.log('this is obj', obj);
    var context = '';
    Object.keys(obj).forEach(ele => {
        if(ele !== 'children'){
            context += ' ' + ele
        }
    });
    context += `\n`;


    for(let i = 0; i < obj['firstName'].length ; i++){
        for(let key in obj){
            if(obj[key][i] !== undefined){
                
                context += ' ' + obj[key][i];
            }
        }
        context += `\n`;
    }

    res.end(context);

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

