"use strict";
describe('method-overriding', function () {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`hello ${name}, my name is ${this.name}`);
        }
    }
    class Manager extends Employee {
        sayHello(name) {
            console.info(`Selamat datang ${name}, Nama saya ${this.name}, Saya adalah manager`);
        }
    }
    it('should method', function () {
        const employee = new Employee("Rian");
        employee.sayHello("Dwi");
        const manager = new Manager("Dwi");
        manager.sayHello("Rian");
    });
});
