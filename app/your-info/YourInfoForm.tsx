"use client"

import { FormButtons } from "@/components/forms/FormButtons"
import { UserInput, UserInputProps } from "@/components/forms/UserInput"
import { submit } from "@/lib/submit"
import { HTMLInputTypeAttribute, useState } from "react"
import { twMerge } from "tailwind-merge"

const InitialErrors = {
  name: {
    message: "",
  },
  email: {
    message: "",
  },
  phone: {
    message: "",
  },
}
type InitialErrors = typeof InitialErrors

const initialFormValues = {
  name: "",
  email: "",
  phone: "",
}
type initialFormValues = typeof initialFormValues

const InputsData = [
  {
    name: "name",
    type: "text",
    label: "name",
    placeholder: "e.g Stephen King",
  },
  {
    name: "email",
    type: "email",
    label: "email address",
    placeholder: "e.g stephenking@lorem.com",
  },
  {
    name: "phone",
    type: "tel",
    label: "phone number",
    placeholder: "e.g +1 234 5676 890",
    list: "defaultTels",
  },
] as const

export function YourInfoForm() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(InitialErrors)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputName = e.currentTarget.name
    const value = e.currentTarget.value
    const PREFIX = "user-"

    if (inputName.startsWith(PREFIX)) {
      inputName = inputName.slice(PREFIX.length)
    }
    setErrors((prev) => ({ ...prev, [inputName]: { message: "" } }))
    setFormValues((prev) => ({ ...prev, [inputName]: value }))
  }

  return (
    <form action={submit} className="flex flex-col gap-4 mt-4">
      {InputsData.map((inputData) => {
        return (
          <InputWithErrorHandler
            key={inputData.name}
            setErrors={setErrors}
            errors={errors}
            handleOnChange={handleOnChange}
            formValues={formValues}
            {...inputData}
          />
        )
      })}
      <datalist id="defaultTels">
        <option value="111-1111-1111"></option>
        <option value="122-2222-2222"></option>
        <option value="344-4444-4444"></option>
      </datalist>
      <FormButtons />
    </form>
  )
}

interface InputWithErrorHandlerProps extends UserInputProps {
  setErrors: React.Dispatch<React.SetStateAction<InitialErrors>>
  errors: InitialErrors
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  formValues: initialFormValues
  name: keyof initialFormValues
  type: HTMLInputTypeAttribute
  label: string
}

function InputWithErrorHandler({
  setErrors,
  errors,
  handleOnChange,
  formValues,
  name,
  type,
  label,
  ...rest
}: InputWithErrorHandlerProps) {
  return (
    <div className="flex flex-col-reverse">
      <UserInput
        className={twMerge(
          "valid:border-purplish-blue",
          errors[name].message && "invalid:border-strawberry-red"
        )}
        onInvalid={(e) => {
          const invalidValue = e.currentTarget.value
          switch (invalidValue) {
            case "": {
              setErrors((prev) => ({
                ...prev,
                [name]: {
                  message: "This field is required",
                },
              }))
              break
            }
            default: {
              setErrors((prev) => ({
                ...prev,
                [name]: {
                  message: "Invalid email",
                },
              }))
            }
          }
        }}
        type={type}
        name={name}
        id={name}
        onChange={handleOnChange}
        value={formValues[name]}
        required
        {...rest}
      />
      <div className="flex justify-between peer-[:user-invalid]:[&>span]:block">
        <label className="capitalize text-marine-blue" htmlFor="email">
          {label}
        </label>
        {errors[name].message && (
          <span className="text-xs font-bold text-strawberry-red">
            {errors[name].message}
          </span>
        )}
      </div>
    </div>
  )
}
