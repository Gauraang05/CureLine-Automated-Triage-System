import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const upcomingPatients = [
  {
    id: "P-1001",
    name: "Rohan Kumar",
    priority: 1,
    waitTime: "2 mins",
    status: "In Assessment",
    condition: "Chest Pain",
  },
  {
    id: "P-1002",
    name: "Prashant Jain",
    priority: 2,
    waitTime: "15 mins",
    status: "Waiting",
    condition: "Fracture",
  },
  {
    id: "P-1003",
    name: "Ashish Singh",
    priority: 2,
    waitTime: "18 mins",
    status: "Waiting",
    condition: "Head Injury",
  },
  {
    id: "P-1004",
    name: "Anant Agarwal",
    priority: 3,
    waitTime: "36 mins",
    status: "Waiting",
    condition: "Abdominal Pain",
  },
  {
    id: "P-1005",
    name: "Neha Sharma",
    priority: 4,
    waitTime: "47 mins",
    status: "Waiting",
    condition: "Sprain",
  },
];

export function QueuePreview() {
  const getPriorityColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#ff4d4d] hover:bg-[#ff4d4d]/90 text-white border-transparent";
      case 2:
        return "bg-[#ff8c1a] hover:bg-[#ff8c1a]/90 text-white border-transparent";
      case 3:
        return "bg-[#e6b800] hover:bg-[#e6b800]/90 text-white border-transparent";
      case 4:
        return "bg-[#2eb872] hover:bg-[#2eb872]/90 text-white border-transparent";
      default:
        return "bg-gray-400 hover:bg-gray-400/90 text-white border-transparent";
    }
  };

  return (
    <Card className="medical-card col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-center">
          Live Triage Queue Preview
          <Badge
            variant="outline"
            className="font-normal text-xs text-muted-foreground"
          >
            Top 5 Waiting
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Wait Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingPatients.map((patient) => (
                <TableRow
                  key={patient.id}
                  className={
                    patient.priority === 1
                      ? "bg-red-50/50 dark:bg-red-900/20"
                      : ""
                  }
                >
                  <TableCell className="font-semibold">
                    <div>{patient.name}</div>
                    <div className="text-xs font-normal text-muted-foreground">
                      {patient.condition}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={getPriorityColor(patient.priority)}
                    >
                      Level {patient.priority}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className={
                      patient.priority === 1
                        ? "text-red-600 dark:text-red-400 font-medium"
                        : ""
                    }
                  >
                    {patient.waitTime}
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${patient.status === "Waiting" ? "bg-amber-500" : "bg-blue-500 pulse-animation"}`}
                      />
                      <span className="text-sm">{patient.status}</span>
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
