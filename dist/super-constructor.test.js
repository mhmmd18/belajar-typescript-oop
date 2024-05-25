"use strict";
describe('super-constructor', function () {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
    }
    it('should super-constuctor', function () {
        const employee = new Employee("Muhammad", "IT");
        console.info(employee.name);
        console.info(employee.department);
        console.info(`nama saya ${employee.name} dan departemen ${employee.department}`);
    });
});
