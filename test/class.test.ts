describe('class', function () {
    class Customer {
        constructor() {
            console.info("create new customer");
        }
    }
    class Order {

    }
    it('should class', function () {
        const customer: Customer = new Customer();
        const order = new Order();
    });
    it('should constructor', function () {
        new Customer();
        new Customer();
    });
})