import {
  Activity,
  Clock,
  Users,
  ShieldAlert,
  Bed,
  HeartPulse,
  Heart,
  Stethoscope,
} from "lucide-react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import {
  ArrivalTrendsChart,
  TriageDistributionChart,
  DoctorWorkloadChart,
} from "@/components/dashboard/Charts";
import { QueuePreview } from "@/components/dashboard/QueuePreview";
import { DoctorPanel } from "@/components/dashboard/DoctorPanel";
import { AlertPanel } from "@/components/dashboard/AlertPanel";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Real-Time Hospital Monitoring
            </p>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Live System Active
          </div>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard
            title="Total Patients Today"
            value="142"
            icon={<Users className="w-5 h-5 text-blue-500" />}
            colorIndicator="bg-blue-500"
            subtitle="+12% from yesterday"
            delay={0.1}
          />
          <DashboardCard
            title="Total Beds Available"
            value="183"
            icon={<Bed className="w-5 h-5 text-blue-500" />}
            colorIndicator="bg-blue-500"
            subtitle="-5% from yesterday"
            delay={0.1}
          />
          <DashboardCard
            title="Critical Cases"
            value="5"
            icon={<ShieldAlert className="w-5 h-5 text-red-500" />}
            colorIndicator="bg-red-500"
            subtitle="2 currently in surgery"
            delay={0.2}
          />
          <DashboardCard
            title="Urgent Cases"
            value="15"
            icon={<HeartPulse className="w-5 h-5 text-orange-500" />}
            colorIndicator="bg-amber-500"
            subtitle="Average 8 min to triage"
            delay={0.3}
          />
          <DashboardCard
            title="Semi-Urgent Cases"
            value="25"
            icon={<Activity className="w-5 h-5 text-yellow-500" />}
            colorIndicator="bg-yellow-500"
            subtitle="Average 11 min to triage"
            delay={0.4}
          />
          <DashboardCard
            title="Standard Cases"
            value="40"
            icon={<Stethoscope className="w-5 h-5 text-green-500" />}
            colorIndicator="bg-green-500"
            subtitle="Average 15 min to triage"
            delay={0.5}
          />
          <DashboardCard
            title="Non-Urgent Cases"
            value="15"
            icon={<Heart className="w-5 h-5 text-gray-500" />}
            colorIndicator="bg-gray-500"
            subtitle="Average 18 min to triage"
            delay={0.6}
          />
          <DashboardCard
            title="Avg. Waiting Time"
            value="18 min"
            icon={<Clock className="w-5 h-5 text-green-500" />}
            colorIndicator="bg-green-500"
            subtitle="Under 30 min target"
            delay={0.4}
          />
        </div>

        {/* Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AlertPanel />
        </motion.div>

        {/* Charts & Advanced Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
          <ArrivalTrendsChart />
          <TriageDistributionChart />
        </div>

        {/* Lower section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          <QueuePreview />
          <DoctorPanel />
        </div>

        {/* Performance Metrics */}
        <div className="pt-2 pb-12">
          <DoctorWorkloadChart />
        </div>
      </div>
    </div>
  );
}
