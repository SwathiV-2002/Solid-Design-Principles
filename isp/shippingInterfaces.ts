interface Deliverable {
    deliver(): void;
  }
  
  interface Trackable {
    track(): void;
  }
  
  interface Expeditable {
    expedite(): void;
  }
  
  export { Deliverable, Trackable, Expeditable };
  