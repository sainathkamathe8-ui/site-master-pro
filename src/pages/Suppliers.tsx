import { motion } from "framer-motion";
import { Plus, Search, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const suppliers = [
  { id: 1, name: "Ultratech Cement Distributors", contact: "+91 98765 43210", email: "sales@ultratech.in", location: "Mumbai", materials: ["Cement", "Fly Ash"], orders: 24, totalValue: "₹18.5L", rating: "A" },
  { id: 2, name: "Tata Steel Dealers", contact: "+91 87654 32109", email: "orders@tatasteel.in", location: "Jamshedpur", materials: ["TMT Bars", "Steel Plates"], orders: 15, totalValue: "₹42L", rating: "A+" },
  { id: 3, name: "Rajshree Sand & Aggregates", contact: "+91 76543 21098", email: "info@rajshree.in", location: "Pune", materials: ["Sand", "Aggregate"], orders: 32, totalValue: "₹8.2L", rating: "B+" },
  { id: 4, name: "Shree Brick Works", contact: "+91 65432 10987", email: "supply@shreebricks.in", location: "Bangalore", materials: ["Bricks", "Blocks"], orders: 18, totalValue: "₹5.6L", rating: "A" },
  { id: 5, name: "Kajaria Tiles Wholesale", contact: "+91 54321 09876", email: "wholesale@kajaria.in", location: "Delhi", materials: ["Tiles", "Sanitaryware"], orders: 8, totalValue: "₹12.3L", rating: "A" },
  { id: 6, name: "Asian Paints B2B", contact: "+91 43210 98765", email: "b2b@asianpaints.in", location: "Chennai", materials: ["Paints", "Primers"], orders: 11, totalValue: "₹6.8L", rating: "A+" },
];

export default function Suppliers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold">Suppliers</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your supplier network</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Add Supplier
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search suppliers..." className="pl-9" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {suppliers.map((supplier, i) => (
          <motion.div
            key={supplier.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card rounded-xl p-5 space-y-4 hover:border-primary/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display font-semibold text-foreground">{supplier.name}</h3>
              <Badge variant="secondary" className="bg-primary/10 text-primary font-bold">{supplier.rating}</Badge>
            </div>

            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-3 w-3" /> {supplier.location}</div>
              <div className="flex items-center gap-2"><Phone className="h-3 w-3" /> {supplier.contact}</div>
              <div className="flex items-center gap-2"><Mail className="h-3 w-3" /> {supplier.email}</div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {supplier.materials.map((m) => (
                <Badge key={m} variant="secondary" className="text-[10px]">{m}</Badge>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-border">
              <span className="text-muted-foreground">{supplier.orders} orders</span>
              <span className="text-foreground font-medium">{supplier.totalValue}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
