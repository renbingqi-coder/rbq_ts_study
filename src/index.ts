const a = 1;
const b = 2;
// console.log(a)

function aa() { 
    console.log(1);
    // throw 1;
    try {
        throw Error('1'); 
    } catch (error) {
        throw `Msg: ${error.message} Stack: ${error.stack}`; 
    }
    console.log(2);
}
aa()