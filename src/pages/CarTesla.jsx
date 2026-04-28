import React from 'react';
import CarDetail from '../components/CarDetail';
import carImg from '../assets/car_tesla.jpg';

const data = {
  id: 'tesla',
  name: 'Tesla Model S',
  price: 'يبدأ من $89,990',
  description: 'تعتبر تيسلا موديل S معياراً ذهبياً في عالم السيارات الكهربائية. تتميز بتصميم ديناميكي هوائي فائق وأداء يضاهي السيارات الرياضية الخارقة. مع مقصورة داخلية مستقبلية خالية من الأزرار وتتميز بشاشة لمس ضخمة للتحكم بكل خصائص السيارة.',
  range: '600 كم',
  acceleration: '3.1 ثوانٍ',
  battery: '100 kWh',
  image: carImg
};

const CarTesla = () => <CarDetail carData={data} />;
export default CarTesla;
