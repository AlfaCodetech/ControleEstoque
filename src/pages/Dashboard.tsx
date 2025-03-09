
import React from "react";
import { Package, TrendingDown, DollarSign, Activity } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import StockSummary from "@/components/dashboard/StockSummary";
import { DASHBOARD_STATS, STOCK_SUMMARY } from "@/lib/data";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground mt-1">
          Visão geral do sistema de controle de estoque.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total de Itens"
          value={DASHBOARD_STATS.totalItems}
          icon={Package}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Itens com Estoque Baixo"
          value={DASHBOARD_STATS.lowStockItems}
          icon={TrendingDown}
          trend={{ value: 8, isPositive: false }}
        />
        <DashboardCard
          title="Valor Total em Estoque"
          value={`R$ ${DASHBOARD_STATS.totalValue.toFixed(2)}`}
          icon={DollarSign}
          trend={{ value: 5, isPositive: true }}
        />
        <DashboardCard
          title="Movimentações no Mês"
          value={DASHBOARD_STATS.movementsThisMonth}
          icon={Activity}
          trend={{ value: 3, isPositive: true }}
        />
      </div>
      
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-8 space-y-6">
          <div className="rounded-lg border overflow-hidden h-[350px] flex items-center justify-center bg-white/80 dark:bg-black/50">
            <p className="text-muted-foreground">
              Gráfico de movimentação de estoque será exibido aqui
            </p>
          </div>
        </div>
        
        <div className="md:col-span-4">
          <StockSummary items={STOCK_SUMMARY} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
