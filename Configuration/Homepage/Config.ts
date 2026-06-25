import { Home, CheckCircle, FileText, HelpCircle, LogIn, UserPlus, Shield, Zap, Lock, Star, CreditCard } from 'lucide-react';

export const NavbarConfig = {
  logo: {
    text: 'EuropeCV',
  },
  links: [
    { label: 'Home', href: '/', icon: Home },
    { label: 'ATS Checker', href: '/ats-checker', icon: CheckCircle },
    { label: 'Resume AI', href: '/resume-ai', icon: FileText },
    { label: 'FAQ', href: '/faq', icon: HelpCircle },
  ],
  auth: {
    signIn: { label: 'Sign in', href: '/sign-in', icon: LogIn },
    joinNow: { label: 'JOIN NOW', href: '/join-now', icon: UserPlus }, // icon won't be used in UI per requirements
  },
  mobileMenuAriaLabel: 'Open main menu'
};

export const HeroConfig = {
  title: {
    prefix: "Turn Rejections into More Interviews with",
    highlight: "AI Resume Fixes",
  },
  subtitle: "Upload your resume and instantly compare it with any job description to find missing keywords, skills, and ATS issues affecting your interview chances",
  cta: {
    label: "Fix My Resume & Get Interviews",
    href: "/get-started",
  },
  badges: [
    { label: "Free Trial", icon: Star, color: "text-amber-400" },
    { label: "No Credit Card", icon: CreditCard, color: "text-blue-500" },
    { label: "Private & Secure", icon: Lock, color: "text-green-500" },
  ],
  mockup: {
    name: "Jamie Parker",
    score: "9.0",
    scoreLabel: "EXCELLENT",
    jobDescription: {
      title: "Full Stack Engineer",
      company: "TechNova AI",
      requirements: [
        "5+ years of experience with Node.js and TypeScript.",
        "Experience building scalable AI and multimedia systems.",
        "Proficient in Kubernetes, CI/CD, and stream processing.",
      ]
    },
    aiInsights: {
      title: "AI Analysis Complete",
      items: [
        { text: "Added 'TypeScript' to match JD requirements.", status: "added" },
        { text: "Rephrased summary for 'Multimedia Systems'.", status: "improved" }
      ]
    },
    sections: [
      {
        title: "PROFESSIONAL SUMMARY",
        content: "Senior Software Engineer with over five years of experience specializing in backend development and distributed systems. Successfully led the development of HA messaging system with 10,000/s throughput. Eager to utilize expertise in handling large-scale applications at AI startups.",
        highlights: ["Senior Software Engineer with over five years of experience specializing in backend development and distributed systems. Successfully led the development of HA messaging system with 10,000/s throughput. Eager to utilize expertise in handling large-scale applications at AI startups."]
      },
      {
        title: "SKILL",
        content: "Java , Python , Go , Apache Kafka , RabbitMQ , Kubernetes , CI/CD with Jenkins,\nPrometheus , Node.js , Typescript , Multimedia System , HLS",
        highlights: ["Typescript", "Multimedia System", "HLS"]
      },
      {
        title: "EXPERIENCE",
        subtitle: "Distributed System Engineer, XYZ Comp",
        date: "January 2020 - Present",
        content: "• Designed and implemented microservices architecture using Java and Kubernetes, which improved system scalability and facilitated the seamless integration of video streaming services",
        highlights: ["video streaming services"]
      }
    ],
    floatingBadges: [
      "Summary Enhanced",
      "Relevant Skills Highlighted",
      "Recent Work Experience Enhanced"
    ]
  }
};

export const StatsBannerConfig = {
  stats: [
    { value: '9.1/10', label: 'Quality Improvement Rating' },
    { value: '5 Hrs', label: '# of Editing Hours saved per job' },
    { value: '10 Million', label: '# of jobs our AI is trained on' },
  ],
  logos: {
    title: 'Join thousands getting hired at top European companies',
    names: ['Spotify', 'airbnb', 'Booking.com', 'Revolut', 'Zalando']
  }
};

