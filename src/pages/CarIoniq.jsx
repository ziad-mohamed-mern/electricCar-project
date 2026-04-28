import React from 'react';
import CarDetail from '../components/CarDetail';
import carImg from '../assets/car_ioniq.jpg';

const data = {
  id: 'ioniq',
  name: 'Hyundai Ioniq 5',
  price: 'يبدأ من $41,400',
  description: 'اكتشف الإبداع في التصميم مع هيونداي ايونيك 5. تقدم هذه الكروس أوفر المدمجة توازناً مثالياً بين الرحابة الداخلية وتقنيات الشحن السريع 800V. تتميز بتصميمها المستقبلي الريترو ومصابيح البكسل الفريدة التي تضفي شخصية مميزة على الطريق.',
  range: '480 كم',
  acceleration: '5.2 ثوانٍ',
  battery: '77.4 kWh',
  image: carImg
};

const CarIoniq = () => <CarDetail carData={data} />;
export default CarIoniq;
