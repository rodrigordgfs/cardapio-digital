import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import HomePage from "../pages/home";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
