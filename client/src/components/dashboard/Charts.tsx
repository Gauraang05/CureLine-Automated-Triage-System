import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from "recharts";

// Mock data
const hourlyData = [
  { time: "00:00", patients: 12 }, { time: "04:00", patients: 8 }, 
  { time: "08:00", patients: 25 }, { time: "12:00", patients: 45 }, 
  { time: "16:00", patients: 30 }, { time: "20:00", patients: 35 },
];

const triageData = [
  { name: "Critical", value: 5, color: "hsl(0, 84%, 60%)" },
  { name: "Urgent", value: 15, color: "hsl(25, 95%, 53%)" },
  { name: "Semi-Urgent", value: 25, color: "hsl(48, 96%, 53%)" },
  { name: "Standard", value: 40, color: "hsl(158, 64%, 52%)" },
  { name: "Non-Urgent", value: 15, color: "hsl(210, 40%, 78%)" },
];

const doctorWorkload = [
  { name: "Harshvardhan Singh (EM)", patients: 12 },
  { name: "Neha Jain (IM)", patients: 8 },
  { name: "Suraj Patel (Ortho)", patients: 5 },
  { name: "Kamal Kansal (Neuro)", patients: 15 },
];

export function ArrivalTrendsChart() {
  return (
    <Card className="col-span-full lg:col-span-2 medical-card">
      <CardHeader>
        <CardTitle className="text-lg">Patients per Hour (Today)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(var(--border))" }} />
            <Line type="monotone" dataKey="patients" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function TriageDistributionChart() {
  return (
    <Card className="col-span-full lg:col-span-1 medical-card">
      <CardHeader>
        <CardTitle className="text-lg">Triage Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={triageData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {triageData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: "8px" }} />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function DoctorWorkloadChart() {
  return (
    <Card className="col-span-full lg:col-span-3 medical-card">
      <CardHeader>
        <CardTitle className="text-lg">Doctor Workload (Active Patients)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={doctorWorkload} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={120} />
            <Tooltip cursor={{ fill: "hsl(var(--muted))" }} contentStyle={{ borderRadius: "8px" }} />
            <Bar dataKey="patients" fill="hsl(var(--secondary))" radius={[0, 4, 4, 0]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
