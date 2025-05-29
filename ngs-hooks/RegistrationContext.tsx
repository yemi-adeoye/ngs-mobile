import { createContext, ReactNode, useState } from "react";

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined
);

type RegistrationForm = {
  firstName: string;
  lastName: string;
  phone: string;
  dob: string;
  sex: string;
  password: string;
  email: string;
};

interface RegistrationContextType {
  registrationForm: RegistrationForm;
  updateRegistrationForm: (params: Partial<RegistrationForm>) => void;
}

type Props = {
  children: ReactNode;
};

export function RegistrationProvider({ children }: Props) {
  const defaultRegistrationForm: RegistrationForm = {
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
    sex: "",
    password: "",
    email: "",
  };

  const [registrationForm, setRegistrationForm] = useState(
    defaultRegistrationForm
  );

  const updateRegistrationForm = (formFields: Partial<RegistrationForm>) => {
    setRegistrationForm({ ...registrationForm, ...formFields });
  };

  return (
    <RegistrationContext.Provider
      value={{ registrationForm, updateRegistrationForm }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
