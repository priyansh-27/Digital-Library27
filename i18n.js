import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      "app_title": "BookHive",
      "nav": {
        "home": "Home",
        "search": "Search & Explore",
        "dashboard": "My Dashboard",
        "lectures": "Video Lectures",
        "preferences": "Preferences",
        "logout": "Logout"
      },
      "home": {
        "hero_title": "What will you learn today?",
        "hero_subtitle": "Discover thousands of books, audiobooks, and papers spanning multiple disciplines.",
        "search_placeholder": "Search by title, author, or genre...",
        "trending": "Trending Right Now",
        "recommended": "Recommended For You",
        "recent": "Recently Added"
      },
      "dashboard": {
        "welcome": "Welcome back",
        "saved_items": "You have {{count}} saved items waiting.",
        "continue_reading": "Continue Reading",
        "resume": "Resume Reading",
        "your_library": "Your Library",
        "recently_completed": "Recently Completed"
      },
      "search": {
        "filters": "Filters",
        "language": "Language",
        "subject": "Subject",
        "genres": "Genres",
        "results": "Results",
        "items_found": "{{count}} items found",
        "no_results": "No results found for your filters."
      },
      "lectures": {
        "upload_lecture": "Upload Lecture",
        "title": "Video Lectures",
        "no_lectures": "No lectures found matching your criteria."
      },
      "book_detail": {
        "back": "Back",
        "reviews": "reviews",
        "read_now": "Read Now",
        "download": "Download",
        "because_you_viewed": "Because you viewed this...",
        "close_reader": "Close Reader"
      },
      "login": {
        "title": "Knowledge Refined.",
        "subtitle": "Enter BookHive. A curated digital sanctuary for deep learning, structural cognition, and architectural mastery.",
        "claim": "Claim Your Access",
        "signin_desc": "Sign in to sync your progress across the vaults.",
        "credentials": "Credentials",
        "passphrase": "Passphrase",
        "authenticate": "Authenticate & Enter"
      }
    }
  },
  hi: {
    translation: {
      "app_title": "BookHive",
      "nav": {
        "home": "होम",
        "search": "खोजें और एक्सप्लोर करें",
        "dashboard": "मेरा डैशबोर्ड",
        "lectures": "वीडियो लेक्चर",
        "preferences": "प्राथमिकताएं",
        "logout": "लॉग आउट"
      },
      "home": {
        "hero_title": "आज आप क्या सीखेंगे?",
        "hero_subtitle": "हजारों किताबें, ऑडियोबुक और विभिन्न विषयों के पेपर खोजें।",
        "search_placeholder": "शीर्षक, लेखक या शैली से खोजें...",
        "trending": "अभी ट्रेंडिंग में",
        "recommended": "आपके लिए अनुशंसित",
        "recent": "हाल ही में जोड़ा गया"
      },
      "dashboard": {
        "welcome": "वापसी पर स्वागत है",
        "saved_items": "आपके पास {{count}} सहेजे गए आइटम हैं।",
        "continue_reading": "पढ़ना जारी रखें",
        "resume": "पढ़ना फिर से शुरू करें",
        "your_library": "आपकी लाइब्रेरी",
        "recently_completed": "हाल ही में पूर्ण किया गया"
      },
      "search": {
        "filters": "फ़िल्टर",
        "language": "भाषा",
        "subject": "विषय",
        "genres": "शैलियां",
        "results": "परिणाम",
        "items_found": "{{count}} आइटम मिले",
        "no_results": "आपके फ़िल्टर के लिए कोई परिणाम नहीं मिला।"
      },
      "lectures": {
        "upload_lecture": "लेक्चर अपलोड करें",
        "title": "वीडियो लेक्चर",
        "no_lectures": "आपके मानदंडों से मेल खाने वाले कोई लेक्चर नहीं मिले।"
      },
      "book_detail": {
        "back": "वापस",
        "reviews": "समीक्षाएं",
        "read_now": "अभी पढ़ें",
        "download": "डाउनलोड करें",
        "because_you_viewed": "चूंकि आपने यह देखा था...",
        "close_reader": "रीडर बंद करें"
      },
      "login": {
        "title": "ज्ञान परिष्कृत।",
        "subtitle": "BookHive में प्रवेश करें। गहरी शिक्षा, संरचनात्मक अनुभूति और स्थापत्य निपुणता के लिए एक क्यूरेटेड डिजिटल अभयारण्य।",
        "claim": "अपनी पहुंच का दावा करें",
        "signin_desc": "तिजोरियों में अपनी प्रगति को सिंक करने के लिए साइन इन करें।",
        "credentials": "क्रेडेंशियल्स",
        "passphrase": "पासफ्रेज",
        "authenticate": "प्रमाणित करें और प्रवेश करें"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
