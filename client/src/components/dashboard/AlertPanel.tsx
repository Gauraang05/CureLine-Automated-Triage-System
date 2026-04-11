import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Clock, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const mockAlerts = [
  { id: 1, type: "critical", message: "Critical patient arrived: Cardiac Arrest", time: "Just now" },
  { id: 2, type: "warning", message: "Aanchal Mahadevan (Cardiologist) is currently busy", time: "5 mins ago" },
  { id: 3, type: "info", message: "Average wait time increased to 22 mins", time: "15 mins ago" },
];

export function AlertPanel() {
  const [alerts] = useState(mockAlerts);

  return (
    <Card className="medical-card col-span-full border-red-100 dark:border-red-900/30 overflow-hidden">
      <CardHeader className="bg-red-50/50 dark:bg-red-900/10 pb-3 border-b">
        <CardTitle className="text-lg flex items-center gap-2 text-red-600 dark:text-red-400">
          <AlertCircle className="h-5 w-5" />
          Live Emergency Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col divide-y max-h-[250px] overflow-y-auto">
          <AnimatePresence>
            {alerts.map((alert) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`p-4 flex gap-3 items-start ${alert.type === "critical" ? "bg-red-50/30 dark:bg-red-900/5" : ""}`}
              >
                <div className="mt-0.5">
                  {alert.type === "critical" && <AlertCircle className="h-4 w-4 text-red-500" />}
                  {alert.type === "warning" && <Clock className="h-4 w-4 text-amber-500" />}
                  {alert.type === "info" && <Info className="h-4 w-4 text-blue-500" />}
                </div>
                <div className="flex-1 space-y-1">
                  <p className={`text-sm font-medium ${alert.type === "critical" ? "text-red-700 dark:text-red-400" : ""}`}>
                    {alert.message}
                  </p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
}
