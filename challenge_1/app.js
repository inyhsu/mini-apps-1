const table = document.getElementById('tttTable');
const clearButton = document.getElementById('clear');
const winRecord = document.getElementById('winRecord');

let turn = true;
let count = 0;

clearButton.addEventListener('click', () => {
    clear();
})

for(var i = 0; i < table.rows.length; i++){
   let row = table.rows[i];
//    console.log(row);
    for(var j = 0; j < 3; j ++){
        let r = row.cells[j];
        r.addEventListener('click', ()=>{
            // console.log('click');
            if(count === 9){
                alert('Game Ended');
                turn = true;
            }
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
    let dia1 = [1,5,9];
    let dia2 = [3,5,7];

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
    }

    check(objDiag);
};

const check = (obj) =>{
    for(let key in obj){
        let checkX = obj[key].filter(ele => ele === 'X');
        let checkO = obj[key].filter(ele => ele === 'O');
        if(checkX.length === 3){
            alert('You WON');
            turn = true;
            clear();
        }else if(checkO.length === 3){
            alert('The Other WON');
            turn = false;
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
}