export const TemplatesSectionConfig = {
  header: {
    title: 'Resumes That Got Candidates Hired',
    subtitle: 'Turn your CV into a recruiter-approved template',
    cta: 'Analyse my resume now',
  },
  europass: {
    label: 'europass',
    status: 'COMPATIBLE'
  },
  templates: [
    {
      id: 'dach',
      region: 'DACH Region',
      flags: ['de', 'at', 'ch'],
      companiesPrefix: 'Fits companies like',
      companies: [
        { name: 'SAP', display: 'SAP', size: '11px' },
        { name: 'Siemens', display: 'Siemens', size: '10px' },
        { name: 'BMW', display: 'BMW', size: '11px' }
      ],
      topPickText: 'Top Pick for',
      selectText: 'Select Template'
    },
    {
      id: 'nordic',
      region: 'Nordic Region',
      flags: ['dk', 'se', 'no'],
      companiesPrefix: 'Fits companies like',
      companies: [
        { name: 'Spotify', display: 'Spotify', size: '11px' },
        { name: 'Volvo', display: 'Volvo', size: '11px' },
        { name: 'Klarna', display: 'Klarna', size: '11px' }
      ],
      topPickText: 'Top Pick for',
      selectText: 'Select Template'
    },
    {
      id: 'western',
      region: 'Western Europe',
      flags: ['fr', 'gb', 'es'],
      companiesPrefix: 'Fits companies like',
      companies: [
        { name: 'Airbus', display: 'Airbus', size: '11px' },
        { name: 'TotalEnergies', display: 'Total\nEnergie', size: '10px' },
        { name: 'PwC', display: 'PwC', size: '12px' }
      ],
      topPickText: 'Top Pick for',
      selectText: 'Select Template'
    }
  ]
};

export const FeaturesConfig = {
  header: {
    title: 'Fix your resume in < 1 min'
  },
  features: [
    {
      title: 'Get a fast ATS resume check',
      description: 'Instantly see how well your resume matches any job description and understand exactly what to fix to get more interviews',
      cta: 'Analyze My Resume Now',
      demoText: 'Demo Placeholder'
    },
    {
      title: 'Personalized Resume Improvements for Each Job',
      description: 'Identify missing keywords, skills, and experience for every job application so you can better match job requirements',
      cta: 'Analyze My Resume Now',
      demoText: 'Demo Placeholder'
    },
    {
      title: 'Instant AI Job Matching From Your Resume',
      description: 'Instantly connect your resume with jobs that fit your profile best and get matched with roles suited to your experience',
      cta: 'Analyze My Resume Now',
      demoText: 'Demo Placeholder'
    }
  ]
};

