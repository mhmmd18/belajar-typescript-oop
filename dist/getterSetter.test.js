"use strict";
describe('getter setter', function () {
    class Customer {
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return "unknown";
            }
        }
        set name(value) {
            if (value != "") {
                this._name = value;
            }
        }
    }
    it('should getter setter', function () {
        const category = new Customer();
        console.info(category.name);
        category.name = "Rian";
        console.info(category.name);
        category.name = "";
        console.info(category.name);
        category.name = "Dwi";
        console.info(category.name);
    });
});
