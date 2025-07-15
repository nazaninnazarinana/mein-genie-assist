
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
    
    // Modules
    'modules.title': 'Two Powerful Modules, One Solution',
    'modules.subtitle': 'Choose the module that fits your needs, or use both to completely streamline your administrative tasks.',
    'modules.formino.title': 'Formino',
    'modules.formino.subtitle': 'Intelligent Form Assistant',
    'modules.formino.description': 'Transform complex paper forms into simple voice conversations. Upload, scan, or link any form, then chat with our AI in your native language to fill it out perfectly.',
    'modules.formino.feature1': 'Voice conversation in your language',
    'modules.formino.feature2': 'OCR for paper form scanning',
    'modules.formino.feature3': 'Human review before submission',
    'modules.formino.button': 'Explore Formino',
    'modules.termino.title': 'Termino',
    'modules.termino.subtitle': 'Smart Appointment Booking',
    'modules.termino.description': 'Never wait on hold again. Our AI makes phone calls for you, books appointments, and manages your calendar automatically. Perfect for doctor visits, government offices, and more.',
    'modules.termino.feature1': 'AI-powered phone calls',
    'modules.termino.feature2': 'Automatic calendar synchronization',
    'modules.termino.feature3': '24/7 appointment monitoring',
    'modules.termino.button': 'Explore Termino',
    
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
    
    // Modules
    'modules.title': 'Zwei starke Module, eine Lösung',
    'modules.subtitle': 'Wählen Sie das Modul, das Ihren Bedürfnissen entspricht, oder verwenden Sie beide, um Ihre Verwaltungsaufgaben vollständig zu rationalisieren.',
    'modules.formino.title': 'Formino',
    'modules.formino.subtitle': 'Intelligenter Formular-Assistent',
    'modules.formino.description': 'Verwandeln Sie komplexe Papierformulare in einfache Sprachgespräche. Laden Sie Formulare hoch, scannen Sie sie oder verlinken Sie sie, und chatten Sie dann mit unserer KI in Ihrer Muttersprache, um sie perfekt auszufüllen.',
    'modules.formino.feature1': 'Sprachunterhaltung in Ihrer Sprache',
    'modules.formino.feature2': 'OCR zum Scannen von Papierformularen',
    'modules.formino.feature3': 'Menschliche Überprüfung vor der Einreichung',
    'modules.formino.button': 'Formino erkunden',
    'modules.termino.title': 'Termino',
    'modules.termino.subtitle': 'Intelligente Terminbuchung',
    'modules.termino.description': 'Nie wieder in der Warteschleife warten. Unsere KI führt Telefonate für Sie, bucht Termine und verwaltet Ihren Kalender automatisch. Perfekt für Arztbesuche, Behördengänge und mehr.',
    'modules.termino.feature1': 'KI-gestützte Telefonate',
    'modules.termino.feature2': 'Automatische Kalender-Synchronisation',
    'modules.termino.feature3': '24/7 Terminüberwachung',
    'modules.termino.button': 'Termino erkunden',
    
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
    
    // Modules
    'modules.title': 'وحدتان قويتان، حل واحد',
    'modules.subtitle': 'اختر الوحدة التي تناسب احتياجاتك، أو استخدم كلاهما لتبسيط مهامك الإدارية بالكامل.',
    'modules.formino.title': 'فورمينو',
    'modules.formino.subtitle': 'مساعد النماذج الذكي',
    'modules.formino.description': 'حول النماذج الورقية المعقدة إلى محادثات صوتية بسيطة. ارفع النماذج أو امسحها ضوئياً أو اربطها، ثم تحدث مع الذكاء الاصطناعي بلغتك الأم لملئها بشكل مثالي.',
    'modules.formino.feature1': 'محادثة صوتية بلغتك',
    'modules.formino.feature2': 'OCR لمسح النماذج الورقية',
    'modules.formino.feature3': 'مراجعة بشرية قبل الإرسال',
    'modules.formino.button': 'استكشف فورمينو',
    'modules.termino.title': 'تيرمينو',
    'modules.termino.subtitle': 'حجز المواعيد الذكي',
    'modules.termino.description': 'لا تنتظر في قائمة الانتظار مرة أخرى. يقوم الذكاء الاصطناعي بإجراء المكالمات الهاتفية نيابة عنك، ويحجز المواعيد، ويدير تقويمك تلقائياً. مثالي لزيارات الطبيب والمكاتب الحكومية والمزيد.',
    'modules.termino.feature1': 'مكالمات هاتفية مدعومة بالذكاء الاصطناعي',
    'modules.termino.feature2': 'مزامنة التقويم التلقائية',
    'modules.termino.feature3': 'مراقبة المواعيد على مدار الساعة',
    'modules.termino.button': 'استكشف تيرمينو',
    
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
    
    // Modules
    'modules.title': 'Dos Módulos Poderosos, Una Solución',
    'modules.subtitle': 'Elige el módulo que se adapte a tus necesidades, o usa ambos para simplificar completamente tus tareas administrativas.',
    'modules.formino.title': 'Formino',
    'modules.formino.subtitle': 'Asistente Inteligente de Formularios',
    'modules.formino.description': 'Transforma formularios de papel complejos en conversaciones de voz simples. Sube, escanea o enlaza cualquier formulario, luego chatea con nuestra IA en tu idioma nativo para completarlo perfectamente.',
    'modules.formino.feature1': 'Conversación por voz en tu idioma',
    'modules.formino.feature2': 'OCR para escaneo de formularios en papel',
    'modules.formino.feature3': 'Revisión humana antes del envío',
    'modules.formino.button': 'Explorar Formino',
    'modules.termino.title': 'Termino',
    'modules.termino.subtitle': 'Reserva Inteligente de Citas',
    'modules.termino.description': 'Nunca más esperes en espera. Nuestra IA hace llamadas telefónicas por ti, reserva citas y gestiona tu calendario automáticamente. Perfecto para visitas médicas, oficinas gubernamentales y más.',
    'modules.termino.feature1': 'Llamadas telefónicas impulsadas por IA',
    'modules.termino.feature2': 'Sincronización automática del calendario',
    'modules.termino.feature3': 'Monitoreo de citas 24/7',
    'modules.termino.button': 'Explorar Termino',
    
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
