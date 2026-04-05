import { motion } from "framer-motion";
import { Plus, Search, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const invoices = [
  { id: "INV-1042", supplier: "Ultratech Cement", project: "Metro Bridge", amount: "₹4,56,000", date: "2024-03-15", due: "2024-04-15", status: "paid" },
  { id: "INV-1041", supplier: "Tata Steel Dealers", project: "Highway NH-48", amount: "₹8,96,000", date: "2024-03-12", due: "2024-04-12", status: "pending" },
  { id: "INV-1040", supplier: "Rajshree Sand", project: "Residential Alpha", amount: "₹1,12,000", date: "2024-03-10", due: "2024-03-25", status: "overdue" },
  { id: "INV-1039", supplier: "Shree Brick Works", project: "IT Park Phase 2", amount: "₹96,000", date: "2024-03-08", due: "2024-04-08", status: "paid" },
  { id: "INV-1038", supplier: "Asian Paints B2B", project: "Warehouse Complex", amount: "₹2,34,000", date: "2024-03-05", due: "2024-04-05", status: "pending" },
  { id: "INV-1037", supplier: "Kajaria Tiles", project: "Residential Alpha", amount: "₹3,45,000", date: "2024-03-01", due: "2024-03-15", status: "overdue" },
  { id: "INV-1036", supplier: "Ultratech Cement", project: "Highway NH-48", amount: "₹2,28,000", date: "2024-02-28", due: "2024-03-28", status: "paid" },
];

const statusStyles: Record<string, string> = {
  paid: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  overdue: "bg-destructive/10 text-destructive",
};

export default function Invoices() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold">Invoices</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage invoices and payment tracking</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> New Invoice
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search invoices..." className="pl-9" />
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead>Invoice #</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Project</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id} className="border-border hover:bg-secondary/30">
                <TableCell className="font-medium font-display">{inv.id}</TableCell>
                <TableCell>{inv.supplier}</TableCell>
                <TableCell className="text-muted-foreground">{inv.project}</TableCell>
                <TableCell className="text-right font-medium">{inv.amount}</TableCell>
                <TableCell className="text-muted-foreground">{inv.due}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={statusStyles[inv.status]}>
                    {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
