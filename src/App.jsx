import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { Overlay } from "./widgets/overlay";
import { Main } from "./pages/sitehome";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App
