export interface Step {
  path: string
  icon: React.ReactNode
  title: string
}

export interface Tab {
  id: string
  label: string
  icon: React.ReactNode
}

export interface TabContent {
  values: CompanyProfile
  errors: Partial<Record<keyof CompanyProfile, string>>
  touched: Partial<Record<keyof CompanyProfile, boolean>>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  activeTab: string
  setFieldValue: (field: string, value: unknown) => void
}

export interface CompanyProfile {
  industry: string
  companySize: string
  fullName: string
  email: string
  phone: string
  projectGoals: string
  knowledgeLevel: string
  additionalNotes: string
}