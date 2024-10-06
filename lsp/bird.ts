export abstract class Bird {
    abstract move(): void;
  }
  
 export class FlyingBird extends Bird {
    move(): void {
      console.log("Flying");
    }
  }
  
  export class Penguin extends Bird {
    move(): void {
      console.log("Swimming");
    }
  }
  