// function sum(a,b) {
//     return a+b;
// }

// function sumWithMsg(clbk,msg) {
//     const ressult=clbk(20,30);
//     const fresult="HI"+msg+"your score is="+result;
//     console.log(fresult);

// }
// sumWithMsg(sum,"MR.Aayush");

function greet(name) {
    console.log("Hello, " + name);
}
function user(callback) {
    const name = "Aayush";
    callback(name);
}
user(greet);
