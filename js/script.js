
// ========================================
// YD STUDIO — INTERACTIONS & MULTILINGUAL
// ========================================

const languageSelect = document.getElementById("language-select");
const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("nav");
const header = document.querySelector(".header");

// ========================================
// TRANSLATIONS
// ========================================

const translations = {
    es: {
        languageLabel: "Idioma",
        navHome: "Inicio",
        navAbout: "Nosotros",
        navServices: "Servicios",
        navProjects: "Proyectos",
        navContact: "Contacto",
        eyebrow: "ESTUDIO DIGITAL INDEPENDIENTE",
        heroTitle: "Convertimos ideas en experiencias digitales.",
        heroDescription: "Diseñamos y desarrollamos soluciones digitales para marcas, negocios y personas con visión de futuro.",
        heroButton: "Explorar proyectos ↗",
        heroSecondary: "Conocer el estudio",
        heroFooterLeft: "DESARROLLO WEB · SOFTWARE · SOLUCIONES DIGITALES",
        heroFooterRight: "CON SEDE EN COLOMBIA",
        aboutLabel: "EL ESTUDIO",
        aboutTitle: "La tecnología es el medio. Las ideas son el comienzo.",
        aboutParagraph1: "YD Studio es un estudio digital enfocado en crear soluciones tecnológicas funcionales, atractivas y pensadas para resolver necesidades reales.",
        aboutParagraph2: "Combinamos desarrollo, creatividad y aprendizaje constante para transformar conceptos en proyectos digitales.",
        servicesLabel: "QUÉ HACEMOS",
        servicesTitle: "Soluciones para construir el futuro digital.",
        service1Title: "Desarrollo web",
        service1Description: "Sitios web modernos, landing pages y experiencias adaptables a cualquier pantalla.",
        service2Title: "Software",
        service2Description: "Herramientas y aplicaciones diseñadas para resolver problemas y facilitar tareas.",
        service3Title: "Soluciones digitales",
        service3Description: "Ideas tecnológicas convertidas en proyectos útiles y funcionales.",
        projectsLabel: "TRABAJO SELECCIONADO",
        projectsTitle: "Proyectos que convierten ideas en realidad.",
        portfolioYear: "PORTAFOLIO 2026",
        projectCategory: "DESARROLLO WEB",
        blackCrownAlt: "Vista previa del sitio web Black Crown Barber Studio",
        blackCrownDescription: "Sitio web para una barbería con diseño elegante, presentación de servicios e información de contacto.",
        navajaRojaAlt: "Vista previa del sitio web Navaja Roja Barber",
        navajaRojaDescription: "Sitio web para barbería con presentación de servicios, información del negocio y acceso a reservas por WhatsApp.",
        visitProject: "Visitar proyecto ↗",
        contactLabel: "HABLEMOS",
        contactTitle: "¿Tienes una idea? Hagámosla realidad.",
        contactDescription: "Estamos abiertos a nuevos proyectos y oportunidades de colaboración.",
        contactButton: "Hablemos de tu proyecto ↗",
        copyright: "Todos los derechos reservados.",
        backTop: "Volver arriba ↑",
        menuOpen: "Abrir menú",
        menuClose: "Cerrar menú",
        pageTitle: "YD Studio | Digital Solutions",
        pageDescription: "YD Studio: desarrollo web, software y soluciones digitales. Convertimos ideas en experiencias digitales."
    },

    en: {
        languageLabel: "Language",
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navProjects: "Projects",
        navContact: "Contact",
        eyebrow: "INDEPENDENT DIGITAL STUDIO",
        heroTitle: "We turn ideas into digital experiences.",
        heroDescription: "We design and develop digital solutions for brands, businesses and forward-thinking people.",
        heroButton: "Explore projects ↗",
        heroSecondary: "Discover the studio",
        heroFooterLeft: "WEB DEVELOPMENT · SOFTWARE · DIGITAL SOLUTIONS",
        heroFooterRight: "BASED IN COLOMBIA",
        aboutLabel: "THE STUDIO",
        aboutTitle: "Technology is the medium. Ideas are the beginning.",
        aboutParagraph1: "YD Studio is a digital studio focused on creating functional, attractive technology solutions designed to solve real needs.",
        aboutParagraph2: "We combine development, creativity and continuous learning to transform concepts into digital projects.",
        servicesLabel: "WHAT WE DO",
        servicesTitle: "Solutions to build the digital future.",
        service1Title: "Web development",
        service1Description: "Modern websites, landing pages and experiences adapted to every screen.",
        service2Title: "Software",
        service2Description: "Tools and applications designed to solve problems and simplify tasks.",
        service3Title: "Digital solutions",
        service3Description: "Technology ideas transformed into useful and functional projects.",
        projectsLabel: "SELECTED WORK",
        projectsTitle: "Projects that turn ideas into reality.",
        portfolioYear: "PORTFOLIO 2026",
        projectCategory: "WEB DEVELOPMENT",
        blackCrownAlt: "Black Crown Barber Studio website preview",
        blackCrownDescription: "Website for a barbershop featuring elegant design, service presentation and contact information.",
        navajaRojaAlt: "Navaja Roja Barber website preview",
        navajaRojaDescription: "Barbershop website featuring services, business information and direct access to WhatsApp bookings.",
        visitProject: "Visit project ↗",
        contactLabel: "LET'S TALK",
        contactTitle: "Have an idea? Let's make it real.",
        contactDescription: "We are open to new projects and collaboration opportunities.",
        contactButton: "Let's discuss your project ↗",
        copyright: "All rights reserved.",
        backTop: "Back to top ↑",
        menuOpen: "Open menu",
        menuClose: "Close menu",
        pageTitle: "YD Studio | Digital Solutions",
        pageDescription: "YD Studio: web development, software and digital solutions. We turn ideas into digital experiences."
    },

    pt: {
        languageLabel: "Idioma",
        navHome: "Início",
        navAbout: "Sobre",
        navServices: "Serviços",
        navProjects: "Projetos",
        navContact: "Contato",
        eyebrow: "ESTÚDIO DIGITAL INDEPENDENTE",
        heroTitle: "Transformamos ideias em experiências digitais.",
        heroDescription: "Projetamos e desenvolvemos soluções digitais para marcas, empresas e pessoas com visão de futuro.",
        heroButton: "Explorar projetos ↗",
        heroSecondary: "Conheça o estúdio",
        heroFooterLeft: "DESENVOLVIMENTO WEB · SOFTWARE · SOLUÇÕES DIGITAIS",
        heroFooterRight: "COM SEDE NA COLÔMBIA",
        aboutLabel: "O ESTÚDIO",
        aboutTitle: "A tecnologia é o meio. As ideias são o começo.",
        aboutParagraph1: "A YD Studio é um estúdio digital focado em criar soluções tecnológicas funcionais, atraentes e pensadas para resolver necessidades reais.",
        aboutParagraph2: "Combinamos desenvolvimento, criatividade e aprendizado contínuo para transformar conceitos em projetos digitais.",
        servicesLabel: "O QUE FAZEMOS",
        servicesTitle: "Soluções para construir o futuro digital.",
        service1Title: "Desenvolvimento web",
        service1Description: "Sites modernos, landing pages e experiências adaptáveis a qualquer tela.",
        service2Title: "Software",
        service2Description: "Ferramentas e aplicativos projetados para resolver problemas e facilitar tarefas.",
        service3Title: "Soluções digitais",
        service3Description: "Ideias tecnológicas transformadas em projetos úteis e funcionais.",
        projectsLabel: "TRABALHOS SELECIONADOS",
        projectsTitle: "Projetos que transformam ideias em realidade.",
        portfolioYear: "PORTFÓLIO 2026",
        projectCategory: "DESENVOLVIMENTO WEB",
        blackCrownAlt: "Prévia do site Black Crown Barber Studio",
        blackCrownDescription: "Site para uma barbearia com design elegante, apresentação de serviços e informações de contato.",
        navajaRojaAlt: "Prévia do site Navaja Roja Barber",
        navajaRojaDescription: "Site de barbearia com apresentação de serviços, informações do negócio e acesso a reservas pelo WhatsApp.",
        visitProject: "Visitar projeto ↗",
        contactLabel: "VAMOS CONVERSAR",
        contactTitle: "Tem uma ideia? Vamos torná-la realidade.",
        contactDescription: "Estamos abertos a novos projetos e oportunidades de colaboração.",
        contactButton: "Vamos falar sobre seu projeto ↗",
        copyright: "Todos os direitos reservados.",
        backTop: "Voltar ao topo ↑",
        menuOpen: "Abrir menu",
        menuClose: "Fechar menu",
        pageTitle: "YD Studio | Soluções Digitais",
        pageDescription: "YD Studio: desenvolvimento web, software e soluções digitais."
    },

    fr: {
        languageLabel: "Langue",
        navHome: "Accueil",
        navAbout: "À propos",
        navServices: "Services",
        navProjects: "Projets",
        navContact: "Contact",
        eyebrow: "STUDIO NUMÉRIQUE INDÉPENDANT",
        heroTitle: "Nous transformons les idées en expériences numériques.",
        heroDescription: "Nous concevons et développons des solutions numériques pour les marques, les entreprises et les esprits tournés vers l'avenir.",
        heroButton: "Explorer les projets ↗",
        heroSecondary: "Découvrir le studio",
        heroFooterLeft: "DÉVELOPPEMENT WEB · LOGICIEL · SOLUTIONS NUMÉRIQUES",
        heroFooterRight: "BASÉ EN COLOMBIE",
        aboutLabel: "LE STUDIO",
        aboutTitle: "La technologie est le moyen. Les idées sont le commencement.",
        aboutParagraph1: "YD Studio est un studio numérique spécialisé dans la création de solutions technologiques fonctionnelles et attrayantes, conçues pour répondre à des besoins réels.",
        aboutParagraph2: "Nous combinons développement, créativité et apprentissage continu pour transformer des concepts en projets numériques.",
        servicesLabel: "NOS ACTIVITÉS",
        servicesTitle: "Des solutions pour construire l'avenir numérique.",
        service1Title: "Développement web",
        service1Description: "Sites web modernes, pages d'atterrissage et expériences adaptées à tous les écrans.",
        service2Title: "Logiciels",
        service2Description: "Outils et applications conçus pour résoudre des problèmes et simplifier les tâches.",
        service3Title: "Solutions numériques",
        service3Description: "Des idées technologiques transformées en projets utiles et fonctionnels.",
        projectsLabel: "PROJETS SÉLECTIONNÉS",
        projectsTitle: "Des projets qui donnent vie aux idées.",
        portfolioYear: "PORTFOLIO 2026",
        projectCategory: "DÉVELOPPEMENT WEB",
        blackCrownAlt: "Aperçu du site Black Crown Barber Studio",
        blackCrownDescription: "Site web pour un salon de coiffure avec un design élégant, une présentation des services et des coordonnées.",
        navajaRojaAlt: "Aperçu du site Navaja Roja Barber",
        navajaRojaDescription: "Site web de barbier présentant les services, les informations du commerce et l'accès aux réservations WhatsApp.",
        visitProject: "Voir le projet ↗",
        contactLabel: "PARLONS-EN",
        contactTitle: "Vous avez une idée ? Réalisons-la ensemble.",
        contactDescription: "Nous sommes ouverts aux nouveaux projets et aux opportunités de collaboration.",
        contactButton: "Parlons de votre projet ↗",
        copyright: "Tous droits réservés.",
        backTop: "Retour en haut ↑",
        menuOpen: "Ouvrir le menu",
        menuClose: "Fermer le menu",
        pageTitle: "YD Studio | Solutions numériques",
        pageDescription: "YD Studio : développement web, logiciels et solutions numériques."
    },

    de: {
        languageLabel: "Sprache",
        navHome: "Startseite",
        navAbout: "Über uns",
        navServices: "Leistungen",
        navProjects: "Projekte",
        navContact: "Kontakt",
        eyebrow: "UNABHÄNGIGES DIGITALES STUDIO",
        heroTitle: "Wir verwandeln Ideen in digitale Erlebnisse.",
        heroDescription: "Wir entwerfen und entwickeln digitale Lösungen für Marken, Unternehmen und zukunftsorientierte Menschen.",
        heroButton: "Projekte entdecken ↗",
        heroSecondary: "Das Studio kennenlernen",
        heroFooterLeft: "WEBENTWICKLUNG · SOFTWARE · DIGITALE LÖSUNGEN",
        heroFooterRight: "MIT SITZ IN KOLUMBIEN",
        aboutLabel: "DAS STUDIO",
        aboutTitle: "Technologie ist das Mittel. Ideen sind der Anfang.",
        aboutParagraph1: "YD Studio ist ein digitales Studio, das sich auf funktionale und attraktive Technologielösungen konzentriert, die echte Bedürfnisse erfüllen.",
        aboutParagraph2: "Wir verbinden Entwicklung, Kreativität und kontinuierliches Lernen, um Konzepte in digitale Projekte zu verwandeln.",
        servicesLabel: "WAS WIR TUN",
        servicesTitle: "Lösungen für die digitale Zukunft.",
        service1Title: "Webentwicklung",
        service1Description: "Moderne Websites, Landingpages und Erlebnisse für jedes Bildschirmformat.",
        service2Title: "Software",
        service2Description: "Tools und Anwendungen, die Probleme lösen und Aufgaben erleichtern.",
        service3Title: "Digitale Lösungen",
        service3Description: "Technologische Ideen, umgesetzt in nützliche und funktionale Projekte.",
        projectsLabel: "AUSGEWÄHLTE ARBEITEN",
        projectsTitle: "Projekte, die Ideen Wirklichkeit werden lassen.",
        portfolioYear: "PORTFOLIO 2026",
        projectCategory: "WEBENTWICKLUNG",
        blackCrownAlt: "Vorschau der Website Black Crown Barber Studio",
        blackCrownDescription: "Website für einen Barbershop mit elegantem Design, Serviceübersicht und Kontaktinformationen.",
        navajaRojaAlt: "Vorschau der Website Navaja Roja Barber",
        navajaRojaDescription: "Barbershop-Website mit Dienstleistungen, Geschäftsinformationen und direkter WhatsApp-Terminbuchung.",
        visitProject: "Projekt ansehen ↗",
        contactLabel: "KONTAKT",
        contactTitle: "Haben Sie eine Idee? Machen wir sie Wirklichkeit.",
        contactDescription: "Wir sind offen für neue Projekte und Kooperationsmöglichkeiten.",
        contactButton: "Sprechen wir über Ihr Projekt ↗",
        copyright: "Alle Rechte vorbehalten.",
        backTop: "Nach oben ↑",
        menuOpen: "Menü öffnen",
        menuClose: "Menü schließen",
        pageTitle: "YD Studio | Digitale Lösungen",
        pageDescription: "YD Studio: Webentwicklung, Software und digitale Lösungen."
    },

    it: {
        languageLabel: "Lingua",
        navHome: "Home",
        navAbout: "Chi siamo",
        navServices: "Servizi",
        navProjects: "Progetti",
        navContact: "Contatti",
        eyebrow: "STUDIO DIGITALE INDIPENDENTE",
        heroTitle: "Trasformiamo le idee in esperienze digitali.",
        heroDescription: "Progettiamo e sviluppiamo soluzioni digitali per marchi, aziende e persone con una visione del futuro.",
        heroButton: "Esplora i progetti ↗",
        heroSecondary: "Scopri lo studio",
        heroFooterLeft: "SVILUPPO WEB · SOFTWARE · SOLUZIONI DIGITALI",
        heroFooterRight: "CON SEDE IN COLOMBIA",
        aboutLabel: "LO STUDIO",
        aboutTitle: "La tecnologia è il mezzo. Le idee sono l'inizio.",
        aboutParagraph1: "YD Studio è uno studio digitale specializzato nella creazione di soluzioni tecnologiche funzionali e accattivanti, pensate per risolvere esigenze reali.",
        aboutParagraph2: "Uniamo sviluppo, creatività e apprendimento continuo per trasformare concetti in progetti digitali.",
        servicesLabel: "COSA FACCIAMO",
        servicesTitle: "Soluzioni per costruire il futuro digitale.",
        service1Title: "Sviluppo web",
        service1Description: "Siti web moderni, landing page ed esperienze adattabili a qualsiasi schermo.",
        service2Title: "Software",
        service2Description: "Strumenti e applicazioni progettati per risolvere problemi e semplificare le attività.",
        service3Title: "Soluzioni digitali",
        service3Description: "Idee tecnologiche trasformate in progetti utili e funzionali.",
        projectsLabel: "PROGETTI SELEZIONATI",
        projectsTitle: "Progetti che trasformano le idee in realtà.",
        portfolioYear: "PORTFOLIO 2026",
        projectCategory: "SVILUPPO WEB",
        blackCrownAlt: "Anteprima del sito Black Crown Barber Studio",
        blackCrownDescription: "Sito web per un barbiere con design elegante, presentazione dei servizi e informazioni di contatto.",
        navajaRojaAlt: "Anteprima del sito Navaja Roja Barber",
        navajaRojaDescription: "Sito web per barberia con servizi, informazioni sull'attività e accesso alle prenotazioni tramite WhatsApp.",
        visitProject: "Visita il progetto ↗",
        contactLabel: "PARLIAMONE",
        contactTitle: "Hai un'idea? Realizziamola insieme.",
        contactDescription: "Siamo aperti a nuovi progetti e opportunità di collaborazione.",
        contactButton: "Parliamo del tuo progetto ↗",
        copyright: "Tutti i diritti riservati.",
        backTop: "Torna su ↑",
        menuOpen: "Apri menu",
        menuClose: "Chiudi menu",
        pageTitle: "YD Studio | Soluzioni digitali",
        pageDescription: "YD Studio: sviluppo web, software e soluzioni digitali."
    },

    ja: {
        languageLabel: "言語",
        navHome: "ホーム",
        navAbout: "スタジオについて",
        navServices: "サービス",
        navProjects: "プロジェクト",
        navContact: "お問い合わせ",
        eyebrow: "独立系デジタルスタジオ",
        heroTitle: "アイデアをデジタル体験へと変えます。",
        heroDescription: "ブランド、企業、そして未来を見据える人々のために、デジタルソリューションを設計・開発します。",
        heroButton: "プロジェクトを見る ↗",
        heroSecondary: "スタジオについて",
        heroFooterLeft: "ウェブ開発 · ソフトウェア · デジタルソリューション",
        heroFooterRight: "コロンビアを拠点に活動",
        aboutLabel: "スタジオ",
        aboutTitle: "テクノロジーは手段。アイデアが始まりです。",
        aboutParagraph1: "YD Studioは、現実のニーズを解決する機能的で魅力的なテクノロジーソリューションの制作に取り組むデジタルスタジオです。",
        aboutParagraph2: "開発、創造性、継続的な学習を組み合わせ、コンセプトをデジタルプロジェクトへと変えていきます。",
        servicesLabel: "サービス内容",
        servicesTitle: "デジタルの未来を築くソリューション。",
        service1Title: "ウェブ開発",
        service1Description: "あらゆる画面に対応するモダンなウェブサイトやランディングページを制作します。",
        service2Title: "ソフトウェア",
        service2Description: "問題解決と作業の効率化を目的としたツールやアプリケーションを開発します。",
        service3Title: "デジタルソリューション",
        service3Description: "テクノロジーのアイデアを実用的で機能的なプロジェクトへと変えます。",
        projectsLabel: "制作実績",
        projectsTitle: "アイデアを現実に変えるプロジェクト。",
        portfolioYear: "ポートフォリオ 2026",
        projectCategory: "ウェブ開発",
        blackCrownAlt: "Black Crown Barber Studioのウェブサイトプレビュー",
        blackCrownDescription: "洗練されたデザイン、サービス紹介、連絡先情報を備えた理髪店のウェブサイトです。",
        navajaRojaAlt: "Navaja Roja Barberのウェブサイトプレビュー",
        navajaRojaDescription: "サービス紹介、店舗情報、WhatsApp予約へのアクセスを備えた理髪店のウェブサイトです。",
        visitProject: "プロジェクトを見る ↗",
        contactLabel: "お問い合わせ",
        contactTitle: "アイデアがありますか？一緒に実現しましょう。",
        contactDescription: "新しいプロジェクトや協業の機会を歓迎しています。",
        contactButton: "プロジェクトについて相談する ↗",
        copyright: "無断転載を禁じます。",
        backTop: "トップへ戻る ↑",
        menuOpen: "メニューを開く",
        menuClose: "メニューを閉じる",
        pageTitle: "YD Studio | デジタルソリューション",
        pageDescription: "YD Studio：ウェブ開発、ソフトウェア、デジタルソリューション。"
    },

    zh: {
        languageLabel: "语言",
        navHome: "首页",
        navAbout: "关于我们",
        navServices: "服务",
        navProjects: "项目",
        navContact: "联系",
        eyebrow: "独立数字工作室",
        heroTitle: "将创意转化为数字体验。",
        heroDescription: "我们为品牌、企业和具有前瞻性的人士设计并开发数字解决方案。",
        heroButton: "探索项目 ↗",
        heroSecondary: "了解工作室",
        heroFooterLeft: "网站开发 · 软件 · 数字解决方案",
        heroFooterRight: "位于哥伦比亚",
        aboutLabel: "工作室",
        aboutTitle: "技术是媒介，创意是起点。",
        aboutParagraph1: "YD Studio是一家数字工作室，专注于打造实用、美观并能够解决实际需求的技术解决方案。",
        aboutParagraph2: "我们结合开发、创意和持续学习，将想法转化为数字项目。",
        servicesLabel: "我们的服务",
        servicesTitle: "构建数字未来的解决方案。",
        service1Title: "网站开发",
        service1Description: "适配各种屏幕的现代网站、落地页和数字体验。",
        service2Title: "软件",
        service2Description: "旨在解决问题和简化任务的工具与应用程序。",
        service3Title: "数字解决方案",
        service3Description: "将技术创意转化为实用且功能完善的项目。",
        projectsLabel: "精选作品",
        projectsTitle: "让创意成为现实的项目。",
        portfolioYear: "作品集 2026",
        projectCategory: "网站开发",
        blackCrownAlt: "Black Crown Barber Studio网站预览",
        blackCrownDescription: "为理发店打造的网站，包含优雅设计、服务展示和联系方式。",
        navajaRojaAlt: "Navaja Roja Barber网站预览",
        navajaRojaDescription: "理发店网站，展示服务、商家信息，并提供WhatsApp预约入口。",
        visitProject: "查看项目 ↗",
        contactLabel: "联系我们",
        contactTitle: "你有一个想法吗？让我们一起实现它。",
        contactDescription: "我们欢迎新项目和合作机会。",
        contactButton: "讨论你的项目 ↗",
        copyright: "版权所有。",
        backTop: "返回顶部 ↑",
        menuOpen: "打开菜单",
        menuClose: "关闭菜单",
        pageTitle: "YD Studio | 数字解决方案",
        pageDescription: "YD Studio：网站开发、软件和数字解决方案。"
    }
};

