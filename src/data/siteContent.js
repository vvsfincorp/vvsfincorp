// Business content shared by the pages and the SEO build step.
// Keep this file free of image/asset imports (images live in src/config/images.js)
// so it can also be read by Node during the build.

export const companyInfo = {
  name: 'VVS Fincorp',
  tagline: 'Fast Funding. Trusted Partnership.',
  founded: 'December 2024',
  foundingDate: '2024-12',
  address: '115/498, 59th Street, A-Type, SIDCO Nagar, Villivakkam, Chennai - 600049',
  addressParts: {
    streetAddress: '115/498, 59th Street, A-Type, SIDCO Nagar, Villivakkam',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600049',
    addressCountry: 'IN',
  },
  // Coordinates of the "VVS Fincorp" Google Maps listing used in the contact section
  geo: { latitude: 13.1082693, longitude: 80.198468 },
  email: 'vvsfincorp@gmail.com',
  primaryPhone: '+91 9363992147',
  mission: 'Empowering businesses with quick, reliable funding solutions to help turn plans into progress.',
}

// Places the business actually serves, used for structured data (areaServed).
// Only add a district or city here once the team confirms it takes enquiries from there.
export const serviceAreas = ['Chennai']

export const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Why Choose Us', to: '/why-choose-us' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

// Add the real profile URLs here. Links without a URL are not displayed,
// so the site never shows a social icon that goes nowhere.
export const socialLinks = [
  { label: 'Facebook', href: '' },
  { label: 'Instagram', href: '' },
  { label: 'LinkedIn', href: '' },
]

export const benefits = [
  { icon: '✓', title: 'Fast Approval', text: 'Quick decisions' },
  { icon: '▤', title: 'Minimal Documentation', text: 'Simple process' },
  { icon: '▣', title: 'Direct Funders', text: 'Trusted partners' },
]

export const stats = [
  { value: '₹1 Lakh – ₹30 Crore', label: 'Funding Range', type: 'funding' },
  { value: '3–10 Months', label: 'Flexible Tenure', type: 'tenure' },
  { value: 'Fast Approval', label: 'Minimal Documentation', type: 'approval' },
  { value: '100%', label: 'Transparent Process', type: 'percentage' },
]

export const services = [
  {
    slug: 'cheque-based-finance',
    title: 'Cheque-Based Finance',
    description: 'Quick funding against valid cheque transactions for business and personal requirements.',
    overview: 'Access funding against valid cheque transactions for business or personal requirements. VVS Fincorp helps you understand the available options and the information needed to discuss your funding request.',
    suitableFor: 'Individuals and businesses looking for funding against valid cheque transactions.',
    benefits: ['Fast approval process', 'Minimal documentation', 'Flexible repayment options', 'Funding from ₹1 Lakh to ₹30 Crore'],
    seoTitle: 'Cheque-Based Finance in Chennai | VVS Fincorp',
    seoDescription: 'Funding against valid cheque transactions for business and personal requirements, from ₹1 lakh to ₹30 crore. Talk to VVS Fincorp in Villivakkam, Chennai.',
  },
  {
    slug: 'short-term-business-funding',
    title: 'Short-Term Business Funding',
    description: 'Working capital solutions for businesses with funding tenure ranging from 3 to 10 months.',
    overview: 'Short-term funding can help businesses manage working capital needs and cash flow. Discuss your requirement with our team to explore a funding option and tenure that suits your business.',
    suitableFor: 'Businesses looking for short-term working capital or support with cash flow.',
    benefits: ['Improve cash flow', 'Support business growth', 'Quick disbursement', 'Flexible funding options'],
    seoTitle: 'Short-Term Business Funding & Working Capital in Chennai | VVS Fincorp',
    seoDescription: 'Short-term working capital for businesses with tenures from 3 to 10 months. Discuss your cash-flow requirement with VVS Fincorp, Chennai.',
  },
  {
    slug: 'direct-funding-solutions',
    title: 'Direct Funding Solutions',
    description: 'Funding solutions through our network of financial partners.',
    overview: 'We connect funding requirements with our network of financial partners, keeping the process transparent and focused on finding a practical solution for your needs.',
    suitableFor: 'Applicants who want to explore funding options through financial partners.',
    benefits: ['No upfront charges', 'Transparent process', 'Responsive approvals', 'Dedicated customer support'],
    seoTitle: 'Direct Funding Solutions Through Financial Partners | VVS Fincorp',
    seoDescription: 'Explore funding options through the VVS Fincorp network of financial partners, with a transparent process and dedicated support from our Chennai team.',
  },
]

// Customer journey used on the services, service-detail and "why choose us" pages
export const processSteps = [
  { number: '01', title: 'Share your requirement', text: 'Tell us what you need funding for and the amount you want to explore.' },
  { number: '02', title: 'Discuss your options', text: 'Our team will talk through the relevant funding options and next steps.' },
  { number: '03', title: 'Move ahead with clarity', text: 'Review the information, ask questions, and decide how you would like to proceed.' },
]

export const faqs = [
  {
    question: 'What services does VVS Fincorp offer?',
    answer: 'We offer three funding solutions: Cheque-Based Finance (funding against valid cheque transactions), Short-Term Business Funding (working capital with tenures from 3 to 10 months), and Direct Funding Solutions through our network of financial partners.',
  },
  {
    question: 'How much funding can I request?',
    answer: 'Funding requests from ₹1 lakh to ₹30 crore can be discussed with our team. The amount available to you depends on an assessment of your requirement.',
  },
  {
    question: 'What is the funding tenure?',
    answer: 'Our short-term business funding has tenures ranging from 3 to 10 months. Our team will discuss a tenure that suits your requirement.',
  },
  {
    question: 'Is approval guaranteed?',
    answer: 'No. Every funding request is assessed individually. Rates, fees and repayment terms are confirmed only after that assessment, and our team will explain them clearly before you decide to proceed.',
  },
  {
    question: 'What documents will I need?',
    answer: 'We keep documentation minimal. The exact documents depend on the type of funding and your requirement, so our team will tell you what is needed after the first conversation.',
  },
  {
    question: 'How does the repayment calculator on the website work?',
    answer: 'The calculator gives an indicative estimate using flat monthly interest on the amount, rate and tenure you choose. It is a planning aid only. Final rates, fees and repayment terms are subject to assessment.',
  },
  {
    question: 'How do I get started?',
    answer: 'Send us your requirement through the enquiry form, call us, or message us on WhatsApp. Our team will get in touch to understand your needs and talk you through the options.',
  },
  {
    question: 'What information should I not share through the website?',
    answer: 'Please do not share bank account numbers, card details, passwords or OTPs through the enquiry form, email or WhatsApp. Our team will never ask for your passwords or OTPs.',
  },
  {
    question: 'Where is VVS Fincorp located?',
    answer: `Our office is at ${companyInfo.address}, Tamil Nadu. You can also reach us by phone or at ${companyInfo.email}.`,
  },
]
