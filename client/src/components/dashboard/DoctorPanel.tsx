import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const doctors = [
  {
    id: 1,
    name: "Harshvardhan Singh",
    spec: "Emergency Medicine",
    status: "Available",
    patients: 1,
  },
  {
    id: 2,
    name: "Aanchal Mahadevan",
    spec: "Cardiology",
    status: "Busy",
    patients: 3,
  },
  {
    id: 3,
    name: "Neha Jain",
    spec: "Internal Medicine",
    status: "Available",
    patients: 0,
  },
  {
    id: 4,
    name: "Suraj Patel",
    spec: "Orthopedics",
    status: "Busy",
    patients: 2,
  },
  {
    id: 4,
    name: "Kamal Kansal",
    spec: "Neurology",
    status: "Busy",
    patients: 2,
  },
];

export function DoctorPanel() {
  return (
    <Card className="medical-card col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-center">
          Doctor Status
          <span className="text-xs font-normal text-muted-foreground">
            {doctors.filter((d) => d.status === "Available").length} Available
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-3 rounded-lg border bg-card/50 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {doc.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.spec}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge
                  variant={doc.status === "Available" ? "default" : "secondary"}
                  className={
                    doc.status === "Available"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }
                >
                  {doc.status}
                </Badge>
                {doc.patients > 0 && (
                  <span className="text-xs text-muted-foreground font-medium">
                    {doc.patients} patient(s)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