// ========================================
// SABOR & BRASA — ADDITIONAL TRANSLATIONS
// ========================================

const saborBrasaTranslations = {
    es: {
        saborBrasaAlt: "Vista previa del sitio web Sabor & Brasa",
        saborBrasaDescription: "Sitio web para un restaurante de parrilla y cocina artesanal, con menú, especialidades, galería y reservas."
    },

    en: {
        saborBrasaAlt: "Sabor & Brasa restaurant website preview",
        saborBrasaDescription: "Website for a grilled food and artisan cuisine restaurant, featuring a menu, specialties, gallery and reservations."
    },

    pt: {
        saborBrasaAlt: "Prévia do site do restaurante Sabor & Brasa",
        saborBrasaDescription: "Site para um restaurante de grelhados e culinária artesanal, com cardápio, especialidades, galeria e reservas."
    },

    fr: {
        saborBrasaAlt: "Aperçu du site du restaurant Sabor & Brasa",
        saborBrasaDescription: "Site web pour un restaurant de grillades et de cuisine artisanale, avec menu, spécialités, galerie et réservations."
    },

    de: {
        saborBrasaAlt: "Vorschau der Website des Restaurants Sabor & Brasa",
        saborBrasaDescription: "Website für ein Grillrestaurant mit handwerklicher Küche, Speisekarte, Spezialitäten, Galerie und Reservierungen."
    },

    it: {
        saborBrasaAlt: "Anteprima del sito del ristorante Sabor & Brasa",
        saborBrasaDescription: "Sito web per un ristorante di grigliate e cucina artigianale, con menu, specialità, galleria e prenotazioni."
    },

    ja: {
        saborBrasaAlt: "Sabor & Brasaレストランのウェブサイトプレビュー",
        saborBrasaDescription: "グリル料理と職人料理を提供するレストランのウェブサイトです。メニュー、特選料理、ギャラリー、予約機能を備えています。"
    },

    zh: {
        saborBrasaAlt: "Sabor & Brasa餐厅网站预览",
        saborBrasaDescription: "为烧烤和手工料理餐厅打造的网站，包含菜单、特色菜品、图片展示和预约功能。"
    }
};

