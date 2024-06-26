describe('properties', function() { 
    class Customer {
        readonly id:number;
        name:string;
        // default value & optional ? : tidak wajib di desc di constructor 
        age?:number;
        address:string = "jakarta";
        constructor(id:number, name:string) {
            this.id = id;   
            this.name = name;
        }
        // method
        sayHello(name:string) {
            console.info(`hello ${name}, my name is ${this.name}`)
        }
    }
    it('should properties', function() {
        const customer = new Customer(1, "Muhammad");
        customer.age = 20;
        console.info(customer);
        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
    }) 
    it('should method', function() {
        const customer = new Customer(1, "Muhammad");
        customer.sayHello("Rian");
    })
 })