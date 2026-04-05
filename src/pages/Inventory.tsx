import { motion } from "framer-motion";
import { Plus, Search, AlertTriangle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const inventory = [
  { id: 1, name: "Portland Cement (OPC 53)", unit: "Bags", stock: 1200, minStock: 500, price: "₹380", site: "Metro Bridge", status: "ok" },
  { id: 2, name: "TMT Steel Bars (12mm)", unit: "Tons", stock: 8, minStock: 15, price: "₹56,000/ton", site: "Highway NH-48", status: "low" },
  { id: 3, name: "River Sand (Fine)", unit: "Cu.m", stock: 45, minStock: 20, price: "₹2,800/cu.m", site: "Residential Alpha", status: "ok" },
  { id: 4, name: "Red Bricks (Class A)", unit: "Units", stock: 15000, minStock: 5000, price: "₹8/unit", site: "IT Park Phase 2", status: "ok" },
  { id: 5, name: "M-Sand (Manufactured)", unit: "Cu.m", stock: 12, minStock: 25, price: "₹1,600/cu.m", site: "Warehouse Complex", status: "low" },
  { id: 6, name: "Fly Ash Bricks", unit: "Units", stock: 3200, minStock: 3000, price: "₹6/unit", site: "Metro Bridge", status: "warning" },
  { id: 7, name: "20mm Aggregate", unit: "Cu.m", stock: 60, minStock: 30, price: "₹1,400/cu.m", site: "Highway NH-48", status: "ok" },
  { id: 8, name: "Plywood (18mm BWR)", unit: "Sheets", stock: 5, minStock: 20, price: "₹1,800/sheet", site: "Residential Alpha", status: "low" },
];

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold">Inventory</h1>
          <p className="text-sm text-muted-foreground mt-1">Track materials across all sites</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Add Material
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search materials..." className="pl-9" />
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead>Material</TableHead>
              <TableHead>Site</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead className="text-right">Min Stock</TableHead>
              <TableHead className="text-right">Unit Price</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id} className="border-border hover:bg-secondary/30 cursor-pointer">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{item.site}</TableCell>
                <TableCell className="text-right font-medium">
                  {item.stock.toLocaleString()} {item.unit}
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {item.minStock.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">{item.price}</TableCell>
                <TableCell>
                  {item.status === "low" ? (
                    <Badge variant="destructive" className="gap-1">
                      <AlertTriangle className="h-3 w-3" /> Low
                    </Badge>
                  ) : item.status === "warning" ? (
                    <Badge className="bg-warning text-warning-foreground gap-1">
                      <AlertTriangle className="h-3 w-3" /> Warning
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      In Stock
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
