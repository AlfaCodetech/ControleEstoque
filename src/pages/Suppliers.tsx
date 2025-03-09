
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SupplierTable from "@/components/suppliers/SupplierTable";
import SupplierForm from "@/components/suppliers/SupplierForm";
import { SUPPLIERS, CATEGORIES } from "@/lib/data";
import { Supplier } from "@/lib/data";

const Suppliers: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>(SUPPLIERS);
  const [formOpen, setFormOpen] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState<Supplier | undefined>(undefined);
  const { toast } = useToast();

  const handleOpenForm = (supplier?: Supplier) => {
    setEditingSupplier(supplier);
    setFormOpen(true);
  };

  const handleSubmit = (data: Supplier) => {
    if (data.id) {
      // Update existing supplier
      setSuppliers(suppliers.map(supplier => 
        supplier.id === data.id ? { ...data, lastOrder: supplier.lastOrder } : supplier
      ));
      toast({
        title: "Fornecedor atualizado",
        description: `${data.name} foi atualizado com sucesso.`,
      });
    } else {
      // Add new supplier
      const newSupplier = {
        ...data,
        id: Math.random().toString(36).substring(2, 9),
        lastOrder: new Date().toISOString().split('T')[0],
      };
      setSuppliers([...suppliers, newSupplier]);
      toast({
        title: "Fornecedor adicionado",
        description: `${data.name} foi adicionado com sucesso.`,
      });
    }
    setFormOpen(false);
  };

  const handleDelete = (id: string) => {
    const supplierToDelete = suppliers.find(supplier => supplier.id === id);
    setSuppliers(suppliers.filter(supplier => supplier.id !== id));
    
    if (supplierToDelete) {
      toast({
        title: "Fornecedor removido",
        description: `${supplierToDelete.name} foi removido com sucesso.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Fornecedores</h2>
        <p className="text-muted-foreground mt-1">
          Gerencie todos os fornecedores para sua fábrica de bordados.
        </p>
      </div>
      
      <SupplierTable
        suppliers={suppliers}
        onEdit={handleOpenForm}
        onDelete={handleDelete}
        onAdd={() => handleOpenForm()}
      />
      
      <SupplierForm
        open={formOpen}
        onOpenChange={setFormOpen}
        onSubmit={handleSubmit}
        initialData={editingSupplier}
        categories={CATEGORIES}
      />
    </div>
  );
};

export default Suppliers;
