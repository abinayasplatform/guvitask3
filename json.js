
let obj1 = {
    name : "Person 1",
    age : 5
};

let obj2 = {
    age : 5,
    name : "Person 1"
};

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

let parseobj1 = JSON.parse(str1);
let parseobj2 = JSON.parse(str2);


if(parseobj1 === parseobj2){
    console.log("Two JSON have same properties");
}
else{
    console.log("Two JSON have different properties");
}
