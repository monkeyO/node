class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return `${this.name}的年龄是：${this.age}`;
    }
}
console.log("12");
module.exports = person;
