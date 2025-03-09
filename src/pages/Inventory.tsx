
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import InventoryTable from "@/components/inventory/InventoryTable";
import InventoryForm from "@/components/inventory/InventoryForm";
import { STOCK_ITEMS, CATEGORIES } from "@/lib/data";
import { StockItem } from "@/lib/data";

const Inventory: React.FC = () => {
  const [items, setItems] = useState<StockItem[]>(STOCK_ITEMS);
  const [formOpen, setFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<StockItem | undefined>(undefined);
  const { toast } = useToast();

  const handleOpenForm = (item?: StockItem) => {
    setEditingItem(item);
    setFormOpen(true);
  };

  const handleSubmit = (data: StockItem) => {
    if (data.id) {
      // Update existing item
      setItems(items.map(item => item.id === data.id ? { ...data, lastUpdated: new Date().toISOString().split('T')[0] } : item));
      toast({
        title: "Item atualizado",
        description: `${data.name} foi atualizado com sucesso.`,
      });
    } else {
      // Add new item
      const newItem = {
        ...data,
        id: Math.random().toString(36).substring(2, 9),
        lastUpdated: new Date().toISOString().split('T')[0],
      };
      setItems([...items, newItem]);
      toast({
        title: "Item adicionado",
        description: `${data.name} foi adicionado ao inventário.`,
      });
    }
  };

  const handleDelete = (id: string) => {
    const itemToDelete = items.find(item => item.id === id);
    setItems(items.filter(item => item.id !== id));
    
    if (itemToDelete) {
      toast({
        title: "Item removido",
        description: `${itemToDelete.name} foi removido do inventário.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Inventário</h2>
        <p className="text-muted-foreground mt-1">
          Gerencie todos os itens do estoque de sua fábrica de bordados.
        </p>
      </div>
      
      <InventoryTable
        items={items}
        onEdit={handleOpenForm}
        onDelete={handleDelete}
        onAdd={() => handleOpenForm()}
      />
      
      <InventoryForm
        open={formOpen}
        onOpenChange={setFormOpen}
        onSubmit={handleSubmit}
        initialData={editingItem}
        categories={CATEGORIES}
      />
    </div>
  );
};

export default Inventory;
