export const companyInfo = {
  address: '115/498, 59th Street, A-Type, SIDCO Nagar, Villivakkam, Chennai - 600049',
  email: 'vvsfincorp@gmail.com',
}

export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Why Choose Us', href: '#why-us' },
]

export const socialLinks = [
  { label: 'Facebook', shortLabel: 'f', href: '#facebook' },
  { label: 'Instagram', shortLabel: '◎', href: '#instagram' },
  { label: 'LinkedIn', shortLabel: 'in', href: '#linkedin' },

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
  },
  {
    slug: 'short-term-business-funding',
    title: 'Short-Term Business Funding',
    description: 'Working capital solutions for businesses with funding tenure ranging from 3 to 10 months.',
    overview: 'Short-term funding can help businesses manage working capital needs and cash flow. Discuss your requirement with our team to explore a funding option and tenure that suits your business.',
    suitableFor: 'Businesses looking for short-term working capital or support with cash flow.',
    benefits: ['Improve cash flow', 'Support business growth', 'Quick disbursement', 'Flexible funding options'],
  },
  {
    slug: 'direct-funding-solutions',
    title: 'Direct Funding Solutions',
    description: 'Funding solutions through our network of financial partners.',
    overview: 'We connect funding requirements with our network of financial partners, keeping the process transparent and focused on finding a practical solution for your needs.',
    suitableFor: 'Applicants who want to explore funding options through financial partners.',
    benefits: ['No upfront charges', 'Transparent process', 'Responsive approvals', 'Dedicated customer support'],
  },
]

export const heroSlides = [
  {
    image: heroSlide1,
    alt: 'Business owner planning growth with financial documents',
  },
  {
    image: heroSlide2,
    alt: 'Business funding and financial planning',
  },
  {
    image: heroSlide3,
    alt: 'Entrepreneurs discussing a funding plan',
  },
]
import heroSlide1 from '../assets/HeroSection/herosectionSlider1.jpg'
import heroSlide2 from '../assets/HeroSection/herosectionSlider2.jpg'
import heroSlide3 from '../assets/HeroSection/herosectionSlider3.jpg'
