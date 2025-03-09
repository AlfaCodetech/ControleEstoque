
import React from "react";
import { 
  CustomCard, 
  CustomCardHeader, 
  CustomCardTitle, 
  CustomCardContent 
} from "@/components/ui/CustomCard";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  className,
}) => {
  return (
    <CustomCard className={cn("h-full", className)}>
      <CustomCardHeader className="flex flex-row items-center justify-between pb-2">
        <CustomCardTitle className="text-sm font-medium">{title}</CustomCardTitle>
        <div className="rounded-full p-1.5 bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CustomCardHeader>
      <CustomCardContent>
        <div className="text-2xl font-bold mb-1">{value}</div>
        {trend && (
          <div className="flex items-center text-xs">
            <div
              className={cn(
                "flex items-center",
                trend.isPositive ? "text-green-600" : "text-red-600"
              )}
            >
              <span className="mr-1">
                {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
              </span>
            </div>
            <span className="text-muted-foreground ml-1">desde o mês passado</span>
          </div>
        )}
      </CustomCardContent>
    </CustomCard>
  );
};

export default DashboardCard;
