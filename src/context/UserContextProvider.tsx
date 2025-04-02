import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: 0,
    email: "",
    name: "",
    dob: "",
    mrn: "",
    matchedTrials: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

interface Props {
  children: React.ReactNode;
}

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (userContext) return userContext;
  else throw new Error("context is null");
};

export interface User {
  id: number;
  email: string;
  name: string;
  dob: string;
  mrn: string;
  matchedTrials: Trial[];
}

interface Trial {
  title: string;
  description: string;
  location: "In-person" | "Remote" | "Hybrid";
  phase: 1 | 2 | 3;
}
