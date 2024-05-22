"use strict";
describe('inheritance', function () {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class Supervisor extends Manager {
    }
    it('should inheritance', function () {
        const employee = new Employee("Rian");
        console.info(employee.name);
        const manager = new Manager("Dwi");
        console.info(manager.name);
        const supervisor = new Supervisor("Daus");
        console.info(supervisor.name);
    });
});
