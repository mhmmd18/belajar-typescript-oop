"use strict";
describe('visibility', function () {
    class Counter {
        constructor() {
            // private counter = 0;
            this.counter = 0;
        }
        increment() {
            this.counter++;
        }
        getCounter() {
            return this.counter;
        }
    }
    class doubleCounter extends Counter {
        increment() {
            this.counter += 2;
        }
        getCounter() {
            return this.counter;
        }
    }
    it('should private', function () {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });
    it('should protected', function () {
        const counter = new doubleCounter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });
});
