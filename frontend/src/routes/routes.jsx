import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services.jsx";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contactus from "../pages/Contactus.jsx";
import Pricing from "../pages/Pricing.jsx";
import Career from "../pages/Career.jsx";
import WWD from "../pages/WWD.jsx";


export const createRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="pricingcontact" element={<Contactus />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="career" element={<Career />} />
          <Route path="whatwedo" element={<WWD />} />
        </Route>

        {/* Protected Routes */}
        <Route path="/admin" element={<MainLayout />}>
          {/* Dashboard routes */}
        </Route>
      </>
    )
  );
};
