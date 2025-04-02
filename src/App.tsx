import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Onboarding } from "./pages/Onboarding";
import { UserContextProvider } from "./context/UserContextProvider";
function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
