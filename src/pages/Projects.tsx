import { motion } from "framer-motion";
import { Plus, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const projects = [
  { id: 1, name: "Metro Bridge Construction", location: "Mumbai", budget: "₹12.5 Cr", spent: "₹8.2 Cr", progress: 65, phase: "Structure", team: 24, status: "active" },
  { id: 2, name: "Highway Expansion NH-48", location: "Pune", budget: "₹28 Cr", spent: "₹15.4 Cr", progress: 45, phase: "Foundation", team: 38, status: "active" },
  { id: 3, name: "Residential Tower Alpha", location: "Bangalore", budget: "₹18 Cr", spent: "₹16.8 Cr", progress: 90, phase: "Finishing", team: 15, status: "active" },
  { id: 4, name: "IT Park Phase 2", location: "Hyderabad", budget: "₹45 Cr", spent: "₹5 Cr", progress: 12, phase: "Foundation", team: 42, status: "active" },
  { id: 5, name: "Shopping Mall Renovation", location: "Delhi", budget: "₹8 Cr", spent: "₹7.9 Cr", progress: 98, phase: "Finishing", team: 8, status: "completed" },
  { id: 6, name: "Warehouse Complex", location: "Chennai", budget: "₹6.5 Cr", spent: "₹2.1 Cr", progress: 30, phase: "Structure", team: 18, status: "active" },
];

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold">Projects</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your construction projects</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card rounded-xl p-5 space-y-4 hover:border-primary/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display font-semibold text-foreground">{project.name}</h3>
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {project.location}
                </div>
              </div>
              <Badge variant={project.status === "completed" ? "default" : "secondary"} className={project.status === "completed" ? "bg-success text-success-foreground" : ""}>
                {project.phase}
              </Badge>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-foreground font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-1.5" />
            </div>

            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="text-muted-foreground">Budget: </span>
                <span className="text-foreground font-medium">{project.budget}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Spent: </span>
                <span className="text-foreground font-medium">{project.spent}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" /> {project.team} team members
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
