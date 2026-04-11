import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface DashboardCardProps {
  title: string;
  icon: ReactNode;
  value: string | number;
  subtitle?: string;
  colorIndicator?: string;
  delay?: number;
}

export function DashboardCard({ title, icon, value, subtitle, colorIndicator = "bg-primary", delay = 0 }: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="relative overflow-hidden medical-card border-none hover:shadow-lg transition-all duration-300">
        <div className={`absolute top-0 left-0 w-1 h-full ${colorIndicator}`} />
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-semibold text-muted-foreground">{title}</CardTitle>
          <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground">
            {icon}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{value}</div>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1 font-medium">{subtitle}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
