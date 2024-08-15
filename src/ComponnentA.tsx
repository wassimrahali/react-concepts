import  { useState, createContext } from 'react';
import ComponnentB from './ComponnentB';

// Define the type for the context
interface UserContextType {
  user: string;
}

// Create a context with a default value
export const userContext = createContext<UserContextType | undefined>(undefined);

function ComponnentA() {
  const [user, setUser] = useState("Med");

  const update = () => {
    setUser('Rahali');
  };

  return (
    <div className='box'>
      ComponnentA
      <h1>Hello {user} from the top</h1>
      <userContext.Provider value={{ user }}>
        <ComponnentB />
      </userContext.Provider>
      <button onClick={update}>Click here</button>
    </div>
  );
}

export default ComponnentA;
