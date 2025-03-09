
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  TrendingUp, 
  Truck, 
  Users, 
  Settings,
} from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Inventário", path: "/inventory", icon: Package },
    { name: "Movimentações", path: "/stock-movements", icon: TrendingUp },
    { name: "Fornecedores", path: "/suppliers", icon: Truck },
    { name: "Usuários", path: "/users", icon: Users },
    { name: "Configurações", path: "/settings", icon: Settings },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 z-50 w-[280px] h-full bg-sidebar shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between border-b border-sidebar-border/10">
            <div className="font-semibold text-lg text-sidebar-foreground">
              EmbStitch<span className="font-bold text-white">Master</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-sidebar-foreground">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="py-4 flex-1 overflow-y-auto">
            <nav className="px-2 space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center px-3 py-3 text-sidebar-foreground rounded-md transition-all duration-200
                    ${isActive 
                      ? "bg-white/10 font-medium" 
                      : "hover:bg-white/5"
                    }
                  `}
                  onClick={onClose}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>
          
          <div className="p-4 border-t border-sidebar-border/10">
            <Button 
              variant="outline" 
              className="w-full justify-start bg-white/10 text-sidebar-foreground border-white/20 hover:bg-white/20 hover:text-white"
            >
              <span>Sair</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
