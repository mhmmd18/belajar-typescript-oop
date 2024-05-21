"use strict";
describe('class', function () {
    class Customer {
        constructor() {
            console.info("create new customer");
        }
    }
    class Order {
    }
    it('should class', function () {
        const customer = new Customer();
        const order = new Order();
    });
    it('should constructor', function () {
        new Customer();
        new Customer();
    });
});
