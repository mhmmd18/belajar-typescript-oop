describe('visibility', function () {
    class Counter {
        // private counter = 0;
        protected counter = 0;
        public increment() {
            this.counter++;
        }
        getCounter(): number {
            return this.counter;
        }
    }

    class doubleCounter extends Counter {
        increment(): void {
            this.counter += 2;
        }

        getCounter(): number {
            return this.counter;
        }
    }
    it('should private', function () {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    })
    it('should protected', function () {
        const counter = new doubleCounter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    })
})