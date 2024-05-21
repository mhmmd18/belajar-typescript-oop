"use strict";
describe('properties', function () {
    class Customer {
        constructor(id, name) {
            this.address = "jakarta";
            this.id = id;
            this.name = name;
        }
        // method
        sayHello(name) {
            console.info(`hello ${name}, my name is ${this.name}`);
        }
    }
    it('should properties', function () {
        const customer = new Customer(1, "Muhammad");
        customer.age = 20;
        console.info(customer);
        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
    });
    it('should method', function () {
        const customer = new Customer(1, "Muhammad");
        customer.sayHello("Rian");
    });
});
