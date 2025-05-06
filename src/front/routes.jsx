import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Private } from "./components/Private";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/private"
            element={
              <ProtectedRoute>
                <Private />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
