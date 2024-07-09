import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={cn("grid min-h-screen w-full", isMobile ? "" : "md:grid-cols-[280px_1fr]")}>
      {!isMobile && <Sidebar />}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-6 lg:h-[60px]">
          {isMobile && <MobileSidebar />}
          <h1 className="font-semibold text-lg">Team Marc Agents Tools</h1>
        </header>
        <main className="flex-grow p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-background md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          Team Marc Agents Tools
        </NavLink>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          {navItems.map((item, index) => (
            item.submenu ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {item.submenu.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex} asChild>
                      <NavLink to={subItem.to}>{subItem.title}</NavLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <SidebarNavLink key={index} to={item.to}>
                {item.icon}
                {item.title}
              </SidebarNavLink>
            )
          ))}
        </nav>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[80%] sm:w-[350px] pr-0 bg-background">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="grid gap-2 text-base font-medium mt-4 pr-6">
          {navItems.map((item, index) => (
            item.submenu ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {item.submenu.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex} asChild>
                      <NavLink to={subItem.to} onClick={() => setOpen(false)} className="w-full">
                        {subItem.title}
                      </NavLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <SidebarNavLink key={index} to={item.to} onClick={() => setOpen(false)}>
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </SidebarNavLink>
            )
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const SidebarNavLink = ({ to, children, ...props }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
    {...props}
  >
    {children}
  </NavLink>
);

export default Layout;