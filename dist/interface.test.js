"use strict";
describe('interface', function () {
    class Customer {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`hello ${name}, my name is ${this.name}`);
        }
    }
    it('should interface inheritence', function () {
        const customer = new Customer("Muhammad");
        customer.sayHello("Rian");
        console.info(customer.sayHello);
    });
});
