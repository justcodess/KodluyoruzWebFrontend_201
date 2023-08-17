let sum= (a,b) => a+b;
let sub= (a,b) => a-b;
let text="I learning react";
let user = {
    name:"zeynep",
    surname:"deler"
}
let users = [
    {name:"zeynep",
    surname:"deler"},
    {name:"enes",
    surname:"aksu"}

]
//default export only one
export default (name) => console.log(`hiii ${name}`);
//exports
export {sum,sub,text,user,users};


