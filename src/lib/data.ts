// Mock data for the inventory system

export interface StockItem {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  threshold: number;
  totalCapacity?: number;
  supplier: string;
  lastUpdated: string;
}

export interface StockMovement {
  id: string;
  itemId: string;
  itemName: string;
  movementType: "entrada" | "saída" | "ajuste";
  quantity: number;
  date: string;
  reason: string;
  user: string;
}

export interface StockSummaryItem {
  id: string;
  name: string;
  quantity: number;
  threshold: number;
  totalCapacity: number;
}

export interface Supplier {
  id: string;
  code: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  category: string;
  status: "ativo" | "inativo";
  lastOrder: string;
}

// Categories
export const CATEGORIES = [
  "Linhas",
  "Tecidos",
  "Agulhas",
  "Entretelas",
  "Pedrarias",
  "Acessórios",
  "Ferramentas",
  "Máquinas",
];

// Stock items data
export const STOCK_ITEMS: StockItem[] = [
  {
    id: "1",
    code: "LN001",
    name: "Linha de Bordado Dourada",
    category: "Linhas",
    quantity: 120,
    price: 15.90,
    threshold: 20,
    supplier: "LinhasFinas Ltda",
    lastUpdated: "2023-11-15",
  },
  {
    id: "2",
    code: "LN002",
    name: "Linha de Bordado Prata",
    category: "Linhas",
    quantity: 85,
    price: 15.90,
    threshold: 20,
    supplier: "LinhasFinas Ltda",
    lastUpdated: "2023-11-15",
  },
  {
    id: "3",
    code: "LN003",
    name: "Linha de Bordado Vermelha",
    category: "Linhas",
    quantity: 32,
    price: 12.50,
    threshold: 35,
    supplier: "LinhasFinas Ltda",
    lastUpdated: "2023-11-10",
  },
  {
    id: "4",
    code: "LN004",
    name: "Linha de Bordado Azul Marinho",
    category: "Linhas",
    quantity: 15,
    price: 12.50,
    threshold: 20,
    supplier: "LinhasFinas Ltda",
    lastUpdated: "2023-11-10",
  },
  {
    id: "5",
    code: "LN005",
    name: "Linha de Bordado Verde Esmeralda",
    category: "Linhas",
    quantity: 5,
    price: 14.90,
    threshold: 15,
    supplier: "LinhasFinas Ltda",
    lastUpdated: "2023-10-05",
  },
  {
    id: "6",
    code: "TC001",
    name: "Tecido Canvas Branco",
    category: "Tecidos",
    quantity: 450,
    price: 28.90,
    threshold: 100,
    supplier: "TecidosPro S.A",
    lastUpdated: "2023-11-20",
  },
  {
    id: "7",
    code: "TC002",
    name: "Tecido Canvas Preto",
    category: "Tecidos",
    quantity: 320,
    price: 28.90,
    threshold: 100,
    supplier: "TecidosPro S.A",
    lastUpdated: "2023-11-20",
  },
  {
    id: "8",
    code: "AG001",
    name: "Agulha para Bordado #12",
    category: "Agulhas",
    quantity: 250,
    price: 0.75,
    threshold: 50,
    supplier: "AcessóriosBorda Ltda",
    lastUpdated: "2023-11-01",
  },
  {
    id: "9",
    code: "PE001",
    name: "Pedraria Cristal 3mm",
    category: "Pedrarias",
    quantity: 1800,
    price: 0.15,
    threshold: 500,
    supplier: "PedrariasBrilho Ltda",
    lastUpdated: "2023-10-25",
  },
  {
    id: "10",
    code: "EN001",
    name: "Entretela Adesiva Leve",
    category: "Entretelas",
    quantity: 180,
    price: 8.90,
    threshold: 40,
    supplier: "TecidosPro S.A",
    lastUpdated: "2023-11-18",
  },
];