export const TestimonialsConfig = {
  header: {
    stat: '',
    titleText1: "★★★★★ Get Hired",
    titleText2: "",
    sectionTitle: "From Rejection to Interviews"
  },
  userTestimonials: [
    {
      name: 'Joshua C.',
      role: 'Senior Product Manager',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
      text: 'EuropeCV helped me double my interview callbacks in just two weeks of applying in Germany.'
    },
    {
      name: 'Brandi G.',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
      text: 'The resume feedback is instantly actionable. Missing keywords were perfectly matched with the JD.'
    },
    {
      name: 'Gabriella B.',
      role: 'LinkedIn Strategist',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces',
      text: 'I recommend my clients use this tool to optimize formatting and compatibility for European ATS standards.'
    },
    {
      name: 'Fred H.',
      role: 'Senior Software Engineer',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces',
      text: 'EuropeCV helped me pinpoint missing cloud architecture terms that recruiters were filtering on.'
    },
    {
      name: 'Tracy C.',
      role: 'Sr. Digital Marketing Manager',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces',
      text: 'Incredibly easy to use. Replaced guessing work with direct keyword gaps analysis.'
    },
    {
      name: 'Tyler S.',
      role: 'Instructor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
      text: 'Excellent layout scoring feedback. A must-have tool for any expat applying to companies in the Netherlands.'
    },
    {
      name: 'Maria L.',
      role: 'HR Business Partner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
      text: 'As an HR professional, this matches exactly what our candidate screening algorithms look for.'
    },
    {
      name: 'Thomas D.',
      role: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces',
      text: 'Provides a highly accurate representation of a candidate\'s alignment to technical specs.'
    },
    {
      name: 'Elena P.',
      role: 'Lead Technical Recruiter',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces',
      text: 'This simplifies screen processes. Resumes checked by EuropeCV stand out clearly.'
    },
    {
      name: 'Kevin J.',
      role: 'Talent Acquisition Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces',
      text: 'Saves time for both hiring managers and applicants. Highly efficient engineering.'
    }
  ],
  hrTestimonials: [
    {
      name: 'Alex XU',
      role: 'Senior Recruiter at SAP Europe',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=faces',
      text: 'Standardized layouts matching DACH/Western guidelines make CVs 10x easier to read.'
    },
    {
      name: 'Sarah M.',
      role: 'Talent Acquisition Lead at Spotify Stockholm',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
      text: 'The precision of keyword checks is outstanding. Candidates matching the scores are highly suited.'
    },
    {
      name: 'Michael K.',
      role: 'Head of Recruitment at ASML Netherlands',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces',
      text: 'Reduces filtering fatigue on high-volume engineering roles. EuropeCV matches requirements precisely.'
    }
  ]
};

export const HowItWorksConfig = {
  header: "Invest in Your Career\nin 4 Steps",
  steps: [
    {
      number: 1,
      text: "Upload your existing resume"
    },
    {
      number: 2,
      text: "Get an instant analysis"
    },
    {
      number: 3,
      text: "Get a brand new AI refined professional resume"
    },
    {
      number: 4,
      text: "Download your resume!"
    }
  ],
  ctaLabel: "Invest in your career now"
};

export const FAQConfig = {
  header: {
    title: "Frequently\nAsked Questions",
    description: "Learn how EuropeCV can help you bypass ATS filters, optimize your job application relevance, and secure interview calls easily."
  },
  videoPlaceholder: {
    filename: "VIDEO_TUTORIAL_01.MP4",
    duration: "1:25",
    resolution: "1080P",
    promoText: "See how EuropeCV works in 1 minute",
    matchScore: "94%"
  },
  faqList: [
    {
      question: "What is EuropeCV resume analysis?",
      answer: "EuropeCV is an AI ATS resume checker that analyzes your CV against any job description. It helps you improve your resume by identifying missing keywords, skills, and ATS optimization issues to increase your interview chances in Europe."
    },
    {
      question: "How does ATS resume checking work?",
      answer: "Our AI resume scanner compares your CV with a job description and provides a detailed match report. It highlights missing keywords, weak sections, and suggests improvements to make your resume more ATS-friendly."
    },
    {
      question: "Can EuropeCV help me pass Applicant Tracking Systems (ATS)?",
      answer: "Yes. EuropeCV is built to improve your ATS resume score by optimizing formatting, keyword matching, and job-specific relevance so your CV performs better in recruiter screening systems."
    },
    {
      question: "How do I optimize my resume for a job description?",
      answer: "Simply upload your resume and paste the job description. EuropeCV instantly shows you what to change, including missing skills, keyword gaps, and experience improvements tailored to that specific job."
    },
    {
      question: "Is EuropeCV suitable for job applications in Europe?",
      answer: "Yes. EuropeCV is optimized for the European job market, including countries like Germany, France, Netherlands, Spain, Portugal, and the UK across industries such as IT, finance, healthcare, and engineering."
    },
    {
      question: "Does EuropeCV improve my chances of getting interviews?",
      answer: "Yes. By improving your resume-job match score, adding missing keywords, and fixing ATS issues, EuropeCV helps increase your chances of getting noticed by recruiters."
    },
    {
      question: "How fast is the resume analysis?",
      answer: "The AI resume analysis is instant. You receive your full ATS report, keyword match, and improvement suggestions in seconds."
    },
    {
      question: "Is my resume data secure?",
      answer: "Yes. Your CV is processed securely and privately. We do not share or sell your data to third parties."
    },
    {
      question: "Can I analyze multiple job descriptions?",
      answer: "Yes. You can test your resume against unlimited job descriptions to optimize it for different roles and increase your chances of success."
    }
  ]
};

