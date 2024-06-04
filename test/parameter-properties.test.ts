describe('parameter-properties', function () {
    class Person {
        constructor( public name: string) {
        }
    }
    it('should properties', function () {
        const person = new Person('Eko');
        console.info(person.name);
        person.name = 'Rian';
        console.info(person.name);
    })
})