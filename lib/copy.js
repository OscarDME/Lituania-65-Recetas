// lib/copy.js — Visas matomas nukreipiamojo puslapio (landing page) tekstinis turinys. 
// Visi teksto pakeitimai atliekami čia.

export const copy = {
  metadata: {
    title: "365 sveiki receptai – be cukraus ir be glitimo",
    description:
      "1000 receptų be cukraus ir be glitimo 365 dienoms. Valgykite be kaltės jausmo, be vargo ir be jokių suvaržymų. Specialus pasiūlymas: 8,90 € + 8 dovanos.",
    lang: "lt",
  },

  hero: {
    banner: "PASIŪLYMAS GALIOJA TIK ŠIANDIEN!",
    timerLabels: { days: "Dienos", hours: "Valandos", minutes: "Min.", seconds: "Sek." },
    headline:
      "365 dienos skanių receptų be cukraus ir glitimo – valgykite be jokio kaltės jausmo!",
    bullets: [
      "Mėgaukitės sveikesniu ir skanesniu maistu, neaukodami tikrojo skonio",
      "BE JOKIO VARGO",
      "BE JOKIŲ SUVARŽYMŲ",
      "BE KALTĖS JAUSMO",
    ],
    cta: "NORIU VALGYTI BE KALTĖS JAUSMO",
    kicker: "365 dienos · 1000 receptų",
    imageAlt: "365 dienų receptų knyga be cukraus ir be glitimo",
    trustChips: [
      { icon: "⭐", text: "Daugiau nei 5 000 šeimų" },
      { icon: "🎁", text: "8 papildomos dovanos" },
      { icon: "🛡️", text: "Šiandien taikoma 75 % nuolaida" },
    ],
  },

  story: {
    headlinePre: "Cukrus – tai tylus priešas,",
    headlineHighlight: "griaunantis jūsų sveikatą",
    intro:
      "Jis slypi kasdieniame maiste ir slepiasi produktuose, kurie iš pažiūros atrodo visiškai nekalti.",
    problemsLead:
      "Štai pagrindinės cukraus sukeliamos problemos ir kaip jos gali jus veikti būtent dabar:",
    problems: [
      "Nuolatinis nuovargis ir nepaaiškinamas išsekimas",
      "Svorio augimas ir riebalų kaupimasis pilvo srityje",
      "Hormonų ir medžiagų apykaitos disbalansas",
      "Lėtinių ligų rizika (diabetas, hipertenzija, nutukimas ir kt.)",
      "Staigūs nuotaikų svyravimai ir nerimas",
      "Pagreitėjęs senėjimas",
      "Priklausomybė nuo maisto ir nenumaldomas potraukis saldumynams",
    ],
    solutionHeadline:
      "Pagaliau atsirado paprastas ir veiksmingas sprendimas, kaip pakeisti savo mitybą neatsisakant mėgstamo maisto.",
    solutionBadge: "Sprendimas",
  },

  benefits: {
    stepsHeadline: "Jūsų transformacijai pakanka vos 3 žingsnių",
    steps: [
      {
        number: "1",
        title: "Vadovaukitės meniu be kaltės jausmo",
        desc: "Gausite prieigą prie išsamaus receptų meniu kiekvienai metų dienai – visi jie be cukraus ir be glitimo. Jums nebereikės nieko planuoti!",
      },
      {
        number: "2",
        title: "Gaminkite lengvai ir skaniai",
        desc: "Vadovaukitės paprastomis instrukcijomis ir ruoškite nuostabius patiekalus, kurie pakeis jūsų mitybos įpročius.",
      },
      {
        number: "3",
        title: "Pajuskite pokyčius",
        desc: "Gaminant pagal šiuos receptus, netrukus pajusite skirtumą: turėsite daugiau energijos, bus lengviau kontroliuoti svorį ir sumažės ligų rizika.",
      },
    ],
    ctaMid: "NORIU VALGYTI BE KALTĖS JAUSMO",
    headline: "ATRASKITE PRIVALUMUS, KURIE PAKEIS JŪSŲ GYVENIMĄ",
    items: [
      {
        icon: "HeartPulse",
        title: "Cukraus kiekio kraujyje kontrolė",
        desc: "Subalansuokite cukraus kiekį kraujyje ir sumažinkite diabeto riziką naudodami maistingus bei skanius receptus.",
      },
      {
        icon: "Utensils",
        title: "Mitybos laisvė",
        desc: "Mėgaukitės gardžiais patiekalais be jokio kaltės jausmo ir sukurkite teigiamą santykį su maistu.",
      },
      {
        icon: "CalendarDays",
        title: "Kasdienė įvairovė",
        desc: "Turėdami 1000 receptų, galėsite atrasti vis naujų skonių kiekvieną metų dieną.",
      },
      {
        icon: "Timer",
        title: "Praktiškumas virtuvėje",
        desc: "Paruoškite skanius patiekalus per 30 minučių ar greičiau, taupydami laiką ir išvengdami kasdienio streso.",
      },
      {
        icon: "GraduationCap",
        title: "Mitybos edukacija",
        desc: "Išmokite sąmoningai rinktis maistą ir suformuokite sveikus įpročius visam gyvenimui.",
      },
      {
        icon: "Scale",
        title: "Svorio kontrolė",
        desc: "Palaikykite sveiką svorį naudodami sočius ir maistingus receptus, neaukodami puikaus skonio.",
      },
    ],
  },

  features: {
    headline: "Turėsite paruoštus meniu 365 dienoms – po vieną kiekvienai metų dienai",
    subheadline: "Lydėsime jus kiekviename žingsnyje link sveikesnės mitybos",
    categories: [
      {
        image: "/carousel/categoria-1.webp",
        title: "Pusryčiai ir užkandžiai",
        desc: "Pusryčių receptai, kokių DAR NIEKADA nematėte. Greiti paruošimo būdai su praktiškais ir lengvai prieinamais produktais!",
      },
      {
        image: "/carousel/categoria-2.webp",
        title: "Pietūs ir vakarienė",
        desc: "Nustebinkite šeimą įvairiais ir gardžiais patiekalais kasdienai bei ypatingoms progoms! Viskas paruošiama iš prieinamų produktų, kuriuos jau turite namuose.",
      },
      {
        image: "/carousel/categoria-3.webp",
        title: "Saldumynai ir desertai",
        desc: "Gausybė saldumynų ir desertų variantų be glitimo ir be cukraus – leiskite sau pasilepinti be jokio kaltės jausmo.",
      },
      {
        image: "/carousel/categoria-4.webp",
        title: "Padažai ir užtepėlės",
        desc: "Padažai ir kremai, suteiksiantys jūsų patiekalams neįtikėtiną skonį – greitai ir lengvai!",
      },
      {
        image: "/carousel/categoria-5.webp",
        title: "Sveikos sriubos ir kreminės sriubos",
        desc: "Sriubos, kreminės sriubos ir sultiniai – viskas paruošta iš maistingų ingredientų bei kruopščiai atrinktų prieskonių.",
      },
      {
        image: "/carousel/categoria-6.webp",
        title: "Miltų alternatyvos",
        desc: "Visi receptai be glitimo ir su žemu glikeminiu indeksu, todėl drąsiai galėsite kepti pyragus, duoną ir saldumynus.",
      },
    ],
    ctaMid: "NORIU VALGYTI BE KALTĖS JAUSMO",
    badgesHeadline: "Skaniausių patiekalų variantai",
    badges: ["BE CUKRAUS", "BE GLITIMO", "MAŽAI KALORIJŲ", "BE LAKTOZĖS"],
    audienceHeadline: "„Maistas be kaltės“ skirtas būtent jums, jeigu:",
    audience: [
      {
        title: "Turite mitybos apribojimų:",
        desc: "Žmonėms, kurie dėl sveikatos priežasčių, tokių kaip diabetas ar netoleravimas, privalo vengti cukraus ir glitimo.",
      },
      {
        title: "Norite sveikos šeimos:",
        desc: "Tėvams, norintiems užtikrinti maistingą ir skanų maistą savo vaikams bei ugdyti sveikus įpročius nuo pat mažens.",
      },
      {
        title: "Propaguojate sveiką gyvenimo būdą:",
        desc: "Žmonėms, besilaikantiems mažai angliavandenių turinčios, keto, paleo ar veganiškos dietos ir ieškantiems atitinkamų receptų.",
      },
      {
        title: "Norite kontroliuoti savo svorį:",
        desc: "Žmonėms, norintiems numesti svorio ar jį išlaikyti ir ieškantiems sočių, bet mažai kalorijų turinčių receptų.",
      },
    ],
  },

  testimonials: {
    headline: "Perskaitykite atsiliepimus tų, kurie jau naudoja šiuos receptus",
    cta: "NORIU VALGYTI BE KALTĖS JAUSMO",
    wallpaper: "/wallpaper-whatsapp.webp",
    messages: [
      {
        text: "Noriu pasakyti, kad ši receptų knyga yra tikras išsigelbėjimas. Turint tris mažus vaikus man nuolat trūksta laiko, bet tai, kad visi receptai yra vienoje vietoje, labai viską palengvino. Dabar namuose valgome skaniai ir sveikai 😊",
        time: "20:04",
        reactions: ["👌", "❤️"],
      },
      {
        text: "Kokia nuostabi receptų knyga! Kai man diagnozavo glitimo netoleravimą, maniau, kad niekada nebegalėsiu mėgautis maistu, tačiau su jūsų receptais galiu valgyti be jokių rūpesčių. Ačiū, kad viską taip palengvinote! 🙏",
        time: "19:57",
      },
      {
        text: "Noriu padėkoti, nes šie receptai pakeitė mano gyvenimą. Sergu diabetu ir man visada buvo sunku rasti skanių ir sveikų alternatyvų. Dabar mėgaujuosi kiekvienu valgiu be jokios baimės. Nuoširdžiai jums ačiū! 🙏",
        time: "19:49",
      },
      {
        text: "Tūkstantis ačiū už receptus! Dievinu saldumynus ir visada turėjau problemų dėl cukraus vartojimo, bet jūsų receptai suteikė man skanių ir lengvai paruošiamų alternatyvų.",
        time: "18:55",
        reactions: ["❤️"],
      },
    ],
  },

  carouselSection: {
    prevLabel: "Ankstesnis",
    nextLabel: "Kitas",
    images: [
      { src: "/carousel/categoria-7.webp", alt: "Sveikas receptas 1" },
      { src: "/carousel/categoria-8.webp", alt: "Sveikas receptas 2" },
      { src: "/carousel/categoria-9.webp", alt: "Sveikas receptas 3" },
      { src: "/carousel/categoria-10.webp", alt: "Sveikas receptas 4" },
      { src: "/carousel/categoria-11.webp", alt: "Sveikas receptas 5" },
      { src: "/carousel/categoria-1.webp", alt: "Sveikas receptas 6" },
    ],
  },

  bonuses: {
    badge: "Specialiai jums, nes atėjote iki pat čia",
    headline: "JEI ĮSIGYSITE 1000 RECEPTŲ ŠIANDIEN, GAUSITE 8 IŠSKIRTINES DOVANAS 🎁",
    valueLabel: "Vertė:",
    freeLabel: "NEMOKAMAI",
    items: [
      { image: "/bonuses/bono-1.webp", tag: "1 DOVANA", title: "Desertų be cukraus receptai", value: "11,00 €" },
      { image: "/bonuses/bono-2.webp", tag: "2 DOVANA", title: "Padažų ir užtepėlių receptai", value: "7,80 €" },
      { image: "/bonuses/bono-3.webp", tag: "3 DOVANA", title: "Sriubų ir kreminių sriubų receptai", value: "6,20 €" },
      { image: "/bonuses/bono-4.webp", tag: "4 DOVANA", title: "Receptai su beglitimiais miltais", value: "4,46 €" },
      { image: "/bonuses/bono-5.webp", tag: "5 DOVANA", title: "Duonos be glitimo receptai", value: "9,41 €" },
      { image: "/bonuses/bono-6.webp", tag: "6 DOVANA", title: "Sveikų tortilijų receptai", value: "9,41 €" },
      { image: "/bonuses/bono-7.webp", tag: "7 DOVANA", title: "Sveikos picos", value: "9,41 €" },
      { image: "/bonuses/bono-8.webp", tag: "8 DOVANA", title: "500 gardžių receptų, sukurtų specialiai diabetikams", value: "9,41 €" },
    ],
    totalLabel: "Bendra jūsų gaunamų priedų vertė siekia daugiau nei 40 €",
    footer: "Tačiau šiandien jums nereikės mokėti šios sumos... nors visa tai verta kiekvieno cento.",
  },

  finalCta: {
    preHeadline: "Bendra jūsų investicija už 1000 receptų ir visus priedus...",
    urgencyTop: "Riboto laiko pasiūlymas!",
    subUrgency:
      "Nepraleiskite progos įsigyti šią receptų knygą su 75 % nuolaida. Pakeiskite savo sveikatą jau dabar su mūsų išsamiu meniu 365 dienoms.",
    headline: "365 DIENŲ RECEPTAI BE CUKRAUS IR GLITIMO + PAPILDOMOS DOVANOS",
    bundleList: [
      "1000 receptų be cukraus ir be glitimo",
      "1 dovana: Desertų be cukraus receptai",
      "2 dovana: Padažų ir užtepėlių receptai",
      "3 dovana: Sriubų ir kreminių sriubų receptai",
      "4 dovana: Receptai su beglitimiais miltais",
      "5 dovana: Duonos be glitimo receptai",
      "6 dovana: Sveikų tortilijų receptai",
      "7 dovana: Sveikos picos",
      "8 dovana: 500 gardžių receptų diabetikams",
    ],
    guaranteeText:
      "Dėmesio: jei esate žmogus, kuris tikrai nori pasirūpinti savo ar savo šeimos sveikata, mūsų receptai be cukraus ir glitimo tikrai gali jums padėti jau dabar. Nepraleiskite šios galimybės!",
    regularPriceLabel: "NUO:",
    regularPrice: "40,00 €",
    urgencyText: "PASIŪLYMAS GALIOJA TIK ŠIANDIEN!",
    offerPrice: "8,90 €",
    bottomUrgency: "Paskutiniai vienetai",
    discountBadge: "75 % NUOLAIDA",
    button: "TAIP, NORIU RECEPTŲ + DOVANŲ JAU DABAR",
    trustRow: "🔒 100 % saugus mokėjimas • ⚡ Momentinė prieiga • ✅ Neribota garantija",
    imageAlt: "365 sveiki receptai + 8 dovanos",
  },

  faq: {
    authorHeadline: "Kas yra Eglė Petrauskienė?",
    authorBio:
      "Eglė Petrauskienė yra sveikos mitybos ekspertė, keičianti žmonių įpročius savo inovatyviu meniu „Maistas be kaltės“. Turėdama didelę dietologės patirtį, Eglė dalijasi 1000 lengvų ir prieinamų receptų, sukurtų tam, kad padėtų jums kiekviename žingsnyje link sveikesnio gyvenimo. Baigusi „Mitybos ir dietologijos“ studijas, Eglė suderina savo profesines žinias su praktišku požiūriu, siūlydama skanius ir subalansuotus receptus, pritaikytus įvairiems poreikiams, kartu su vertingais patarimais, kurie padės mėgautis maistu be jokių apribojimų ar sąžinės priekaištų.",
    authorRole: "Dietologė",
    authorImageAlt: "Eglė Petrauskienė — Dietologė",
    worksHeadline: "KAS IŠ TIKRŲJŲ VEIKIA?",
    doesntWork: [
      "VALGYTI MAŽAI IR BADAUTI",
      "LAIKYTIS SUDĖTINGŲ DIETŲ",
      "ATSISAKYTI TO, KĄ MĖGSTATE",
    ],
    worksText:
      "Tai, kas iš tikrųjų veikia – apgalvota mityba su lengvais ir praktiškais receptais be cukraus ir be glitimo. Su mūsų 365 dienų meniu jums nebereikės sukti galvos dėl nuviliančių ar varžančių dietų.",
    headline: "Dažniausiai užduodami klausimai",
    subheadline: "Atsakymai į jums rūpimus klausimus",
    items: [
      { q: "KAIP GAUSIU RECEPTUS?", a: "Visą turinį gausite nurodytu el. paštu." },
      { q: "AR GALIU PRISIJUNGTI PER TELEFONĄ?", a: "Taip, tiek per telefoną, tiek per planšetinį ar stacionarų kompiuterį." },
      { q: "TURITE DAUGIAU KLAUSIMŲ?", a: "Taip, bet kuriuo metu galite tiesiogiai užduoti man visus rūpimus klausimus." },
      { q: "KIEK LAIKO GALĖSIU NAUDOTIS TURINIU?", a: "Prieiga prie viso turinio suteikiama visam gyvenimui." },
    ],
  },

  closing: {
    kicker: "PASKUTINIS ŠANSAS! ⚡ Šis pasiūlymas greitai baigsis",
    headline:
      "Pakeiskite savo sveikatą jau dabar su mūsų išsamiu meniu 365 dienoms.",
    subheadline:
      "1000 receptų be cukraus ir glitimo + 8 papildomos dovanos. Visa tai – vos už vienų pietų kainą.",
    regularPrice: "40,00 €",
    offerPrice: "8,90 €",
    ctaLabel: "TAIP, NORIU RECEPTŲ + DOVANŲ JAU DABAR",
    trustRow:
      "🔒 100 % saugus mokėjimas • ⚡ Momentinė prieiga visam gyvenimui • ✅ Paskutiniai vienetai",
  },

  footer: {
    brand: "Crearis",
    copyright: "2025 © Visos teisės saugomos. Susipažinkite su mūsų Privatumo politika.",
  },
};