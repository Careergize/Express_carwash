export const services = [
  { id: 'exterior', no: '01', title: 'Exterior Wash', text: 'A thorough exterior clean that removes everyday dirt and grime.', image: '/images/exterior-wash.jpg', alt: 'A car travelling through an automatic car wash with wash equipment visible' },
  { id: 'interior', no: '02', title: 'Interior Deep Cleaning', text: 'Detailed interior care for a fresh and comfortable cabin.', image: '/images/interior-deep-cleaning.jpg', alt: 'A vacuum extraction nozzle cleaning a fabric car seat' },
  { id: 'foam', no: '03', title: 'Foam Wash', text: 'A rich foam treatment to help lift dirt from the vehicle.', image: '/images/foam-wash.jpg', alt: 'A vehicle covered in thick cleaning foam during a wash' },
  { id: 'polishing', no: '04', title: 'Paint Polishing', text: 'Professional polishing to restore gloss and enhance the finish.', image: '/images/paint-polishing.jpg', alt: 'A rotary polishing machine working on white automotive paintwork' },
] as const;

export const gallery = [
  { image: '/images/car-wash-hero.jpg', alt: 'Automatic car wash tunnel in operation' },
  { image: '/images/foam-wash.jpg', alt: 'Vehicle covered in cleaning foam' },
  { image: '/images/interior-deep-cleaning.jpg', alt: 'Interior seat extraction cleaning' },
  { image: '/images/wheel-cleaning.jpg', alt: 'A brush cleaning a car wheel' },
  { image: '/images/paint-polishing.jpg', alt: 'Polishing machine working on vehicle paint' },
  { image: '/images/wheel-foam.jpg', alt: 'Wheel covered in soap during car wash' },
] as const;
