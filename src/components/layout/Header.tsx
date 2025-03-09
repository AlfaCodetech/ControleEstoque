
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Bell, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="w-full h-16 px-4 sm:px-6 flex items-center justify-between border-b border-border/40 bg-background/95 backdrop-blur-sm fixed top-0 z-30">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="mr-2 sm:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="font-semibold text-lg sm:text-xl tracking-tight transition-all">
          EmbStitch<span className="text-primary font-bold">Master</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="relative hidden sm:flex items-center">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar..."
            className="bg-background pl-8 pr-4 py-2 text-sm rounded-full border border-border/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 w-[180px] lg:w-[250px] transition-all"
          />
        </div>
        
        <ThemeToggle />
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
        </Button>
        
        <Button size="sm" variant="ghost" className="ml-2 flex items-center gap-2 px-3 hidden sm:flex">
          <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-medium text-sm">
            AD
          </div>
          <span className="text-sm font-medium">Admin</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
