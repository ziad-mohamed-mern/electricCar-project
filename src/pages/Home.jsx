import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Cpu, Gauge, ArrowLeft } from 'lucide-react';
import heroCar from '../assets/hero_car.jpg';
import aboutCar from '../assets/about_car.jpg';
import carTesla from '../assets/car_tesla.jpg';
import carByd from '../assets/car_byd.jpg';
import carIoniq from '../assets/car_ioniq.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-gray-900"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroCar} alt="سيارة كهربائية مستقبلية" className="w-full h-full object-cover opacity-80 dark:opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-gray-900 dark:via-gray-900/60 dark:to-transparent"></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
            مستقبل السيارات الكهربائية <br /> يبدأ هنا
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light">
            استكشف أحدث التقنيات وأقوى أداء مع مجموعة سياراتنا الصديقة للبيئة.
          </p>
          <a href="#cars" className="inline-block px-10 py-4 rounded-full bg-electric-DEFAULT text-white font-bold text-lg hover:bg-electric-dark hover:scale-105 transition-all shadow-xl shadow-electric-DEFAULT/30">
            استكشف السيارات
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">عن الشركة</h2>
              <div className="w-20 h-1 bg-electric-DEFAULT mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                في "إلكترو درايف"، نحن لا نبيع السيارات فحسب، بل نصنع المستقبل. رؤيتنا هي قيادة التحول نحو طاقة نظيفة ومستدامة دون التنازل عن الفخامة والأداء العالي.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-DEFAULT/10 text-accent-DEFAULT">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">صديقة للبيئة</h3>
                    <p className="text-gray-600 dark:text-gray-400">انبعاثات صفرية لمستقبل أكثر اخضراراً.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-electric-DEFAULT/10 text-electric-DEFAULT">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">تكنولوجيا متقدمة</h3>
                    <p className="text-gray-600 dark:text-gray-400">أنظمة قيادة ذاتية ذكية وشاشات تفاعلية.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">أداء عالي</h3>
                    <p className="text-gray-600 dark:text-gray-400">تسارع فوري وقوة حصانية لا تضاهى.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={aboutCar} alt="تكنولوجيا السيارات الكهربائية" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="cars" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">السيارات المميزة</h2>
            <div className="w-24 h-1 bg-electric-DEFAULT mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Car 1 */}
            <motion.div variants={fadeIn} className="group glass rounded-3xl overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src={carTesla} alt="Tesla Model S" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Tesla Model S</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">سيارة سيدان كهربائية فاخرة توفر مدى قيادة استثنائي وتسارع يحبس الأنفاس مع أحدث تقنيات القيادة الذاتية.</p>
                <Link to="/car/tesla" className="flex items-center justify-between text-electric-DEFAULT font-bold hover:text-electric-dark transition-colors">
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Car 2 */}
            <motion.div variants={fadeIn} className="group glass rounded-3xl overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src={carByd} alt="BYD Han EV" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">BYD Han EV</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">تحفة هندسية تجمع بين التصميم الديناميكي وتكنولوجيا البطاريات المتطورة لأمان وكفاءة قصوى.</p>
                <Link to="/car/byd" className="flex items-center justify-between text-electric-DEFAULT font-bold hover:text-electric-dark transition-colors">
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Car 3 */}
            <motion.div variants={fadeIn} className="group glass rounded-3xl overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src={carIoniq} alt="Hyundai Ioniq 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Hyundai Ioniq 5</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">سيارة كروس أوفر بمقصورة واسعة وتصميم مستقبلي ريترو يوفر شحناً فائق السرعة وميزات عملية مبتكرة.</p>
                <Link to="/car/ioniq" className="flex items-center justify-between text-electric-DEFAULT font-bold hover:text-electric-dark transition-colors">
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