export const CTACardConfig = {
  title: {
    prefix: "Join our",
    count: "early",
    suffix: "users"
  },
  subtitle: "Start now and get hired faster.",
  cta: {
    label: "Analyse my resume",
    href: "/get-started"
  },
  images: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=faces"
  ],
  badges: {
    lovedBy: { label: "Loved by", value: "Users!" },
    status: { label: "Status", value: "Hired!" },
    joined: { label: "Joined", value: "recently" }
  }
};

export const FooterConfig = {
  copyright: 'Copyright 2026 - EuropeCV',
  brand: 'EuropeCV',
  badges: {
    madeIn: { label1: 'MADE IN', label2: 'EU' },
    trustpilot: { label: 'Trustpilot', score: 'TrustScore 4.8', reviews: '347 reviews' },
    secure: { label1: 'SECURE', label2: 'SSL ENCRYPTION' }
  },
  links: [
    {
      title: 'Features',
      items: [
        { label: 'ATS Checker', href: '#' },
        { label: 'AI Resume', href: '#' },
        { label: 'AI Cover Letter', href: '#' }
      ]
    },
    {
      title: 'Blog',
      items: [
        { label: 'Career Advice', href: '#' },
        { label: 'Resume Tips', href: '#' },
        { label: 'Interview Prep', href: '#' },
        { label: 'Job Search', href: '#' },
        { label: 'Success Stories', href: '#' }
      ]
    },
    {
      title: 'Information',
      items: [
        { label: 'About us', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Impressum', href: '#' }
      ]
    }
  ]
};

export const HeroDashboardConfigTexts = [
  {
    job: {
      title: "Software Engineer",
      company: "Microsoft",
      location: "Espoo, Uusimaa, Finland",
      salary: "€92,000 /year",
      desc: "Architect and scale secure backend solutions for Azure distributed services systems across European enterprise networks...",
      responsibilities: ["Distributed system design", "API service scalability", "Cloud architecture optimization"]
    },
    resume: {
      name: "Jamie Parker",
      date: "June 2024 - Present",
      titleBefore: "Creative Graphic Assistant",
      titleAfter: "Cloud Infrastructure Specialist",
      summaryBefore: "Creative Graphic Assistant and entry-level blogger with experience crafting digital marketing banners and styling single-page templates. Highly motivated to transition into social media coordination roles or content creation at micro-agencies.",
      summaryAfter: "Enterprise-focused Systems Engineer specializing in distributed cloud infrastructure architectures. Proven track record designing scalable microservices arrays, streamlining deployment orchestration matrices, and optimizing cloud compute costs across enterprise-grade topologies.",
      skillsBefore: "Figma , Adobe Photoshop , WordPress Layouts , SEO Copywriting , HTML5 , CSS3, Microsoft Word",
      skillsAfter: "Azure, Distributed Architecture, Kubernetes, Docker, Go, Python, Terraform, CI/CD pipelines",
      companyBefore: "Frontend UI Design Intern, PixelPerfect Media",
      companyAfter: "Systems Engineering Intern, Enterprise Core Cloud",
      exp1Before: "Maintained the company's internal landing page and modified local CSS banner positions",
      exp1After: "Engineered high-availability messaging relays and architected cloud-native automated disaster recovery backups",
      exp2Before: "Designed customized vectors, corporate slide presentations, and promotional flyers",
      exp2After: "Orchestrated continuous deployment integration infrastructure pipelines reducing cycle latency times by 32%",
      scoreBefore: "4.0",
      scoreAfter: "9.0",
      scoreOffsetBefore: 94,
      scoreOffsetAfter: 16,
      scoreRotBefore: "rotate(72deg)",
      scoreRotAfter: "rotate(162deg)"
    }
  },
  {
    job: {
      title: "Renewable Energy Engineer",
      company: "Statkraft",
      location: "Oslo, Norway",
      salary: "€85,000 /year",
      desc: "Design and optimize wind and hydro energy systems, ensuring sustainable integration into the existing Nordic power grid and analyzing performance data.",
      responsibilities: ["Grid integration analysis", "Turbines optimization", "Feasibility studies"]
    },
    resume: {
      name: "Lars Nielsen",
      date: "Jan 2023 - Present",
      titleBefore: "Mechanical Engineer",
      titleAfter: "Renewable Energy Engineer",
      summaryBefore: "Mechanical engineer with experience in HVAC and general manufacturing. Looking for a green job where I can practice my CAD skills on interesting new eco-friendly projects.",
      summaryAfter: "Energy Systems Engineer specializing in wind turbine optimization and grid-scale hydro integration. Proven track record in feasibility studies and renewable infrastructure deployment across challenging Nordic terrains.",
      skillsBefore: "AutoCAD, Teamwork, Excel, General Mfg, Communication",
      skillsAfter: "AutoCAD, Grid Integration, Wind/Hydro Systems, Python Data Analysis",
      companyBefore: "Junior Engineer, Local Heating Co.",
      companyAfter: "Sustainable Systems Engineer, Nordic HQ",
      exp1Before: "Maintained local heating systems and did some CAD drafting for new installations",
      exp1After: "Optimized energy recovery systems reducing carbon output by 15% across major installations",
      exp2Before: "Supported the senior engineer with daily reports using Excel sheets",
      exp2After: "Performed technical and financial feasibility studies on micro-hydro installations",
      scoreBefore: "6.0",
      scoreAfter: "9.5",
      scoreOffsetBefore: 63,
      scoreOffsetAfter: 8,
      scoreRotBefore: "rotate(108deg)",
      scoreRotAfter: "rotate(170deg)"
    }
  },
  {
    job: {
      title: "Registered Nurse",
      company: "National Health Service",
      location: "London, UK",
      salary: "£35,000 /year",
      desc: "Provide high-quality patient care in a fast-paced acute hospital setting. Maintain accurate patient records and coordinate with multidisciplinary care teams.",
      responsibilities: ["Patient assessment", "Medication administration", "Care plan coordination"]
    },
    resume: {
      name: "Sarah Jenkins",
      date: "May 2021 - Present",
      titleBefore: "Clinic Assistant",
      titleAfter: "Registered Nurse (Adult)",
      summaryBefore: "Compassionate healthcare worker who has helped in local walk-in clinics. Good with people and organizing files. Seeking a larger hospital role to help more patients.",
      summaryAfter: "NMC Registered Nurse with extensive experience in acute clinical settings. Adept at rapid patient assessment, complex care plan coordination, and safe medication administration protocols.",
      skillsBefore: "First Aid, Empathy, Filing, Taking Temperatures",
      skillsAfter: "Patient Assessment, IV Administration, Care Planning, EHR Navigation",
      companyBefore: "Health Assistant, City Walk-in Clinic",
      companyAfter: "Clinical Nurse, St. Thomas Hospital Trust",
      exp1Before: "Helped nurses with daily tasks and kept patient records organized",
      exp1After: "Led patient assessment protocols and coordinated complex multidisciplinary care plans",
      exp2Before: "Supported the front desk when busy, measured patient vitals",
      exp2After: "Administered critical medications safely across a dynamic 30-bed acute ward",
      scoreBefore: "5.0",
      scoreAfter: "9.7",
      scoreOffsetBefore: 78,
      scoreOffsetAfter: 5,
      scoreRotBefore: "rotate(90deg)",
      scoreRotAfter: "rotate(174deg)"
    }
  },
  {
    job: {
      title: "Product Manager",
      company: "Zalando",
      location: "Berlin, Germany",
      salary: "€95,000 /year",
      desc: "Lead the vision and execution of our next-gen fashion e-commerce discovery platform. Work with agile teams to drive user engagement and conversion metrics.",
      responsibilities: ["A/B testing coordination", "Roadmap planning", "Cross-functional leadership"]
    },
    resume: {
      name: "Mia Fischer",
      date: "Feb 2022 - Present",
      titleBefore: "Project Coordinator",
      titleAfter: "Senior Product Manager",
      summaryBefore: "Organized projects and made sure teams finished on time. Liked working in e-commerce and talking to developers to fix site problems.",
      summaryAfter: "Data-driven Product Manager with a track record of scaling e-commerce discovery platforms. Expert in A/B testing, strategic roadmap planning, and leading cross-functional agile teams.",
      skillsBefore: "Scrum, Trello, Communication, Fashion, Meetings",
      skillsAfter: "Product Strategy, A/B Testing, Cross-Functional Leadership, Agile/Scrum",
      companyBefore: "Project Manager, Fashion Store",
      companyAfter: "E-commerce Product Manager, StyleHub",
      exp1Before: "Managed website updates and talked to developers regularly",
      exp1After: "Directed the launch of a new discovery engine, utilizing A/B testing to increase conversion rates by 12%",
      exp2Before: "Tracked bugs and created tickets for the marketing team",
      exp2After: "Spearheaded strategic roadmap planning aligning marketing and engineering OKRs",
      scoreBefore: "7.0",
      scoreAfter: "9.1",
      scoreOffsetBefore: 47,
      scoreOffsetAfter: 14,
      scoreRotBefore: "rotate(126deg)",
      scoreRotAfter: "rotate(164deg)"
    }
  },
  {
    job: {
      title: "HGV Class 1 Driver",
      company: "Amazon",
      location: "Paris, France",
      salary: "€45,000 /year",
      desc: "Ensure timely and safe transportation of freight between fulfillment centers. Adhere to all safety guidelines and driving hours regulations across the EU.",
      responsibilities: ["Route optimization", "Vehicle safety checks", "Freight schedule adherence"]
    },
    resume: {
      name: "Pierre Dubois",
      date: "Oct 2018 - Present",
      titleBefore: "Delivery Driver",
      titleAfter: "HGV Class 1 Logistics Driver",
      summaryBefore: "Experienced driving vans and making local deliveries safely. Good driving record and always deliver packages when I am supposed to.",
      summaryAfter: "Certified HGV Class 1 Driver with a flawless safety record in long-haul freight distribution. Highly proficient in route optimization, rigorous pre-trip diagnostics, and maintaining tight logistical schedules.",
      skillsBefore: "Driving, Map Reading, Customer Service, Punctual",
      skillsAfter: "HGV Class 1 Certified, Route Optimization, Freight Safety Diagnostics, EU Driving Regulations",
      companyBefore: "Courier, QuickShip Local",
      companyAfter: "Heavy Freight Operator, TransLogistics EU",
      exp1Before: "Delivered packages on time and checked my van every morning",
      exp1After: "Executed inter-city freight transportation strictly adhering to schedule and optimizing critical routes",
      exp2Before: "Took care of paperwork when deliveries were made",
      exp2After: "Performed uncompromising vehicle safety diagnostics to maintain EU code compliance",
      scoreBefore: "4.5",
      scoreAfter: "8.7",
      scoreOffsetBefore: 86,
      scoreOffsetAfter: 20,
      scoreRotBefore: "rotate(81deg)",
      scoreRotAfter: "rotate(156deg)"
    }
  }
];

export const HeroDashboardHeaders = {
  summary: "Professional Summary",
  skills: "Skills",
  experience: "Experience"
};
