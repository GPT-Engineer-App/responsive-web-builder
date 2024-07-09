import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  Home, 
  Search, 
  Users, 
  Shield, 
  FileText, 
  Image, 
  Newspaper, 
  FileQuestion, 
  HelpCircle, 
  CreditCard 
} from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Player Details Checker",
    to: "/player-details",
    icon: <Search className="h-4 w-4" />,
  },
  {
    title: "Username Search",
    to: "/username-search",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Agent Panel Site",
    to: "/agent-panel",
    icon: <Shield className="h-4 w-4" />,
  },
  {
    title: "Players Site",
    to: "/players-site",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Team Marc VPN",
    to: "/vpn",
    icon: <Shield className="h-4 w-4" />,
  },
  {
    title: "KYC Updated List",
    to: "/kyc-list",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "747 Official Marketing Infographics",
    to: "/747-marketing",
    icon: <Image className="h-4 w-4" />,
  },
  {
    title: "Team Marc Ads & Marketing Infographics",
    to: "/team-marc-marketing",
    icon: <Image className="h-4 w-4" />,
  },
  {
    title: "747 Official Portal",
    icon: <Newspaper className="h-4 w-4" />,
    submenu: [
      { title: "Blogs", to: "/747-portal/blogs" },
      { title: "747 Agents Promotion", to: "/747-portal/agents-promotion" },
      { title: "747 Facebook Page", to: "/747-portal/facebook" },
      { title: "News & Updates", to: "/747-portal/news" },
    ],
  },
  {
    title: "Forms",
    to: "/forms",
    icon: <FileQuestion className="h-4 w-4" />,
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircle className="h-4 w-4" />,
  },
  {
    title: "TMpay",
    to: "/tmpay",
    icon: <CreditCard className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;