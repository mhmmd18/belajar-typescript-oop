"use strict";
describe('class', function () {
    class Customer {
        constructor() {
            console.info("create new customer");
        }
    }
    class Order {
    }
    it('class', function () {
        const customer = new Customer();
        const order = new Order();
    });
    it('constructor', function () {
        new Customer();
        new Customer();
    });
});
