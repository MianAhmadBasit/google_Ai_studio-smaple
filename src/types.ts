export interface PracticeArea {
  id: string;
  title: string;
  urduTitle: string;
  description: string;
  extendedDescription: string;
  icon: string;
  category: 'Criminal' | 'Family' | 'Property & Civil' | 'Corporate & Tax' | 'Specialized';
  keywords: string[];
}

export interface Lawyer {
  id: string;
  name: string;
  role: string;
  experience: string;
  education: string;
  image: string;
  specialties: string[];
  bio: string;
  location: string;
}

export interface CaseResult {
  id: string;
  title: string;
  category: string;
  court: string;
  outcome: string;
  description: string;
  year: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CityLandingData {
  slug: string;
  cityName: string;
  title: string;
  description: string;
  courtFocus: string[];
  localOffice: string;
  phone: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'criminal-defense',
    title: 'Criminal Defense & Bail Matters',
    urduTitle: 'فوجداری مقدمات اور ضمانت',
    description: 'Expert representation for FIR quashment, post-arrest/pre-arrest bail, and defense in trials under PPC.',
    extendedDescription: 'Our elite defense team handles complex trials under the Pakistan Penal Code (PPC). We specialize in securing pre-arrest (Qabal-az-Waqt) and post-arrest bail (Bail-baad-az-Giraftari) from District Courts, High Courts, and the Supreme Court of Pakistan. We represent clients in FIA cybercrime cases, NAB investigations, and specialized criminal tribunals.',
    icon: 'Shield',
    category: 'Criminal',
    keywords: ['FIR', 'Bail', 'PPC', 'NAB', 'FIA', 'Police Station', 'High Court', 'Trial']
  },
  {
    id: 'family-divorce',
    title: 'Family Law & Divorce',
    urduTitle: 'قوانین خاندان اور طلاق',
    description: 'Compassionate counsel for divorce (Khula), child custody, dower/maintenance disputes, and guardianship.',
    extendedDescription: 'We provide strategic and compassionate representation in Family Courts under the Family Courts Act, 1964. We specialize in dissolution of marriage (Khula/Divorce), recovery of dower (Mehar), child maintenance, custody disputes, and guardianship certificates. Our primary focus is securing the children\'s welfare and protecting client assets.',
    icon: 'Heart',
    category: 'Family',
    keywords: ['Khula', 'Divorce', 'Custody', 'Maintenance', 'Guardian', 'Dower', 'Family Court']
  },
  {
    id: 'property-disputes',
    title: 'Property & Land Disputes',
    urduTitle: 'جائیداد اور اراضی کے تنازعات',
    description: 'Litigation for land grabbing (Qabza Group), title verification, partition, and specific performance suits.',
    extendedDescription: 'We safeguard your properties and estates in Pakistan. Our services include filing suits for partition (Taqseem), specific performance of contracts, permanent injunctions, and execution of sale deeds. We have extensive experience in combatting illegal land grabbing (Qabza) and resolving Patwari and Revenue record disputes.',
    icon: 'Home',
    category: 'Property & Civil',
    keywords: ['Land Registry', 'Qabza', 'Partition', 'Stay Order', 'Patwari', 'Revenue', 'Civil Court']
  },
  {
    id: 'corporate-business',
    title: 'Corporate & Company Law',
    urduTitle: 'کارپوریٹ اور کمپنی قوانین',
    description: 'Company registration with SECP, partnership deeds, contract drafting, and intellectual property.',
    extendedDescription: 'We advise local and international businesses on Pakistani corporate regulations. We handle complete incorporation processes with the Securities and Exchange Commission of Pakistan (SECP), drafting of partnership agreements (Form C), trademark/patent registrations, joint ventures, and litigation before the SECP appellate benches.',
    icon: 'Briefcase',
    category: 'Corporate & Tax',
    keywords: ['SECP', 'Company Registration', 'Trademark', 'Contract', 'Partnership Deed', 'FBR']
  },
  {
    id: 'tax-law',
    title: 'Taxation & FBR Matters',
    urduTitle: 'ٹیکس اور ایف بی آر امور',
    description: 'FBR active taxpayer registration, income/sales tax returns, and appealing tax audits/assessments.',
    extendedDescription: 'Our dedicated tax team provides comprehensive planning and litigation services for direct and indirect taxes. We handle active registration with the Federal Board of Revenue (FBR), provincial revenue authorities (PRA, SRB, BRA, KPRA), audit defenses, and tax appeals before the Commissioner Appeals and Appellate Tribunal Inland Revenue.',
    icon: 'Percent',
    category: 'Corporate & Tax',
    keywords: ['FBR', 'Income Tax', 'Sales Tax', 'Tax Audit', 'Tax Return', 'Appellate Tribunal']
  },
  {
    id: 'cyber-crime',
    title: 'Cyber Crime & FIA Cases',
    urduTitle: 'سائبر کرائم اور ایف آئی اے',
    description: 'Defense against allegations under PECA, online harassment, financial fraud, and cyber defamation.',
    extendedDescription: 'We represent individuals and corporate clients before the FIA Cyber Crime Wing under the Prevention of Electronic Crimes Act (PECA), 2016. Our lawyers defend cases of online financial fraud, identity theft, cyber harassment, hacking, and social media defamation, ensuring your digital and constitutional rights are protected.',
    icon: 'Globe',
    category: 'Specialized',
    keywords: ['FIA', 'PECA', 'Cyber Crime', 'Hacking', 'Defamation', 'Social Media', 'Online Fraud']
  }
];

