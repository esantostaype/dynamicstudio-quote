'use client'
import { Autocomplete, FormControl, FormGroup, TextField } from '@mui/material'
import QuoteTemplate from '../quote-template'
import { MainButton, StepButtons } from '@/components'
import { companySize, industry } from '@/data'

export default function Step1Page() {
  
  return (
    <QuoteTemplate title="Let’s Get to Know Your Business" description="We want to understand your industry, company size, and contact details. This helps us tailor our approach to your needs.">
      <div className="flex-1">
        <h3 className="text-2xl mb-4 font-semibold">Business Details</h3>
        <div className="flex flex-col gap-6">
          <FormGroup>
            <FormControl fullWidth>
              <Autocomplete
                options={ industry }
                renderInput={(params) => <TextField {...params} label="Industry" />}
                size='small'
              />
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl fullWidth>
              <Autocomplete
                options={ companySize }
                renderInput={(params) => <TextField {...params} label="Company Size" />}
                size='small'
              />
            </FormControl>
          </FormGroup>
        </div>
        <h3 className="text-2xl mb-4 mt-12 font-semibold">Your Contact Details</h3>
        <div className="flex flex-col gap-6">
          <FormGroup>
            <TextField label='Full Name' size='small'/>
          </FormGroup>
          <FormGroup>
            <TextField label='Email' size='small'/>
          </FormGroup>
          <FormGroup>
            <TextField label='Phone' size='small'/>
          </FormGroup>
        </div>
      </div>
      <StepButtons>
        <div></div>
        <MainButton type="submit" label="Continue"/>
      </StepButtons>
    </QuoteTemplate>
  )
}