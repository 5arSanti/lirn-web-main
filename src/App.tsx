import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToHash } from "./components/ScrollToHash";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { SiteSkin } from "./components/SiteSkin";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TornsPage } from "./pages/TornsPage";
import "./styles/site.css";

export function App() {
  return (
    <BrowserRouter basename="/lirn-web-main/">
      <ScrollToHash />
      <SiteSkin />
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/torns" element={<TornsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}
