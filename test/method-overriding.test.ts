describe('method-overriding', function () {
    class Employee {
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHello(name: string) {
            console.info(`hello ${name}, my name is ${this.name}`)
        }
    }
    class Manager extends Employee {
        sayHello(name: string) {
            console.info(`Selamat datang ${name}, Nama saya ${this.name}, Saya adalah manager`)
        }
    }
    class Department extends Employee {
        sayHello(name: string): void {
            super.sayHello(name);
            console.info("saya adalah deparment");
        }
    }
    it('should method', function () {
        const employee = new Employee("Rian");
        employee.sayHello("Dwi");
        const manager = new Manager("Dwi");
        manager.sayHello("Rian");
    })

    it('should super method', function () {
        const department = new Department("Hayyi");
        department.sayHello("Dwi");
    })
})