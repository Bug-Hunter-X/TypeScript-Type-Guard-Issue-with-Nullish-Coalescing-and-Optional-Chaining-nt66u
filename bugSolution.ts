function printName(name: string | null): void {
  if (name == null) {
    console.log('No name provided');
    return; 
  }
  console.log(`My name is ${name}`);
}

printName(null); // Works fine
printName('John'); // Works fine

// Correct handling of null:
const myName: string | null = null; 
printName(myName); // Now works correctly