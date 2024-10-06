import { Deliverable, Trackable, Expeditable } from './shippingInterfaces';

// Basic shipping: can only deliver packages
class BasicShipping implements Deliverable {
  deliver(): void {
    console.log("Delivering package with basic shipping.");
  }
}

// Tracked shipping: can deliver and track packages
class TrackedShipping implements Deliverable, Trackable {
  deliver(): void {
    console.log("Delivering package with tracked shipping.");
  }

  track(): void {
    console.log("Tracking package with tracked shipping.");
  }
}

// Expedited shipping: can deliver, track, and expedite
class ExpeditedShipping implements Deliverable, Trackable, Expeditable {
  deliver(): void {
    console.log("Delivering package with expedited shipping.");
  }

  track(): void {
    console.log("Tracking package with expedited shipping.");
  }

  expedite(): void {
    console.log("Expediting package for faster delivery.");
  }
}

export { BasicShipping, TrackedShipping, ExpeditedShipping };
    