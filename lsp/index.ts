import {  Bird, FlyingBird, Penguin } from './bird';

function makeBirdMove(bird: Bird) {
  bird.move();
}

const sparrow = new FlyingBird();
const penguin = new Penguin();

makeBirdMove(sparrow);  //  (flying)
makeBirdMove(penguin);   // (swimming)



// bird.ts (LSP Violation)
// class Bird {
//     fly(): void {
//       console.log("Flying");
//     }
//   }
  
//   class Penguin extends Bird {
//     fly(): void {
//       throw new Error("Penguins can't fly.");
//     }
//   }
  
//   // index.ts
//   import { Bird, Penguin } from './bird';
  
//   function makeBirdFly(bird: Bird) {
//     bird.fly();
//   }
  
//   const sparrow = new Bird();
//   const penguin = new Penguin();
  
//   makeBirdFly(sparrow);  // Works fine
//   makeBirdFly(penguin);  // Throws error, violates LSP
  