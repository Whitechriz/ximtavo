
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import About from "./pages/About";
import MissionVisionValues from "./pages/MissionVisionValues";
// import Services from "./pages/Services";
// import Sectors from "./pages/Sectors";
// import Community from "./pages/Community";
// import Insights from "./pages/Insights";
// import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission-vision-values" element={<MissionVisionValues />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/community" element={<Community />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
