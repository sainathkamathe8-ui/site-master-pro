import { Package, DollarSign, FileText, FolderKanban, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyExpenses = [
  { month: "Jan", amount: 45000 },
  { month: "Feb", amount: 52000 },
  { month: "Mar", amount: 48000 },
  { month: "Apr", amount: 61000 },
  { month: "May", amount: 55000 },
  { month: "Jun", amount: 67000 },
];

const budgetData = [
  { month: "Jan", budget: 60000, actual: 45000 },
  { month: "Feb", budget: 60000, actual: 52000 },
  { month: "Mar", budget: 55000, actual: 48000 },
  { month: "Apr", budget: 65000, actual: 61000 },
  { month: "May", budget: 60000, actual: 55000 },
  { month: "Jun", budget: 70000, actual: 67000 },
];

const materialUsage = [
  { name: "Cement", value: 35, color: "hsl(48, 96%, 53%)" },
  { name: "Steel", value: 25, color: "hsl(142, 71%, 45%)" },
  { name: "Sand", value: 20, color: "hsl(217, 91%, 60%)" },
  { name: "Bricks", value: 15, color: "hsl(0, 72%, 51%)" },
  { name: "Other", value: 5, color: "hsl(280, 65%, 60%)" },
];

const recentActivity = [
  { text: "500 bags of cement delivered to Site A", time: "2 hours ago", type: "delivery" },
  { text: "Invoice #1042 paid — ₹2,45,000", time: "4 hours ago", type: "payment" },
  { text: "Low stock alert: Steel bars at Site B", time: "5 hours ago", type: "alert" },
  { text: "New project 'Metro Bridge' created", time: "1 day ago", type: "project" },
  { text: "Budget exceeded for Phase 2 — Highway Project", time: "1 day ago", type: "alert" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Overview of your construction operations</p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard icon={FolderKanban} title="Active Projects" value="12" change="+2 this month" changeType="positive" />
        <StatCard icon={Package} title="Inventory Value" value="₹24.5L" change="3 low stock alerts" changeType="negative" />
        <StatCard icon={DollarSign} title="Total Expenses" value="₹3.28Cr" change="+8.2% vs last month" changeType="neutral" />
        <StatCard icon={FileText} title="Pending Invoices" value="₹8.4L" change="5 overdue" changeType="negative" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-xl p-5">
          <h3 className="font-display font-semibold mb-4">Monthly Expenses</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyExpenses}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 16%)" />
              <XAxis dataKey="month" stroke="hsl(0 0% 55%)" fontSize={12} />
              <YAxis stroke="hsl(0 0% 55%)" fontSize={12} />
              <Tooltip
                contentStyle={{ backgroundColor: "hsl(0 0% 7%)", border: "1px solid hsl(0 0% 16%)", borderRadius: "8px", color: "hsl(0 0% 95%)" }}
              />
              <Bar dataKey="amount" fill="hsl(48, 96%, 53%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card rounded-xl p-5">
          <h3 className="font-display font-semibold mb-4">Budget vs Actual</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={budgetData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 16%)" />
              <XAxis dataKey="month" stroke="hsl(0 0% 55%)" fontSize={12} />
              <YAxis stroke="hsl(0 0% 55%)" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(0 0% 7%)", border: "1px solid hsl(0 0% 16%)", borderRadius: "8px", color: "hsl(0 0% 95%)" }} />
              <Line type="monotone" dataKey="budget" stroke="hsl(48, 96%, 53%)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="actual" stroke="hsl(142, 71%, 45%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-xl p-5">
          <h3 className="font-display font-semibold mb-4">Material Consumption</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={materialUsage} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value">
                {materialUsage.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "hsl(0 0% 7%)", border: "1px solid hsl(0 0% 16%)", borderRadius: "8px", color: "hsl(0 0% 95%)" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 mt-2 justify-center">
            {materialUsage.map((m) => (
              <div key={m.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: m.color }} />
                {m.name}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card rounded-xl p-5 lg:col-span-2">
          <h3 className="font-display font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                  item.type === "alert" ? "bg-destructive/10" : item.type === "payment" ? "bg-success/10" : "bg-primary/10"
                }`}>
                  {item.type === "alert" ? (
                    <AlertTriangle className={`h-4 w-4 text-destructive`} />
                  ) : item.type === "payment" ? (
                    <TrendingUp className="h-4 w-4 text-success" />
                  ) : item.type === "delivery" ? (
                    <Package className="h-4 w-4 text-primary" />
                  ) : (
                    <FolderKanban className="h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-foreground">{item.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
