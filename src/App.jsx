import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import LoadingScreen from "./components/LoadingScreen";
import ProtectedRoute from "./components/ProtectedRoute";

const Login           = lazy(() => import("./pages/Login/Login"));
const Dashboard       = lazy(() => import("./pages/Dashboard/Dashboard"));
const ScanDetail      = lazy(() => import("./pages/ScanDetail/ScanDetail"));
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage/PlaceholderPage"));
const NotFound        = lazy(() => import("./pages/NotFound/NotFound"));

const Protected = ({ children }) => <ProtectedRoute>{children}</ProtectedRoute>;

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/"              element={<Login />} />
            <Route path="/dashboard"     element={<Protected><Dashboard /></Protected>} />
            <Route path="/projects"      element={<Protected><PlaceholderPage /></Protected>} />
            <Route path="/scans"         element={<Protected><ScanDetail /></Protected>} />
            <Route path="/schedule"      element={<Protected><PlaceholderPage /></Protected>} />
            <Route path="/notifications" element={<Protected><PlaceholderPage /></Protected>} />
            <Route path="/settings"      element={<Protected><PlaceholderPage /></Protected>} />
            <Route path="/support"       element={<Protected><PlaceholderPage /></Protected>} />
            <Route path="/scans/:id"     element={<Protected><ScanDetail /></Protected>} />
            <Route path="/new-scan"      element={<Protected><ScanDetail /></Protected>} />
            <Route path="*"              element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
