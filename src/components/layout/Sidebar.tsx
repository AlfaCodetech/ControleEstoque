
import React from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  TrendingUp, 
  Truck, 
  Users, 
  Settings,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Inventário", path: "/inventory", icon: Package },
    { name: "Movimentações", path: "/stock-movements", icon: TrendingUp },
    { name: "Fornecedores", path: "/suppliers", icon: Truck },
    { name: "Usuários", path: "/users", icon: Users },
    { name: "Configurações", path: "/settings", icon: Settings },
  ];

  return (
    <div className="hidden sm:flex sm:w-64 flex-col h-screen bg-sidebar fixed left-0 top-0 z-20">
      <div className="h-16 flex items-center justify-center border-b border-sidebar-border/10">
        <div className="font-semibold text-xl text-sidebar-foreground">
          EmbStitch<span className="font-bold text-white">Master</span>
        </div>
      </div>
      
      <div className="flex-1 py-6 overflow-y-auto">
        <nav className="px-3 space-y-1">
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
          <LogOut className="h-4 w-4 mr-2" />
          <span>Sair</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
