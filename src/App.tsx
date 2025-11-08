import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// 🏠 Core Pages
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Pending from "./pages/Pending";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";

// 👥 Role-Based Dashboards
import DonorDashboard from "./pages/donor/DonorDashboard";
import CreateDonation from "./pages/donor/CreateDonation";
import DonorDonations from "./pages/donor/DonorDonations";
import NgoDashboard from "./pages/ngo/NgoDashboard";
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

// 🔒 Auth Protection
import ProtectedRoute from "./components/ProtectedRoute";

// 📧 EmailJS Setup
import { initEmailJS } from "./lib/emailjs";

// 🌐 Public Info Pages
import HowItWorks from "./pages/HowItWorks";
import NGORegistration from "./pages/NGORegistration";
import ImpactStories from "./pages/ImpactStories";
import Volunteer from "./pages/Volunteer";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import Categories from "./pages/Categories";
import NGOs from "./pages/NGOs";
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* 🌍 Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* 📖 Informational Pages */}
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/ngo-registration" element={<NGORegistration />} />
            <Route path="/impact" element={<ImpactStories />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/faq" element={<FAQ />} />

            {/* 🙌 Donor Routes */}
            <Route
              path="/donor/dashboard"
              element={
                <ProtectedRoute allowedRoles={["donor"]}>
                  <DonorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/donor/create-donation"
              element={
                <ProtectedRoute allowedRoles={["donor"]}>
                  <CreateDonation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/donor/donations"
              element={
                <ProtectedRoute allowedRoles={["donor"]}>
                  <DonorDonations />
                </ProtectedRoute>
              }
            />
            <Route path="/categories" element={<Categories />} />
<Route path="/ngos" element={<NGOs />} />

            {/* 🏢 NGO Routes */}
            <Route
              path="/ngo/dashboard"
              element={
                <ProtectedRoute allowedRoles={["ngo"]}>
                  <NgoDashboard />
                </ProtectedRoute>
              }
            />

            {/* 🤝 Volunteer Routes */}
            <Route
              path="/volunteer/dashboard"
              element={
                <ProtectedRoute allowedRoles={["volunteer"]}>
                  <VolunteerDashboard />
                </ProtectedRoute>
              }
            />

            {/* 🛡️ Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* 🚫 Catch-All Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
