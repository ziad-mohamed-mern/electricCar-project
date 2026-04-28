import React from 'react';
import CarDetail from '../components/CarDetail';
import carImg from '../assets/car_byd.jpg';

const data = {
  id: 'byd',
  name: 'BYD Han EV',
  price: 'يبدأ من $45,000',
  description: 'تمثل BYD Han EV قمة التكنولوجيا الصينية في مجال السيارات الكهربائية. تأتي مزودة ببطارية "Blade" الثورية التي توفر أماناً غير مسبوق وعمراً طويلاً. تصميمها السيدان الفاخر يمزج بين الأناقة الكلاسيكية والانسيابية الرياضية لتجربة قيادة ممتعة.',
  range: '550 كم',
  acceleration: '3.9 ثوانٍ',
  battery: '85.4 kWh',
  image: carImg
};

const CarByd = () => <CarDetail carData={data} />;
export default CarByd;
