import { BasicShipping, TrackedShipping, ExpeditedShipping } from './shippingServices';

const basic = new BasicShipping();
const tracked = new TrackedShipping();
const expedited = new ExpeditedShipping();

basic.deliver();  // Works fine
// basic.track();  // Method doesn't exist, ensuring ISP compliance

tracked.deliver();  // Works fine
tracked.track();    // Works fine

expedited.deliver();  // Works fine
expedited.track();    // Works fine
expedited.expedite(); 






// shippingService.ts (ISP Violation)
// interface ShippingService {
//     deliverPackage(): void;
//     trackPackage(): void;
//     expeditedShipping(): void;
//   }
  
//   class BasicShipping implements ShippingService {
//     deliverPackage(): void {
//       console.log("Package delivered with basic shipping.");
//     }
  
//     // Basic shipping services don't offer tracking
//     trackPackage(): void {
//       throw new Error("Tracking not available for basic shipping.");
//     }
  
//     // Basic shipping doesn't support expedited shipping
//     expeditedShipping(): void {
//       throw new Error("Expedited shipping not available for basic shipping.");
//     }
//   }
  
//   class TrackedShipping implements ShippingService {
//     deliverPackage(): void {
//       console.log("Package delivered with tracked shipping.");
//     }
  
//     trackPackage(): void {
//       console.log("Tracking package with tracked shipping.");
//     }
  
//     // Tracked shipping doesn't offer expedited shipping
//     expeditedShipping(): void {
//       throw new Error("Expedited shipping not available for tracked shipping.");
//     }
//   }
  
//   class ExpeditedShipping implements ShippingService {
//     deliverPackage(): void {
//       console.log("Package delivered with expedited shipping.");
//     }
  
//     trackPackage(): void {
//       console.log("Tracking package with expedited shipping.");
//     }
  
//     expeditedShipping(): void {
//       console.log("Expedited shipping selected.");
//     }
//   }
  
//   // index.ts
//   import { BasicShipping, TrackedShipping, ExpeditedShipping } from './shippingService';
  
//   const basic = new BasicShipping();
//   const tracked = new TrackedShipping();
//   const expedited = new ExpeditedShipping();
  
//   basic.deliverPackage();
//   // basic.trackPackage();  // This will throw an error, violating ISP
//   // basic.expeditedShipping();  // This will throw an error, violating ISP
  
//   tracked.deliverPackage();
//   tracked.trackPackage();
//   // tracked.expeditedShipping();  // This will throw an error, violating ISP
  
//   expedited.deliverPackage();
//   expedited.trackPackage();
//   expedited.expeditedShipping();  // Works fine
  