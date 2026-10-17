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
              desc: 'Search {{count}} official postcodes and filter locations across all 1,541 communes in Algeria. Rates',
            },
          },
          postcodesPage: {
            title: 'Find your Postcode',
            subtitle: 'Verified and sourced directly from Algérie Poste',
            stats: {
              wilayas: 'Provinces',
              communes: 'Municipalities',
              postcodes: 'Postcodes',
            },
          },
          postcodesSearch:{
            allWilayas: 'All Provinces',
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
              desc: 'Taux de change quotidiens du dinar algérien, comparant le marché parallèle et les taux officiels de la banque.',
            },
            postcodes: {
              title: 'Codes postaux',
              desc: "Recherchez {{count}} codes postaux officiels et filtrez les localités à travers les 1 541 communes d'Algérie.",
            },
          },
          postcodesPage: {
            title: 'Trouvez votre code postal',
            subtitle: "Vérifié et issu directement d'Algérie Poste",
            stats: {
              wilayas: 'Wilayas',
              communes: 'Communes',
              postcodes: 'Codes postaux',
            },
          },
          postcodesSearch:{
            allWilayas: 'Toutes les Wilayas',
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
          },
          postcodesPage: {
            title: 'ابحث عن رمزك البريدي',
            subtitle: 'موثوق ومأخوذ مباشرة من بريد الجزائر',
            stats: {
              wilayas: 'ولاية',
              communes: 'بلدية',
              postcodes: 'رمز بريدي',
            },
          },
          postcodesSearch:{
            allWilayas: 'كل الولايات',
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
          },
          postcodesPage: {
            title: 'Nadi ingilen-nnek n tnesa',
            subtitle: 'Ityaqqen d unsi srid seg Algérie Poste',
            stats: {
              wilayas: 'Lwilayat',
              communes: 'Tigemmiyin',
              postcodes: 'Ingilen n tnesa',
            },
          },           
          postcodesSearch: {
            allWilayas: 'Akk tiwilayin'
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