// Stock movements data
export const STOCK_MOVEMENTS: StockMovement[] = [
  {
    id: "m1",
    itemId: "1",
    itemName: "Linha de Bordado Dourada",
    movementType: "entrada",
    quantity: 50,
    date: "2023-11-15",
    reason: "Compra de fornecedor",
    user: "Ana Silva",
  },
  {
    id: "m2",
    itemId: "6",
    itemName: "Tecido Canvas Branco",
    movementType: "entrada",
    quantity: 200,
    date: "2023-11-20",
    reason: "Compra de fornecedor",
    user: "Ana Silva",
  },
  {
    id: "m3",
    itemId: "4",
    itemName: "Linha de Bordado Azul Marinho",
    movementType: "saída",
    quantity: 8,
    date: "2023-11-21",
    reason: "Produção #JO9821",
    user: "Carlos Mendes",
  },
  {
    id: "m4",
    itemId: "5",
    itemName: "Linha de Bordado Verde Esmeralda",
    movementType: "saída",
    quantity: 10,
    date: "2023-11-22",
    reason: "Produção #JO9825",
    user: "Carlos Mendes",
  },
  {
    id: "m5",
    itemId: "9",
    itemName: "Pedraria Cristal 3mm",
    movementType: "saída",
    quantity: 200,
    date: "2023-11-22",
    reason: "Produção #JO9827",
    user: "Maria Souza",
  },
  {
    id: "m6",
    itemId: "7",
    itemName: "Tecido Canvas Preto",
    movementType: "ajuste",
    quantity: -5,
    date: "2023-11-23",
    reason: "Correção de inventário",
    user: "João Oliveira",
  },
];

// Stock summary data (for dashboard)
export const STOCK_SUMMARY: StockSummaryItem[] = [
  {
    id: "1",
    name: "Linha de Bordado Dourada",
    quantity: 120,
    threshold: 20,
    totalCapacity: 150,
  },
  {
    id: "3",
    name: "Linha de Bordado Vermelha",
    quantity: 32,
    threshold: 35,
    totalCapacity: 150,
  },
  {
    id: "4",
    name: "Linha de Bordado Azul Marinho",
    quantity: 15,
    threshold: 20,
    totalCapacity: 150,
  },
  {
    id: "5",
    name: "Linha de Bordado Verde Esmeralda",
    quantity: 5,
    threshold: 15,
    totalCapacity: 150,
  },
  {
    id: "6",
    name: "Tecido Canvas Branco",
    quantity: 450,
    threshold: 100,
    totalCapacity: 500,
  },
];

// Suppliers data
export const SUPPLIERS: Supplier[] = [
  {
    id: "1",
    code: "FOR001",
    name: "LinhasFinas Ltda",
    contact: "Maria Silva",
    email: "contato@linhasfinas.com.br",
    phone: "(11) 3456-7890",
    address: "Rua das Linhas, 123 - São Paulo, SP",
    category: "Linhas",
    status: "ativo",
    lastOrder: "2023-11-15",
  },
  {
    id: "2",
    code: "FOR002",
    name: "TecidosPro S.A",
    contact: "João Teixeira",
    email: "vendas@tecidospro.com.br",
    phone: "(11) 2345-6789",
    address: "Av. dos Tecidos, 456 - São Paulo, SP",
    category: "Tecidos",
    status: "ativo",
    lastOrder: "2023-11-20",
  },
  {
    id: "3",
    code: "FOR003",
    name: "AcessóriosBorda Ltda",
    contact: "Ana Pereira",
    email: "comercial@acessoriosborda.com.br",
    phone: "(11) 3567-8901",
    address: "Rua Bordados, 789 - São Paulo, SP",
    category: "Acessórios",
    status: "ativo",
    lastOrder: "2023-11-01",
  },
  {
    id: "4",
    code: "FOR004",
    name: "PedrariasBrilho Ltda",
    contact: "Carlos Souza",
    email: "vendas@pedrariasbrilho.com.br",
    phone: "(11) 4567-8912",
    address: "Av. das Pedrarias, 321 - São Paulo, SP",
    category: "Pedrarias",
    status: "inativo",
    lastOrder: "2023-10-25",
  },
  {
    id: "5",
    code: "FOR005",
    name: "MáquinasBorda S.A",
    contact: "Roberta Gomes",
    email: "comercial@maquinasborda.com.br",
    phone: "(11) 5678-9012",
    address: "Rua das Máquinas, 654 - São Paulo, SP",
    category: "Máquinas",
    status: "ativo",
    lastOrder: "2023-09-30",
  },
];

// Dashboard statistics
export const DASHBOARD_STATS = {
  totalItems: STOCK_ITEMS.length,
  totalValue: STOCK_ITEMS.reduce((acc, item) => acc + (item.quantity * item.price), 0),
  lowStockItems: STOCK_ITEMS.filter(item => item.quantity <= item.threshold).length,
  movementsThisMonth: STOCK_MOVEMENTS.length,
};
