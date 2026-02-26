/* FSV Tech — main.js — Redesign 2026 */

const T = {
  en: {
    nav_home:'Home', nav_about:'About', nav_services:'Services',
    nav_products:'Products',
    nav_industries:'Industries', nav_contact:'Contact', nav_cta:'Get in Touch',

    prod_banner_ey:'Built by FSV Tech', prod_banner_h:'Our ', prod_banner_hem:'Products',
    prod_banner_p:"Sovereign, enterprise-grade software built for Qatar's government and private sector — owned, operated, and continuously developed by FSV Tech.",
    prod_list_ey:'Available Now', prod_list_h:'One product. ', prod_list_hem:'More on the way.',
    prod_list_p:"FSV Tech builds software it would use itself. Every product is purpose-built for enterprise reality — not minimum viable. Our current product suite reflects that standard.",
    prod_p1_status:'Live · Available Now', prod_p1_h:'FSV Partner Portal',
    prod_p1_desc:'A fully white-labelled enterprise command centre that unifies project delivery, revenue intelligence, workforce management, and secure document storage — in one sovereign platform built for Qatar.',
    prod_p1_t1:'White-Label', prod_p1_t2:'6 Modules', prod_p1_t3:'QAR Native', prod_p1_t4:'Sovereign',
    prod_p1_cta1:'Explore Product', prod_p1_cta2:'Request Demo',
    prod_soon_tag:'Coming Soon', prod_soon_h:'Next Product',
    prod_soon_desc:"We're building more. Our next product is currently in development — engineered to the same sovereign, enterprise-grade standard as the FSV Partner Portal.",
    prod_soon_t1:'In Development',
    prod_phil_ey:'Our Product Philosophy', prod_phil_h:'Software built to ', prod_phil_hem:'last.',
    prod_phil_p:"Every FSV Tech product is designed for the long term — sovereign, auditable, and aligned with Qatar's national technology standards. We don't ship features. We ship systems.",
    prod_pp1_h:'Sovereign by Default', prod_pp1_p:"Data stays within Qatar's jurisdiction. No third-party dependencies on foreign cloud infrastructure.",
    prod_pp2_h:'Enterprise-Grade Quality', prod_pp2_p:'Production-hardened architecture built to handle national-scale workloads and mission-critical operations.',
    prod_pp3_h:'Your Brand, Not Ours', prod_pp3_p:'Full white-label identity control — logo, colours, and UX — so every touchpoint reflects your organisation.',
    prod_pp4_h:'Built to Scale', prod_pp4_p:'Modular architecture designed to grow with your operations — from pilot deployment to enterprise rollout.',
    prod_cta_h:'Interested in deploying FSV Tech software?',
    prod_cta_p:'Contact us to discuss licensing, customisation, or a live demonstration for your organisation.',
    prod_cta_btn:'Get in Touch',

    home_eyebrow:'AI Consultancy · Doha, Qatar',
    home_h1a:'Technology that', home_h1b:'moves nations', home_h1b_serif:'forward.',
    home_sub:"FSV Tech delivers enterprise AI, web development, sovereign software solutions, and critical IT infrastructure — built to Qatar's highest national security standards.",
    home_cta1:'Our Services', home_cta2:'About Us',
    home_stat1_n:'100%', home_stat1_l:'Sovereign Data',
    home_stat3_l:'Qatar HQ',
    home_s2_eyebrow:'What We Do',
    home_s2_title:'Four practice areas. One trusted partner.',
    home_s2_0_title:'Web Development',
    home_s2_0_desc:"Bespoke, high-performance websites and web applications — engineered for security, speed, and a seamless user experience.",
    home_s2_1_title:'AI Consultancy',
    home_s2_1_desc:'Sovereign LLM deployment, AI strategy, and intelligent workflow automation for government and enterprise.',
    home_s2_2_title:'Software Engineering',
    home_s2_2_desc:'E-government portals, enterprise applications, and mission-critical platforms built to endure.',
    home_s2_3_title:'IT Infrastructure',
    home_s2_3_desc:'Data center and cloud infrastructure management with full compliance and continuous availability.',
    home_s2_link:'Learn more',
    home_quote:'"We seek a knowledge-based economy built on innovation, research, and advanced technology."',
    home_quote_src:'H.H. Tamim bin Hamad Al Thani — Emir of Qatar',
    home_s3_eyebrow:'Why FSV Tech',
    home_s3_title:'Built for', home_s3_title_em:"Qatar's standards.",
    home_s3_std_h:'Every standard.', home_s3_std_em:'Every requirement.',
    home_s3_p1:"We operate at the intersection of national ambition and enterprise technology — delivering solutions that are as robust as they are aligned with Qatar's sovereign vision.",
    home_s3_1_t:'Sovereign by Design', home_s3_1_d:"Every solution adheres to Qatar's national security and data sovereignty standards.",
    home_s3_2_t:'Enterprise Grade',    home_s3_2_d:'Architected to scale with national infrastructure demands and long-term organisational growth.',
    home_s3_3_t:'AI-First',            home_s3_3_d:'Intelligence embedded at every layer — from sovereign LLMs to predictive analytics.',
    home_s3_4_t:'Local Presence',      home_s3_4_d:"Headquartered in Doha with deep knowledge of Qatar's regulatory environment.",
    home_compliance_label:'Compliance & Standards',
    home_c1:'Qatar National Cybersecurity Framework',
    home_c2:'Data Sovereignty & Residency Requirements',
    home_c3:'Government Cloud (G-Cloud) Standards',
    home_c4:'ISO 27001 Information Security',
    home_c5:'NIST AI Risk Management Framework',
    home_c6:'Qatar Vision 2030 Digital Agenda',
    home_cta_band_t:'Ready to build your digital future?',
    home_cta_band_b:'Start a Conversation',
    home_card_label:'Practice Areas',
    home_diff_ey:'Our Differentiators',
    home_stat2_l:'Practice Areas',
    home_stat3_l:'Founded',
    home_stat4_l:'Vision Aligned',
    num_01:'01', num_02:'02', num_03:'03', num_04:'04',
    num_05:'05', num_06:'06',
    num_4:'4', num_2026:'2026', num_2030:'2030', num_100pct:'100%',

    about_banner_ey:'Who We Are',
    about_banner_h:'About ',
    about_banner_p:'A Qatar-headquartered technology firm built to serve national ambition with enterprise precision.',
    about_s1_ey:'Our Mission',
    about_s1_h:'Where sovereignty meets innovation.',
    about_s1_p1:"FSV Tech was founded with a singular purpose: to give Qatar's government agencies and private enterprises the technological edge they need — without compromising on data sovereignty or national security.",
    about_s1_p2:'From the deployment of secure, sovereign Large Language Models to the construction of mission-critical e-government platforms, FSV Tech sits at the intersection of national ambition and modern engineering excellence.',
    about_s1_p3:'We measure our success by one standard: whether our clients can operate with greater confidence, efficiency, and security after working with us.',
    about_c1_ey:'Vision', about_c1_h:'Powering a knowledge-based economy',
    about_c1_p:'Every engagement is aligned with Qatar Vision 2030 — building the digital infrastructure that will carry the nation forward.',
    about_c2_ey:'Approach', about_c2_h:'Sovereign. Secure. Scalable.',
    about_c2_p:'Every solution is architected with national security standards at its core — not as an afterthought, but as a foundation.',
    about_c3_ey:'Commitment', about_c3_h:'Long-term partnership',
    about_c3_p:'We embed alongside our clients through implementation, operations, and continuous improvement.',
    about_val_ey:'Our Values', about_val_h:'The principles we work by.',
    about_v1_t:'Integrity First',       about_v1_d:"We hold ourselves to the highest professional standards. Our clients trust us with critical infrastructure — and we take that seriously.",
    about_v2_t:'National Alignment',    about_v2_d:"Every decision is tested against one question: does this serve Qatar's long-term digital future?",
    about_v3_t:'Technical Excellence',  about_v3_d:'Good enough is never good enough. We hold engineering quality to the highest bar, from architecture to production.',
    about_v4_t:'Collaboration',         about_v4_d:'We work as an extension of your team — embedding with your people and building solutions that outlast the engagement.',
    about_v5_t:'Innovation with Purpose',about_v5_d:'We adopt new technologies when they serve a real need. Practical innovation that creates measurable value.',
    about_v6_t:'Transparency',          about_v6_d:'Clear communication, realistic timelines, and honest assessments — always.',
    about_qatar_ey:'Our Home', about_qatar_h:'Rooted in', about_qatar_em:'Qatar.',
    about_qatar_p1:"FSV Tech operates from the heart of Doha, Qatar. Our deep familiarity with the local regulatory landscape, government procurement processes, and the ambitions of Qatar Vision 2030 gives our clients an advantage no offshore consultancy can replicate.",
    about_qatar_p2:"We understand that Qatar's digital transformation is not just an IT initiative — it is a national project. And we are proud to be part of building it.",
    about_vl1:'Qatar National Cybersecurity Strategy compliant',
    about_vl2:"Aligned with Qatar Vision 2030 digital pillars",
    about_vl3:'Local presence for rapid response and support',
    about_vl4:'Deep knowledge of government procurement standards',
    about_vl5:'Committed to developing local digital talent',
    about_qs1_n:'2030', about_qs1_l:'Qatar Vision',
    about_qs2_n:'DOH',  about_qs2_l:'Headquarters',
    about_qs3_n:'QAT',  about_qs3_l:'Sovereign Ops',
    about_cta_h:"Let's build something extraordinary together.", about_cta_b:'Contact Us',

    svc_banner_ey:'What We Offer', svc_banner_h:'Our ', svc_banner_h_em:'Services', svc_banner_p:"Four practice areas engineered to transform Qatar's digital landscape — each built on sovereignty, security, and scale.",
    svc_00_ey:'Practice Area One', svc_00_h:'Web Development',
    svc_00_p:"We design and build bespoke, high-performance websites and web applications from the ground up. Every project is engineered for security, blazing speed, and a seamless user experience — tailored to the exacting standards of Qatar's government and enterprise sector.",
    svc_00_f1_t:'Custom Website Design & Development', svc_00_f1_d:'Pixel-perfect, responsive websites built to reflect your brand and convert visitors into clients.',
    svc_00_f2_t:'Web Application Development', svc_00_f2_d:'Full-stack web apps with robust backends, real-time features, and scalable architectures.',
    svc_00_f3_t:'E-Commerce & Portal Solutions', svc_00_f3_d:'Secure, feature-rich e-commerce platforms and customer portals tailored to your business logic.',
    svc_00_f4_t:'Performance & SEO Optimisation', svc_00_f4_d:'Speed, Core Web Vitals, and SEO best practices baked in from day one — not retrofitted later.',
    svc_00_tech_h:'Technology Stack', svc_00_wyg_h:'What You Get',
    svc_00_w1:'Fully responsive, cross-browser compatible',
    svc_00_w2:'Arabic / English bilingual support (RTL)',
    svc_00_w3:'WCAG 2.1 accessibility compliance',
    svc_00_w4:'99.9% uptime SLA with managed hosting',
    svc_00_w5:'Comprehensive handover documentation',
    svc_00_w6:'Post-launch support & maintenance',
    svc_00_cta:'Discuss Your Project',
    svc_01_ey:'Practice Area Two', svc_01_h:'AI Consultancy & LLM Deployment',
    svc_01_p:'We unlock new growth through the strategic deployment of sovereign Large Language Models and enterprise AI roadmaps. Our solutions automate complex workflows, reduce operational costs, and increase efficiency — without routing sensitive data through external infrastructure.',
    svc_01_f1_t:'Sovereign LLM Deployment', svc_01_f1_d:"On-premise or private cloud AI models that keep your data within Qatar's borders.",
    svc_01_f2_t:'AI Strategy & Roadmapping', svc_01_f2_d:"Comprehensive AI adoption strategies aligned with your organisation's goals and national standards.",
    svc_01_f3_t:'Workflow Automation',       svc_01_f3_d:'Intelligent automation of repetitive, high-volume processes across government and enterprise operations.',
    svc_01_f4_t:'AI Integration & APIs',     svc_01_f4_d:'Seamless embedding of AI capabilities into your existing systems and workflows.',
    svc_01_tech_h:'Technologies', svc_01_uc_h:'Common Use Cases',
    svc_01_uc1:'Intelligent document processing & classification',
    svc_01_uc2:'Government citizen services AI assistant',
    svc_01_uc3:'Automated regulatory compliance monitoring',
    svc_01_uc4:'Internal knowledge base & semantic search',
    svc_01_uc5:'Predictive maintenance for critical infrastructure',
    svc_01_uc6:'Arabic NLP & bilingual AI systems',
    svc_01_cta:'Discuss AI Needs',
    svc_02_ey:'Practice Area Three', svc_02_h:'Software Engineering',
    svc_02_p:"We build the digital backbone of Qatar's public and private sectors. From secure e-government portals to mission-critical enterprise applications, every system is designed to scale.",
    svc_02_f1_t:'E-Government Portals',             svc_02_f1_d:'Secure, accessible citizen-facing digital services built to government standards.',
    svc_02_f2_t:'Enterprise Application Development',svc_02_f2_d:'Custom business systems, ERP integrations, and operational platforms built for scale.',
    svc_02_f3_t:'Secure API Development',            svc_02_f3_d:'RESTful and GraphQL APIs with enterprise-grade authentication and authorisation.',
    svc_02_f4_t:'DevSecOps & CI/CD',                 svc_02_f4_d:'Security integrated throughout the development pipeline, from code to deployment.',
    svc_02_tech_h:'Technology Stack', svc_02_del_h:'Delivery Approach',
    svc_02_d1:'Agile delivery with fortnightly sprints',
    svc_02_d2:'Security-first architecture design',
    svc_02_d3:'Comprehensive documentation handover',
    svc_02_d4:'Performance testing & load optimisation',
    svc_02_d5:'Bilingual (Arabic / English) UI support',
    svc_02_d6:'Post-launch support & maintenance SLA',
    svc_02_cta:'Discuss Your Project',
    svc_03_ey:'Practice Area Four', svc_03_h:'IT Infrastructure Management',
    svc_03_p:'Growth requires a solid foundation. We provide comprehensive management of data centres and cloud infrastructure in Qatar, ensuring your systems are always secure and available.',
    svc_03_f1_t:'Data Centre Management',svc_03_f1_d:'End-to-end management of on-premise and co-located data centre environments.',
    svc_03_f2_t:'Cloud Infrastructure',  svc_03_f2_d:'Private, hybrid, and sovereign cloud design, deployment, and management.',
    svc_03_f3_t:'Security & Compliance', svc_03_f3_d:'Continuous security monitoring, vulnerability management, and compliance reporting.',
    svc_03_f4_t:'Disaster Recovery',     svc_03_f4_d:'Business continuity planning and tested recovery procedures for critical systems.',
    svc_03_tech_h:'Infrastructure Stack', svc_03_sla_h:'Service Levels',
    svc_03_s1:'24/7 monitoring and incident response',
    svc_03_s2:'Defined SLAs with guaranteed uptime',
    svc_03_s3:'Monthly compliance and security reports',
    svc_03_s4:'Capacity planning and scaling advisory',
    svc_03_s5:'Regular penetration testing',
    svc_03_s6:'Dedicated Qatar-based support team',
    svc_03_cta:'Discuss Infrastructure',
    svc_process_h:'How we', svc_process_h_em:'engage.',
    svc_step1_h:'Discovery',    svc_step1_p:'We invest time to deeply understand your organisation, requirements, and constraints before proposing any solution.',
    svc_step2_h:'Architecture', svc_step2_p:'We design the right solution — sovereign, secure, scalable — with a clear delivery roadmap and milestones.',
    svc_step3_h:'Delivery',     svc_step3_p:'Agile execution with regular check-ins, transparent progress reporting, and zero surprises.',
    svc_step4_h:'Partnership',  svc_step4_p:'We remain embedded after launch — monitoring, improving, and ensuring your systems perform at their best.',

    ind_hq_ey:'Our Headquarters', ind_hq_p:'Built and operated from the heart of Qatar. Local knowledge, national standards, enterprise delivery.',
    ind_banner_ey:'Sectors We Serve', ind_banner_h:'Industries ', ind_banner_h_em:'We Serve',
    ind_banner_p:"From government ministries to financial institutions — we bring enterprise technology expertise to Qatar's most critical sectors.",
    ind_s1_ey:'Sector Expertise', ind_s1_h:"Deep expertise across Qatar's key sectors.",
    ind_1_ey:'Government & Public Sector', ind_1_h:'Government & Public Sector', ind_1_p:"Secure e-government platforms, sovereign AI deployment, and digital transformation programmes for Qatar's ministries, authorities, and public bodies.",
    ind_2_ey:'Financial Services', ind_2_h:'Banking & Financial Services', ind_2_p:"Core banking integrations, regulatory compliance systems, and AI-powered risk and fraud detection for Qatar's financial institutions.",
    ind_3_ey:'Energy & Utilities', ind_3_h:'Energy & Utilities', ind_3_p:"Industrial IoT platforms, predictive maintenance AI, and operational technology security for Qatar's energy and utilities sector.",
    ind_4_ey:'Healthcare', ind_4_h:'Healthcare & Life Sciences', ind_4_p:"Electronic health records, clinical AI tools, and HIPAA/PDPA-compliant data platforms for Qatar's healthcare providers.",
    ind_5_ey:'Education', ind_5_h:'Education & Research', ind_5_p:'AI-powered learning platforms, research data infrastructure, and digital campus solutions for universities and educational authorities in Qatar.',
    ind_6_ey:'Real Estate & Construction', ind_6_h:'Real Estate & Construction', ind_6_p:"Smart building platforms, property management systems, and BIM-integrated digital twins for Qatar's rapidly growing built environment.",
    ind_cross_ey:'Cross-Sector Capabilities', ind_cross_h:'Capabilities that cut across every sector.',
    ind_x1_h:'Data Sovereignty', ind_x1_p:"All data stays within Qatar's borders. Every engagement is designed around local residency requirements and national security standards.",
    ind_x2_h:'Arabic-First AI', ind_x2_p:'Native Arabic language understanding built into every AI product — not bolted on. Bilingual interfaces as standard.',
    ind_x3_h:'Regulatory Compliance', ind_x3_p:"Deep knowledge of Qatar's regulatory landscape ensures our solutions meet the requirements of every relevant authority.",
    ind_vq_ey:'Qatar Vision 2030', ind_vq_h:'Aligned with the', ind_vq_h_em:'national agenda.',
    ind_no_sector_h:"Don't see your sector?", ind_no_sector_em:'Talk to us.',
    ind_vq_p:"Every solution FSV Tech delivers contributes to one of the pillars of Qatar's National Vision 2030 — the roadmap to a diverse, knowledge-based economy.",
    ind_p1_lbl:'Pillar One',   ind_p1_h:'Human Development',    ind_p1_p:'AI-powered educational platforms that build digital workforce capabilities.',
    ind_p2_lbl:'Pillar Two',   ind_p2_h:'Social Development',   ind_p2_p:'Digital government services that ensure equitable, inclusive access for all residents.',
    ind_p3_lbl:'Pillar Three', ind_p3_h:'Economic Development', ind_p3_p:"Enterprise technology that diversifies Qatar's economy beyond hydrocarbons.",
    ind_p4_lbl:'Pillar Four',  ind_p4_h:'Environmental Development', ind_p4_p:"Smart infrastructure management that supports Qatar's sustainability targets.",

    con_banner_ey:'Start a Conversation', con_banner_h:'Contact ',
    con_banner_p:"Whether you're ready to begin a project or simply want to explore what's possible — we're here to listen.",
    con_ey:'Get In Touch', con_h:"Let's build together.",
    con_p:'FSV Tech works closely with government entities, enterprises, and partners across Qatar. Every engagement begins with a conversation.',
    con_loc_l:'Location', con_loc_v:'Doha, Qatar',
    con_mail_l:'Email',   con_mail_v:'info@fsv-tech.com',
    con_web_l:'Website',  con_web_v:'fsv-tech.com',
    con_hours_l:'Hours',  con_hours_v:'Sun – Thu, 8am – 5pm (GMT+3)',
    con_notice:'<strong>Response time:</strong> We aim to respond to all enquiries within one business day. For urgent matters, please indicate in your message.',
    con_form_h:'Send us a message', con_form_p:'We aim to respond within one business day.',
    con_f_name:'Full Name', con_f_org:'Organisation', con_f_email:'Email Address',
    con_f_phone:'Phone (Optional)', con_f_service:'Area of Interest',
    con_f_s_opts:['Web Development','AI Consultancy & LLM Deployment','Software Engineering','IT Infrastructure Management','General Inquiry','Partnership Opportunity'],
    con_f_msg:'Message', con_f_submit:'Send Message', con_f_sent:'Sent ✓',
    con_o1_lbl:'Headquarters',    con_o1_h:'Doha, Qatar',
    con_o1_p:'Our primary office, client engagements, and delivery operations are based in Doha — ensuring local presence for all Qatar-based clients.',
    con_o2_lbl:'Operating Hours', con_o2_h:'Sun – Thu, 8am – 5pm',
    con_o2_p:'Qatar Standard Time (GMT+3). On-call support available for managed infrastructure clients outside standard hours.',
    con_o3_lbl:'Engagements',     con_o3_h:'Government & Enterprise',
    con_o3_p:'We work primarily with government ministries, public authorities, and large private sector enterprises across Qatar.',

    footer_tagline:"Enterprise AI consultancy and sovereign technology solutions for Qatar's public and private sectors.",
    footer_col1_h:'Company', footer_col2_h:'Services', footer_col3_h:'Contact',
    footer_copy:'© 2026 FSV Tech Consulting & Services.',
    footer_location:'Doha, Qatar',
    footer_msg:'Send a Message',

    pp_nav_products:'Products', pp_nav_item:'FSV Partner Portal',
    pp_badge:'Product · FSV Partner Portal',
    pp_h1a:'The professional', pp_h1b:'gateway for your', pp_h1em:'partners.',
    pp_sub:'An enterprise-grade, fully white-labelled command centre that unifies project delivery, revenue intelligence, workforce, and documents — in one sovereign platform.',
    pp_cta1:'Request a Demo', pp_cta2:'Get a Quote',
    pp_stat1_l:'Core Modules', pp_stat2_l:'White-Label', pp_stat3_l:'Native Currency',
    pp_feat_ey:'What\'s Inside',
    pp_feat_h:'Every module your enterprise operation demands.',
    pp_feat_p:'Six fully integrated modules — purpose-built for government agencies, enterprises, and professional services firms operating in Qatar.',
    pp_f1_h:'Command Pulse Overview', pp_f1_p:'Real-time capital velocity, active pipelines, workload pressure, and critical action priorities — surfaced the moment you log in.',
    pp_f2_h:'Project Portfolio',      pp_f2_p:'End-to-end lifecycle governance — Active, Pipeline, Completed, On Hold — with QAR budget tracking and milestone delivery per engagement.',
    pp_f3_h:'Workflow & Work Items',  pp_f3_p:'Master backlog and sprint management across all active projects. Assign, prioritise, and track deliverables at any granularity.',
    pp_f4_h:'Revenue & General Ledger', pp_f4_p:'Full financial module: OPEX, CAPEX, TAX categorisation; fiscal period navigation; inflow/outflow velocity; exportable QAR statements.',
    pp_f5_h:'Workforce & HR Hub',    pp_f5_p:'Manage teams across Engineering, Operations, Executive, and HR with role-based access, personnel records, and department-level health metrics.',
    pp_f6_h:'Secure Document Vault', pp_f6_p:'Centralised repository for legal contracts, financial statements, and project assets — categorised, searchable, and audit-trailed.',
    pp_s1_ey:'Module 01 — Overview', pp_s1_h1:'Your command centre.', pp_s1_hem:'Live.',
    pp_s1_p:'The moment you log in, Command Pulse surfaces your most pressing priorities. Action items, financial KPIs, and pipeline health are front and centre — no hunting through menus.',
    pp_s1_b1:'Immediate action priorities flagged and ranked automatically',
    pp_s1_b2:'Net capital velocity, pipeline count, and workload pressure at a glance',
    pp_s1_b3:'Workstream Stream and Critical Alerts in two clicks',
    pp_s1_b4:'KPI Metrics panel for trend analysis across periods',
    pp_s1_lbl:'Overview · Command Pulse',
    pp_s2_ey:'Module 02 — Portfolio', pp_s2_h1:'Full-spectrum project', pp_s2_hem:'governance.',
    pp_s2_p:'Every active engagement, pipeline opportunity, and completed delivery — visible in one place. Budget figures, status badges, and milestone tracking give complete delivery confidence.',
    pp_s2_b1:'Active, Pipeline, Completed, and On-Hold project states',
    pp_s2_b2:'Per-project budget tracking in QAR',
    pp_s2_b3:'One-click drill-down to project-level detail',
    pp_s2_b4:'Portfolio Analysis view for cross-account performance',
    pp_s2_lbl:'Portfolio · All Projects',
    pp_s3_ey:'Module 03 — Revenue', pp_s3_h1:'Integrated general', pp_s3_hem:'ledger.',
    pp_s3_p:'A full financial intelligence layer — not just transaction logs. Total receipts, expenditure, current liquidity, and net margin at the top. Granular category drilldown below.',
    pp_s3_b1:'QAR-native with fiscal period navigation (month / year)',
    pp_s3_b2:'Financial velocity bar: credits vs debits at a glance',
    pp_s3_b3:'TAX, OPEX, COGS, CAPEX category drilldown',
    pp_s3_b4:'Export Statement for reporting and compliance',
    pp_s3_lbl:'Revenue · Master Ledger',
    pp_s4_ey:'Module 04 — Work Items', pp_s4_h1:'Delivery-grade', pp_s4_hem:'workflow management.',
    pp_s4_p:'Track every task, across every project, in a single master backlog. Move items from To Do through In Progress, Under Review, and Completed — with full cross-project visibility.',
    pp_s4_b1:'Master Backlog across all active projects simultaneously',
    pp_s4_b2:'Per-project filtered views for delivery teams',
    pp_s4_b3:'Weekly Planner for sprint-style scheduling',
    pp_s4_b4:'Assignee initials, due dates, and status on every item',
    pp_s4_lbl:'Work Items · Master Backlog',
    pp_s5_ey:'Module 05 — Workforce', pp_s5_h1:'Your people.', pp_s5_hem:'Organised.',
    pp_s5_p:'A clean, structured directory for your entire organisation. Filter by department, view roles at a glance, and take direct actions — all within the interface your team already uses daily.',
    pp_s5_b1:'Department breakdown: Executive, Engineering, Operations, HR',
    pp_s5_b2:'Per-person role, title, and department badge',
    pp_s5_b3:'Add, edit, and message team members directly',
    pp_s5_b4:'Organisational health metrics at department level',
    pp_s5_lbl:'Workforce · All Personnel',
    pp_s6_ey:'Module 06 — Documents', pp_s6_h1:'Every file.', pp_s6_hem:'Secured and found.',
    pp_s6_p:'A centralised repository with structured categorisation — Legal, Financial, Project Assets, Internal. No more searching across drives and email. Every document tagged, searchable, and audit-logged.',
    pp_s6_b1:'Category-based filing: Legal, Financial, Project, Internal',
    pp_s6_b2:'Uploader attribution and file size on every document',
    pp_s6_b3:'Full-text search across the entire repository',
    pp_s6_b4:'Download and archive controls with access tracking',
    pp_s6_lbl:'Documents · All Files',
    pp_s7_ey:'White-Label Engine', pp_s7_h1:'Your brand.', pp_s7_hem:'Not ours.',
    pp_s7_p:'Replace every visual identity element — logo, primary colour, secondary accent — and deploy the change live across the entire portal instantly. Each client gets a genuinely native experience.',
    pp_s7_b1:'Logo replacement with display width and rendering mode control',
    pp_s7_b2:'Primary focal colour and secondary accent palette configuration',
    pp_s7_b3:'Infrastructure, Security, and System Audit panels',
    pp_s7_b4:'Deployment Sync: propagates to all active sessions in real-time',
    pp_s7_lbl:'Settings · Identity & Assets',
    pp_gallery_ey:'Full Platform Tour', pp_gallery_h:'Every screen. One platform.', pp_gallery_p:'Hover to pause. Every module shown exactly as it ships.',
    pp_cta_h1:'Ready to give your partners a', pp_cta_hem:'professional gateway?',
    pp_cta_p:'Contact us for a personalised demo and a tailored quotation for your organisation.',
    pp_cta_btn2:'Email Us Directly',
    pp_footer_products:'Products',
  },

  ar: {
    nav_home:'الرئيسية', nav_about:'من نحن', nav_services:'خدماتنا',
    nav_products:'المنتجات',
    nav_industries:'القطاعات', nav_contact:'تواصل', nav_cta:'ابدأ محادثة',
    prod_banner_ey:'من تطوير FSV Tech', prod_banner_h:'منتجاتنا ', prod_banner_hem:'',
    prod_banner_p:'برامج مؤسسية سيادية مصممة لقطاعي الحكومة والخاص في قطر.',
    prod_list_ey:'متاح الآن', prod_list_h:'منتج واحد. ', prod_list_hem:'المزيد قادم.',
    prod_list_p:'تبني FSV Tech برمجيات تستخدمها بنفسها. كل منتج مصمَّم للواقع المؤسسي.',
    prod_p1_status:'متاح الآن', prod_p1_h:'بوابة الشركاء FSV',
    prod_p1_desc:'مركز قيادة مؤسسي مع هوية تجارية كاملة يوحّد تسليم المشاريع وذكاء الإيرادات وإدارة القوى العاملة والمستندات في منصة سيادية واحدة.',
    prod_p1_t1:'هوية تجارية كاملة', prod_p1_t2:'6 وحدات', prod_p1_t3:'ريال قطري', prod_p1_t4:'سيادي',
    prod_p1_cta1:'استكشاف المنتج', prod_p1_cta2:'طلب عرض تجريبي',
    prod_soon_tag:'قريباً', prod_soon_h:'المنتج القادم',
    prod_soon_desc:'نبني المزيد. منتجنا القادم قيد التطوير حالياً بنفس المعيار السيادي والمؤسسي.',
    prod_soon_t1:'قيد التطوير',
    prod_phil_ey:'فلسفة منتجاتنا', prod_phil_h:'برمجيات مصممة للـ', prod_phil_hem:'دوام.',
    prod_phil_p:'كل منتج من FSV Tech مصمَّم على المدى البعيد — سيادي وقابل للتدقيق ومتوافق مع المعايير الوطنية.',
    prod_pp1_h:'سيادي بطبيعته', prod_pp1_p:'تبقى البيانات ضمن اختصاص قطر القضائي. لا اعتماد على بنية تحتية أجنبية.',
    prod_pp2_h:'جودة مؤسسية', prod_pp2_p:'بنية معمارية مختبرة لاستيعاب أعباء العمل على المستوى الوطني.',
    prod_pp3_h:'علامتك التجارية', prod_pp3_p:'تحكم كامل في هوية العلامة التجارية — الشعار والألوان وتجربة المستخدم.',
    prod_pp4_h:'مصمم للنمو', prod_pp4_p:'بنية معيارية تنمو مع عملياتك من النشر التجريبي إلى الطرح المؤسسي.',
    prod_cta_h:'مهتم بنشر برمجيات FSV Tech؟',
    prod_cta_p:'تواصل معنا لمناقشة الترخيص والتخصيص أو عرض تجريبي حي.',
    prod_cta_btn:'تواصل معنا',
    home_eyebrow:'استشارات الذكاء الاصطناعي · الدوحة، قطر',
    home_h1a:'تكنولوجيا', home_h1b:'تُقدِّم الأمم', home_h1b_serif:'إلى الأمام.', home_sub:'تُقدِّم FSV Tech حلول الذكاء الاصطناعي المؤسسي وتطوير الويب والبرمجيات السيادية والبنية التحتية التقنية — وفق أعلى معايير الأمن القومي في قطر.',
    home_cta1:'خدماتنا', home_cta2:'من نحن',
    home_stat1_l:'بيانات سيادية', home_stat3_l:'المقر الرئيسي',
    home_s2_eyebrow:'ما نقدّمه',
    home_s2_title:'أربعة مجالات. شريك واحد موثوق.',
    home_s2_0_title:'تطوير الويب',
    home_s2_0_desc:'مواقع وتطبيقات ويب مخصصة وعالية الأداء — مصمَّمة للأمان والسرعة وتجربة مستخدم سلسة.',
    home_s2_1_title:'استشارات الذكاء الاصطناعي',
    home_s2_1_desc:'نشر النماذج اللغوية السيادية واستراتيجية الذكاء الاصطناعي وأتمتة سير العمل للحكومة والشركات.',
    home_s2_2_title:'هندسة البرمجيات',
    home_s2_2_desc:'بوابات الحكومة الإلكترونية وتطبيقات المؤسسات ومنصات بالغة الأهمية مصمَّمة للصمود.',
    home_s2_3_title:'البنية التحتية التقنية',
    home_s2_3_desc:'إدارة البنية التحتية السحابية ومراكز البيانات مع الامتثال الكامل والتوفر المستمر.',
    home_s2_link:'اعرف المزيد',
    home_quote:'"نسعى إلى اقتصاد قائم على المعرفة مبني على الابتكار والبحث والتكنولوجيا المتقدمة."',
    home_quote_src:'صاحب السمو الشيخ تميم بن حمد آل ثاني — أمير قطر',
    home_s3_eyebrow:'لماذا FSV Tech',
    home_s3_title:'مبني لـ', home_s3_title_em:'معايير قطر.',
    home_s3_std_h:'كل معيار.', home_s3_std_em:'كل متطلب.',
    home_s3_p1:'نعمل عند تقاطع الطموح الوطني والتكنولوجيا المؤسسية — نُقدِّم حلولاً راسخة ومتوافقة مع الرؤية السيادية لقطر.',
    home_s3_1_t:'سيادي بالتصميم', home_s3_1_d:'كل حل يلتزم بمعايير الأمن القومي وسيادة البيانات في قطر.',
    home_s3_2_t:'درجة مؤسسية', home_s3_2_d:'مُهيَّأ للتوسع مع متطلبات البنية التحتية الوطنية والنمو التنظيمي.',
    home_s3_3_t:'الذكاء الاصطناعي أولاً', home_s3_3_d:'الذكاء الاصطناعي مُضمَّن في كل طبقة — من النماذج اللغوية إلى التحليلات التنبؤية.',
    home_s3_4_t:'حضور محلي', home_s3_4_d:'مقرّنا الرئيسي في الدوحة مع معرفة عميقة بالبيئة التنظيمية القطرية.',
    home_compliance_label:'الامتثال والمعايير',
    home_c1:'الإطار الوطني للأمن السيبراني القطري',
    home_c2:'متطلبات سيادة البيانات وإقامتها المحلية',
    home_c3:'معايير السحابة الحكومية (G-Cloud)',
    home_c4:'أمن المعلومات ISO 27001',
    home_c5:'إطار إدارة مخاطر الذكاء الاصطناعي NIST',
    home_c6:'الأجندة الرقمية لرؤية قطر 2030',
    home_cta_band_t:'هل أنت مستعد لبناء مستقبلك الرقمي؟',
    home_cta_band_b:'ابدأ محادثة',
    home_card_label:'مجالات الممارسة',
    home_diff_ey:'مميزاتنا',
    home_stat2_l:'مجالات الممارسة',
    home_stat3_l:'تأسست',
    home_stat4_l:'متوافق مع الرؤية',
    num_01:'٠١', num_02:'٠٢', num_03:'٠٣', num_04:'٠٤',
    num_05:'٠٥', num_06:'٠٦',
    num_4:'٤', num_2026:'٢٠٢٦', num_2030:'٢٠٣٠', num_100pct:'١٠٠٪',

    about_banner_ey:'من نحن', about_banner_h:'حول ',
    about_banner_p:'شركة تكنولوجيا مقرّها قطر، بُنيت لخدمة الطموح الوطني بدقة مؤسسية.',
    about_s1_ey:'مهمتنا', about_s1_h:'حيث تلتقي السيادة بالابتكار.',
    about_s1_p1:'تأسست FSV Tech بهدف محدد: منح الجهات الحكومية والشركات الخاصة في قطر الميزة التكنولوجية التي تحتاجها — دون المساس بسيادة البيانات أو الأمن القومي.',
    about_s1_p2:'من نشر النماذج اللغوية الكبيرة السيادية إلى بناء منصات الحكومة الإلكترونية الحيوية، تقف FSV Tech عند تقاطع الطموح الوطني وتميّز الهندسة الحديثة.',
    about_s1_p3:'نقيس نجاحنا بمعيار واحد: هل يمكن لعملائنا العمل بثقة وكفاءة وأمان أكبر بعد العمل معنا؟',
    about_c1_ey:'الرؤية', about_c1_h:'تشغيل اقتصاد قائم على المعرفة',
    about_c1_p:'كل مشاركة متوافقة مع رؤية قطر 2030 — بناء البنية التحتية الرقمية التي ستحمل الأمة إلى الأمام.',
    about_c2_ey:'المنهج', about_c2_h:'سيادي. آمن. قابل للتوسع.',
    about_c2_p:'كل حل مُهيَّأ بمعايير الأمن القومي في صميمه — ليس كإضافة لاحقة، بل كأساس.',
    about_c3_ey:'الالتزام', about_c3_h:'شراكة طويلة الأمد',
    about_c3_p:'نندمج مع عملائنا عبر مراحل التطبيق والتشغيل والتحسين المستمر.',
    about_val_ey:'قيمنا', about_val_h:'المبادئ التي نعمل بها.',
    about_v1_t:'النزاهة أولاً', about_v1_d:'نلتزم بأعلى المعايير المهنية. عملاؤنا يثقون بنا في البنية التحتية الحيوية — ونأخذ ذلك بجدية تامة.',
    about_v2_t:'التوافق الوطني', about_v2_d:'كل قرار يُختبر على سؤال واحد: هل يخدم المستقبل الرقمي البعيد الأمد لقطر؟',
    about_v3_t:'التميّز التقني', about_v3_d:'الكافي ليس كافياً. نرفع سقف جودة الهندسة إلى أعلى مستوياتها، من البنية إلى الإنتاج.',
    about_v4_t:'التعاون', about_v4_d:'نعمل كامتداد لفريقك — نندمج مع كوادرك ونبني حلولاً تتجاوز فترة المشاركة.',
    about_v5_t:'الابتكار الهادف', about_v5_d:'نتبنّى التقنيات الجديدة حين تخدم حاجة حقيقية. ابتكار عملي يخلق قيمة قابلة للقياس.',
    about_v6_t:'الشفافية', about_v6_d:'تواصل واضح، جداول زمنية واقعية، وتقييمات صادقة — دائماً.',
    about_qatar_ey:'موطننا', about_qatar_h:'جذورنا في', about_qatar_em:'قطر.',
    about_qatar_p1:'تعمل FSV Tech من قلب الدوحة، قطر. ألفتنا العميقة بالمشهد التنظيمي المحلي وإجراءات المشتريات الحكومية وطموحات رؤية قطر 2030 تمنح عملاءنا ميزة لا يستطيع أي مستشار خارجي تقديمها.',
    about_qatar_p2:'ندرك أن التحول الرقمي في قطر ليس مجرد مبادرة تقنية — إنه مشروع وطني. ونفخر بالإسهام في بنائه.',
    about_vl1:'متوافق مع استراتيجية الأمن السيبراني القطري',
    about_vl2:'متوافق مع محاور رؤية قطر الرقمية 2030',
    about_vl3:'حضور محلي للاستجابة والدعم السريع',
    about_vl4:'معرفة عميقة بمعايير المشتريات الحكومية',
    about_vl5:'ملتزمون بتطوير الكفاءات الرقمية المحلية',
    about_qs1_n:'2030', about_qs1_l:'رؤية قطر',
    about_qs2_n:'DOH',  about_qs2_l:'المقر الرئيسي',
    about_qs3_n:'QAT',  about_qs3_l:'عمليات سيادية',
    about_cta_h:'لنبنِ شيئاً استثنائياً معاً.', about_cta_b:'تواصل معنا',

    svc_banner_ey:'ما نقدّمه', svc_banner_h:'', svc_banner_h_em:'خدماتنا', svc_banner_p:'أربعة مجالات ممارسة مصمَّمة لتحويل المشهد الرقمي في قطر — كل منها مبني على السيادة والأمان والتوسع.',
    svc_00_ey:'مجال الممارسة الأول', svc_00_h:'تطوير الويب',
    svc_00_p:'نصمم ونبني مواقع وتطبيقات ويب مخصصة وعالية الأداء من الصفر. كل مشروع مُهيَّأ للأمان والسرعة وتجربة مستخدم سلسة — وفق المعايير الصارمة للقطاعين الحكومي والخاص في قطر.',
    svc_00_f1_t:'تصميم وتطوير المواقع المخصصة', svc_00_f1_d:'مواقع متجاوبة وبدقة عالية لتعكس علامتك التجارية وتحوّل الزوار إلى عملاء.',
    svc_00_f2_t:'تطوير تطبيقات الويب', svc_00_f2_d:'تطبيقات ويب متكاملة مع خوادم خلفية قوية وميزات فورية وبنية قابلة للتوسع.',
    svc_00_f3_t:'حلول التجارة الإلكترونية والبوابات', svc_00_f3_d:'منصات تجارة إلكترونية آمنة وبوابات عملاء مُصمَّمة وفق منطق أعمالك.',
    svc_00_f4_t:'تحسين الأداء وSEO', svc_00_f4_d:'السرعة ومؤشرات Core Web Vitals وأفضل ممارسات SEO مدمجة من اليوم الأول.',
    svc_00_tech_h:'مجموعة التقنيات', svc_00_wyg_h:'ما ستحصل عليه',
    svc_00_w1:'متجاوب بالكامل ومتوافق مع جميع المتصفحات',
    svc_00_w2:'دعم ثنائي اللغة عربي/إنجليزي (RTL)',
    svc_00_w3:'امتثال معايير الوصولية WCAG 2.1',
    svc_00_w4:'اتفاقية خدمة بنسبة تشغيل 99.9%',
    svc_00_w5:'توثيق شامل عند التسليم',
    svc_00_w6:'دعم وصيانة ما بعد الإطلاق',
    svc_00_cta:'ناقش مشروعك',
    svc_01_ey:'مجال الممارسة الثاني', svc_01_h:'استشارات الذكاء الاصطناعي ونشر النماذج اللغوية',
    svc_01_p:'نُطلق نمواً جديداً من خلال النشر الاستراتيجي للنماذج اللغوية الكبيرة السيادية وخارطة طريق الذكاء الاصطناعي المؤسسي.',
    svc_01_f1_t:'نشر النماذج اللغوية السيادية', svc_01_f1_d:'نماذج ذكاء اصطناعي محلية أو على سحابة خاصة تُبقي بياناتك داخل حدود قطر.',
    svc_01_f2_t:'استراتيجية وخارطة طريق الذكاء الاصطناعي', svc_01_f2_d:'استراتيجيات شاملة لاعتماد الذكاء الاصطناعي متوافقة مع أهداف مؤسستك والمعايير الوطنية.',
    svc_01_f3_t:'أتمتة سير العمل', svc_01_f3_d:'أتمتة ذكية للعمليات المتكررة وعالية الحجم عبر العمليات الحكومية والمؤسسية.',
    svc_01_f4_t:'تكامل الذكاء الاصطناعي وواجهات API', svc_01_f4_d:'تضمين سلس لقدرات الذكاء الاصطناعي في أنظمتك وسير عملك الحاليين.',
    svc_01_tech_h:'التقنيات', svc_01_uc_h:'حالات الاستخدام الشائعة',
    svc_01_uc1:'معالجة المستندات وتصنيفها بشكل ذكي',
    svc_01_uc2:'مساعد ذكاء اصطناعي لخدمات المواطنين',
    svc_01_uc3:'مراقبة الامتثال التنظيمي الآلي',
    svc_01_uc4:'قاعدة معرفة داخلية وبحث دلالي',
    svc_01_uc5:'الصيانة التنبؤية للبنية التحتية الحيوية',
    svc_01_uc6:'معالجة اللغة الطبيعية للعربية وأنظمة ذكاء اصطناعي ثنائية اللغة',
    svc_01_cta:'ناقش احتياجاتك من الذكاء الاصطناعي',
    svc_02_ey:'مجال الممارسة الثالث', svc_02_h:'هندسة البرمجيات',
    svc_02_p:'نبني العمود الفقري الرقمي للقطاعين العام والخاص في قطر. من بوابات الحكومة الإلكترونية الآمنة إلى تطبيقات المؤسسات البالغة الأهمية، كل نظام مصمم للتوسع.',
    svc_02_f1_t:'بوابات الحكومة الإلكترونية', svc_02_f1_d:'خدمات رقمية آمنة وسهلة الوصول للمواطنين وفق معايير حكومية.',
    svc_02_f2_t:'تطوير تطبيقات المؤسسات', svc_02_f2_d:'أنظمة أعمال مخصصة وتكاملات ERP ومنصات تشغيلية مبنية للتوسع.',
    svc_02_f3_t:'تطوير API آمن', svc_02_f3_d:'واجهات API من نوع RESTful وGraphQL مع مصادقة وتفويض على مستوى المؤسسات.',
    svc_02_f4_t:'DevSecOps و CI/CD', svc_02_f4_d:'أمان مدمج في كل مرحلة من مراحل التطوير، من الكود إلى النشر.',
    svc_02_tech_h:'مجموعة التقنيات', svc_02_del_h:'منهج التسليم',
    svc_02_d1:'تسليم رشيق بدورات أسبوعين',
    svc_02_d2:'تصميم معماري يُقدِّم الأمن أولاً',
    svc_02_d3:'تسليم شامل للوثائق',
    svc_02_d4:'اختبار الأداء وتحسين الأحمال',
    svc_02_d5:'دعم واجهة المستخدم ثنائية اللغة (العربية/الإنجليزية)',
    svc_02_d6:'اتفاقية خدمة ما بعد الإطلاق والصيانة',
    svc_02_cta:'ناقش مشروعك',
    svc_03_ey:'مجال الممارسة الرابع', svc_03_h:'إدارة البنية التحتية التقنية',
    svc_03_p:'النمو يتطلب أساساً راسخاً. نُقدِّم إدارة شاملة لمراكز البيانات والبنية التحتية السحابية في قطر.',
    svc_03_f1_t:'إدارة مراكز البيانات', svc_03_f1_d:'إدارة شاملة لبيئات مراكز البيانات المحلية والمشتركة.',
    svc_03_f2_t:'البنية التحتية السحابية', svc_03_f2_d:'تصميم السحابة الخاصة والهجينة والسيادية ونشرها وإدارتها.',
    svc_03_f3_t:'الأمان والامتثال', svc_03_f3_d:'مراقبة أمنية مستمرة وإدارة الثغرات وتقارير الامتثال.',
    svc_03_f4_t:'التعافي من الكوارث', svc_03_f4_d:'تخطيط استمرارية الأعمال وإجراءات تعافٍ مُختبرة للأنظمة الحيوية.',
    svc_03_tech_h:'مجموعة البنية التحتية', svc_03_sla_h:'مستويات الخدمة',
    svc_03_s1:'مراقبة واستجابة للحوادث على مدار الساعة',
    svc_03_s2:'اتفاقيات خدمة محددة مع ضمان وقت التشغيل',
    svc_03_s3:'تقارير الامتثال والأمان الشهرية',
    svc_03_s4:'تخطيط الطاقة الاستيعابية واستشارات التوسع',
    svc_03_s5:'اختبار الاختراق المنتظم',
    svc_03_s6:'فريق دعم مخصص مقره قطر',
    svc_03_cta:'ناقش احتياجاتك من البنية التحتية',
    svc_process_h:'كيف', svc_process_h_em:'نتعامل.',
    svc_step1_h:'الاستكشاف', svc_step1_p:'نستثمر الوقت لفهم مؤسستك ومتطلباتها وقيودها بعمق قبل اقتراح أي حل.',
    svc_step2_h:'التصميم المعماري', svc_step2_p:'نصمم الحل المناسب — سيادي وآمن وقابل للتوسع — مع خارطة طريق تسليم واضحة.',
    svc_step3_h:'التسليم', svc_step3_p:'تنفيذ رشيق مع إحاطات منتظمة وتقارير تقدم شفافة وبلا مفاجآت.',
    svc_step4_h:'الشراكة', svc_step4_p:'نبقى مندمجين بعد الإطلاق — نراقب ونحسّن ونضمن أن أنظمتك تؤدي أفضل أداء ممكن.',

    ind_hq_ey:'مقرّنا الرئيسي', ind_hq_p:'بُني وتُدار من قلب قطر. معرفة محلية، معايير وطنية، تسليم مؤسسي.',
    ind_banner_ey:'القطاعات التي نخدمها', ind_banner_h:'القطاعات ', ind_banner_h_em:'التي نخدمها',
    ind_banner_p:'من وزارات الحكومة إلى المؤسسات المالية — نُقدِّم خبرتنا التقنية المؤسسية لأهم القطاعات في قطر.',
    ind_s1_ey:'خبرة القطاعات', ind_s1_h:'خبرة عميقة عبر القطاعات الرئيسية في قطر.',
    ind_1_ey:'الحكومة والقطاع العام', ind_1_h:'الحكومة والقطاع العام', ind_1_p:'منصات حكومة إلكترونية آمنة ونشر ذكاء اصطناعي سيادي وبرامج تحول رقمي لوزارات قطر وهيئاتها.',
    ind_2_ey:'الخدمات المالية', ind_2_h:'البنوك والخدمات المالية', ind_2_p:'تكاملات المصرفية الأساسية وأنظمة الامتثال التنظيمي والكشف عن المخاطر والاحتيال بالذكاء الاصطناعي.',
    ind_3_ey:'الطاقة والمرافق', ind_3_h:'الطاقة والمرافق', ind_3_p:'منصات إنترنت الأشياء الصناعية والصيانة التنبؤية وأمن التكنولوجيا التشغيلية لقطاع الطاقة في قطر.',
    ind_4_ey:'الرعاية الصحية', ind_4_h:'الرعاية الصحية وعلوم الحياة', ind_4_p:'السجلات الصحية الإلكترونية وأدوات الذكاء الاصطناعي السريرية ومنصات البيانات المتوافقة مع HIPAA/PDPA.',
    ind_5_ey:'التعليم', ind_5_h:'التعليم والبحث العلمي', ind_5_p:'منصات التعلم المدعومة بالذكاء الاصطناعي وبنية تحتية لبيانات البحث وحلول الحرم الجامعي الرقمي.',
    ind_6_ey:'العقارات والإنشاء', ind_6_h:'العقارات والإنشاء', ind_6_p:'منصات المباني الذكية وأنظمة إدارة العقارات والتوائم الرقمية المتكاملة مع BIM في قطر.',
    ind_cross_ey:'القدرات المشتركة', ind_cross_h:'قدرات تمتد عبر كل قطاع.',
    ind_x1_h:'سيادة البيانات', ind_x1_p:'جميع البيانات تبقى داخل حدود قطر. كل مشاركة مصممة حول متطلبات الإقامة المحلية.',
    ind_x2_h:'الذكاء الاصطناعي بالعربية أولاً', ind_x2_p:'فهم اللغة العربية الأصيل مدمج في كل منتج ذكاء اصطناعي — ليس مُضافاً لاحقاً.',
    ind_x3_h:'الامتثال التنظيمي', ind_x3_p:'معرفة عميقة بالمشهد التنظيمي القطري تضمن توافق حلولنا مع كل جهة مختصة.',
    ind_vq_ey:'رؤية قطر 2030', ind_vq_h:'متوافقون مع', ind_vq_h_em:'الأجندة الوطنية.',
    ind_no_sector_h:'لا ترى قطاعك؟', ind_no_sector_em:'تواصل معنا.',
    ind_vq_p:'كل حل تُقدِّمه FSV Tech يُسهم في تحقيق أحد محاور رؤية قطر الوطنية 2030.',
    ind_p1_lbl:'المحور الأول',   ind_p1_h:'التنمية البشرية',    ind_p1_p:'منصات تعليمية بالذكاء الاصطناعي لبناء الكوادر الرقمية.',
    ind_p2_lbl:'المحور الثاني',  ind_p2_h:'التنمية الاجتماعية', ind_p2_p:'خدمات حكومية رقمية تضمن وصولاً شاملاً.',
    ind_p3_lbl:'المحور الثالث',  ind_p3_h:'التنمية الاقتصادية', ind_p3_p:'تقنيات مؤسسية تُنوِّع الاقتصاد القطري خارج الهيدروكربونات.',
    ind_p4_lbl:'المحور الرابع',  ind_p4_h:'التنمية البيئية',    ind_p4_p:'إدارة بنية تحتية ذكية تدعم أهداف الاستدامة.',

    con_banner_ey:'ابدأ محادثة', con_banner_h:'تواصل مع ',
    con_banner_p:'سواء كنت مستعداً لبدء مشروع أو تريد استكشاف الممكن — نحن هنا للاستماع.',
    con_ey:'تواصل معنا', con_h:'لنبنِ معاً.',
    con_p:'تتعاون FSV Tech مع الجهات الحكومية والمؤسسات والشركاء في قطر. كل تعاون يبدأ بمحادثة.',
    con_loc_l:'الموقع',      con_loc_v:'الدوحة، قطر',
    con_mail_l:'البريد',     con_mail_v:'info@fsv-tech.com',
    con_web_l:'الموقع الإلكتروني', con_web_v:'fsv-tech.com',
    con_hours_l:'ساعات العمل', con_hours_v:'الأحد – الخميس، ٨ص – ٥م (GMT+3)',
    con_notice:'<strong>وقت الاستجابة:</strong> نسعى للردّ على جميع الاستفسارات خلال يوم عمل واحد.',
    con_form_h:'أرسل لنا رسالة', con_form_p:'نسعى للرد خلال يوم عمل واحد.',
    con_f_name:'الاسم الكامل', con_f_org:'المؤسسة', con_f_email:'البريد الإلكتروني',
    con_f_phone:'الهاتف (اختياري)', con_f_service:'مجال الاهتمام',
    con_f_s_opts:['تطوير الويب','استشارات الذكاء الاصطناعي ونشر النماذج اللغوية','هندسة البرمجيات','إدارة البنية التحتية التقنية','استفسار عام','فرصة شراكة'],
    con_f_msg:'الرسالة', con_f_submit:'إرسال الرسالة', con_f_sent:'تم الإرسال ✓',
    con_o1_lbl:'المقر الرئيسي',  con_o1_h:'الدوحة، قطر',
    con_o1_p:'مكتبنا الرئيسي وتعاملات العملاء وعمليات التسليم تتمركز في الدوحة.',
    con_o2_lbl:'ساعات العمل',    con_o2_h:'الأحد – الخميس، ٨ص – ٥م',
    con_o2_p:'بتوقيت قطر المحلي (GMT+3). الدعم الطارئ متاح خارج أوقات العمل.',
    con_o3_lbl:'نطاق التعاملات', con_o3_h:'الحكومة والمؤسسات',
    con_o3_p:'نعمل بصفة رئيسية مع الوزارات الحكومية والهيئات العامة وكبرى المؤسسات الخاصة في قطر.',

    footer_tagline:'استشارات ذكاء اصطناعي مؤسسي وحلول تقنية سيادية للقطاعين العام والخاص في قطر.',
    footer_col1_h:'الشركة', footer_col2_h:'الخدمات', footer_col3_h:'تواصل',
    footer_copy:'© 2026 FSV Tech للاستشارات والخدمات.',
    footer_location:'الدوحة، قطر',
    footer_msg:'أرسل رسالة',

    pp_nav_products:'المنتجات', pp_nav_item:'بوابة الشركاء FSV',
    pp_badge:'المنتج · بوابة الشركاء FSV',
    pp_h1a:'البوابة المهنية', pp_h1b:'لشركائك', pp_h1em:'الاحترافية.',
    pp_sub:'مركز قيادة متكامل بالكامل بهويتك التجارية — يوحّد تسليم المشاريع ومعلومات الإيرادات والكوادر والمستندات في منصة سيادية واحدة.',
    pp_cta1:'طلب عرض تجريبي', pp_cta2:'احصل على عرض سعر',
    pp_stat1_l:'وحدات أساسية', pp_stat2_l:'هوية تجارية كاملة', pp_stat3_l:'العملة المحلية',
    pp_feat_ey:'ما بداخلها',
    pp_feat_h:'كل وحدة تحتاجها عملياتك المؤسسية.',
    pp_feat_p:'ست وحدات متكاملة بالكامل — مصمَّمة للجهات الحكومية والمؤسسات وشركات الخدمات المهنية العاملة في قطر.',
    pp_f1_h:'لوحة نبضات القيادة', pp_f1_p:'سرعة رأس المال الفعلية والمسارات النشطة وضغط الأعباء وأولويات الإجراءات الفورية — تظهر فور تسجيل الدخول.',
    pp_f2_h:'محفظة المشاريع',   pp_f2_p:'إدارة دورة الحياة الكاملة — نشط وفي المسار ومكتمل وفي الانتظار — مع تتبع الميزانية بالريال القطري.',
    pp_f3_h:'سير العمل وبنود المهام', pp_f3_p:'إدارة قائمة الأعمال المتراكمة والسبرنت عبر جميع المشاريع. تعيين الأولويات وتتبع التسليمات بأي مستوى تفصيل.',
    pp_f4_h:'الإيرادات والدفتر العام', pp_f4_p:'وحدة مالية متكاملة: تصنيف OPEX وCAPEX وTAX؛ التنقل بين الفترات المالية؛ سرعة التدفق الداخل/الخارج؛ كشوف حسابات قابلة للتصدير.',
    pp_f5_h:'مركز القوى العاملة والموارد البشرية', pp_f5_p:'إدارة الفرق عبر الهندسة والعمليات والتنفيذ والموارد البشرية بصلاحيات مخصصة وسجلات أفراد ومقاييس صحة المؤسسة.',
    pp_f6_h:'مستودع المستندات الآمن', pp_f6_p:'مستودع مركزي للعقود القانونية والبيانات المالية وأصول المشاريع — مصنَّف وقابل للبحث ومراجَع بالكامل.',
    pp_s1_ey:'الوحدة 01 — نظرة عامة', pp_s1_h1:'مركز قيادتك.', pp_s1_hem:'مباشر.',
    pp_s1_p:'فور تسجيل الدخول، تُبرز نبضات القيادة أهم أولوياتك. بنود الإجراءات ومؤشرات KPI المالية وصحة المسار في المقدمة — دون الحاجة للبحث.',
    pp_s1_b1:'أولويات الإجراءات الفورية مُصنَّفة تلقائياً',
    pp_s1_b2:'سرعة رأس المال الصافي وعدد المسارات وضغط الأعباء بلمحة',
    pp_s1_b3:'دفق سير العمل والتنبيهات الحرجة بنقرتين',
    pp_s1_b4:'لوحة مقاييس KPI لتحليل الاتجاهات عبر الفترات',
    pp_s1_lbl:'نظرة عامة · نبضات القيادة',
    pp_s2_ey:'الوحدة 02 — المحفظة', pp_s2_h1:'حوكمة مشاريع', pp_s2_hem:'شاملة.',
    pp_s2_p:'كل مشاركة نشطة وفرصة في المسار وتسليم مكتمل — مرئية في مكان واحد. أرقام الميزانيات وشارات الحالة وتتبع المعالم لثقة تسليم كاملة.',
    pp_s2_b1:'حالات المشروع: نشط وفي المسار ومكتمل وفي الانتظار',
    pp_s2_b2:'تتبع ميزانية مخصص لكل مشروع بالريال القطري',
    pp_s2_b3:'استعراض تفصيلي بنقرة واحدة لكل مشروع',
    pp_s2_b4:'عرض التحليل للأداء عبر جميع الحسابات',
    pp_s2_lbl:'المحفظة · جميع المشاريع',
    pp_s3_ey:'الوحدة 03 — الإيرادات', pp_s3_h1:'دفتر حسابات', pp_s3_hem:'متكامل.',
    pp_s3_p:'طبقة ذكاء مالي متكاملة — ليست مجرد سجلات معاملات. إجمالي المقبوضات والنفقات والسيولة الحالية وهامش الربح في الأعلى.',
    pp_s3_b1:'ريال قطري أصيل مع التنقل بين الفترات المالية',
    pp_s3_b2:'شريط سرعة التدفق المالي: الدائن مقابل المدين بلمحة',
    pp_s3_b3:'تفصيل تصنيف TAX وOPEX وCOGS وCAPEX',
    pp_s3_b4:'تصدير الكشف لأغراض إعداد التقارير والامتثال',
    pp_s3_lbl:'الإيرادات · الدفتر الرئيسي',
    pp_s4_ey:'الوحدة 04 — بنود المهام', pp_s4_h1:'إدارة سير عمل', pp_s4_hem:'بجودة تسليم.',
    pp_s4_p:'تتبع كل مهمة عبر كل مشروع في قائمة أعمال رئيسية واحدة. انقل البنود من "للتنفيذ" عبر "قيد التنفيذ" و"تحت المراجعة" وصولاً إلى "مكتمل".',
    pp_s4_b1:'قائمة الأعمال الرئيسية عبر جميع المشاريع النشطة معاً',
    pp_s4_b2:'عروض مصفّاة لكل مشروع لفرق التسليم',
    pp_s4_b3:'المخطط الأسبوعي للجدولة بأسلوب السبرنت',
    pp_s4_b4:'بادئات المُسنَد إليه وتواريخ الاستحقاق والحالة على كل بند',
    pp_s4_lbl:'بنود المهام · قائمة الأعمال الرئيسية',
    pp_s5_ey:'الوحدة 05 — القوى العاملة', pp_s5_h1:'موظفوك.', pp_s5_hem:'منظَّمون.',
    pp_s5_p:'دليل منظَّم وواضح لمؤسستك بالكامل. صفِّ حسب القسم وشاهد المسميات الوظيفية بلمحة واتخذ إجراءات مباشرة — كل ذلك داخل نفس الواجهة التي يستخدمها فريقك يومياً.',
    pp_s5_b1:'تقسيم الأقسام: تنفيذي، هندسة، عمليات، موارد بشرية',
    pp_s5_b2:'المسمى الوظيفي والقسم لكل فرد',
    pp_s5_b3:'إضافة وتعديل ومراسلة أعضاء الفريق مباشرةً',
    pp_s5_b4:'مقاييس صحة المؤسسة على مستوى القسم',
    pp_s5_lbl:'القوى العاملة · جميع الأفراد',
    pp_s6_ey:'الوحدة 06 — المستندات', pp_s6_h1:'كل ملف.', pp_s6_hem:'مؤمَّن وقابل للإيجاد.',
    pp_s6_p:'مستودع مركزي بتصنيف منظَّم — قانوني، مالي، أصول المشاريع، داخلي. لا مزيد من البحث عبر المحركات والبريد الإلكتروني. كل مستند مُوسَم وقابل للبحث ومدرَج في سجل المراجعة.',
    pp_s6_b1:'التصنيف القائم على الفئات: قانوني، مالي، مشاريع، داخلي',
    pp_s6_b2:'نسب الرفع وحجم الملف على كل مستند',
    pp_s6_b3:'البحث النصي الكامل عبر المستودع بأكمله',
    pp_s6_b4:'ضوابط التنزيل والأرشفة مع تتبع الوصول',
    pp_s6_lbl:'المستندات · جميع الملفات',
    pp_s7_ey:'محرك الهوية التجارية الخاصة', pp_s7_h1:'علامتك التجارية.', pp_s7_hem:'ليست علامتنا.',
    pp_s7_p:'استبدل كل عنصر هوية بصرية — الشعار واللون الأساسي ولون التمييز — وانشر التغيير فوراً على البوابة بالكامل. كل عميل يحصل على تجربة أصيلة حقاً.',
    pp_s7_b1:'استبدال الشعار مع التحكم في عرض العرض ووضع التصيير',
    pp_s7_b2:'تهيئة لون التركيز الأساسي ولون التمييز الثانوي',
    pp_s7_b3:'لوحات الإعدادات: البنية التحتية والأمان وتدقيق النظام',
    pp_s7_b4:'مزامنة النشر: تنتشر الإعدادات لجميع الجلسات النشطة فوراً',
    pp_s7_lbl:'الإعدادات · الهوية والأصول',
    pp_gallery_ey:'جولة المنصة الكاملة', pp_gallery_h:'كل شاشة. منصة واحدة.', pp_gallery_p:'مرِّر الماوس للإيقاف المؤقت. كل وحدة معروضة كما يُسلَّم.',
    pp_cta_h1:'هل أنت مستعد لمنح شركائك', pp_cta_hem:'بوابة احترافية؟',
    pp_cta_p:'تواصل معنا للحصول على عرض تجريبي مخصص وعرض سعر مُعدّ لمؤسستك.',
    pp_cta_btn2:'راسلنا مباشرةً',
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

  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page || (page === '' && a.getAttribute('href') === 'index.html'))
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
