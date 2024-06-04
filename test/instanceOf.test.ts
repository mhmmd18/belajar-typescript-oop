describe('instanceOf', function () {
    class Employee {}
    class Manager {}
    const test1 = new Employee();
    const test2 = new Manager();
    it('should typeOf', function () {
        console.info(typeof test1);
        console.info(typeof test2);
    })
    it('should instanceof', function () {
        console.info(test1 instanceof Employee);
        console.info(test2 instanceof Manager);
    })
})