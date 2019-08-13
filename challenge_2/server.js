const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static('client'));
//This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads

app.get('/', (req, res)=>{
    res.render('index.html');
})

app.post('/upload_json', (req, res) => {
    const jsonStuff = JSON.parse(req.body.value);
    // console.log(jsonStuff);
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
    const csv = (js) =>{
        arrKey = Object.keys(js);
        for(let key in js){
            js[key].forEach(ele => arrVal.push(ele));
        }
    }

    csv(obj)
    console.log('csv version', arrKey , arrVal);
    res.redirect('/');
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

