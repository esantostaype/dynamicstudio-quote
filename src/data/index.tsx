import type { Step } from '@/interfaces'
import { Briefcase, ClipboardText, CreditCard, Gear, ListChecks, Package, ShoppingBag  } from '@phosphor-icons/react'

export const stepsData: Step[] = [
  {
    title: 'Company Profile',
    icon: <Briefcase size={ 32 } weight="thin" color="currentColor" />,
    path: '/company-profile'
  },
  {
    title: 'Project Scope',
    icon: <Package size={ 32 } weight="thin" color="currentColor" />,
    path: '/project-scope'
  },
  {
    title: 'Features',
    icon: <Gear size={ 32 } weight="thin" color="currentColor" />,
    path: '/features'
  },
  {
    title: 'Requirements',
    icon: <ClipboardText size={ 32 } weight="thin" color="currentColor" />,
    path: '/requirements'
  },
  {
    title: 'Summary',
    icon: <ListChecks size={ 32 } weight="thin" color="currentColor" />,
    path: '/summary'
  },
  {
    title: 'Payment Methods',
    icon: <CreditCard size={ 32 } weight="thin" color="currentColor" />,
    path: '/payment-methods'
  },
  {
    title: 'Check-out',
    icon: <ShoppingBag size={ 32 } weight="thin" color="currentColor" />,
    path: '/check-out'
  }
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