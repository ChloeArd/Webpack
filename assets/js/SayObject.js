class SayClass {

    constructor() {
        this.firstname = "Chloé";
        this.lastname = "Ardoise";
    }

    sayHello = function () {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    };

    sayGoodbye = function () {
        console.log(`Good Bye ${this.lastname} ${this.firstname}`);
    };
}

export {SayClass};