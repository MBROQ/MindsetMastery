class Fibonacci {
    constructor() {
        // Initialize fib seeds
        this.previous = 0;
        this.current = 1;

    }

     // Returns the next Fibonacci number in the current sequence
    next() {
       //calculate next fib number
        const next = this.previous + this.current;

        //move on the sequence
        this.previous = this.current;
        this.current = next;

       // Return the calculated fib number 
       return next;
    }

    init(seed) {
        // reset seeds back to start
        this.previous = 0;
        this.current = 1;

        //loop to find the seed
        while ( this.current < seed) {

            this.next();
        }

        // Check if Fib number real
        if (this.current != seed) {
            throw new Error('Not a real fib number');

        }
       
        
        
    }

    skip(forward) {
        let next;
        for (let i=0; i < forward; i++) {
           next= this.next();
        }
        
        return this.current;
       
    }
}

module.exports = Fibonacci;