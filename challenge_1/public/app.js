const table = document.getElementById('tttTable');
const clearButton = document.getElementById('clear');
const winRecord = document.getElementById('winRecord');
let nameX = prompt('Please input your name as X','No Name');
let nameO = prompt('Please input your name as O', "The Other No Name");

let turn = true;
let count = 0;
var x = 0;
var o = 0;

clearButton.addEventListener('click', () => {
    clear();
})

winRecord.innerHTML = `X ${nameX}: ${x} VS. O ${nameO}: ${o}`

for(var i = 0; i < table.rows.length; i++){
   let row = table.rows[i];
//    console.log(row);
    for(var j = 0; j < 3; j ++){
        let r = row.cells[j];
        r.addEventListener('click', ()=>{
            // console.log('click');
            if(turn){
                r.innerHTML = 'X';
                turn = false;
                // console.log(row);
                checkVertical(row);
                checkHorizontal(r);
                checkDiagonal(r);
                count ++;
            }else{
                r.innerHTML = 'O';
                turn = true;
                checkVertical(row);
                checkHorizontal(r);
                checkDiagonal(r);
                count ++;
            }

            if(count === 9){
                console.log(count);
                alert('Game Ended');
                turn = true;
                clear();
            }
        })
    }
}

let objHor = {};
//[1,4,7] [2,5,8] [3,6,9]
const checkHorizontal = (r) => {
    // console.log(typeof event.target.id);
    let hor = parseInt(event.target.id);
    let val = event.target.innerHTML;
    let col1 = [1,4,7];
    let col2 = [2,5,8];
    let col3 = [3,6,9];

    if(col1.includes(hor)){
        if(!objHor[col1]){
            objHor[col1] = [val]
        } else {
            objHor[col1].push(val);
        }
    }else if(col2.includes(hor)){
        if(!objHor[col2]){
            objHor[col2] = [val]
        } else {
            objHor[col2].push(val);
        }
    }else if(col3.includes(hor)){
        if(!objHor[col3]){
            objHor[col3] = [val]
        } else {
            objHor[col3].push(val);
        }
    }
    check(objHor);
};

let objVer = {};
const checkVertical = (row) => {
    // console.log(row.id);
    // console.log(event.target.innerHTML);
    if(!objVer[row.id]){
        objVer[row.id]=[event.target.innerHTML];
    }else{
        objVer[row.id].push(event.target.innerHTML);
    }

    check(objVer);
};

let objDiag = {};
const checkDiagonal = (r) => {

    let dia = parseInt(event.target.id);
    let val = event.target.innerHTML;
    let dia1 = [1,9];
    let dia2 = [3,7];
    let dia3 = [5];

    if(dia1.includes(dia)){
        if(!objDiag[dia1]){
            objDiag[dia1] = [val]
        } else {
            objDiag[dia1].push(val);
        }
    }else if(dia2.includes(dia)){
        if(!objDiag[dia2]){
            objDiag[dia2] = [val]
        } else {
            objDiag[dia2].push(val);
        }
    }else if(dia3.includes(dia)){
        if(!objDiag[dia3]){
            objDiag[dia3] = [val]
        } else {
            objDiag[dia3].push(val);
        }
    }
    if(Object.keys(objDiag).length > 0){
        for(let key in objDiag){
            let checkX = objDiag[key].filter(ele => ele === 'X');
            let checkO = objDiag[key].filter(ele => ele === 'O');
            if(checkX.length === 2 && objDiag['5'][0] === 'X'){
                alert('You WON');
                turn = true;
                x = x+1;
                winRecord.innerHTML = `X ${nameX}: ${x} VS. O ${nameO}: ${o}`
                clear();
            }
    
            if(checkO.length === 2 && objDiag['5'][0] === 'O'){
                alert('The Other WON');
                turn = false;
                o = o +1;
                winRecord.innerHTML = `X ${nameX}: ${x} VS. O ${nameO}: ${o}`
                clear();
            }
        }
    }
};

const check = (obj) =>{
    for(let key in obj){
        let checkX = obj[key].filter(ele => ele === 'X');
        let checkO = obj[key].filter(ele => ele === 'O');
        if(checkX.length === 3){
            alert('You WON');
            turn = true;
            x = x+1;
            winRecord.innerHTML = `X ${nameX}: ${x} VS. O ${nameO}: ${o}`
            clear();
        }
        
        if(checkO.length === 3){
            alert('The Other WON');
            turn = false;
            o = o +1;
            winRecord.innerHTML = `X ${nameX}: ${x} VS. O ${nameO}: ${o}`
            clear();
        }
    }
}

const clear = () =>{
    for(var i = 0; i < table.rows.length; i++){
        let row = table.rows[i];
         for(var j = 0; j < 3; j ++){
            let r = row.cells[j];
            r.innerHTML ='';
         }
     }
    count = 0;
    objHor = {};
    objDiag = {};
    objVer = {};
    console.log(count, objHor, objDiag, objVer, turn);
}
