import { useState, createContext } from "react"

type IWizardContext = {
  data: { [key: string]: any }
  setData: (data: { [key: string]: any }) => void
  onSubmit: () => void
}

const WizardContext = createContext<IWizardContext>({
  data: {},
  setData: () => {},
  onSubmit: () => {},
})

interface IWizardContextProviderProps {
  children: React.ReactNode
  initialValues?: { [key: string]: any }
  onSubmit: (data: any) => void
}

export const WizardContextProvider = ({
  children,
  initialValues = {},
  onSubmit,
}: IWizardContextProviderProps) => {
  const [data, setData] = useState(initialValues)

  const handleSubmit = () => {
    onSubmit(data)
  }

  return (
    <WizardContext.Provider value={{ data, setData, onSubmit: handleSubmit }}>
      {children}
    </WizardContext.Provider>
  )
}
