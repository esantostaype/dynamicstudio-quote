import type { Step, Tab } from '@/interfaces'
import { Briefcase, ChartBar, ClipboardText, CreditCard, Gear, Info, ListChecks, Note, Package, ShoppingBag, Target  } from '@phosphor-icons/react'

export const stepsData: Step[] = [
  {
    title: 'Company Profile',
    icon: <Briefcase size={ 32 } weight="thin" />,
    path: '/company-profile'
  },
  {
    title: 'Project Scope',
    icon: <Package size={ 32 } weight="thin" />,
    path: '/project-scope'
  },
  {
    title: 'Features',
    icon: <Gear size={ 32 } weight="thin" />,
    path: '/features'
  },
  {
    title: 'Requirements',
    icon: <ClipboardText size={ 32 } weight="thin" />,
    path: '/requirements'
  },
  {
    title: 'Summary',
    icon: <ListChecks size={ 32 } weight="thin" />,
    path: '/summary'
  },
  {
    title: 'Payment Methods',
    icon: <CreditCard size={ 32 } weight="thin" />,
    path: '/payment-methods'
  },
  {
    title: 'Check-out',
    icon: <ShoppingBag size={ 32 } weight="thin" />,
    path: '/check-out'
  }
]

export const companyProfileTabs: Tab[] = [
  { id: 'information', label: 'Information', icon: <Info size={ 20 } weight="light" /> },
  { id: 'projectGoals', label: 'Project Goals', icon: <Target size={ 20 } weight="light" /> },
  { id: 'knowledgeLevel', label: 'Knowledge Level', icon: <ChartBar size={ 20 } weight="light" /> },
  { id: 'additionalNotes', label: 'Additional Notes', icon: <Note size={ 20 } weight="light" /> }
]

export const states: string[] = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
]

export const industry: string[] = [
  "Fashion & Apparel",
  "Electronics & Technology",
  "Home & Furniture",
  "Sports & Recreation",
  "Beauty & Personal Care",
  "Financial Services",
  "Legal Services",
  "Consulting",
  "Real Estate",
  "Marketing & Advertising",
  "Medical Practice",
  "Dental",
  "Mental Health",
  "Alternative Medicine",
  "Fitness & Wellness",
  "Restaurants & Cafes",
  "Hotels & Lodging",
  "Travel & Tourism",
  "Events & Entertainment",
  "Food Services",
  "Schools & Universities",
  "Professiional Training",
  "Online Courses",
  "Tutoring Services",
  "Educational Technology",
  "Consumer Goods",
  "Industrial Equipment",
  "Automotive",
  "Electronics Manufacturing",
  "Custom Manufacturing"
]

export const companySize: string[] = [
  "Startup (1-10 Employes)", "Small Business (11-50 Employes)", "Medium Business (51-200 Employes)", "Large Business (200+ Employes)"
]

export const yearInBusiness: string[] = [
  "1-2 Years", "3-5 Years", "5-10 Years", "More than 10 years"
]