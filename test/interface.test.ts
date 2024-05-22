describe('interface', function () {
    interface hasName {
        name: string;
    }

    interface canSayHello {
        sayHello(name: string): void;
    }

    class Customer implements hasName, canSayHello {
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHello(name: string) {
            console.info(`hello ${name}, my name is ${this.name}`)
        }
    }
    it('should interface inheritence', function () {
        const customer = new Customer("Muhammad");
        customer.sayHello("Rian");
        console.info(customer.sayHello);
    })
})
