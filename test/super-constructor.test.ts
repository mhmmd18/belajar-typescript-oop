describe('super-constructor', function () {
    class Person {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
    class Employee extends Person {
        department: string;
        constructor(name: string, department: string) {
            super(name);
            this.department = department
        }
    }
    it('should super-constuctor', function () {
        const employee = new Employee("Muhammad", "IT");
        console.info(employee.name);
        console.info(employee.department);
        console.info(`nama saya ${employee.name} dan departemen ${employee.department}`);
    })
})