export const lawyers: Lawyer[] = [
  {
    id: 'barrister-ahmad',
    name: 'Barrister Ahmad Khan',
    role: 'Senior Advocate Supreme Court & Managing Partner',
    experience: '25+ Years of Experience',
    education: 'LL.B (Hons) - London School of Economics, Bar-at-Law - Lincoln\'s Inn, London',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
    specialties: ['Criminal Appeals', 'Supreme Court Litigation', 'White Collar Defense', 'Constitutional Law'],
    bio: 'Barrister Ahmad Khan is one of the most prominent advocates in Pakistan. He has successfully represented high-profile political and corporate figures in complex NAB and FIA cases and constitutional petitions before the High Courts and Supreme Court.',
    location: 'Lahore / Islamabad'
  },
  {
    id: 'advocate-ayesha',
    name: 'Ayesha Mahmood Chaudhary',
    role: 'Partner - Family Law & Civil Litigation',
    experience: '15+ Years of Experience',
    education: 'LL.M - University of the Punjab, Advocate High Court',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
    specialties: ['Child Custody', 'Dissolution of Marriage (Khula)', 'Property Partition', 'Succession Certificates'],
    bio: 'Advocate Ayesha Mahmood is widely recognized as a leading expert in Pakistani Family Law. She has secured favorable custody agreements and maintenance orders for hundreds of mothers and children, and manages complex family disputes with ultimate discretion.',
    location: 'Lahore / Rawalpindi'
  },
  {
    id: 'barrister-mikaal',
    name: 'Barrister Mikaal J. Alvi',
    role: 'Partner - Corporate & Tax Law',
    experience: '12+ Years of Experience',
    education: 'LL.M - Harvard Law School, Bar-at-Law - Middle Temple, London',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500',
    specialties: ['Company Incorporation', 'FBR Appeals', 'SECP Compliance', 'Intellectual Property'],
    bio: 'Barrister Mikaal Alvi consults top corporate boards, multinational ventures, and startups across Pakistan. He specializes in foreign investment structuring, tax planning with FBR, and intellectual property litigation.',
    location: 'Karachi / Islamabad'
  }
];

