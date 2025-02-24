import { Autocomplete, FormControl, FormGroup, TextField } from '@mui/material'
import { ErrorForm, FormSubtitle } from '@/components'
import { TabContentTemplate } from '@/templates'
import { companySize, industry } from '@/data'
import { CompanyProfile } from '@/interfaces'

interface Props {
  values: CompanyProfile
  errors: Partial<Record<keyof CompanyProfile, string>>
  touched: Partial<Record<keyof CompanyProfile, boolean>>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  activeTab: string
  setFieldValue: (field: string, value: unknown) => void
}

export const CompanyProfileTabContent = ({
  values,
  errors,
  touched,
  handleChange,
  activeTab,
  setFieldValue
}: Props) => {
  const contents = {
    information: (
      <TabContentTemplate title="Let’s Get to Know Your Business" description="We want to understand your industry, company size, and contact details. This helps us tailor our approach to your needs.">
        <FormSubtitle subtitle="Business Details" />
        <div className="flex flex-col gap-6">
          <FormGroup>
            <FormControl fullWidth>
              <Autocomplete
                value={ values.industry }
                onChange={( event, newValue ) => setFieldValue("industry", newValue)}
                options={ industry }
                renderInput={(params) => (
                  <TextField {...params} label="Industry" />
                )}
                size="small"
              />
              { touched.industry && errors.industry && <ErrorForm label={ errors.industry } />}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl fullWidth>
              <Autocomplete
                value={ values.companySize }
                onChange={( event, newValue ) => setFieldValue("companySize", newValue)}
                options={ companySize }
                renderInput={(params) => (
                  <TextField {...params} label="Company Size" />
                )}
                size="small"
              />
              { touched.companySize && errors.companySize && <ErrorForm label={ errors.companySize } />}
            </FormControl>
          </FormGroup>
        </div>
        <FormSubtitle subtitle="Your Contact Details" />
        <div className="flex flex-col gap-6">
          <FormGroup>
            <TextField id="fullName" label="Full Name" value={ values.fullName } onChange={ handleChange }  size="small" />
            { touched.fullName && errors.fullName && <ErrorForm label={ errors.fullName } />}
          </FormGroup>
          <FormGroup>
            <TextField id="email" label="Email" value={ values.email } onChange={ handleChange }  size="small" />
            { touched.email && errors.email && <ErrorForm label={ errors.email } />}
          </FormGroup>
          <FormGroup>
            <TextField id="phone" label="Phone" value={ values.phone } onChange={ handleChange }  size="small" />
          </FormGroup>
        </div>
      </TabContentTemplate>
    ),
    projectGoals: (
      <TabContentTemplate title="Project Goals" description="We want to understand your industry, company size, and contact details. This helps us tailor our approach to your needs.">
        <FormGroup>
          <TextField 
            id="projectGoals" 
            label="Project Goals" 
            value={values.projectGoals} 
            onChange={handleChange}
            size="small"
          />
          {touched.projectGoals && errors.projectGoals && <ErrorForm label={errors.projectGoals} />}
        </FormGroup>
      </TabContentTemplate>
    ),
    knowledgeLevel: (
      <TabContentTemplate title="Knowledge Level" description="We want to understand your industry, company size, and contact details. This helps us tailor our approach to your needs.">
        <FormGroup>
          <TextField 
            id="knowledgeLevel" 
            label="Knowledge Level" 
            value={values.knowledgeLevel} 
            onChange={handleChange}
            size="small"
          />
          {touched.knowledgeLevel && errors.knowledgeLevel && <ErrorForm label={errors.knowledgeLevel} />}
        </FormGroup>
      </TabContentTemplate>
    ),
    additionalNotes: (
      <TabContentTemplate title="Additional Notes" description="We want to understand your industry, company size, and contact details. This helps us tailor our approach to your needs.">
        <FormGroup>
          <TextField 
            id="additionalNotes" 
            label="Additional Notes" 
            value={values.additionalNotes} 
            onChange={handleChange}
            multiline
            rows={3}
            size="small"
          />
        </FormGroup>
      </TabContentTemplate>
    )
  }

  return contents[ activeTab as keyof typeof contents ]
}
