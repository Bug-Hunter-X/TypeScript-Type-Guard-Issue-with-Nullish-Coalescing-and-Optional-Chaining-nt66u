function printName(name: string | null): void {
  if (name === null) {
    console.log('No name provided');
    return; 
  }
  console.log(`My name is ${name}`);
}

printName(null); // Works fine
printName('John'); // Works fine

// Unexpected behavior:
const myName: string | null = null; // Explicitly set to null
printName(myName); // Unexpected type error. 