export const caseResults: CaseResult[] = [
  {
    id: 'r1',
    title: 'Acquittal in Complex Corporate White-Collar Fraud Case',
    category: 'FIA & Corporate Defense',
    court: 'Supreme Court of Pakistan',
    outcome: 'Acquitted & Confiscated Assets Restored',
    description: 'Defended a high-ranking corporate executive accused of financial misappropriation of PKR 450 Million. Proven that the allegations were politically motivated and lacking physical evidence.',
    year: '2025'
  },
  {
    id: 'r2',
    title: 'Successful Child Custody & Guardianship Verdict',
    category: 'Family Law',
    court: 'Lahore High Court',
    outcome: 'Sole Guardianship Granted to Mother',
    description: 'Secured full custody and guardianship of two minor children for a non-resident Pakistani mother. Overcame complex international visitation claims and secured adequate maintenance allowances.',
    year: '2025'
  },
  {
    id: 'r3',
    title: 'Stay Order & Partition Decree on Prime Commercial Property',
    category: 'Property Litigation',
    court: 'Civil Court, Karachi',
    outcome: 'Partition Granted & Qabza Attempt Thwarted',
    description: 'Represented overseas Pakistani clients whose ancestral commercial plaza in Karachi was illegally targeted by a local land mafia. Successfully obtained a stay order and a partition decree.',
    year: '2024'
  },
  {
    id: 'r4',
    title: 'Quashment of Malicious Criminal FIR',
    category: 'Criminal Defense',
    court: 'Islamabad High Court',
    outcome: 'FIR Quashed (Section 561-A CrPC)',
    description: 'Filed a petition for the quashing of a false criminal FIR lodged against a client during a business partnership dispute. The court ruled that the dispute was civil, quashing the FIR in its entirety.',
    year: '2024'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Understanding Child Custody Laws in Pakistan: A Complete Guide',
    excerpt: 'How Pakistani courts determine the welfare of minors, the right of Hizanat, and father\'s financial liability.',
    content: 'In Pakistan, child custody cases are governed primarily by the Guardians and Wards Act, 1890. The overarching and primary consideration for the Court is always the "Welfare of the Minor" (Hizanat). Traditionally, mothers are granted physical custody of young children (boys until age 7, girls until puberty), but this is not an absolute rule. If the mother lacks character or remarries a stranger, custody can be challenged. Crucially, the father always remains the natural guardian and is legally bound to provide financial maintenance, regardless of physical custody status.',
    category: 'Family Law',
    date: 'June 18, 2026',
    readTime: '6 min read',
    author: 'Ayesha Mahmood Chaudhary',
    tags: ['Child Custody', 'Family Court', 'Guardianship']
  },
  {
    id: 'b2',
    title: 'Pre-Arrest Bail (Qabal-az-Waqt Bail) Process under PPC Section 498',
    excerpt: 'An essential guide on how to protect yourself from malicious arrests and false police allegations in Pakistan.',
    content: 'Pre-arrest bail is an extraordinary remedy unique to jurisdictions like Pakistan. Governed by Section 498 of the Criminal Procedure Code (CrPC), its primary purpose is to protect innocent citizens from humiliation, arrest, and torture in false, politically or personally motivated criminal cases. To secure pre-arrest bail, the applicant must show that their arrest would cause irreparable loss, and there is immediate proof of "Mala Fide" (bad intention) on the part of the complainant or the police. The applicant must surrender before the court to seek this protection.',
    category: 'Criminal Law',
    date: 'May 24, 2026',
    readTime: '8 min read',
    author: 'Barrister Ahmad Khan',
    tags: ['Bail', 'CrPC', 'FIR', 'Police Arrest']
  },
  {
    id: 'b3',
    title: 'SECP Company Registration: Step-by-Step Incorporation Guide',
    excerpt: 'A comprehensive guide on registering a private limited company online with SECP in Pakistan.',
    content: 'Registering a company with the Securities and Exchange Commission of Pakistan (SECP) has become highly streamlined through the eServices portal. The process involves four main steps: 1. Name Reservation (ensuring unique and appropriate naming), 2. Preparation of Memorandums and Articles of Association (outlining business objectives and internal capital structure), 3. Filing of statutory incorporation forms, and 4. Paying the registration fee. Once completed, SECP issues a Digital Certificate of Incorporation, opening paths for FBR NTN registration and corporate bank accounts.',
    category: 'Corporate Law',
    date: 'April 12, 2026',
    readTime: '5 min read',
    author: 'Barrister Mikaal J. Alvi',
    tags: ['SECP', 'Company Registration', 'Business Setup']
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'What should I do immediately if a false FIR is registered against me in Pakistan?',
    answer: 'If a false FIR is registered, your absolute first priority is to secure pre-arrest bail (Bail-Ab-De-In) under Section 498 CrPC to prevent the police from arresting you. Once bail is granted by the Sessions Court or High Court, your advocate can file a petition for "FIR Quashment" under Section 561-A CrPC or represent your innocence before the Investigating Officer (IO) during the police investigation (Tafteesh).',
    category: 'Criminal Defense'
  },
  {
    id: 'f2',
    question: 'How long does a Khula (Dissolution of Marriage) case take in Family Court?',
    answer: 'Under the Family Courts Amendment Act in Pakistan, Khula cases are processed on a fast-track basis. Once filed, the Court issues notices to the husband. If he fails to appear, or if reconciliation attempts (Musalhat) fail, the Court is legally bound to decree Khula. This typically takes between 2 to 4 months. However, related matters like recovery of dower or child custody may continue separately.',
    category: 'Family Law'
  },
  {
    id: 'f3',
    question: 'Can an overseas Pakistani file or defend a property case without travelling?',
    answer: 'Yes. Overseas Pakistanis can legally file, pursue, or defend any civil, revenue, or family case in Pakistan without visiting the country. This is done by executing a Special Power of Attorney (SPA) or General Power of Attorney (GPA). The POA must be attested by the Pakistani Embassy/Consulate in their country of residence and subsequently registered with the Ministry of Foreign Affairs (MOFA) in Pakistan.',
    category: 'Property & Civil'
  },
  {
    id: 'f4',
    question: 'What are the charges for company registration with SECP?',
    answer: 'The official SECP registration fees depend on the authorized capital of the company. For a small Private Limited Company with an authorized capital of PKR 100,000, the online registration fee is approximately PKR 1,500 to 2,500. Professional fees for drafting the Memorandum and Articles of Association and processing range between PKR 15,000 and 30,000 depending on the complexity.',
    category: 'Corporate Law'
  }
];

