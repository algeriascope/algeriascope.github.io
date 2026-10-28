import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'fr',
    resources: {
      en: {
        translation: {
          nav: { about: 'About' },
          home: {
            title: 'Your Practical Guide to',
            titleItalic: 'Algeria',
            subtitle: 'Choose one of our free services',
          },
          services: {
            wilayas: {
              title: '69 Provinces',
              desc: 'Interactive visual map to explore all Algerian provinces, their locations, names, and administrative codes.',
            },
            rates: {
              title: 'Exchange Rate',
              desc: 'Daily exchange rates for the Algerian Dinar, comparing parallel and official bank market rates.',
            },
            postcodes: {
              title: 'Postcodes',
              desc: 'Search {{count}} official postcodes and filter locations across all 1,541 communes in Algeria.',
            },
            history: {
              title: 'History of Algeria',
              desc: "Explore Algeria's timeline from 202 BC to 2026, and discover the defining events that forged the nation.",
            },
          },
          postcodesPage: {
            title: 'Find your Postcode',
            subtitle: 'Official Algérie Poste postcodes',
            stats: {
              wilayas: 'Provinces',
              communes: 'Municipalities',
              postcodes: 'Postcodes',
            },
          },
          postcodesSearch: {
            allWilayas: 'All Provinces',
            searchPlaceholderAll: 'Search Municipality, postcode',
            searchPlaceholderWilaya:
              'Search Municipality, postcode in {{wilaya}}',
            noResults: 'No search results found.',
            unspecified: 'xxxxx',
          },
          wilayaPostcodes: {
            postcode: 'Postcode',
            post: 'Post Office',
            action: 'Action',
            copyText: 'Copy Postcode',
            details: 'Details',
          },
          footer: {
            rates: 'Rates',
            about: 'About',
            donate: 'Donate',
            openSource: 'Open Source',
          },
        },
      },
      fr: {
        translation: {
          nav: { about: 'À propos' },
          home: {
            title: 'Votre guide pratique pour',
            titleItalic: "l'Algérie",
            subtitle: "Choisissez l'un de nos services gratuits",
          },
          services: {
            wilayas: {
              title: '69 Wilayas',
              desc: 'Carte visuelle interactive pour explorer toutes les wilayas Algériennes, leurs emplacements, noms et codes administratifs.',
            },
            rates: {
              title: 'Taux de change',
              desc: 'Taux de change quotidiens du Dinar Algérien, comparant le marché parallèle et les taux officiels de la banque.',
            },
            postcodes: {
              title: 'Codes postaux',
              desc: "Recherchez {{count}} codes postaux officiels et filtrez les localités à travers les 1 541 communes d'Algérie.",
            },

            history: {
              title: "Histoire d'Algérie",
              desc: "Explorez la chronologie de l'Algérie de 202 av. J.-C. à 2026, et découvrez les événements marquants qui ont forgé la nation.",
            },
          },
          postcodesPage: {
            title: 'Trouvez votre code postal',
            subtitle: "Codes postaux officiels d'Algérie Poste",
            stats: {
              wilayas: 'Wilayas',
              communes: 'Communes',
              postcodes: 'Codes postaux',
            },
          },
          postcodesSearch: {
            allWilayas: 'Toutes les wilayas',
            searchPlaceholderAll: 'Rechercher une commune, un code postal',
            searchPlaceholderWilaya:
              'Rechercher une commune, un code postal à {{wilaya}}',
            noResults: 'Aucun résultat trouvé.',
            unspecified: 'xxxxx',
          },
          wilayaPostcodes: {
            postcode: 'Code postal',
            post: 'Bureau de poste',
            action: 'Action',
            copyText: 'Copier le code postal',
            details: 'Détails',
          },
          footer: {
            rates: 'Taux',
            about: 'À propos',
            donate: 'Faire un don',
            openSource: 'Open Source',
          },
        },
      },
      ar: {
        translation: {
          nav: { about: 'حول' },
          home: {
            title: 'دليلك العملي إلى',
            titleItalic: 'الجزائر  ',
            subtitle: 'اختر إحدى خدماتنا المجانية',
          },
          services: {
            wilayas: {
              title: '69 ولاية',
              desc: 'خريطة تفاعلية لاستكشاف جميع الولايات الجزائرية، مواقعها، أسماءها، ورموزها الإدارية.',
            },
            rates: {
              title: 'سعر الصرف',
              desc: 'أسعار الصرف اليومية للدينار الجزائري، مع  المقارنة بين أسعار السوق الموازية والسعر الرسمي للبنك.',
            },
            postcodes: {
              title: 'الرموز البريدية',
              desc: 'ابحث في {{count}} رمزًا بريديًا رسميًا وقم بتصفية المواقع عبر جميع البلديات الـ 1,541 في الجزائر.',
            },
            history: {
              title: 'تاريخ الجزائر',
              desc: 'استكشف التسلسل الزمني للجزائر من 202 ق.م إلى عام 2026، واكتشف أبرز المحطات التاريخية التي صاغت الأمة.',
            },
          },
          postcodesPage: {
            title: 'ابحث عن رمزك البريدي',
            subtitle: 'الرموز البريدية الرسمية لبريد الجزائر',
            stats: {
              wilayas: 'ولاية',
              communes: 'بلدية',
              postcodes: 'رمز بريدي',
            },
          },
          postcodesSearch: {
            allWilayas: 'كل الولايات',
            searchPlaceholderAll: 'ابحث عن البلدية أو الرمز البريدي',
            searchPlaceholderWilaya:
              'ابحث عن البلدية أو الرمز البريدي في {{wilaya}}',
            noResults: 'لم يتم العثور على نتائج.',
            unspecified: 'xxxxx',
          },
          wilayaPostcodes: {
            postcode: 'الرمز البريدي',
            post: 'مركز البريد',
            action: 'إجراء',
            copyText: 'نسخ الرمز البريدي',
            details: 'التفاصيل',
          },
          footer: {
            rates: 'سعر الصرف',
            about: 'حول',
            donate: 'تبرع',
            openSource: 'مفتوح المصدر',
          },
        },
      },
      zgh: {
        translation: {
          nav: { about: 'Ɣef usenfar' },
          home: {
            title: 'Amnir-nnek unsi ɣer',
            titleItalic: 'Dzayer',
            subtitle: 'Fren yiwen seg imeẓla-nneɣ baṭel',
          },
          services: {
            wilayas: {
              title: '69 n Lwilayat',
              desc: 'Takarḍa tatraktift i ussekni n lwilayat n Dzayer, tida yellan, yismawen-nsent, d yingilen-nsent n tdablit.',
            },
            rates: {
              title: 'Amsizwer n idrimen',
              desc: 'Amsizwer n yal ass n udinar adzayri, gar ssuq n berra d ssuq n lbanka.',
            },
            postcodes: {
              title: 'Ingilen n tnesa',
              desc: 'Nadi {{count}} n yingilen n tnesa unsiyen deg 1,541 n tgemmiyin n Dzayer.',
            },
            history: {
              title: 'Amezruy n Dzayer',
              desc: 'Nadi ɣef umezruy n Dzayer seg 202 send Ɛisa ar 2026, tfeḥṣeḍ isaggen imeqqranen i isbedden taɣerma-a.',
            },
          },
          postcodesPage: {
            title: 'Nadi ingilen-nnek n tnesa',
            subtitle: 'Tinfulin tisnagayin timaddudin n Algérie Poste',
            stats: {
              wilayas: 'Lwilayat',
              communes: 'Tigemmiyin',
              postcodes: 'Ingilen n tnesa',
            },
          },
          postcodesSearch: {
            allWilayas: 'Akk tiwilayin',
            searchPlaceholderAll: 'Nadi Taɣiwanit, tanfult n tnefsiyn',
            searchPlaceholderWilaya:
              'Nadi Taɣiwanit, tanfult n tnefsiyn deg {{wilaya}}',
            noResults: 'Ulac igmmaḍ.',
            unspecified: 'xxxxx',
          },
          wilayaPostcodes: {
            postcode: 'Tingal tamsawt',
            post: 'Amasnas n tamsawt',
            action: 'Tigawt',
            copyText: 'Nɣel tingal tamsawt',
            details: 'Aglef',
          },
          footer: {
            rates: 'Amsizwer',
            about: 'Ɣef usenfar',
            donate: 'Afk adrim',
            openSource: 'Aɣbalu yeldin',
          },
        },
      },
    },
  });

export default i18n;