// Add the new project translations without modifying the existing dictionaries.
Object.keys(translations).forEach(language => {
    Object.assign(
        translations[language],
        saborBrasaTranslations[language]
    );
});

// ========================================
// LANGUAGE SYSTEM
// ========================================

function changeLanguage(language) {
    const selectedTranslations = translations[language];

    if (!selectedTranslations) return;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (selectedTranslations[key]) {
            element.textContent = selectedTranslations[key];
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(element => {
        const key = element.dataset.i18nAlt;

        if (selectedTranslations[key]) {
            element.alt = selectedTranslations[key];
        }
    });

    document.title = selectedTranslations.pageTitle;

    const description = document.querySelector('meta[name="description"]');

    if (description) {
        description.setAttribute(
            "content",
            selectedTranslations.pageDescription
        );
    }

    if (languageSelect) {
        languageSelect.value = language;
        languageSelect.setAttribute(
            "aria-label",
            selectedTranslations.languageLabel
        );
    }

    updateMenuLabels();
}

if (languageSelect) {
    languageSelect.addEventListener("change", event => {
        changeLanguage(event.target.value);
    });
}

// ========================================
// MOBILE MENU
// ========================================

function closeMobileMenu() {
    if (!navigation || !menuButton) return;

    navigation.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    updateMenuLabels();
}

function updateMenuLabels() {
    if (!menuButton) return;

    const language = languageSelect?.value || "es";
    const text = translations[language];

    if (!text) return;

    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
        "aria-label",
        isOpen ? text.menuClose : text.menuOpen
    );
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        updateMenuLabels();
    });

    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMobileMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            closeMobileMenu();
        }
    });
}

// ========================================
// ACCESSIBILITY
// ========================================

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const revealElements = document.querySelectorAll(
    ".section-label, .hero-content, .hero-bottom, " +
    ".about-content, .services h2, .service-card, " +
    ".projects-heading, .project-card, .contact h2, " +
    ".contact p, .contact .button"
);

if (
    prefersReducedMotion ||
    !("IntersectionObserver" in window)
) {
    revealElements.forEach(element => {
        element.classList.add("is-visible");
    });
} else {
    revealElements.forEach((element, index) => {
        element.classList.add("reveal");

        if (element.classList.contains("service-card")) {
            element.style.setProperty(
                "--reveal-delay",
                `${(index % 3) * 120}ms`
            );
        }

        if (element.classList.contains("project-card")) {
            element.style.setProperty(
                "--reveal-delay",
                `${(index % 2) * 120}ms`
            );
        }
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================

if (header) {
    const updateHeader = () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });
}

// ========================================
// SMOOTH ANCHOR NAVIGATION
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start"
        });
    });
});

// ========================================
// INITIAL LANGUAGE
// ========================================

changeLanguage("es");
