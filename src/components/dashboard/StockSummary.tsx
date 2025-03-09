
import React from "react";
import { 
  CustomCard, 
  CustomCardHeader, 
  CustomCardTitle, 
  CustomCardContent 
} from "@/components/ui/CustomCard";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface StockItem {
  id: string;
  name: string;
  quantity: number;
  threshold: number;
  totalCapacity: number;
}

interface StockSummaryProps {
  items: StockItem[];
}

const StockSummary: React.FC<StockSummaryProps> = ({ items }) => {
  const calculateStockStatus = (item: StockItem) => {
    const percentage = (item.quantity / item.totalCapacity) * 100;
    
    if (item.quantity <= item.threshold) {
      return {
        status: "low",
        color: "bg-red-500",
        label: "Baixo",
      };
    } else if (percentage > 80) {
      return {
        status: "high",
        color: "bg-green-500",
        label: "Alto",
      };
    } else {
      return {
        status: "normal",
        color: "bg-amber-500",
        label: "Normal",
      };
    }
  };

  return (
    <CustomCard className="h-full">
      <CustomCardHeader>
        <CustomCardTitle>Resumo do Estoque</CustomCardTitle>
      </CustomCardHeader>
      <CustomCardContent className="p-0">
        <div className="overflow-hidden">
          {items.map((item) => {
            const status = calculateStockStatus(item);
            const percentage = Math.round((item.quantity / item.totalCapacity) * 100);
            
            return (
              <div 
                key={item.id} 
                className="p-4 border-b border-border/30 last:border-0 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{item.name}</span>
                  <Badge variant={status.status === "low" ? "destructive" : "outline"} className="ml-2">
                    {status.label}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-1.5">
                  <span>{item.quantity} / {item.totalCapacity} unidades</span>
                  <span>{percentage}%</span>
                </div>
                <Progress 
                  value={percentage} 
                  className="h-2" 
                  indicatorClassName={status.color}
                />
              </div>
            );
          })}
        </div>
      </CustomCardContent>
    </CustomCard>
  );
};

export default StockSummary;
