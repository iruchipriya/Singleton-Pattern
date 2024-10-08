class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance; // Return the existing instance if it already exists
    }

    this.logs = []; // Initialize an empty array to store logs
    Logger.instance = this; // Cache the instance

    return this;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }

  getLogs() {
    return this.logs;
  }
}

// Usage of the Singleton Logger

const logger1 = new Logger();
logger1.log('First log message.');

const logger2 = new Logger();
logger2.log('Second log message.');

console.log(logger1 === logger2); // true

console.log(logger1.getLogs());
// Output:
// [
//   { message: 'First log message.', timestamp: '2024-08-27T12:34:56.789Z' },
//   { message: 'Second log message.', timestamp: '2024-08-27T12:34:57.123Z' }
// ]

console.log(logger2.getLogs());
// Output: Same as logger1.getLogs(), since logger1 and logger2 are the same instance.

///Another example

let counter = 0;
 
class Counter {
  getInstance() {
    return this;
  }
 
  getCount() {
    return counter;
  }
 
  increment() {
    counter++
    console.log(counter)
    return counter;
    
  }
 
  decrement() {
  	counter--
    console.log(counter)
    return counter;
  }
}
 
const counter1 = new Counter();
const counter2 = new Counter();
 
console.log(counter1.getInstance() === counter2.getInstance()); // False

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.getCount() === counter2.getCount()); // True