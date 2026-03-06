/* FSV Tech — main.js — Redesign 2026 */

const T = {
  en: {
    nav_home:'Home', nav_about:'About', nav_services:'Services',
    nav_products:'Products',
    nav_industries:'Industries', nav_contact:'Contact', nav_cta:'Get in Touch',

    prod_banner_ey:'Built by FSV Tech', prod_banner_h:'Our ', prod_banner_hem:'Products',
    prod_banner_p:"Software built for businesses and government in Qatar — owned and run by FSV Tech.",
    prod_list_ey:'Available Now', prod_list_h:'One product. ', prod_list_hem:'More coming soon.',
    prod_list_p:"We build software we would use ourselves. Every product is made to solve real business problems — not just look good on paper.",
    prod_p2_status:'Live · Available Now', prod_p2_h:'Nova AI',
    prod_p2_desc:'A local AI coding sandbox that runs entirely on your machine. Build full apps, run a live terminal, preview in real time, and keep your code completely private — no internet required.',
    prod_p2_t1:'100% Local', prod_p2_t2:'No Cloud', prod_p2_t3:'Ollama Powered', prod_p2_t4:'Windows / Mac',
    prod_p2_cta1:'See Nova AI', prod_p2_cta2:'Request Demo',

    nova_badge:'Product · Nova AI',
    nova_h1:'Your local AI coding sandbox.',
    nova_sub:'A fully local, privacy-first AI coding environment. Build complete apps, run a live terminal, and preview in real time — everything runs on your hardware. No internet required.',
    nova_cta1:'Request a Demo', nova_cta2:'Get in Touch',
    nova_stat1:'Local & Private', nova_stat2:'Cloud Dependency', nova_stat3:'AI Agent Roles',
    nova_feat_ey:'What\'s Inside Nova AI',
    nova_feat_h:'Everything you need to build. Nothing leaves your machine.',
    nova_feat_p:'Six core capabilities working together — intelligent multi-agent planning, live terminal, real-time preview, and persistent memory — all running locally on your own hardware.',
    nova_f1_h:'Multi-Agent Routing', nova_f1_p:'A Planner model breaks every request into steps and routes each to the right specialist — Coder, Scripter, Analyst, Writer, or General. Each agent uses the best model for its role.',
    nova_f2_h:'Live Terminal', nova_f2_p:'A real shell runs alongside your chat. Install packages, execute scripts, run migrations, and see output immediately — Nova can also run commands autonomously to complete your task.',
    nova_f3_h:'Real-Time Preview', nova_f3_p:'A built-in browser panel serves your app locally as it\'s built. React, HTML, Node.js — see the result immediately. No manual refresh, no separate browser required.',
    nova_f4_h:'Full App Development', nova_f4_p:'Scaffold complete projects from a single prompt — React apps, Flask APIs, Node.js services, dashboards. Nova writes working code, installs dependencies, and runs the project for you.',
    nova_f5_h:'Semantic Memory', nova_f5_p:'Nova stores persistent memories using LanceDB vectors and SQLite. It searches your workspace files semantically — finding relevant context across sessions to give more accurate answers.',
    nova_f6_h:'Fully Private — No Cloud', nova_f6_p:'Zero outbound requests to AI providers. All inference runs locally via Ollama. No API keys, no telemetry, no data leaving your machine. Safe for regulated and confidential codebases.',
    nova_sc1_ey:'The Interface', nova_sc1_h:'A complete workspace. One window.',
    nova_sc1_p:'Nova gives you everything in one place. Chat on the left, files and artifacts in the right panel — with Artifacts, Files, Preview, and Terminal all one click away. No setup, no configuration.',
    nova_sc1_b1:'Prompt suggestions to get started fast',
    nova_sc1_b2:'Inline tool steps show every file write and command executed',
    nova_sc1_b3:'Model badge shows which AI agent generated each response',
    nova_sc1_b4:'Switch models mid-conversation without losing context',
    nova_sc2_ey:'Building in Action', nova_sc2_h:'Scaffold a full app. From one prompt.',
    nova_sc2_p:'Ask Nova to build a dashboard, a REST API, a scraper — and it plans the work, writes every file, installs dependencies, and serves a live preview. You watch it happen step by step.',
    nova_sc2_b1:'Writes complete files — no truncated placeholders or stubs',
    nova_sc2_b2:'Runs npm install and pip install automatically',
    nova_sc2_b3:'Starts a local server and opens it in the Preview panel',
    nova_sc2_b4:'Save as a named project to pick up where you left off',
    nova_sc3_ey:'Artifacts & Files', nova_sc3_h:'Your code. Organised.',
    nova_sc3_p:'Every file Nova writes appears in the Artifacts panel instantly. Switch to Files to browse your workspace directory, or View to read the raw source. Download the whole project as a zip in one click.',
    nova_sc3_b1:'Artifacts panel lists every generated file with syntax preview',
    nova_sc3_b2:'View, Copy, or open any file directly from the panel',
    nova_sc3_b3:'Full workspace directory browser with file tree',
    nova_sc3_b4:'Download the entire project as a zip from the toolbar',
    nova_sc4_ey:'Live Preview', nova_sc4_h:'See it running. Instantly.',
    nova_sc4_p:'The Preview panel serves your app locally as soon as Nova finishes building it. No switching to a browser, no manual refresh — a live, interactive window right inside the app.',
    nova_sc4_b1:'Serves static sites, React apps, and Node.js backends locally',
    nova_sc4_b2:'URL bar shows the local address for external browser access',
    nova_sc4_b3:'Stop and restart the server from the toolbar at any time',
    nova_sc4_b4:'Preview updates as Nova edits and saves files mid-task',
    nova_sc5_ey:'Command Palette', nova_sc5_h:'Everything at your fingertips.',
    nova_sc5_p:'Press Ctrl+K from anywhere in the app. Jump to a new chat, toggle the sidebar, search your conversation history, or focus the input — without taking your hands off the keyboard.',
    nova_sc5_b1:'Ctrl+K opens instantly from anywhere in the interface',
    nova_sc5_b2:'Navigate with arrow keys, run with Enter, close with Esc',
    nova_sc5_b3:'Search history finds messages across all past conversations',
    nova_sc5_b4:'Toggle sidebar and panel layout without the mouse',
    nova_sc6_ey:'Settings & Configuration', nova_sc6_h:'Fine-tune everything. Your way.',
    nova_sc6_p:'Nova\'s settings panel puts full control in your hands — choose your models, tweak generation parameters, configure multi-model routing, manage tools, and customise the interface down to the accent colour.',
    nova_sc6_b1:'Swap or pull any Ollama model without leaving the app',
    nova_sc6_b2:'Adjust temperature, Top-P, Top-K, and token limits per session',
    nova_sc6_b3:'Route tasks to specialist models — Coder, Scripter, Analyst, Writer',
    nova_sc6_b4:'Control tool approval: Auto, Approve, or Disabled per tool',
    nova_sc6_b5:'Six built-in themes with custom accent colours and font sizes',
    nova_sc6_b6:'Configure vector embeddings and memory database paths',
    nova_gallery_ey:'Full Interface Tour', nova_gallery_h:'Every screen. One sandbox.',
    nova_gallery_p:'Hover to pause. Every panel shown exactly as it ships.',
    nova_cta_h:'Ready to build with full privacy?',
    nova_cta_p:'Get in touch to request a demo or ask about licensing Nova AI for your team or organisation.',

    prod_p1_status:'Live · Available Now', prod_p1_h:'FSV Partner Portal',
    prod_p1_desc:'A complete business management platform you can brand as your own. It brings together project tracking, finances, your team, and documents — all in one place, built for Qatar.',
    prod_p1_t1:'Your Brand', prod_p1_t2:'6 Modules', prod_p1_t3:'QAR Native', prod_p1_t4:'Qatar-Hosted',
    prod_p1_cta1:'See the Product', prod_p1_cta2:'Request a Demo',
    prod_soon_tag:'Coming Soon', prod_soon_h:'Next Product',
    prod_soon_desc:"More is on the way. Our next product is in development and will be built to the same high standard as the FSV Partner Portal.",
    prod_soon_t1:'In Development',
    prod_phil_ey:'How We Build', prod_phil_h:'Software built to ', prod_phil_hem:'last.',
    prod_phil_p:"Every FSV Tech product is built for the long term. Your data stays in Qatar, everything is transparent, and we build to national standards. We don't just add features — we build complete systems.",
    prod_pp1_h:'Your Data Stays in Qatar', prod_pp1_p:"All your data is stored in Qatar. We don't rely on foreign servers.",
    prod_pp2_h:'Built for Large Organisations', prod_pp2_p:'Our products can handle heavy workloads and are ready for national-scale use.',
    prod_pp3_h:'Your Brand, Not Ours', prod_pp3_p:'You can put your own logo and colours on everything, so it feels like your product.',
    prod_pp4_h:'Grows With You', prod_pp4_p:'Start small and scale up. Our products grow with your business.',
    prod_cta_h:'Interested in using FSV Tech software?',
    prod_cta_p:'Get in touch to ask about pricing, customisation, or to see a live demo.',
    prod_cta_btn:'Get in Touch',

    home_eyebrow:'Technology Consulting · Doha, Qatar',
    home_h1a:'Technology that', home_h1b:'moves nations', home_h1b_serif:'forward.',
    home_sub:"FSV Tech builds websites, software, and IT systems for businesses and government in Qatar — all built to the highest security standards.",
    home_cta1:'Our Services', home_cta2:'About Us',
    home_stat1_l:'Data Stays in Qatar',
    home_s2_eyebrow:'What We Do',
    home_s2_title:'Four services. One trusted partner.',
    home_s2_0_title:'Web Development',
    home_s2_0_desc:"We build fast, secure websites and web apps that look great and work perfectly on any device.",
    home_s2_1_title:'AI Consultancy',
    home_s2_1_desc:'We help you use AI to save time, reduce costs, and work smarter — with your data always staying in Qatar.',
    home_s2_2_title:'Software Engineering',
    home_s2_2_desc:'We build custom software and government digital services that are reliable, secure, and easy to use.',
    home_s2_3_title:'IT Infrastructure',
    home_s2_3_desc:'We manage your servers and cloud systems so they stay secure, fast, and always running.',
    home_s2_link:'Learn more',
    home_quote:'"We seek a knowledge-based economy built on innovation, research, and advanced technology."',
    home_quote_src:'H.H. Tamim bin Hamad Al Thani — Emir of Qatar',
    home_s3_eyebrow:'Why FSV Tech',
    home_s3_title:'Built for', home_s3_title_em:"Qatar's standards.",
    home_s3_std_h:'Every standard.', home_s3_std_em:'Every requirement.',
    home_s3_p1:"We are a Qatar-based technology company. Everything we build meets Qatar's national security rules and supports the country's goals.",
    home_s3_1_t:'Your Data Stays in Qatar', home_s3_1_d:"All data we handle stays in Qatar. We follow Qatar's national security and data rules.",
    home_s3_2_t:'Built for Large Organisations', home_s3_2_d:'Our solutions are built to handle growth — whether you are a small team or a national authority.',
    home_s3_3_t:'AI Built In',            home_s3_3_d:'We use AI throughout our work to make things faster, smarter, and more efficient.',
    home_s3_4_t:'Based in Doha',      home_s3_4_d:"We are based in Doha and understand how business and government work in Qatar.",
    home_compliance_label:'Standards We Follow',
    home_c1:'Qatar National Cybersecurity Framework',
    home_c2:'Data Sovereignty & Residency Requirements',
    home_c3:'Government Cloud (G-Cloud) Standards',
    home_c4:'ISO 27001 Information Security',
    home_c5:'NIST AI Risk Management Framework',
    home_c6:'Qatar Vision 2030 Digital Agenda',
    home_cta_band_t:'Ready to take your business to the next level?',
    home_cta_band_b:'Talk to Us',
    home_card_label:'Our Services',
    home_diff_ey:'Why Choose Us',
    home_stat2_l:'Services',
    home_stat3_l:'Founded',
    home_stat4_l:'Vision Aligned',
    num_01:'01', num_02:'02', num_03:'03', num_04:'04',
    num_05:'05', num_06:'06',
    num_4:'4', num_2026:'2026', num_2030:'2030', num_100pct:'100%',

    about_banner_ey:'Who We Are',
    about_banner_h:'About ',
    about_banner_p:'A technology company based in Qatar, helping businesses and government get more from technology.',
    about_s1_ey:'Our Mission',
    about_s1_h:'Technology that works for Qatar.',
    about_s1_p1:"FSV Tech was created to help Qatar's government and businesses use technology confidently — without worrying about data leaving the country or security risks.",
    about_s1_p2:'We build AI tools, government digital services, websites, and IT systems. Everything we do is designed to be secure, easy to use, and built to last.',
    about_s1_p3:'We measure our success simply: are our clients more confident, efficient, and secure after working with us?',
    about_c1_ey:'Vision', about_c1_h:'Supporting a knowledge-based economy',
    about_c1_p:'Everything we build supports Qatar Vision 2030 — helping Qatar grow into a modern, knowledge-driven nation.',
    about_c2_ey:'Approach', about_c2_h:'Safe. Secure. Scalable.',
    about_c2_p:'Security is not an add-on for us — it is the foundation of everything we build.',
    about_c3_ey:'Commitment', about_c3_h:'We stay with you long-term',
    about_c3_p:'We do not just hand over a project and leave. We stay involved to make sure everything keeps working well.',
    about_val_ey:'Our Values', about_val_h:'How we work.',
    about_v1_t:'Honesty First',       about_v1_d:"We are straightforward with our clients. You trust us with important systems — and we take that responsibility seriously.",
    about_v2_t:'Qatar First',    about_v2_d:"Every decision we make comes back to one question: is this good for Qatar's future?",
    about_v3_t:'Quality Always',  about_v3_d:'We do not cut corners. We build things properly, from start to finish.',
    about_v4_t:'True Partnership',         about_v4_d:'We work as part of your team — not just a supplier. We are invested in your success.',
    about_v5_t:'Practical Innovation',about_v5_d:'We use new technology when it actually helps. No gimmicks — just real solutions that make a difference.',
    about_v6_t:'Clear Communication',          about_v6_d:'We keep you informed, give honest timelines, and never leave you guessing.',
    about_qatar_ey:'Our Home', about_qatar_h:'Based in', about_qatar_em:'Qatar.',
    about_qatar_p1:"FSV Tech is based in Doha. We know how Qatar's government and businesses work, and we understand the local rules and requirements. This gives our clients a real advantage.",
    about_qatar_p2:"Qatar's digital transformation is a national mission — and we are proud to play a part in it.",
    about_vl1:'Meets Qatar National Cybersecurity requirements',
    about_vl2:"Aligned with Qatar Vision 2030",
    about_vl3:'Local team for fast support',
    about_vl4:'Experienced with government procurement',
    about_vl5:'Committed to building local digital skills',
    about_qs1_n:'2030', about_qs1_l:'Qatar Vision',
    about_qs2_n:'DOH',  about_qs2_l:'Headquarters',
    about_qs3_n:'QAT',  about_qs3_l:'Qatar-Based Operations',
    about_cta_h:"Let's work together.", about_cta_b:'Contact Us',

    svc_banner_ey:'What We Offer', svc_banner_h:'Our ', svc_banner_h_em:'Services', svc_banner_p:"Four services that help Qatar's government and businesses grow and succeed through technology.",
    svc_00_ey:'Service One', svc_00_h:'Web Development',
    svc_00_p:"We design and build websites and web apps from scratch. Whether it's a company website or a complex online platform, we make it fast, secure, and easy to use.",
    svc_00_f1_t:'Custom Website Design', svc_00_f1_d:'Beautiful, responsive websites that work on any screen and represent your brand well.',
    svc_00_f2_t:'Web Application Development', svc_00_f2_d:'Fully functional web apps — from simple tools to complex platforms — built to scale.',
    svc_00_f3_t:'Online Shops & Customer Portals', svc_00_f3_d:'Secure online stores and client portals tailored to how your business works.',
    svc_00_f4_t:'Speed & Search Optimisation', svc_00_f4_d:'We build sites that load fast and rank well on Google — from day one.',
    svc_00_tech_h:'Technologies We Use', svc_00_wyg_h:'What You Get',
    svc_00_w1:'Works on all devices and browsers',
    svc_00_w2:'Arabic and English support',
    svc_00_w3:'Accessible for all users',
    svc_00_w4:'99.9% uptime guarantee',
    svc_00_w5:'Full handover documentation',
    svc_00_w6:'Ongoing support after launch',
    svc_00_cta:'Talk About Your Project',
    svc_01_ey:'Service Two', svc_01_h:'AI Consultancy',
    svc_01_p:'We help organisations use artificial intelligence to work faster, reduce costs, and automate repetitive tasks. All AI models we deploy keep your data inside Qatar.',
    svc_01_f1_t:'AI Models Hosted in Qatar', svc_01_f1_d:"We deploy AI that runs on local servers, so your data never leaves Qatar.",
    svc_01_f2_t:'AI Strategy & Planning', svc_01_f2_d:"We help you figure out where AI can actually help your organisation and create a clear plan to get there.",
    svc_01_f3_t:'Workflow Automation',       svc_01_f3_d:'We automate repetitive tasks so your team can focus on more important work.',
    svc_01_f4_t:'AI Integration',     svc_01_f4_d:'We connect AI capabilities into the software and systems you already use.',
    svc_01_tech_h:'Technologies', svc_01_uc_h:'Examples of What We Can Do',
    svc_01_uc1:'Automatic sorting and processing of documents',
    svc_01_uc2:'AI assistant for citizen or customer services',
    svc_01_uc3:'Automatic compliance checks',
    svc_01_uc4:'Smart internal search across your documents',
    svc_01_uc5:'Predicting equipment failures before they happen',
    svc_01_uc6:'Arabic language AI — fully bilingual',
    svc_01_cta:'Talk About AI',
    svc_02_ey:'Service Three', svc_02_h:'Software Engineering',
    svc_02_p:"We build custom software for government and business — from online services for citizens to internal tools for large organisations. Everything is built to be reliable and easy to maintain.",
    svc_02_f1_t:'Government Digital Services',             svc_02_f1_d:'Secure online services for citizens, built to government standards.',
    svc_02_f2_t:'Business Software',svc_02_f2_d:'Custom software systems and integrations built to match how your organisation works.',
    svc_02_f3_t:'Secure APIs',            svc_02_f3_d:'Connections between systems, built securely so your data is always protected.',
    svc_02_f4_t:'Secure Development Process',                 svc_02_f4_d:'We build security into every step of development — not just at the end.',
    svc_02_tech_h:'Technologies We Use', svc_02_del_h:'How We Deliver',
    svc_02_d1:'Regular updates so you always know progress',
    svc_02_d2:'Security built in from the start',
    svc_02_d3:'Full documentation handed over at the end',
    svc_02_d4:'Tested and optimised before launch',
    svc_02_d5:'Arabic and English interface support',
    svc_02_d6:'Ongoing support after launch',
    svc_02_cta:'Talk About Your Project',
    svc_03_ey:'Service Four', svc_03_h:'IT Infrastructure Management',
    svc_03_p:'We manage your servers and cloud systems so they stay secure, fast, and always available. You focus on your work — we handle the technical side.',
    svc_03_f1_t:'Server Management',svc_03_f1_d:'Full management of your on-site or hosted servers.',
    svc_03_f2_t:'Cloud Services',  svc_03_f2_d:'Private and hybrid cloud setup, management, and support.',
    svc_03_f3_t:'Security & Compliance', svc_03_f3_d:'Continuous monitoring to keep your systems secure and compliant.',
    svc_03_f4_t:'Backup & Recovery',     svc_03_f4_d:'Plans and systems to get you back up quickly if anything goes wrong.',
    svc_03_tech_h:'What We Manage', svc_03_sla_h:'Service Levels',
    svc_03_s1:'24/7 monitoring and response',
    svc_03_s2:'Guaranteed uptime commitments',
    svc_03_s3:'Monthly security and compliance reports',
    svc_03_s4:'Advice on future capacity needs',
    svc_03_s5:'Regular security testing',
    svc_03_s6:'Qatar-based support team',
    svc_03_cta:'Talk About Infrastructure',
    svc_process_h:'How we', svc_process_h_em:'work.',
    svc_step1_h:'We Listen First',    svc_step1_p:'Before we suggest anything, we take time to understand your organisation, what you need, and any constraints you have.',
    svc_step2_h:'We Design a Solution', svc_step2_p:'We design the right approach for you — secure, scalable, and with a clear plan and timeline.',
    svc_step3_h:'We Build It',     svc_step3_p:'We work in regular cycles, keep you updated, and make sure there are no surprises.',
    svc_step4_h:'We Stay With You',  svc_step4_p:'After launch, we remain available to monitor, improve, and support your systems.',

    ind_hq_ey:'Our Base', ind_hq_p:'Built and run from Qatar. We know the local market, the rules, and how to deliver.',
    ind_banner_ey:'Who We Work With', ind_banner_h:'Industries ', ind_banner_h_em:'We Serve',
    ind_banner_p:"We work with government, banks, hospitals, schools, and businesses across Qatar.",
    ind_s1_ey:'Our Experience', ind_s1_h:"Sectors we know well.",
    ind_1_ey:'Government', ind_1_h:'Government & Public Sector', ind_1_p:"We build secure digital services for ministries and government bodies, helping them serve citizens better and more efficiently.",
    ind_2_ey:'Finance', ind_2_h:'Banking & Financial Services', ind_2_p:"We help banks and financial companies with secure systems, compliance tools, and AI for spotting risks and fraud.",
    ind_3_ey:'Energy', ind_3_h:'Energy & Utilities', ind_3_p:"We support Qatar's energy sector with monitoring tools, predictive maintenance, and secure operational systems.",
    ind_4_ey:'Healthcare', ind_4_h:'Healthcare', ind_4_p:"We build secure patient record systems and AI tools for hospitals and clinics, all meeting data privacy requirements.",
    ind_5_ey:'Education', ind_5_h:'Education & Research', ind_5_p:'We build digital learning platforms and research tools for universities and schools in Qatar.',
    ind_6_ey:'Real Estate', ind_6_h:'Real Estate & Construction', ind_6_p:"We build smart property management and building systems for Qatar's growing real estate sector.",
    ind_cross_ey:'Across All Sectors', ind_cross_h:'Things we bring to every project.',
    ind_x1_h:'Your Data Stays in Qatar', ind_x1_p:"All data stays inside Qatar. We design every project around local data and security rules.",
    ind_x2_h:'Arabic-First AI', ind_x2_p:'Our AI tools understand Arabic natively — not as an afterthought. All interfaces support both Arabic and English.',
    ind_x3_h:'We Know the Rules', ind_x3_p:"We understand Qatar's regulations, so our solutions are always compliant.",
    ind_vq_ey:'Qatar Vision 2030', ind_vq_h:'Supporting the', ind_vq_h_em:'national vision.',
    ind_no_sector_h:"Don't see your sector?", ind_no_sector_em:'Talk to us.',
    ind_vq_p:"Every project we deliver supports one of the four pillars of Qatar's National Vision 2030 — building a strong, diverse, and modern Qatar.",
    ind_p1_lbl:'Pillar One',   ind_p1_h:'Human Development',    ind_p1_p:'AI learning tools that help build a skilled digital workforce.',
    ind_p2_lbl:'Pillar Two',   ind_p2_h:'Social Development',   ind_p2_p:'Online government services that are accessible to everyone.',
    ind_p3_lbl:'Pillar Three', ind_p3_h:'Economic Development', ind_p3_p:"Technology that helps Qatar grow a stronger and more diverse economy.",
    ind_p4_lbl:'Pillar Four',  ind_p4_h:'Environmental Development', ind_p4_p:"Smart systems that help Qatar meet its sustainability goals.",

    con_banner_ey:'Say Hello', con_banner_h:'Contact ',
    con_banner_p:"Whether you have a project in mind or just want to find out what's possible — we would love to hear from you.",
    con_ey:'Get In Touch', con_h:"Let's work together.",
    con_p:'We work with government, businesses, and partners across Qatar. Every project starts with a conversation.',
    con_loc_l:'Location', con_loc_v:'Doha, Qatar',
    con_mail_l:'Email',   con_mail_v:'info@fsv-tech.com',
    con_web_l:'Website',  con_web_v:'fsv-tech.com',
    con_hours_l:'Hours',  con_hours_v:'Sun – Thu, 8am – 5pm (GMT+3)',
    con_notice:'<strong>Response time:</strong> We aim to reply to all messages within one working day.',
    con_form_h:'Send us a message', con_form_p:'We will reply within one working day.',
    con_f_name:'Full Name', con_f_org:'Organisation', con_f_email:'Email Address',
    con_f_phone:'Phone (Optional)', con_f_service:'What are you interested in?',
    con_f_s_opts:['Web Development','AI Consultancy','Software Engineering','IT Infrastructure','General Inquiry','Partnership'],
    con_f_msg:'Message', con_f_submit:'Send Message', con_f_sent:'Sent ✓',
    con_o1_lbl:'Our Office',    con_o1_h:'Doha, Qatar',
    con_o1_p:'We are based in Doha and work with clients across Qatar.',
    con_o2_lbl:'Working Hours', con_o2_h:'Sun – Thu, 8am – 5pm',
    con_o2_p:'Qatar Standard Time (GMT+3). Urgent support is available outside office hours for managed clients.',
    con_o3_lbl:'Who We Work With',     con_o3_h:'Government & Business',
    con_o3_p:'We mainly work with government ministries, public bodies, and large companies in Qatar.',

    footer_tagline:"Technology solutions for businesses and government in Qatar.",
    footer_col1_h:'Company', footer_col2_h:'Services', footer_col3_h:'Contact',
    footer_copy:'© 2026 FSV Tech Consulting & Services.',
    footer_location:'Doha, Qatar',
    footer_msg:'Send a Message',

    pp_nav_products:'Products', pp_nav_item:'FSV Partner Portal',
    pp_badge:'Product · FSV Partner Portal',
    pp_h1a:'The professional', pp_h1b:'gateway for your', pp_h1em:'partners.',
    pp_sub:'A complete business management platform you can brand as your own — projects, finances, your team, and documents, all in one place.',
    pp_cta1:'Request a Demo', pp_cta2:'Get a Quote',
    pp_stat1_l:'Modules', pp_stat2_l:'Your Branding', pp_stat3_l:'QAR Currency',
    pp_feat_ey:'What\'s Inside',
    pp_feat_h:'Everything your business needs in one platform.',
    pp_feat_p:'Six modules, fully connected — built for government agencies, businesses, and professional services firms in Qatar.',
    pp_f1_h:'Dashboard Overview', pp_f1_p:'See your most important information the moment you log in — what needs attention, your finances, and where your projects stand.',
    pp_f2_h:'Project Tracker',      pp_f2_p:'Manage all your projects in one place — active, in progress, completed, or on hold — with budgets tracked in QAR.',
    pp_f3_h:'Tasks & Workflows',  pp_f3_p:'Keep track of every task across every project. Assign work, set priorities, and monitor progress easily.',
    pp_f4_h:'Finances', pp_f4_p:'A full financial overview — income, expenses, cash flow, and profit margin. Filter by time period and export reports.',
    pp_f5_h:'Team Management',    pp_f5_p:'See your whole organisation in one directory. Filter by department, view roles, and manage your people easily.',
    pp_f6_h:'Document Storage', pp_f6_p:'Store all your contracts, reports, and files in one secure place — organised, searchable, and always accessible.',
    pp_s1_ey:'Module 01 — Overview', pp_s1_h1:'Your dashboard.', pp_s1_hem:'Always live.',
    pp_s1_p:'The moment you log in, your dashboard shows you exactly what needs your attention — tasks, finances, and project status, all front and centre.',
    pp_s1_b1:'Tasks that need action, ranked automatically',
    pp_s1_b2:'Cash flow, active projects, and workload at a glance',
    pp_s1_b3:'Alerts and updates in two clicks',
    pp_s1_b4:'Financial trends over time',
    pp_s1_lbl:'Overview · Dashboard',
    pp_s2_ey:'Module 02 — Projects', pp_s2_h1:'All your projects,', pp_s2_hem:'in one place.',
    pp_s2_p:'Every project — active, in progress, completed, or on hold — visible at a glance. See budgets, status, and milestones without digging through files.',
    pp_s2_b1:'Project status: Active, In Progress, Completed, On Hold',
    pp_s2_b2:'Budget tracking in QAR for each project',
    pp_s2_b3:'Click any project for full details',
    pp_s2_b4:'Compare performance across all projects',
    pp_s2_lbl:'Projects · All Projects',
    pp_s3_ey:'Module 03 — Finances', pp_s3_h1:'Your finances,', pp_s3_hem:'clearly.',
    pp_s3_p:'A clear financial picture — not just a list of transactions. See total income, expenses, current cash, and profit margin all in one view.',
    pp_s3_b1:'QAR currency with monthly and yearly views',
    pp_s3_b2:'Money coming in vs going out at a glance',
    pp_s3_b3:'Breakdown by category: tax, operations, costs, investments',
    pp_s3_b4:'Export financial statements for reporting',
    pp_s3_lbl:'Finances · Overview',
    pp_s4_ey:'Module 04 — Tasks', pp_s4_h1:'Your tasks,', pp_s4_hem:'all tracked.',
    pp_s4_p:'Track every task across every project in one list. Move items from To Do, to In Progress, to Review, to Done — with full visibility across your whole team.',
    pp_s4_b1:'All tasks from all projects in one master list',
    pp_s4_b2:'Filter by project for focused team views',
    pp_s4_b3:'Weekly planner for scheduling work',
    pp_s4_b4:'Who it is assigned to, when it is due, and its status',
    pp_s4_lbl:'Tasks · Master List',
    pp_s5_ey:'Module 05 — Team', pp_s5_h1:'Your people.', pp_s5_hem:'Organised.',
    pp_s5_p:'A clear directory of your whole organisation. Filter by department, see everyone\'s role at a glance, and manage your team — all from the same platform.',
    pp_s5_b1:'Filter by department: Executive, Engineering, Operations, HR',
    pp_s5_b2:'Each person\'s role and department shown clearly',
    pp_s5_b3:'Add, edit, or message team members directly',
    pp_s5_b4:'Team health overview by department',
    pp_s5_lbl:'Team · All People',
    pp_s6_ey:'Module 06 — Documents', pp_s6_h1:'Every file.', pp_s6_hem:'Safe and easy to find.',
    pp_s6_p:'One secure place for all your files — contracts, reports, project documents, and internal files. No more hunting through emails and drives. Everything is tagged, searchable, and tracked.',
    pp_s6_b1:'Organised by category: Legal, Financial, Projects, Internal',
    pp_s6_b2:'See who uploaded each file and how large it is',
    pp_s6_b3:'Search across all documents instantly',
    pp_s6_b4:'Control who can download or archive files',
    pp_s6_lbl:'Documents · All Files',
    pp_s7_ey:'Your Branding', pp_s7_h1:'Your brand.', pp_s7_hem:'Not ours.',
    pp_s7_p:'Add your logo and brand colours and the whole platform updates instantly. Every client gets an experience that looks and feels like your product.',
    pp_s7_b1:'Upload your logo and control how it appears',
    pp_s7_b2:'Set your brand colours',
    pp_s7_b3:'Security and system settings',
    pp_s7_b4:'Changes apply instantly across all active users',
    pp_s7_lbl:'Settings · Branding',
    pp_gallery_ey:'Platform Tour', pp_gallery_h:'Every screen. One platform.', pp_gallery_p:'Hover to pause. Every module shown as it is.',
    pp_cta_h1:'Ready to give your partners a', pp_cta_hem:'professional portal?',
    pp_cta_p:'Get in touch for a personalised demo and a quote for your organisation.',
    pp_cta_btn2:'Email Us',
    pp_footer_products:'Products',
  },

  ar: {
    nav_home:'الرئيسية', nav_about:'من نحن', nav_services:'خدماتنا',
    nav_products:'المنتجات',
    nav_industries:'القطاعات', nav_contact:'تواصل', nav_cta:'تواصل معنا',
    prod_banner_ey:'من تطوير FSV Tech', prod_banner_h:'منتجاتنا ', prod_banner_hem:'',
    prod_banner_p:'برامج مصممة للشركات والجهات الحكومية في قطر — تطويراً وإدارةً من قِبَل FSV Tech.',
    prod_list_ey:'متاح الآن', prod_list_h:'منتج واحد. ', prod_list_hem:'المزيد قادم.',
    prod_list_p:'نبني برامج نستخدمها نحن أنفسنا. كل منتج مصمم لحل مشاكل حقيقية، وليس فقط للواجهة.',
    prod_p2_status:'متاح الآن', prod_p2_h:'Nova AI',
    prod_p2_desc:'بيئة برمجة بالذكاء الاصطناعي تعمل بالكامل على جهازك. ابنِ تطبيقات كاملة، شغّل طرفية حية، واعرض النتائج فوراً — دون الحاجة للإنترنت وبياناتك تبقى خاصة تماماً.',
    prod_p2_t1:'محلي 100٪', prod_p2_t2:'بدون سحابة', prod_p2_t3:'مدعوم بـ Ollama', prod_p2_t4:'ويندوز / ماك',
    prod_p2_cta1:'اعرف المزيد', prod_p2_cta2:'طلب عرض تجريبي',

    nova_badge:'المنتج · Nova AI',
    nova_h1:'بيئة البرمجة المحلية بالذكاء الاصطناعي.',
    nova_sub:'بيئة برمجة بالذكاء الاصطناعي تعمل بالكامل على جهازك مع أولوية للخصوصية. ابنِ تطبيقات كاملة، شغّل طرفية حية، واعرض النتائج فوراً — كل شيء يعمل على جهازك. بدون إنترنت.',
    nova_cta1:'طلب عرض تجريبي', nova_cta2:'تواصل معنا',
    nova_stat1:'محلي وخاص', nova_stat2:'اعتماد على السحابة', nova_stat3:'أدوار وكلاء الذكاء الاصطناعي',
    nova_feat_ey:'ما بداخل Nova AI',
    nova_feat_h:'كل ما تحتاجه للبناء. لا شيء يغادر جهازك.',
    nova_feat_p:'ست قدرات أساسية تعمل معاً — تخطيط ذكي متعدد الوكلاء، طرفية حية، معاينة فورية، وذاكرة دائمة — كل ذلك يعمل محلياً على جهازك الخاص.',
    nova_f1_h:'توجيه متعدد الوكلاء', nova_f1_p:'نموذج المخطط يقسّم كل طلب إلى خطوات ويوجّه كلاً منها إلى المتخصص المناسب — مبرمج، سكريبت، محلل، كاتب، أو عام. كل وكيل يستخدم النموذج الأنسب لدوره.',
    nova_f2_h:'طرفية حية', nova_f2_p:'يعمل shell حقيقي بجانب محادثتك. ثبّت الحزم، نفّذ السكريبتات، شغّل عمليات الترحيل، وشاهد النتائج فوراً — يمكن لـ Nova تشغيل الأوامر تلقائياً لإتمام مهمتك.',
    nova_f3_h:'معاينة فورية', nova_f3_p:'لوحة متصفح مدمجة تخدم تطبيقك محلياً أثناء بنائه. React وHTML وNode.js — شاهد النتيجة فوراً. لا حاجة لتحديث يدوي أو متصفح منفصل.',
    nova_f4_h:'تطوير تطبيقات كاملة', nova_f4_p:'ابنِ مشاريع كاملة من أمر واحد — تطبيقات React، واجهات Flask، خدمات Node.js، ولوحات بيانات. Nova تكتب الكود، تثبّت التبعيات، وتشغّل المشروع لك.',
    nova_f5_h:'ذاكرة دلالية', nova_f5_p:'Nova تخزّن ذكريات دائمة باستخدام متجهات LanceDB وSQLite. تبحث في ملفات مساحة عملك دلالياً — تجد السياق ذي الصلة عبر الجلسات لإعطاء إجابات أكثر دقة.',
    nova_f6_h:'خاص تماماً — بدون سحابة', nova_f6_p:'لا طلبات خارجية لمزودي الذكاء الاصطناعي. كل الاستنتاج يعمل محلياً عبر Ollama. لا مفاتيح API، لا بيانات تتبع، لا بيانات تغادر جهازك. آمن للأكواد السرية والمنظمة.',
    nova_sc1_ey:'الواجهة', nova_sc1_h:'مساحة عمل متكاملة. نافذة واحدة.',
    nova_sc1_p:'Nova يمنحك كل شيء في مكان واحد. المحادثة على اليسار، الملفات والأدوات في اللوحة اليمنى — مع Artifacts وFiles وPreview وTerminal بنقرة واحدة. بدون إعداد أو تهيئة.',
    nova_sc1_b1:'اقتراحات الأوامر للبدء بسرعة',
    nova_sc1_b2:'خطوات الأدوات المدمجة تُظهر كل كتابة ملف وأمر منفَّذ',
    nova_sc1_b3:'شارة النموذج تُظهر أي وكيل ذكاء اصطناعي أنتج كل رد',
    nova_sc1_b4:'تبديل النماذج في منتصف المحادثة دون فقدان السياق',
    nova_sc2_ey:'البناء في العمل', nova_sc2_h:'ابنِ تطبيقاً كاملاً. من أمر واحد.',
    nova_sc2_p:'اطلب من Nova بناء لوحة بيانات أو واجهة API أو أداة استخراج — وسيخطط العمل ويكتب كل ملف ويثبّت التبعيات ويقدم معاينة حية. تشاهد كل خطوة.',
    nova_sc2_b1:'يكتب ملفات كاملة — لا أكواد مبتورة أو هياكل فارغة',
    nova_sc2_b2:'يشغّل npm install وpip install تلقائياً',
    nova_sc2_b3:'يشغّل خادماً محلياً ويفتحه في لوحة المعاينة',
    nova_sc2_b4:'احفظ كمشروع مسمّى للعودة إليه لاحقاً',
    nova_sc3_ey:'الأدوات والملفات', nova_sc3_h:'كودك. منظَّم.',
    nova_sc3_p:'كل ملف يكتبه Nova يظهر في لوحة Artifacts فوراً. انتقل إلى Files لتصفح دليل مساحة عملك، أو View لقراءة المصدر الخام. حمّل المشروع كاملاً كملف مضغوط بنقرة واحدة.',
    nova_sc3_b1:'لوحة Artifacts تسرد كل ملف مُنشأ مع معاينة للكود',
    nova_sc3_b2:'عرض أو نسخ أو فتح أي ملف مباشرة من اللوحة',
    nova_sc3_b3:'متصفح دليل مساحة العمل الكامل مع شجرة الملفات',
    nova_sc3_b4:'تحميل المشروع كاملاً كملف مضغوط من شريط الأدوات',
    nova_sc4_ey:'المعاينة الحية', nova_sc4_h:'شاهده يعمل. فوراً.',
    nova_sc4_p:'لوحة المعاينة تخدم تطبيقك محلياً فور انتهاء Nova من البناء. لا تبديل للمتصفح، لا تحديث يدوي — نافذة تفاعلية حية داخل التطبيق مباشرة.',
    nova_sc4_b1:'يخدم المواقع الثابتة وتطبيقات React وخوادم Node.js محلياً',
    nova_sc4_b2:'شريط URL يُظهر العنوان المحلي للوصول من متصفح خارجي',
    nova_sc4_b3:'أيقف وأعد تشغيل الخادم من شريط الأدوات في أي وقت',
    nova_sc4_b4:'المعاينة تتحدث مع تعديل Nova للملفات وحفظها أثناء المهمة',
    nova_sc5_ey:'لوحة الأوامر', nova_sc5_h:'كل شيء بين يديك.',
    nova_sc5_p:'اضغط Ctrl+K من أي مكان في التطبيق. انتقل إلى محادثة جديدة، بدّل الشريط الجانبي، ابحث في سجل محادثاتك، أو ركّز على الإدخال — دون رفع يديك عن لوحة المفاتيح.',
    nova_sc5_b1:'Ctrl+K يفتح فوراً من أي مكان في الواجهة',
    nova_sc5_b2:'تنقل بمفاتيح الأسهم، نفّذ بـ Enter، أغلق بـ Esc',
    nova_sc5_b3:'البحث في السجل يجد الرسائل عبر جميع المحادثات السابقة',
    nova_sc5_b4:'بدّل الشريط الجانبي وتخطيط اللوحات بدون الماوس',
    nova_sc6_ey:'الإعدادات والضبط', nova_sc6_h:'اضبط كل شيء. بطريقتك.',
    nova_sc6_p:'لوحة الإعدادات في Nova تضع التحكم الكامل بين يديك — اختر نماذجك، اضبط معامِلات التوليد، هيّئ توجيه متعدد النماذج، أدر الأدوات، وخصّص الواجهة حتى لون التمييز.',
    nova_sc6_b1:'تبديل أو سحب أي نموذج Ollama دون مغادرة التطبيق',
    nova_sc6_b2:'ضبط درجة الحرارة وTop-P وTop-K وحدود الرموز لكل جلسة',
    nova_sc6_b3:'توجيه المهام لنماذج متخصصة — مبرمج، سكريبت، محلل، كاتب',
    nova_sc6_b4:'التحكم في موافقة الأدوات: تلقائي أو موافقة أو معطّل لكل أداة',
    nova_sc6_b5:'ستة ثيمات مدمجة مع ألوان تمييز مخصصة وأحجام خطوط',
    nova_sc6_b6:'تهيئة مسارات قاعدة بيانات التضمينات المتجهية والذاكرة',
    nova_gallery_ey:'جولة كاملة في الواجهة', nova_gallery_h:'كل شاشة. بيئة واحدة.',
    nova_gallery_p:'مرّر الماوس للإيقاف المؤقت. كل لوحة معروضة كما تأتي.',
    nova_cta_h:'مستعد للبناء بخصوصية كاملة؟',
    nova_cta_p:'تواصل معنا لطلب عرض تجريبي أو الاستفسار عن ترخيص Nova AI لفريقك أو مؤسستك.',

    prod_p1_status:'متاح الآن', prod_p1_h:'بوابة الشركاء FSV',
    prod_p1_desc:'منصة متكاملة لإدارة الأعمال يمكنك وضع علامتك التجارية عليها. تجمع المشاريع والحسابات والفريق والملفات في مكان واحد، مصممة لقطر.',
    prod_p1_t1:'علامتك التجارية', prod_p1_t2:'6 وحدات', prod_p1_t3:'ريال قطري', prod_p1_t4:'مستضافة في قطر',
    prod_p1_cta1:'استعرض المنتج', prod_p1_cta2:'طلب عرض تجريبي',
    prod_soon_tag:'قريباً', prod_soon_h:'المنتج القادم',
    prod_soon_desc:'المزيد في الطريق. منتجنا القادم قيد التطوير بنفس المعايير العالية لبوابة الشركاء FSV.',
    prod_soon_t1:'قيد التطوير',
    prod_phil_ey:'كيف نبني', prod_phil_h:'برامج مصممة للـ', prod_phil_hem:'دوام.',
    prod_phil_p:'كل منتج من FSV Tech مبني للأمد البعيد. بياناتك تبقى في قطر، وكل شيء شفاف ومتوافق مع المعايير الوطنية.',
    prod_pp1_h:'بياناتك تبقى في قطر', prod_pp1_p:'جميع البيانات مخزّنة داخل قطر. لا نعتمد على خوادم أجنبية.',
    prod_pp2_h:'مصمم للمؤسسات الكبيرة', prod_pp2_p:'منتجاتنا تتحمل الأعباء الكبيرة وجاهزة للاستخدام على المستوى الوطني.',
    prod_pp3_h:'علامتك التجارية', prod_pp3_p:'ضع شعارك وألوانك على كل شيء حتى يبدو المنتج كأنه منتجك أنت.',
    prod_pp4_h:'ينمو معك', prod_pp4_p:'ابدأ صغيراً وتوسّع. منتجاتنا تنمو مع أعمالك.',
    prod_cta_h:'مهتم باستخدام برامج FSV Tech؟',
    prod_cta_p:'تواصل معنا للاستفسار عن الأسعار أو التخصيص أو لمشاهدة عرض تجريبي مباشر.',
    prod_cta_btn:'تواصل معنا',
    home_eyebrow:'استشارات تقنية · الدوحة، قطر',
    home_h1a:'تكنولوجيا', home_h1b:'تُقدِّم الأمم', home_h1b_serif:'إلى الأمام.', home_sub:'تبني FSV Tech مواقع الويب والبرامج وأنظمة تقنية المعلومات للشركات والحكومات في قطر — بأعلى معايير الأمان.',
    home_cta1:'خدماتنا', home_cta2:'من نحن',
    home_s2_eyebrow:'ما نقدّمه',
    home_s2_title:'أربع خدمات. شريك واحد موثوق.',
    home_s2_0_title:'تطوير الويب',
    home_s2_0_desc:'نبني مواقع وتطبيقات ويب سريعة وآمنة وتبدو رائعة على جميع الأجهزة.',
    home_s2_1_title:'استشارات الذكاء الاصطناعي',
    home_s2_1_desc:'نساعدك على استخدام الذكاء الاصطناعي لتوفير الوقت وتقليل التكاليف والعمل بذكاء أكبر — مع بقاء بياناتك في قطر دائماً.',
    home_s2_2_title:'هندسة البرمجيات',
    home_s2_2_desc:'نبني برامج مخصصة وخدمات حكومية رقمية موثوقة وآمنة وسهلة الاستخدام.',
    home_s2_3_title:'البنية التحتية التقنية',
    home_s2_3_desc:'ندير خوادمك وأنظمتك السحابية لتبقى آمنة وسريعة وتعمل دون انقطاع.',
    home_s2_link:'اعرف المزيد',
    home_quote:'"نسعى إلى اقتصاد قائم على المعرفة مبني على الابتكار والبحث والتكنولوجيا المتقدمة."',
    home_quote_src:'صاحب السمو الشيخ تميم بن حمد آل ثاني — أمير قطر',
    home_s3_eyebrow:'لماذا FSV Tech',
    home_s3_title:'مبني لـ', home_s3_title_em:'معايير قطر.',
    home_s3_std_h:'كل معيار.', home_s3_std_em:'كل متطلب.',
    home_s3_p1:'نحن شركة تقنية قطرية. كل ما نبنيه يلتزم بقواعد الأمن الوطني ويدعم أهداف قطر.',
    home_s3_1_t:'بياناتك تبقى في قطر', home_s3_1_d:'جميع البيانات تبقى داخل قطر. نلتزم بمعايير الأمن الوطني وقواعد البيانات.',
    home_s3_2_t:'مصمم للمؤسسات الكبيرة', home_s3_2_d:'حلولنا مصممة للنمو — سواء كنت فريقاً صغيراً أو جهة وطنية كبيرة.',
    home_s3_3_t:'الذكاء الاصطناعي في صميم عملنا', home_s3_3_d:'نستخدم الذكاء الاصطناعي في كل مكان لجعل الأمور أسرع وأذكى وأكثر كفاءة.',
    home_s3_4_t:'مقرّنا في الدوحة', home_s3_4_d:'نحن في الدوحة ونفهم كيف تعمل الأعمال والحكومة في قطر.',
    home_compliance_label:'المعايير التي نتبعها',
    home_c1:'الإطار الوطني للأمن السيبراني',
    home_c2:'متطلبات حفظ البيانات داخل قطر',
    home_c3:'معايير السحابة الحكومية',
    home_c4:'أمن المعلومات ISO 27001',
    home_c5:'إطار إدارة مخاطر الذكاء الاصطناعي NIST',
    home_c6:'الأجندة الرقمية لرؤية قطر 2030',
    home_cta_band_t:'هل أنت مستعد للارتقاء بأعمالك؟',
    home_cta_band_b:'تحدث معنا',
    home_card_label:'خدماتنا',
    home_diff_ey:'لماذا تختارنا',
    home_stat2_l:'خدمات',
    home_stat3_l:'تأسست',
    home_stat4_l:'متوافق مع الرؤية',
    num_01:'٠١', num_02:'٠٢', num_03:'٠٣', num_04:'٠٤',
    num_05:'٠٥', num_06:'٠٦',
    num_4:'٤', num_2026:'٢٠٢٦', num_2030:'٢٠٣٠', num_100pct:'١٠٠٪',

    about_banner_ey:'من نحن', about_banner_h:'حول ',
    about_banner_p:'شركة تقنية مقرّها قطر، تساعد الشركات والحكومة على الاستفادة من التكنولوجيا.',
    about_s1_ey:'مهمتنا', about_s1_h:'تكنولوجيا تخدم قطر.',
    about_s1_p1:'تأسست FSV Tech لمساعدة الحكومة والشركات في قطر على استخدام التكنولوجيا بثقة — دون قلق بشأن خروج البيانات من البلاد أو مخاطر الأمن.',
    about_s1_p2:'نبني أدوات الذكاء الاصطناعي، والخدمات الحكومية الرقمية، والمواقع الإلكترونية، وأنظمة تقنية المعلومات. كل ما نبنيه آمن وسهل الاستخدام ومصمم ليدوم.',
    about_s1_p3:'نقيس نجاحنا ببساطة: هل عملاؤنا أكثر ثقة وكفاءة وأماناً بعد العمل معنا؟',
    about_c1_ey:'رؤيتنا', about_c1_h:'دعم اقتصاد المعرفة',
    about_c1_p:'كل ما نبنيه يدعم رؤية قطر 2030 — لمساعدة قطر على التحول إلى دولة حديثة قائمة على المعرفة.',
    about_c2_ey:'منهجنا', about_c2_h:'آمن. موثوق. قابل للتوسع.',
    about_c2_p:'الأمان ليس إضافة عندنا — بل هو أساس كل ما نبنيه.',
    about_c3_ey:'التزامنا', about_c3_h:'نبقى معك على المدى البعيد',
    about_c3_p:'لا نسلّم المشروع ونمضي. نبقى بجانبك لضمان استمرار عمل كل شيء بشكل جيد.',
    about_val_ey:'قيمنا', about_val_h:'كيف نعمل.',
    about_v1_t:'الصدق أولاً', about_v1_d:'نكون صريحين مع عملائنا. تثق بنا على أنظمة مهمة — ونأخذ هذه المسؤولية بجدية.',
    about_v2_t:'قطر أولاً', about_v2_d:'كل قرار نتخذه يعود إلى سؤال واحد: هل هذا في مصلحة مستقبل قطر؟',
    about_v3_t:'الجودة دائماً', about_v3_d:'لا نتهاون في الجودة. نبني الأشياء بشكل صحيح من البداية إلى النهاية.',
    about_v4_t:'شراكة حقيقية', about_v4_d:'نعمل كجزء من فريقك — لسنا مجرد موردين. نحن مستثمرون في نجاحك.',
    about_v5_t:'ابتكار عملي', about_v5_d:'نستخدم التقنيات الجديدة عندما تفيد فعلاً. لا مبالغة — فقط حلول حقيقية تحدث فرقاً.',
    about_v6_t:'تواصل واضح', about_v6_d:'نبقيك على اطلاع دائم، ونعطي جداول زمنية صادقة، ولا ندعك تخمّن.',
    about_qatar_ey:'موطننا', about_qatar_h:'مقرّنا في', about_qatar_em:'قطر.',
    about_qatar_p1:'FSV Tech مقرّها الدوحة. نعرف كيف تعمل الحكومة والشركات في قطر، ونفهم القواعد والمتطلبات المحلية. هذا يمنح عملاءنا ميزة حقيقية.',
    about_qatar_p2:'التحول الرقمي في قطر مهمة وطنية — ونحن فخورون بالمساهمة فيها.',
    about_vl1:'ملتزمون بمتطلبات الأمن السيبراني الوطني',
    about_vl2:'متوافقون مع رؤية قطر 2030',
    about_vl3:'فريق محلي للدعم السريع',
    about_vl4:'خبرة في المشتريات الحكومية',
    about_vl5:'ملتزمون ببناء الكفاءات الرقمية المحلية',
    about_qs1_n:'2030', about_qs1_l:'رؤية قطر',
    about_qs2_n:'DOH',  about_qs2_l:'المقر الرئيسي',
    about_qs3_n:'QAT',  about_qs3_l:'عمليات في قطر',
    about_cta_h:'لنعمل معاً.', about_cta_b:'تواصل معنا',

    svc_banner_ey:'ما نقدّمه', svc_banner_h:'', svc_banner_h_em:'خدماتنا', svc_banner_p:'أربع خدمات تساعد الحكومة والشركات في قطر على النمو والنجاح من خلال التكنولوجيا.',
    svc_00_ey:'الخدمة الأولى', svc_00_h:'تطوير الويب',
    svc_00_p:'نصمم ونبني مواقع وتطبيقات ويب من الصفر. سواء كان موقع شركة أو منصة معقدة، نجعله سريعاً وآمناً وسهل الاستخدام.',
    svc_00_f1_t:'تصميم مواقع مخصصة', svc_00_f1_d:'مواقع جميلة تعمل على جميع الأجهزة وتعكس علامتك التجارية.',
    svc_00_f2_t:'تطوير تطبيقات الويب', svc_00_f2_d:'تطبيقات ويب متكاملة — من أدوات بسيطة إلى منصات معقدة — قابلة للتوسع.',
    svc_00_f3_t:'متاجر إلكترونية وبوابات العملاء', svc_00_f3_d:'متاجر إلكترونية آمنة وبوابات عملاء مصممة وفق طريقة عمل شركتك.',
    svc_00_f4_t:'تحسين السرعة ومحركات البحث', svc_00_f4_d:'نبني مواقع سريعة التحميل وتظهر في نتائج جوجل — منذ اليوم الأول.',
    svc_00_tech_h:'التقنيات التي نستخدمها', svc_00_wyg_h:'ما ستحصل عليه',
    svc_00_w1:'يعمل على جميع الأجهزة والمتصفحات',
    svc_00_w2:'دعم اللغتين العربية والإنجليزية',
    svc_00_w3:'متاح لجميع المستخدمين',
    svc_00_w4:'ضمان وقت تشغيل 99.9٪',
    svc_00_w5:'توثيق كامل عند التسليم',
    svc_00_w6:'دعم مستمر بعد الإطلاق',
    svc_00_cta:'تحدث عن مشروعك',
    svc_01_ey:'الخدمة الثانية', svc_01_h:'استشارات الذكاء الاصطناعي',
    svc_01_p:'نساعد المؤسسات على استخدام الذكاء الاصطناعي للعمل بشكل أسرع وتقليل التكاليف وأتمتة المهام المتكررة. جميع نماذج الذكاء الاصطناعي مستضافة داخل قطر.',
    svc_01_f1_t:'نماذج ذكاء اصطناعي مستضافة في قطر', svc_01_f1_d:'نشر ذكاء اصطناعي يعمل على خوادم محلية حتى لا تخرج بياناتك من قطر.',
    svc_01_f2_t:'استراتيجية وتخطيط الذكاء الاصطناعي', svc_01_f2_d:'نساعدك على معرفة أين يمكن للذكاء الاصطناعي مساعدة مؤسستك فعلاً ونضع خطة واضحة.',
    svc_01_f3_t:'أتمتة المهام',       svc_01_f3_d:'نؤتمت المهام المتكررة حتى يركز فريقك على العمل الأهم.',
    svc_01_f4_t:'دمج الذكاء الاصطناعي',     svc_01_f4_d:'نربط الذكاء الاصطناعي بالبرامج والأنظمة التي تستخدمها بالفعل.',
    svc_01_tech_h:'التقنيات', svc_01_uc_h:'أمثلة على ما يمكننا فعله',
    svc_01_uc1:'فرز المستندات ومعالجتها تلقائياً',
    svc_01_uc2:'مساعد ذكاء اصطناعي لخدمة المواطنين أو العملاء',
    svc_01_uc3:'فحوصات الامتثال التلقائية',
    svc_01_uc4:'بحث ذكي داخل مستنداتك',
    svc_01_uc5:'التنبؤ بأعطال المعدات قبل حدوثها',
    svc_01_uc6:'ذكاء اصطناعي يفهم العربية بشكل كامل',
    svc_01_cta:'تحدث عن الذكاء الاصطناعي',
    svc_02_ey:'الخدمة الثالثة', svc_02_h:'هندسة البرمجيات',
    svc_02_p:'نبني برامج مخصصة للحكومة والشركات — من الخدمات الرقمية للمواطنين إلى الأدوات الداخلية للمؤسسات الكبيرة. كل شيء موثوق وسهل الصيانة.',
    svc_02_f1_t:'الخدمات الحكومية الرقمية', svc_02_f1_d:'خدمات إلكترونية آمنة للمواطنين، مبنية وفق المعايير الحكومية.',
    svc_02_f2_t:'برامج الأعمال المخصصة', svc_02_f2_d:'أنظمة برمجية مخصصة وتكاملات مصممة وفق طريقة عمل مؤسستك.',
    svc_02_f3_t:'واجهات برمجية آمنة', svc_02_f3_d:'ربط الأنظمة ببعضها بشكل آمن لحماية بياناتك دائماً.',
    svc_02_f4_t:'تطوير آمن من البداية', svc_02_f4_d:'نضمّن الأمان في كل خطوة من التطوير — وليس فقط في النهاية.',
    svc_02_tech_h:'التقنيات التي نستخدمها', svc_02_del_h:'كيف نعمل',
    svc_02_d1:'تحديثات منتظمة حتى تعرف دائماً مستوى التقدم',
    svc_02_d2:'الأمان مدمج منذ البداية',
    svc_02_d3:'توثيق كامل عند التسليم',
    svc_02_d4:'اختبار وتحسين قبل الإطلاق',
    svc_02_d5:'دعم الواجهة باللغتين العربية والإنجليزية',
    svc_02_d6:'دعم مستمر بعد الإطلاق',
    svc_02_cta:'تحدث عن مشروعك',
    svc_03_ey:'الخدمة الرابعة', svc_03_h:'إدارة البنية التحتية التقنية',
    svc_03_p:'ندير خوادمك وأنظمتك السحابية لتبقى آمنة وسريعة ومتاحة دائماً. أنت تركز على عملك ونحن نتولى الجانب التقني.',
    svc_03_f1_t:'إدارة الخوادم', svc_03_f1_d:'إدارة كاملة لخوادمك المحلية أو المستضافة.',
    svc_03_f2_t:'الخدمات السحابية', svc_03_f2_d:'إعداد وإدارة ودعم السحابة الخاصة والمختلطة.',
    svc_03_f3_t:'الأمن والامتثال', svc_03_f3_d:'مراقبة مستمرة لأنظمتك للحفاظ على أمانها وامتثالها.',
    svc_03_f4_t:'النسخ الاحتياطي والاسترداد', svc_03_f4_d:'خطط وأنظمة لإعادة التشغيل بسرعة في حال حدوث أي مشكلة.',
    svc_03_tech_h:'ما ندير', svc_03_sla_h:'مستويات الخدمة',
    svc_03_s1:'مراقبة واستجابة على مدار الساعة',
    svc_03_s2:'ضمان وقت التشغيل',
    svc_03_s3:'تقارير أمنية وامتثال شهرية',
    svc_03_s4:'استشارات التوسع المستقبلي',
    svc_03_s5:'اختبار أمني دوري',
    svc_03_s6:'فريق دعم مقيم في قطر',
    svc_03_cta:'تحدث عن البنية التحتية',
    svc_process_h:'كيف', svc_process_h_em:'نعمل.',
    svc_step1_h:'نستمع أولاً',    svc_step1_p:'قبل أن نقترح أي شيء، نأخذ الوقت الكافي لفهم مؤسستك واحتياجاتك وأي قيود لديك.',
    svc_step2_h:'نصمم الحل',     svc_step2_p:'نصمم الحل المناسب لك — آمن وقابل للتوسع ومع خطة وجدول زمني واضحين.',
    svc_step3_h:'نبنيه',     svc_step3_p:'نعمل في دورات منتظمة، نبقيك على اطلاع، ونضمن عدم وجود مفاجآت.',
    svc_step4_h:'نبقى معك',  svc_step4_p:'بعد الإطلاق نبقى متاحين لمراقبة أنظمتك وتحسينها ودعمها.',

    ind_hq_ey:'قاعدتنا', ind_hq_p:'مبني وُيدار من قطر. نعرف السوق المحلي والقواعد وكيفية التسليم.',
    ind_banner_ey:'من نخدم', ind_banner_h:'القطاعات ', ind_banner_h_em:'التي نخدمها',
    ind_banner_p:'نعمل مع الحكومة والبنوك والمستشفيات والمدارس والشركات في قطر.',
    ind_s1_ey:'خبرتنا', ind_s1_h:'قطاعات نعرفها جيداً.',
    ind_1_ey:'الحكومة', ind_1_h:'الحكومة والقطاع العام', ind_1_p:'نبني خدمات رقمية آمنة للوزارات والجهات الحكومية لمساعدتها على خدمة المواطنين بشكل أفضل وأكثر كفاءة.',
    ind_2_ey:'المالية', ind_2_h:'البنوك والخدمات المالية', ind_2_p:'نساعد البنوك والشركات المالية بأنظمة آمنة وأدوات امتثال وذكاء اصطناعي للكشف عن المخاطر والاحتيال.',
    ind_3_ey:'الطاقة', ind_3_h:'الطاقة والمرافق', ind_3_p:'ندعم قطاع الطاقة في قطر بأدوات المراقبة والصيانة التنبؤية والأنظمة التشغيلية الآمنة.',
    ind_4_ey:'الرعاية الصحية', ind_4_h:'الرعاية الصحية', ind_4_p:'نبني أنظمة سجلات المرضى الآمنة وأدوات الذكاء الاصطناعي للمستشفيات والعيادات، مع الالتزام بمتطلبات خصوصية البيانات.',
    ind_5_ey:'التعليم', ind_5_h:'التعليم والبحث العلمي', ind_5_p:'نبني منصات تعلم رقمي وأدوات بحثية للجامعات والمدارس في قطر.',
    ind_6_ey:'العقارات', ind_6_h:'العقارات والبناء', ind_6_p:'نبني أنظمة إدارة عقارات ذكية لقطاع العقارات المتنامي في قطر.',
    ind_cross_ey:'عبر جميع القطاعات', ind_cross_h:'ما نجلبه لكل مشروع.',
    ind_x1_h:'بياناتك تبقى في قطر', ind_x1_p:'جميع البيانات تبقى داخل قطر. نصمم كل مشروع حول قواعد البيانات والأمن المحلية.',
    ind_x2_h:'ذكاء اصطناعي يفهم العربية', ind_x2_p:'أدوات الذكاء الاصطناعي لدينا تفهم العربية بشكل أصيل. جميع الواجهات تدعم العربية والإنجليزية.',
    ind_x3_h:'نعرف اللوائح', ind_x3_p:'نفهم اللوائح في قطر، لذا حلولنا دائماً متوافقة.',
    ind_vq_ey:'رؤية قطر 2030', ind_vq_h:'ندعم', ind_vq_h_em:'الرؤية الوطنية.',
    ind_no_sector_h:'لا ترى قطاعك؟', ind_no_sector_em:'تحدث معنا.',
    ind_vq_p:'كل مشروع ننجزه يدعم أحد الركائز الأربع لرؤية قطر الوطنية 2030 — لبناء قطر قوية ومتنوعة وحديثة.',
    ind_p1_lbl:'الركيزة الأولى',   ind_p1_h:'التنمية البشرية',    ind_p1_p:'أدوات تعليمية مدعومة بالذكاء الاصطناعي لبناء كوادر رقمية متمكنة.',
    ind_p2_lbl:'الركيزة الثانية',   ind_p2_h:'التنمية الاجتماعية',   ind_p2_p:'خدمات حكومية إلكترونية متاحة للجميع.',
    ind_p3_lbl:'الركيزة الثالثة', ind_p3_h:'التنمية الاقتصادية', ind_p3_p:'تكنولوجيا تساعد قطر على تنويع اقتصادها وتطويره.',
    ind_p4_lbl:'الركيزة الرابعة',  ind_p4_h:'التنمية البيئية',    ind_p4_p:'أنظمة ذكية تساعد قطر في تحقيق أهدافها البيئية.',

    con_banner_ey:'تواصل معنا', con_banner_h:'',
    con_banner_p:'سواء كان لديك مشروع في ذهنك أو تريد فقط معرفة ما هو ممكن — يسعدنا سماعك.',
    con_ey:'تواصل معنا', con_h:'لنعمل معاً.',
    con_p:'نعمل مع الحكومة والشركات والشركاء في قطر. كل مشروع يبدأ بمحادثة.',
    con_loc_l:'الموقع',      con_loc_v:'الدوحة، قطر',
    con_mail_l:'البريد',     con_mail_v:'info@fsv-tech.com',
    con_web_l:'الموقع الإلكتروني', con_web_v:'fsv-tech.com',
    con_hours_l:'ساعات العمل', con_hours_v:'الأحد – الخميس، ٨ص – ٥م (GMT+3)',
    con_notice:'<strong>وقت الرد:</strong> نسعى للرد على جميع الرسائل خلال يوم عمل واحد.',
    con_form_h:'أرسل لنا رسالة', con_form_p:'سنرد خلال يوم عمل واحد.',
    con_f_name:'الاسم الكامل', con_f_org:'المؤسسة', con_f_email:'البريد الإلكتروني',
    con_f_phone:'الهاتف (اختياري)', con_f_service:'ما الذي يهمك؟',
    con_f_s_opts:['تطوير الويب','استشارات الذكاء الاصطناعي','هندسة البرمجيات','إدارة البنية التحتية التقنية','استفسار عام','فرصة شراكة'],
    con_f_msg:'الرسالة', con_f_submit:'إرسال الرسالة', con_f_sent:'تم الإرسال ✓',
    con_o1_lbl:'مكتبنا',  con_o1_h:'الدوحة، قطر',
    con_o1_p:'نحن في الدوحة ونعمل مع عملاء في جميع أنحاء قطر.',
    con_o2_lbl:'ساعات العمل',    con_o2_h:'الأحد – الخميس، ٨ص – ٥م',
    con_o2_p:'بتوقيت قطر (GMT+3). الدعم العاجل متاح خارج أوقات العمل للعملاء المُدارين.',
    con_o3_lbl:'من نخدم', con_o3_h:'الحكومة والشركات',
    con_o3_p:'نعمل بصفة رئيسية مع الوزارات والهيئات العامة والشركات الكبيرة في قطر.',

    footer_tagline:'حلول تقنية للشركات والحكومة في قطر.',
    footer_col1_h:'الشركة', footer_col2_h:'الخدمات', footer_col3_h:'تواصل',
    footer_copy:'© 2026 FSV Tech للاستشارات والخدمات.',
    footer_location:'الدوحة، قطر',
    footer_msg:'أرسل رسالة',

    pp_nav_products:'المنتجات', pp_nav_item:'بوابة الشركاء FSV',
    pp_badge:'المنتج · بوابة الشركاء FSV',
    pp_h1a:'البوابة المهنية', pp_h1b:'لشركائك', pp_h1em:'الاحترافية.',
    pp_sub:'منصة متكاملة لإدارة الأعمال يمكنك وضع علامتك التجارية عليها — مشاريع وحسابات وفريق وملفات، في مكان واحد.',
    pp_cta1:'طلب عرض تجريبي', pp_cta2:'احصل على عرض سعر',
    pp_stat1_l:'وحدات', pp_stat2_l:'علامتك التجارية', pp_stat3_l:'الريال القطري',
    pp_feat_ey:'ما بداخلها',
    pp_feat_h:'كل ما تحتاجه شركتك في منصة واحدة.',
    pp_feat_p:'ست وحدات متصلة بالكامل — مصممة للجهات الحكومية والشركات وشركات الخدمات المهنية في قطر.',
    pp_f1_h:'لوحة المعلومات', pp_f1_p:'بمجرد تسجيل الدخول ترى أهم المعلومات فوراً — ما يحتاج اهتمامك، وضعك المالي، وحالة مشاريعك.',
    pp_f2_h:'متابعة المشاريع',   pp_f2_p:'أدِر جميع مشاريعك في مكان واحد — نشطة أو قيد التنفيذ أو مكتملة أو متوقفة — مع تتبع الميزانيات بالريال القطري.',
    pp_f3_h:'المهام وسير العمل', pp_f3_p:'تابع كل مهمة في جميع مشاريعك. وزّع العمل وحدد الأولويات وراقب التقدم بسهولة.',
    pp_f4_h:'الحسابات', pp_f4_p:'نظرة مالية واضحة — الدخل والمصاريف والسيولة وهامش الربح. فلتر حسب الفترة الزمنية وصدّر التقارير.',
    pp_f5_h:'إدارة الفريق',    pp_f5_p:'اعرض مؤسستك بالكامل في دليل واحد. فلتر حسب القسم وشاهد الأدوار بلمحة وأدر فريقك بسهولة.',
    pp_f6_h:'تخزين الملفات', pp_f6_p:'احفظ جميع عقودك وتقاريرك وملفاتك في مكان آمن واحد — منظم وقابل للبحث ومتاح دائماً.',
    pp_s1_ey:'الوحدة 01 — نظرة عامة', pp_s1_h1:'لوحة معلوماتك.', pp_s1_hem:'دائماً حيّة.',
    pp_s1_p:'بمجرد تسجيل الدخول، تظهر لك لوحة المعلومات ما يحتاج انتباهك بالضبط — المهام والحسابات وحالة المشاريع، كلها في مكان واحد.',
    pp_s1_b1:'المهام التي تحتاج إجراءً مرتبة تلقائياً',
    pp_s1_b2:'التدفق المالي والمشاريع النشطة وحجم العمل بلمحة',
    pp_s1_b3:'التنبيهات والتحديثات بنقرتين',
    pp_s1_b4:'الاتجاهات المالية عبر الزمن',
    pp_s1_lbl:'نظرة عامة · لوحة المعلومات',
    pp_s2_ey:'الوحدة 02 — المشاريع', pp_s2_h1:'جميع مشاريعك،', pp_s2_hem:'في مكان واحد.',
    pp_s2_p:'كل مشروع — نشط أو قيد التنفيذ أو مكتمل أو متوقف — مرئي بلمحة. اعرف الميزانيات والحالة والمعالم دون البحث في الملفات.',
    pp_s2_b1:'حالات المشروع: نشط، قيد التنفيذ، مكتمل، متوقف',
    pp_s2_b2:'تتبع الميزانية بالريال القطري لكل مشروع',
    pp_s2_b3:'انقر على أي مشروع للاطلاع على تفاصيله',
    pp_s2_b4:'قارن الأداء عبر جميع المشاريع',
    pp_s2_lbl:'المشاريع · جميع المشاريع',
    pp_s3_ey:'الوحدة 03 — الحسابات', pp_s3_h1:'حساباتك،', pp_s3_hem:'بوضوح.',
    pp_s3_p:'صورة مالية واضحة — ليس فقط قائمة معاملات. اعرف إجمالي الدخل والمصاريف والسيولة الحالية وهامش الربح في عرض واحد.',
    pp_s3_b1:'عملة الريال القطري مع عروض شهرية وسنوية',
    pp_s3_b2:'المال الداخل مقابل الخارج بلمحة',
    pp_s3_b3:'تفصيل حسب الفئة: ضرائب وعمليات وتكاليف واستثمارات',
    pp_s3_b4:'تصدير كشوف حسابات للتقارير',
    pp_s3_lbl:'الحسابات · نظرة عامة',
    pp_s4_ey:'الوحدة 04 — المهام', pp_s4_h1:'مهامك،', pp_s4_hem:'كلها متابَعة.',
    pp_s4_p:'تابع كل مهمة في جميع مشاريعك في قائمة واحدة. انقل البنود من "للتنفيذ" إلى "قيد التنفيذ" إلى "مراجعة" إلى "مكتمل" مع رؤية كاملة لفريقك.',
    pp_s4_b1:'جميع المهام من جميع المشاريع في قائمة رئيسية واحدة',
    pp_s4_b2:'تصفية حسب المشروع لعروض الفريق المركّزة',
    pp_s4_b3:'مخطط أسبوعي لجدولة العمل',
    pp_s4_b4:'من المُسنَد إليه ومتى الاستحقاق وما الحالة',
    pp_s4_lbl:'المهام · القائمة الرئيسية',
    pp_s5_ey:'الوحدة 05 — الفريق', pp_s5_h1:'موظفوك.', pp_s5_hem:'منظَّمون.',
    pp_s5_p:'دليل واضح لمؤسستك بالكامل. فلتر حسب القسم وشاهد أدوار الجميع بلمحة وأدر فريقك — كل ذلك من نفس المنصة.',
    pp_s5_b1:'تصفية حسب القسم: تنفيذي، هندسة، عمليات، موارد بشرية',
    pp_s5_b2:'دور وقسم كل شخص ظاهران بوضوح',
    pp_s5_b3:'إضافة وتعديل ومراسلة أعضاء الفريق مباشرة',
    pp_s5_b4:'نظرة عامة على صحة الفريق حسب القسم',
    pp_s5_lbl:'الفريق · جميع الأفراد',
    pp_s6_ey:'الوحدة 06 — الملفات', pp_s6_h1:'كل ملف.', pp_s6_hem:'آمن وسهل الإيجاد.',
    pp_s6_p:'مكان آمن واحد لجميع ملفاتك — عقود وتقارير ومستندات مشاريع وملفات داخلية. لا مزيد من البحث في الرسائل والمحركات. كل شيء منظم وقابل للبحث ومتابَع.',
    pp_s6_b1:'منظم حسب الفئة: قانوني، مالي، مشاريع، داخلي',
    pp_s6_b2:'اعرف من رفع كل ملف وحجمه',
    pp_s6_b3:'بحث فوري في جميع الملفات',
    pp_s6_b4:'تحكم في من يستطيع التحميل أو الأرشفة',
    pp_s6_lbl:'الملفات · جميع الملفات',
    pp_s7_ey:'علامتك التجارية', pp_s7_h1:'علامتك التجارية.', pp_s7_hem:'ليست علامتنا.',
    pp_s7_p:'أضف شعارك وألوانك وتتحدث المنصة بالكامل فوراً. كل عميل يحصل على تجربة تبدو وكأنها منتجك أنت.',
    pp_s7_b1:'ارفع شعارك وتحكم في طريقة عرضه',
    pp_s7_b2:'اختر ألوان علامتك التجارية',
    pp_s7_b3:'إعدادات الأمان والنظام',
    pp_s7_b4:'التغييرات تطبّق فوراً على جميع المستخدمين النشطين',
    pp_s7_lbl:'الإعدادات · العلامة التجارية',
    pp_gallery_ey:'جولة في المنصة', pp_gallery_h:'كل شاشة. منصة واحدة.', pp_gallery_p:'مرّر الماوس للإيقاف المؤقت. كل وحدة معروضة كما هي.',
    pp_cta_h1:'هل أنت مستعد لمنح شركائك', pp_cta_hem:'بوابة احترافية؟',
    pp_cta_p:'تواصل معنا للحصول على عرض تجريبي مخصص وعرض سعر لمؤسستك.',
    pp_cta_btn2:'راسلنا مباشرة',
    pp_footer_products:'المنتجات',
  }
};

