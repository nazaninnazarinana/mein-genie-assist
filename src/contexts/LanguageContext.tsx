
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'ar' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.formino': 'Formino',
    'nav.termino': 'Termino',
    'nav.about': 'About Us',
    'nav.pricing': 'Pricing',
    'nav.help': 'Help',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Register',
    
    // Hero
    'hero.subtitle': 'Your AI-Powered Administrative Assistant',
    'hero.title1': 'Eliminate Bureaucratic',
    'hero.title2': 'Complexities Forever',
    'hero.description': 'Mein Genie is your intelligent companion that transforms complex administrative tasks into simple conversations. Perfect for immigrants and seniors who want to navigate bureaucracy with confidence and ease.',
    'hero.startJourney': 'Start Your Journey',
    'hero.learnMore': 'Learn More',
    'hero.trusted': 'Trusted by thousands of users worldwide',
    'hero.callUs': 'Call us:',
    
    // Common
    'common.download': 'Download PDF File',
    'common.upload': 'Upload File',
    'common.camera': 'Scan with Camera',
    'common.microphone': 'Voice Interaction',
    'common.chat': 'Text Chat',
    'common.review': 'Review Form',
    'common.support': 'Get Support',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.formino': 'Formino',
    'nav.termino': 'Termino',
    'nav.about': 'Über uns',
    'nav.pricing': 'Preise',
    'nav.help': 'Hilfe',
    'nav.contact': 'Kontakt',
    'nav.login': 'Anmelden',
    'nav.register': 'Registrieren',
    
    // Hero
    'hero.subtitle': 'Ihr KI-gestützter Verwaltungsassistent',
    'hero.title1': 'Bürokratische Komplexitäten',
    'hero.title2': 'für immer beseitigen',
    'hero.description': 'Mein Genie ist Ihr intelligenter Begleiter, der komplexe Verwaltungsaufgaben in einfache Gespräche verwandelt. Perfekt für Einwanderer und Senioren, die die Bürokratie mit Vertrauen und Leichtigkeit navigieren möchten.',
    'hero.startJourney': 'Reise beginnen',
    'hero.learnMore': 'Mehr erfahren',
    'hero.trusted': 'Vertraut von Tausenden von Nutzern weltweit',
    'hero.callUs': 'Rufen Sie uns an:',
    
    // Common
    'common.download': 'PDF-Datei herunterladen',
    'common.upload': 'Datei hochladen',
    'common.camera': 'Mit Kamera scannen',
    'common.microphone': 'Sprachinteraktion',
    'common.chat': 'Text-Chat',
    'common.review': 'Formular überprüfen',
    'common.support': 'Unterstützung erhalten',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.formino': 'فورمينو',
    'nav.termino': 'تيرمينو',
    'nav.about': 'معلومات عنا',
    'nav.pricing': 'الأسعار',
    'nav.help': 'المساعدة',
    'nav.contact': 'اتصل بنا',
    'nav.login': 'تسجيل الدخول',
    'nav.register': 'التسجيل',
    
    // Hero
    'hero.subtitle': 'مساعدك الإداري المدعوم بالذكاء الاصطناعي',
    'hero.title1': 'القضاء على التعقيدات',
    'hero.title2': 'البيروقراطية إلى الأبد',
    'hero.description': 'مين جيني هو رفيقك الذكي الذي يحول المهام الإدارية المعقدة إلى محادثات بسيطة. مثالي للمهاجرين وكبار السن الذين يريدون التنقل في البيروقراطية بثقة وسهولة.',
    'hero.startJourney': 'ابدأ رحلتك',
    'hero.learnMore': 'اعرف المزيد',
    'hero.trusted': 'يثق به آلاف المستخدمين حول العالم',
    'hero.callUs': 'اتصل بنا:',
    
    // Common
    'common.download': 'تحميل ملف PDF',
    'common.upload': 'رفع ملف',
    'common.camera': 'مسح بالكاميرا',
    'common.microphone': 'التفاعل الصوتي',
    'common.chat': 'دردشة نصية',
    'common.review': 'مراجعة النموذج',
    'common.support': 'الحصول على الدعم',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.formino': 'Formino',
    'nav.termino': 'Termino',
    'nav.about': 'Acerca de',
    'nav.pricing': 'Precios',
    'nav.help': 'Ayuda',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar sesión',
    'nav.register': 'Registrarse',
    
    // Hero
    'hero.subtitle': 'Tu Asistente Administrativo Impulsado por IA',
    'hero.title1': 'Elimina las Complejidades',
    'hero.title2': 'Burocráticas para Siempre',
    'hero.description': 'Mein Genie es tu compañero inteligente que transforma tareas administrativas complejas en conversaciones simples. Perfecto para inmigrantes y personas mayores que quieren navegar la burocracia con confianza y facilidad.',
    'hero.startJourney': 'Comienza tu Viaje',
    'hero.learnMore': 'Saber Más',
    'hero.trusted': 'Confiado por miles de usuarios en todo el mundo',
    'hero.callUs': 'Llámanos:',
    
    // Common
    'common.download': 'Descargar archivo PDF',
    'common.upload': 'Subir archivo',
    'common.camera': 'Escanear con cámara',
    'common.microphone': 'Interacción por voz',
    'common.chat': 'Chat de texto',
    'common.review': 'Revisar formulario',
    'common.support': 'Obtener soporte',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
