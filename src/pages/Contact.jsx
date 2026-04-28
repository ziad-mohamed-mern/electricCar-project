import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-gray-900 min-h-screen pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">تواصل معنا</h1>
          <div className="w-24 h-1 bg-electric-DEFAULT mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            نحن هنا لنجيب على كافة استفساراتكم ونساعدكم في اتخاذ الخطوة نحو مستقبل أكثر استدامة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="glass p-8 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-electric-DEFAULT/10 text-electric-DEFAULT rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">المعرض الرئيسي</h3>
                  <p className="text-gray-600 dark:text-gray-400">شارع التحلية، الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-electric-DEFAULT/10 text-electric-DEFAULT rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">اتصل بنا</h3>
                  <p className="text-gray-600 dark:text-gray-400">+966 12 345 6789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-electric-DEFAULT/10 text-electric-DEFAULT rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">البريد الإلكتروني</h3>
                  <p className="text-gray-600 dark:text-gray-400">info@electrodrive.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 glass p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">الاسم الكامل</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-electric-DEFAULT focus:border-transparent outline-none transition-all" placeholder="أدخل اسمك الكريم" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">البريد الإلكتروني</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-electric-DEFAULT focus:border-transparent outline-none transition-all" placeholder="example@mail.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">موضوع الرسالة</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-electric-DEFAULT focus:border-transparent outline-none transition-all">
                  <option>حجز تجربة قيادة</option>
                  <option>استفسار عن الأسعار</option>
                  <option>خدمات ما بعد البيع</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">الرسالة</label>
                <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-electric-DEFAULT focus:border-transparent outline-none transition-all resize-none" placeholder="اكتب رسالتك هنا..."></textarea>
              </div>
              
              <button type="button" className="w-full md:w-auto px-10 py-4 bg-electric-DEFAULT text-white rounded-xl font-bold text-lg hover:bg-electric-dark hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-electric-DEFAULT/30">
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
