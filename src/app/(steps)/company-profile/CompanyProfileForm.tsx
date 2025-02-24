"use client";
import { MultiStepForm } from "@/components/MultiStepForm";
import { companyProfileTabs } from "@/data";
import { CompanyProfileSchema } from "@/schema";
import { CompanyProfile, TabContent } from "@/interfaces";
import { TabContentTemplate } from "@/templates";
import {
  Input,
  FormControl,
  Textarea,
  FormLabel,
  FormHelperText,
  Select,
  Option,
} from "@mui/joy";
import { ErrorForm, FormSubtitle } from "@/components";
import { companySize, industry } from "@/data";

export const CompanyProfileForm = () => {
  const defaultInitialValues: CompanyProfile = {
    industry: "",
    companySize: "",
    fullName: "",
    email: "",
    phone: "",
    projectGoals: "",
    knowledgeLevel: "",
    additionalNotes: "",
  };

  const tabContent = {
    information: ({ values, errors, touched, setFieldValue }: TabContent) => (
      <TabContentTemplate
        title="Let’s Get to Know Your Business"
        description="We want to understand your industry, company size, and contact details. This helps us tailor our approach to your needs."
      >
        <FormSubtitle subtitle="Business Details" />
        <div className="flex gap-8">
          <FormControl
            className="flex-1"
            error={Boolean(errors.industry && touched.industry)}
          >
            <FormLabel>Industry</FormLabel>
            <Select
              size="lg"
              value={values.industry}
              onChange={(event, newValue) =>
                setFieldValue("industry", newValue ?? "")
              }
              placeholder="Select Industry"
            >
              {industry.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
            {touched.industry && errors.industry && (
              <FormHelperText>{errors.industry}</FormHelperText>
            )}
          </FormControl>
          <FormControl
            className="flex-1"
            error={Boolean(errors.companySize && touched.companySize)}
          >
            <FormLabel>Company Size</FormLabel>
            <Select
              size="lg"
              value={values.companySize}
              onChange={(event, newValue) =>
                setFieldValue("companySize", newValue ?? "")
              }
              placeholder="Select Company Size"
            >
              {companySize.map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
            {touched.companySize && errors.companySize && (
              <FormHelperText>{errors.companySize}</FormHelperText>
            )}
          </FormControl>
        </div>
        <FormSubtitle subtitle="Your Contact Details" />
        <div className="flex flex-col gap-8">
          <FormControl
            className="flex-1"
            error={Boolean(errors.fullName && touched.fullName)}
          >
            <FormLabel>Full Name</FormLabel>
            <Input
              autoComplete="none"
              size="lg"
              id="fullName"
              value={values.fullName}
              onChange={(event) =>
                setFieldValue("fullName", event.target.value)
              }
            />
            {touched.fullName && errors.fullName && (
              <FormHelperText>{errors.fullName}</FormHelperText>
            )}
          </FormControl>
          <div className="flex gap-8">
            <FormControl className="flex-1" error={Boolean(errors.email && touched.email)}>
              <FormLabel>Email</FormLabel>
              <Input
                autoComplete="none"
                size="lg"
                id="email"
                value={values.email}
                onChange={(event) => setFieldValue("email", event.target.value)}
              />
              {touched.email && errors.email && (
                <ErrorForm label={errors.email} />
              )}
            </FormControl>
            <FormControl className="flex-1">
              <FormLabel>Phone</FormLabel>
              <Input
                autoComplete="none"
                size="lg"
                id="phone"
                value={values.phone}
                onChange={(event) => setFieldValue("phone", event.target.value)}
              />
            </FormControl>
          </div>
        </div>
      </TabContentTemplate>
    ),
    projectGoals: ({ values, errors, touched }: TabContent) => (
      <TabContentTemplate
        title="What Are You Aiming For?"
        description="Choose or add the key goals you’d like to accomplish. This helps us focus on what truly matters for your business."
      >
        <FormControl className="flex-1">
          <FormLabel>Project Goals</FormLabel>
          <Input size="lg" id="projectGoals" value={values.projectGoals} />
          {touched.projectGoals && errors.projectGoals && (
            <ErrorForm label={errors.projectGoals} />
          )}
        </FormControl>
      </TabContentTemplate>
    ),
    knowledgeLevel: ({ values, errors, touched }: TabContent) => (
      <TabContentTemplate
        title="How familiar are you with software development?"
        description="This helps us tailor the interface to your comfort level. Select the option that feels right for you. You can always switch later if needed!"
      >
        <FormControl
          className="flex-1"
          error={Boolean(touched.knowledgeLevel && errors.knowledgeLevel)}
        >
          <FormLabel>Knowledge Level</FormLabel>
          <Input size="lg" id="knowledgeLevel" value={values.knowledgeLevel} />
          {touched.knowledgeLevel && errors.knowledgeLevel && (
            <FormHelperText>{errors.knowledgeLevel}</FormHelperText>
          )}
        </FormControl>
      </TabContentTemplate>
    ),
    additionalNotes: ({ values }: TabContent) => (
      <TabContentTemplate
        title="Anything else we should know?"
        description="Add any specific requirements, clarifications, or questions you have about your project. Our AI assistant will use this information to refine your solution."
      >
        <FormControl className="flex-1">
          <FormLabel>Additional Notes</FormLabel>
          <Textarea
            size="lg"
            id="additionalNotes"
            value={values.additionalNotes}
            minRows={4}
          />
        </FormControl>
      </TabContentTemplate>
    ),
  };

  return (
    <MultiStepForm
      nextStep="/project-scope"
      formKey="CompanyProfile"
      tabs={companyProfileTabs}
      validationSchema={CompanyProfileSchema}
      defaultValues={defaultInitialValues}
      tabContent={tabContent}
    />
  );
};