export const citiesData: CityLandingData[] = [
  {
    slug: 'lahore',
    cityName: 'Lahore',
    title: 'Elite Legal Representation in Lahore & Punjab',
    description: 'Serving clients before the Honorable Lahore High Court, Sessions Court Lahore, and specialized tribunals like NAB, FIA, and Family Courts of Punjab.',
    courtFocus: ['Lahore High Court (LHC)', 'Sessions Court Lahore', 'SECP Lahore Bench', 'FIA Punjab Zone-I'],
    localOffice: '32-A, Main Boulevard, Gulberg III, Lahore, Pakistan',
    phone: '+92 42 3578 9901'
  },
  {
    slug: 'karachi',
    cityName: 'Karachi',
    title: 'Premier Legal Services in Karachi & Sindh',
    description: 'Providing elite advocacy before the Sindh High Court, specialized Corporate Banking Courts, and FIA Cyber Crime units in Karachi.',
    courtFocus: ['Sindh High Court (SHC)', 'Karachi Registry Supreme Court', 'Sindh Revenue Board', 'Corporate Courts Clifton'],
    localOffice: 'Suite 402, 4th Floor, G-20, Block 9, KDA Scheme 5, Clifton, Karachi',
    phone: '+92 21 3583 4402'
  },
  {
    slug: 'islamabad',
    cityName: 'Islamabad',
    title: 'Supreme & Constitutional Advocates in Islamabad Capital Territory',
    description: 'Representing clients at the highest judicial levels, including the Supreme Court of Pakistan, Islamabad High Court, and Federal Tribunals.',
    courtFocus: ['Supreme Court of Pakistan', 'Islamabad High Court (IHC)', 'SECP Head Office', 'FBR Headquarters'],
    localOffice: 'Office 12, First Floor, Al-Anayat Mall, G-11 Markaz, Islamabad',
    phone: '+92 51 2228 1103'
  },
  {
    slug: 'rawalpindi',
    cityName: 'Rawalpindi',
    title: 'Dedicated Trial & High Court Lawyers in Rawalpindi',
    description: 'Protecting your interests in civil, family, and criminal matters before the Rawalpindi Bench of Lahore High Court and District Courts.',
    courtFocus: ['LHC Rawalpindi Bench', 'District & Sessions Court Rawalpindi', 'FIA Rawalpindi Zone', 'Military & Cantonment Courts'],
    localOffice: 'Chamber 45, District Courts Compound, Rawalpindi',
    phone: '+92 51 5567 4405'
  },
  {
    slug: 'faisalabad',
    cityName: 'Faisalabad',
    title: 'Commercial & Family Law Specialists in Faisalabad',
    description: 'Serving industrial enterprises and families in textile hub disputes, recovery suits, and local litigation.',
    courtFocus: ['District Courts Faisalabad', 'Faisalabad Chamber of Commerce Tribunal', 'Family Courts Faisalabad'],
    localOffice: '10-A, Civil Lines, Near District Courts, Faisalabad',
    phone: '+92 41 2618 9906'
  },
  {
    slug: 'multan',
    cityName: 'Multan',
    title: 'Experienced Civil & Land Litigation in Multan',
    description: 'Protecting generational agricultural lands, division of property, and local family matters in Southern Punjab.',
    courtFocus: ['LHC Multan Bench', 'District Courts Multan', 'Revenue Courts Multan'],
    localOffice: 'Chamber 12, High Court Bar Association, Multan',
    phone: '+92 61 4543 8807'
  },
  {
    slug: 'peshawar',
    cityName: 'Peshawar',
    title: 'Top-tier Legal Advocates in Peshawar & KPK',
    description: 'Representing clients before the Peshawar High Court, anti-corruption tribunals, and district civil litigation courts.',
    courtFocus: ['Peshawar High Court (PHC)', 'District Courts Peshawar', 'KPK Revenue Authority'],
    localOffice: 'Sufi Trust Plaza, Cantt Road, Peshawar',
    phone: '+92 91 5271 2208'
  },
  {
    slug: 'quetta',
    cityName: 'Quetta',
    title: 'Defending Your Rights in Quetta & Balochistan',
    description: 'Providing elite representation in corporate, mining, and criminal matters before the Balochistan High Court.',
    courtFocus: ['Balochistan High Court (BHC)', 'District Courts Quetta', 'Revenue Benches Quetta'],
    localOffice: 'Chamber 3, Bar Association Complex, Quetta',
    phone: '+92 81 2824 5509'
  },
  {
    slug: 'sialkot',
    cityName: 'Sialkot',
    title: 'SME Export & Custom Law Advisory in Sialkot',
    description: 'Assisting global exporters, trademark protection, custom disputes, and company litigation.',
    courtFocus: ['District Courts Sialkot', 'Custom Benches Sialkot', 'SECP Representative Desk'],
    localOffice: 'Sialkot Chamber of Commerce Building, Paris Road, Sialkot',
    phone: '+92 52 4269 1110'
  },
  {
    slug: 'gujranwala',
    cityName: 'Gujranwala',
    title: 'Civil Recovery & Property Partition in Gujranwala',
    description: 'Providing prompt legal remedies for industrial properties, land acquisitions, and domestic cases.',
    courtFocus: ['District Courts Gujranwala', 'Revenue Benches Gujranwala', 'Family Courts Gujranwala'],
    localOffice: 'Chamber 89, Sessions Court Bar, Gujranwala',
    phone: '+92 55 3845 2211'
  }
];
