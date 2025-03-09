
import React from "react";
import { STOCK_MOVEMENTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Plus, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const StockMovements: React.FC = () => {
  const getMovementBadge = (type: string) => {
    switch (type) {
      case "entrada":
        return <Badge className="bg-green-500">Entrada</Badge>;
      case "saída":
        return <Badge className="bg-amber-500">Saída</Badge>;
      case "ajuste":
        return <Badge variant="outline">Ajuste</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Movimentações</h2>
        <p className="text-muted-foreground mt-1">
          Registros de entrada, saída e ajustes de estoque.
        </p>
      </div>
      
      <div className="rounded-lg border overflow-hidden">
        <div className="p-4 bg-white dark:bg-black/20 border-b">
          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por item ou responsável..."
                className="pl-8 w-full sm:w-[300px]"
              />
            </div>
            
            <div className="flex gap-2">
              <div className="relative w-full sm:w-auto">
                <CalendarIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="date"
                  className="pl-8 w-full"
                />
              </div>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button size="sm" className="h-9">
                <Plus className="h-4 w-4 mr-2" />
                Nova Movimentação
              </Button>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Item</TableHead>
                <TableHead className="text-center">Tipo</TableHead>
                <TableHead className="text-right">Quantidade</TableHead>
                <TableHead>Motivo</TableHead>
                <TableHead>Responsável</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {STOCK_MOVEMENTS.map((movement) => (
                <TableRow key={movement.id}>
                  <TableCell>{movement.date}</TableCell>
                  <TableCell className="font-medium">{movement.itemName}</TableCell>
                  <TableCell className="text-center">
                    {getMovementBadge(movement.movementType)}
                  </TableCell>
                  <TableCell className={cn("text-right font-medium", {
                    "text-green-600": movement.movementType === "entrada" && movement.quantity > 0,
                    "text-red-600": movement.movementType === "saída" || movement.quantity < 0
                  })}>
                    {movement.movementType === "entrada" ? "+" : ""}
                    {movement.quantity}
                  </TableCell>
                  <TableCell>{movement.reason}</TableCell>
                  <TableCell>{movement.user}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default StockMovements;
