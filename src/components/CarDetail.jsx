import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BatteryCharging, Gauge, Map, ArrowRight } from 'lucide-react';

const CarDetail = ({ carData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carData.id]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-gray-900 min-h-screen pt-28 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/#cars" className="inline-flex items-center gap-2 text-electric-DEFAULT hover:text-electric-dark transition-colors mb-8 font-semibold">
          <ArrowRight className="w-5 h-5" />
          العودة للسيارات
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[500px]"
          >
            <img src={carData.image} alt={carData.name} className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{carData.name}</h1>
            <p className="text-3xl font-bold text-electric-DEFAULT mb-8">{carData.price}</p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              {carData.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                <Map className="w-8 h-8 text-accent-DEFAULT mb-3" />
                <span className="text-sm text-gray-500 dark:text-gray-400">المدى (تقريبي)</span>
                <span className="font-bold text-xl text-gray-900 dark:text-white mt-1">{carData.range}</span>
              </div>
              <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                <Gauge className="w-8 h-8 text-electric-DEFAULT mb-3" />
                <span className="text-sm text-gray-500 dark:text-gray-400">التسارع 0-100 كم/س</span>
                <span className="font-bold text-xl text-gray-900 dark:text-white mt-1">{carData.acceleration}</span>
              </div>
              <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center col-span-2">
                <BatteryCharging className="w-8 h-8 text-purple-500 mb-3" />
                <span className="text-sm text-gray-500 dark:text-gray-400">سعة البطارية</span>
                <span className="font-bold text-xl text-gray-900 dark:text-white mt-1">{carData.battery}</span>
              </div>
            </div>
            
            <Link to="/contact" className="inline-block w-full text-center py-4 bg-electric-DEFAULT text-white rounded-xl font-bold text-lg hover:bg-electric-dark hover:shadow-lg hover:shadow-electric-DEFAULT/40 transition-all">
              تواصل معنا للحجز
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarDetail;
