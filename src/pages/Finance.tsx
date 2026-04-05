import { motion } from "framer-motion";
import { DollarSign, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const expenseBreakdown = [
  { category: "Materials", jan: 120000, feb: 135000, mar: 128000 },
  { category: "Labour", jan: 85000, feb: 92000, mar: 88000 },
  { category: "Equipment", jan: 45000, feb: 38000, mar: 52000 },
  { category: "Transport", jan: 22000, feb: 28000, mar: 25000 },
];

const recentExpenses = [
  { id: 1, desc: "Cement Purchase — Metro Bridge", project: "Metro Bridge", type: "Material", amount: "₹4,56,000", date: "2024-03-15" },
  { id: 2, desc: "Labour Wages — Week 12", project: "Highway NH-48", type: "Labour", amount: "₹2,12,000", date: "2024-03-14" },
  { id: 3, desc: "Crane Rental — March", project: "IT Park Phase 2", type: "Equipment", amount: "₹1,80,000", date: "2024-03-13" },
  { id: 4, desc: "Sand Transport", project: "Residential Alpha", type: "Transport", amount: "₹45,000", date: "2024-03-12" },
  { id: 5, desc: "Steel TMT Bars", project: "Warehouse Complex", type: "Material", amount: "₹8,96,000", date: "2024-03-11" },
];

export default function Finance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold">Financial Management</h1>
        <p className="text-sm text-muted-foreground mt-1">Track budgets, expenses, and cost analysis</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard icon={DollarSign} title="Total Budget" value="₹1.18 Cr" change="Across 6 projects" changeType="neutral" />
        <StatCard icon={TrendingDown} title="Total Spent" value="₹55.4L" change="47% utilized" changeType="neutral" />
        <StatCard icon={TrendingUp} title="Remaining" value="₹62.6L" change="On track" changeType="positive" />
        <StatCard icon={AlertTriangle} title="Overruns" value="2" change="Highway, Residential" changeType="negative" />
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card rounded-xl p-5">
        <h3 className="font-display font-semibold mb-4">Expense Breakdown by Category</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={expenseBreakdown}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 16%)" />
            <XAxis dataKey="category" stroke="hsl(0 0% 55%)" fontSize={12} />
            <YAxis stroke="hsl(0 0% 55%)" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: "hsl(0 0% 7%)", border: "1px solid hsl(0 0% 16%)", borderRadius: "8px", color: "hsl(0 0% 95%)" }} />
            <Legend />
            <Bar dataKey="jan" name="Jan" fill="hsl(48, 96%, 53%)" radius={[2, 2, 0, 0]} />
            <Bar dataKey="feb" name="Feb" fill="hsl(142, 71%, 45%)" radius={[2, 2, 0, 0]} />
            <Bar dataKey="mar" name="Mar" fill="hsl(217, 91%, 60%)" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-xl overflow-hidden">
        <div className="p-5 border-b border-border">
          <h3 className="font-display font-semibold">Recent Expenses</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead>Description</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentExpenses.map((exp) => (
              <TableRow key={exp.id} className="border-border hover:bg-secondary/30">
                <TableCell className="font-medium">{exp.desc}</TableCell>
                <TableCell className="text-muted-foreground">{exp.project}</TableCell>
                <TableCell><Badge variant="secondary">{exp.type}</Badge></TableCell>
                <TableCell className="text-right font-medium">{exp.amount}</TableCell>
                <TableCell className="text-muted-foreground">{exp.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
