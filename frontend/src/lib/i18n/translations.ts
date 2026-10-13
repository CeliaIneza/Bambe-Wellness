export type Language = 'en' | 'rw';

export interface TranslationDict {
  nav: {
    home: string;
    findSupport: string;
    imFeeling: string;
    resources: string;
    forStudents: string;
    forFamilies: string;
    forOrganizations: string;
    about: string;
    contact: string;
    talkToSomeone: string;
    urgentHelp: string;
  };
  hero: {
    title: string;
    subtitle: string;
    talkCTA: string;
    exploreCTA: string;
    disclaimer: string;
  };
  whatBringsYouHere: {
    title: string;
    subtitle: string;
    feelings: {
      overwhelmed: { title: string; desc: string };
      anxious: { title: string; desc: string };
      low: { title: string; desc: string };
      burntOut: { title: string; desc: string };
      lonely: { title: string; desc: string };
      grieving: { title: string; desc: string };
      schoolPressure: { title: string; desc: string };
      relationships: { title: string; desc: string };
      dontKnow: { title: string; desc: string };
    };
  };
  earlySupport: {
    title: string;
    text: string;
    cta: string;
  };
  supportOptions: {
    title: string;
    talkToSomeone: { title: string; desc: string };
    understandFeeling: { title: string; desc: string };
    learnGrow: { title: string; desc: string };
    supportLovedOne: { title: string; desc: string };
  };
  checkIn: {
    heroTitle: string;
    heroSubtitle: string;
    quizDisclaimer: string;
    startBtn: string;
    nextBtn: string;
    prevBtn: string;
    submitBtn: string;
    restartBtn: string;
  };
  students: {
    title: string;
    subtitle: string;
    cta: string;
  };
  families: {
    title: string;
    subtitle: string;
    cta: string;
  };
  rwandaSection: {
    title: string;
    text: string;
  };
  values: {
    compassion: { title: string; desc: string };
    respect: { title: string; desc: string };
    accessibility: { title: string; desc: string };
    trust: { title: string; desc: string };
  };
  finalCTA: {
    title: string;
    subtitle: string;
    talkBtn: string;
    exploreBtn: string;
  };
  urgentHelpPage: {
    title: string;
    warning: string;
    disclaimer: string;
    helplinesTitle: string;
    facilitiesTitle: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    legal: string;
    emergencyNotice: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    nav: {
      home: "Home",
      findSupport: "Find Support",
      imFeeling: "I'm Feeling...",
      resources: "Resources",
      forStudents: "For Students",
      forFamilies: "For Families",
      forOrganizations: "For Organizations",
      about: "About",
      contact: "Contact",
      talkToSomeone: "Talk to Someone",
      urgentHelp: "Urgent Help 🆘",
    },
    hero: {
      title: "You don't have to go through it alone.",
      subtitle: "Life can feel overwhelming sometimes. Whether you're stressed, anxious, lonely, grieving, struggling with school, work or relationships—or simply not feeling like yourself, support is here.",
      talkCTA: "Talk to Someone",
      exploreCTA: "Explore Support",
      disclaimer: "You don't need a diagnosis to deserve support.",
    },
    whatBringsYouHere: {
      title: "What brings you here?",
      subtitle: "You don't have to know exactly what's wrong. Start with what you're feeling.",
      feelings: {
        overwhelmed: { title: "I'm feeling overwhelmed", desc: "Everything feels like too much to handle." },
        anxious: { title: "I'm feeling anxious", desc: "My mind won't slow down or let me rest." },
        low: { title: "I'm feeling low", desc: "I haven't felt like myself or had energy lately." },
        burntOut: { title: "I'm burnt out", desc: "I'm exhausted, even when I get rest." },
        lonely: { title: "I'm lonely", desc: "I feel disconnected from the people around me." },
        grieving: { title: "I'm grieving", desc: "I'm struggling after losing someone or something important." },
        schoolPressure: { title: "I'm stressed about school", desc: "The academic pressure is becoming too heavy." },
        relationships: { title: "Struggling with relationships", desc: "Things between me and someone I care about aren't okay." },
        dontKnow: { title: "I don't know", desc: "I just know something doesn't feel right inside." },
      },
    },
    earlySupport: {
      title: "You don't have to wait until things get worse.",
      text: "Getting support doesn't mean something is broken inside you. Sometimes talking to someone early can help you understand what you're feeling, find healthy ways to cope, and take the next step with clarity.",
      cta: "Find Support Now",
    },
    supportOptions: {
      title: "Support for where you are right now.",
      talkToSomeone: { title: "Talk to Someone", desc: "Sometimes the first step is simply being heard by a caring, trained person." },
      understandFeeling: { title: "Understand What You're Feeling", desc: "Learn more about common emotional experiences and what they mean." },
      learnGrow: { title: "Learn & Grow", desc: "Explore practical, evidence-informed resources for your daily mental wellbeing." },
      supportLovedOne: { title: "Support Someone You Care About", desc: "Learn how to be there for a friend, family member, or colleague who may be struggling." },
    },
    checkIn: {
      heroTitle: "Take a moment to check in with yourself.",
      heroSubtitle: "This short 5-question check-in helps you reflect on your recent wellbeing. It is completely private and not a medical diagnosis.",
      quizDisclaimer: "This check-in is for self-reflection and guidance. It does not replace professional care.",
      startBtn: "Start Check-In",
      nextBtn: "Next Question",
      prevBtn: "Previous",
      submitBtn: "See My Results",
      restartBtn: "Take Check-In Again",
    },
    students: {
      title: "You are more than your grades.",
      subtitle: "Assignments, exams, relationships, finances, family expectations, and uncertainty about the future can be a lot to carry. You don't have to handle it all alone.",
      cta: "I'm a Student & Need Support",
    },
    families: {
      title: "Worried about someone you care about?",
      subtitle: "Sometimes the person who needs support isn't you. Learn how to recognize when a loved one may be struggling and how to start a supportive conversation.",
      cta: "Learn How to Help a Loved One",
    },
    rwandaSection: {
      title: "Built with Rwanda in mind.",
      text: "Mental wellbeing is deeply shaped by our families, communities, culture, and everyday experiences. We are creating a compassionate space that understands the Rwandan context and makes mental wellness support natural and accessible.",
    },
    values: {
      compassion: { title: "Compassion", desc: "We listen with empathy and zero judgment." },
      respect: { title: "Respect", desc: "Every person's story and struggle matters." },
      accessibility: { title: "Accessibility", desc: "Support should be clear, simple, and easy to find." },
      trust: { title: "Trust", desc: "We provide responsible, evidence-informed information." },
    },
    finalCTA: {
      title: "Whatever brought you here, you're welcome.",
      subtitle: "You don't need to have all the answers today. Take one small step.",
      talkBtn: "Talk to Someone",
      exploreBtn: "Explore Resources",
    },
    urgentHelpPage: {
      title: "Need Urgent Help?",
      warning: "If you or someone else is in immediate danger or experiencing a crisis, please reach out to professional emergency services right away.",
      disclaimer: "All emergency contacts listed below are verified official Rwandan health and safety services.",
      helplinesTitle: "24/7 Rwanda Emergency & Health Helplines",
      facilitiesTitle: "Key Mental Health & Referral Facilities",
    },
    footer: {
      tagline: "A warm, accessible mental wellness initiative for Rwanda. You don't have to go through it alone.",
      quickLinks: "Quick Links",
      legal: "Legal & Privacy",
      emergencyNotice: "For immediate safety emergencies in Rwanda, call 112 or 114.",
      copyright: "© 2026 Bambe Center. All rights reserved. Made with heart for Rwanda.",
    },
  },
  rw: {
    nav: {
      home: "Ahabanza",
      findSupport: "Shaka Ubufasha",
      imFeeling: "Ndumva...",
      resources: "Ibikoresho n'Inyandiko",
      forStudents: "Abarimu n'Abanyeshuri",
      forFamilies: "Imiryango",
      forOrganizations: "Ibigo n'Ibyishimo",
      about: "Ibyerekeye Bambe",
      contact: "Tuvugishe",
      talkToSomeone: "Vugana n'Umuntu",
      urgentHelp: "Ubufasha bw'Ubwitaragasi 🆘",
    },
    hero: {
      title: "Ntabwo ugomba kubinyuramo wenyine.",
      subtitle: "Ubuzima bushobora kuremera rimwe na rimwe. Waba ufite umuhangayiko, urungu, agahinda, ingorane mu masomo, akazi cyangwa umubano—cyangwa gusa utameze neza nka busanzwe, ubufasha burahari.",
      talkCTA: "Vugana n'Umuntu",
      exploreCTA: "Shakisha Ubufasha",
      disclaimer: "Ntuba ukeneye icyemezo cy'umuganga kugira ngo uhabwe ubufasha.",
    },
    whatBringsYouHere: {
      title: "Ni iki gikuzanye hano?",
      subtitle: "Ntabwo ugomba kumenya icyo aricho neza. Tangirira ku cyo wumva mu mutima wawe.",
      feelings: {
        overwhelmed: { title: "Ndumva biremereye cyane", desc: "Buri kintu cyose kirarushya kandi kirabimfasha gukora." },
        anxious: { title: "Mfite igihunga n'umuhangayiko", desc: "Bitekerezo byanjye ntibituza ntitubisinzira." },
        low: { title: "Ndumva ncuramye / Nta mbaraga", desc: "Sindaba meze neza mu minsi ishize kandi ndananiwe." },
        burntOut: { title: "Ndananiwe mu mutwe (Burnout)", desc: "Ndunaniwe cyane, hatitawe ku rugero rw'ikiruhuko mfata." },
        lonely: { title: "Ndumva uri wenyine (Urungu)", desc: "Ndumva ntari kumwe n'abandi batanu n'inshuti." },
        grieving: { title: "Mfite agahinda k'ubwiyunge / Igihombo", desc: "Nkurikirana ibyo kutakaza umuntu w'agaciro mu buzima." },
        schoolPressure: { title: "Ngitwe n'ibizamini n'amasomo", desc: "Ibibazo n'igitutu cy'amasomo birenze ubushobozi." },
        relationships: { title: "Ibibazo mu mubano n'abandi", desc: "Imibano yanjye n'inshuti cyangwa umuryango ntimaze neza." },
        dontKnow: { title: "Simbizi neza", desc: "Nzi gusa ko hari ikintu mu mutima kitameze neza." },
      },
    },
    earlySupport: {
      title: "Ntubazuyaze gutegereza ko ibintu biba bibi cyane.",
      text: "Gushaka ubufasha ntibivuga ko ufite ikibazo gikomeye. Kuvugana n'umuntu maparaye hakiri kare bishobora kugufasha kumva ibyo unyuramo no gufata icyemezo gikwiriye.",
      cta: "Shaka Ubufasha Ubu",
    },
    supportOptions: {
      title: "Ubufasha bukwiriye aho uri hano n'ubu.",
      talkToSomeone: { title: "Vugana n'Umuntu", desc: "Mbere na mbere, umbire umuntu wumva kandi akwitayeho." },
      understandFeeling: { title: "Sobanukirwa Ibyo Wumva", desc: "Wige kurushaho ku bitekerezo n'imyumvire yawe mu buzima." },
      learnGrow: { title: "Wige Kandi Ukure", desc: "Soma inyandiko n'amasomo aboneye arinda ubuzima bwo mu mutwe." },
      supportLovedOne: { title: "Fasha Umuntu Ukunda", desc: "Ongeraho ubushobozi bwo gufasha inshuti cyangwa umuryango waba ubabaye." },
    },
    checkIn: {
      heroTitle: "Fata umwanya wisuzume ubwawe.",
      heroSubtitle: "Ibi bibazo bihagije 5 bigufasha gutekerereza ku buzima bwawe bwo mu mutwe mu minsi ishize. Ni ibyawe bwite kandi ntibitanga icyemezo cy'ubuganga.",
      quizDisclaimer: "Iki cyisuzuma ni icyo kugufasha no kwisuzuma. Ntisesengura uburwayi bwa muganga.",
      startBtn: "Tangira Kwisuzuma",
      nextBtn: "Ikibazo Gikurikira",
      prevBtn: "Kuba cyo Mbere",
      submitBtn: "Reba Ibyavuyemo",
      restartBtn: "Ongera Wisuzume",
    },
    students: {
      title: "Uri uwarenze amanota yawe.",
      subtitle: "Ibipimo by'amasomo, ibizamini, imibano, n'ingorane z'ahazaza bishobora kuremera. Ntubifite gupakira wenyine.",
      cta: "Ndi Umunyeshuri & Nkeneye Ubufasha",
    },
    families: {
      title: "Ufite impungenge ku muntu ukunda?",
      subtitle: "Rimwe na rimwe umuntu ukeneye ubufasha si wowe. Wige kubona ibimenyetso no gutangira ikiganiro cy'urukundo.",
      cta: "Wige Gufasha Umuntu Ukunda",
    },
    rwandaSection: {
      title: "Yubatswe ku bw'u Rwanda.",
      text: "Ubuzima bwo mu mutwe bwubakirwa mu miryango yacu, umuco wacu n'imibereho ya buri munsi. Turakora icyicaro cyita ku bitekerezo n'umuco nyarwanda gihamya ubufasha budakumira.",
    },
    values: {
      compassion: { title: "Impuhwe", desc: "Tuumva tutagaye na rimwe." },
      respect: { title: "Ikyubahiro", desc: "Amateka n'ubushobozi bwa buri muntu ni agaciro." },
      accessibility: { title: "Kugerwaho", desc: "Ubufasha bugomba koroha kuboneka no kumvikana." },
      trust: { title: "Kwizera", desc: "Tutanze amakuru yizerwa kandi yizewe." },
    },
    finalCTA: {
      title: "Icyakuzanye cyose hano, uhawe ikaze.",
      subtitle: "Ntubaye ufite ibisubizo byose uyu munsi. Fata intambwe imwe ntoya.",
      talkBtn: "Vugana n'Umuntu",
      exploreBtn: "Soma Inyandiko",
    },
    urgentHelpPage: {
      title: "Ukeneye Ubufasha bw'Ubwitaragasi?",
      warning: "Niba wowe cyangwa umuntu uzi ari mu kaga k'ubuzima cyangwa mu kibazo gikomeye, hamagara serivisi z'ubutabazi z'ihuse ubu nyine.",
      disclaimer: "Nimero n'ibitaro byose byanditswe hano bifikirwa n'urwego rw'ubuzima mu Rwanda.",
      helplinesTitle: "Nimero z'Ubutabazi mu Rwanda (24/7)",
      facilitiesTitle: "Ibitaro n'Ibigo by'Ubuzima bwo mu Mutwe",
    },
    footer: {
      tagline: "Umushinga w'ubuzima bwo mu mutwe wuzuyemo impuhwe mu Rwanda. Ntabwo ugomba kubinyuramo wenyine.",
      quickLinks: "Ibyingenzi",
      legal: "Amategeko n'Uburenganzira",
      emergencyNotice: "Mu bihe by'ubutabazi mu Rwanda, hamagara 112 cyangwa 114.",
      copyright: "© 2026 Bambe Center. Uburenganzira bwose ni ubwacu. Yakozwe ku bw'u Rwanda.",
    },
  },
};