let currentLang = 'en';
try { currentLang = localStorage.getItem('fsv_lang') || 'en'; } catch(e) {}

function applyLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('fsv_lang', lang); } catch(e) {}
  document.documentElement.lang = lang;
  document.body.classList.toggle('ar', lang === 'ar');
  document.querySelectorAll('.lang-btn,.mob-lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.querySelectorAll('[data-t]').forEach(el => {
    const v = T[lang][el.dataset.t];
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('[data-t-html]').forEach(el => {
    const v = T[lang][el.dataset.tHtml];
    if (typeof v === 'string') el.innerHTML = v;
  });
  document.querySelectorAll('[data-t-placeholder]').forEach(el => {
    const v = T[lang][el.dataset.tPlaceholder];
    if (v) el.placeholder = v;
  });
  document.querySelectorAll('.service-select').forEach(sel => {
    const opts = T[lang]['con_f_s_opts'];
    if (!opts) return;
    sel.innerHTML = `<option value="" disabled selected>${T[lang]['con_f_service']||''}</option>` +
      opts.map(o=>`<option>${o}</option>`).join('');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    const isTop = nav.classList.contains('top');
    const upd = () => {
      if (isTop) {
        if (window.scrollY > 40) {
          nav.classList.remove('top');
        } else {
          nav.classList.add('top');
        }
      }
    };
    window.addEventListener('scroll', upd, { passive: true });
    upd();
  }

  const page = '/' + (location.pathname.replace(/^\//, '').replace(/\.html$/, '') || '');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace(/\.html$/, '');
    if (href === page || (page === '/' && (href === '/index' || href === '/')))
      a.classList.add('active');
  });

  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  if (ham && mob) {
    // Inject close button if not already present
    if (!mob.querySelector('.mobile-menu-close')) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'mobile-menu-close';
      closeBtn.setAttribute('aria-label', 'Close menu');
      closeBtn.innerHTML = '<span></span><span></span>';
      mob.insertBefore(closeBtn, mob.firstChild);
    }

    let open = false;
    const spans = ham.querySelectorAll('span');

    function openMenu() {
      open = true;
      mob.classList.add('open');
      document.body.style.overflow = 'hidden';
      ham.setAttribute('aria-expanded', 'true');
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    }
    function closeMenu() {
      open = false;
      mob.classList.remove('open');
      document.body.style.overflow = '';
      ham.setAttribute('aria-expanded', 'false');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }

    ham.addEventListener('click', () => open ? closeMenu() : openMenu());

    // Close button inside menu
    const closeBtn = mob.querySelector('.mobile-menu-close');
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    // Close on link tap
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    // Close on Escape key
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) closeMenu(); });

    // Close on backdrop tap (outside the links area)
    mob.addEventListener('click', e => { if (e.target === mob) closeMenu(); });
  }

  document.querySelectorAll('.lang-btn,.mob-lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  applyLang(currentLang);


  // ── Products dropdown — JS managed so gap between trigger and panel doesn't close it ──
  document.querySelectorAll('.nav-has-dropdown').forEach(item => {
    let closeTimer = null;

    function openDD()  { clearTimeout(closeTimer); item.classList.add('open'); }
    function scheduleClose() {
      closeTimer = setTimeout(() => item.classList.remove('open'), 120);
    }

    item.addEventListener('mouseenter', openDD);
    item.addEventListener('mouseleave', scheduleClose);

    // Also support click/tap for touch devices
    const trigger = item.querySelector(':scope > a');
    trigger.addEventListener('click', e => {
      if (window.innerWidth > 960) {
        // On desktop prevent navigation to products.html when clicking the trigger
        // only if dropdown has items (i.e. user is opening the menu, not navigating)
        const dd = item.querySelector('.nav-dropdown');
        if (dd) {
          e.preventDefault();
          item.classList.toggle('open');
        }
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-has-dropdown')) {
      document.querySelectorAll('.nav-has-dropdown.open').forEach(el => el.classList.remove('open'));
    }
  });

  document.body.classList.add('js-ready');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fade').forEach(el => obs.observe(el));
  setTimeout(() => { document.querySelectorAll('.fade:not(.in)').forEach(el => el.classList.add('in')); }, 400);

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.submit-btn');
      const orig = btn.textContent;
      btn.textContent = T[currentLang]['con_f_sent'] || 'Sent ✓';
      btn.style.background = '#166534';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.disabled = false; form.reset(); }, 4000);
    });
  }
});
