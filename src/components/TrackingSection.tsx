import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TrackingSection = () => {
  const { toast } = useToast();
  const [trackingId, setTrackingId] = useState("");
  const [reportStatus, setReportStatus] = useState<any>(null);

  // Mock data for demonstration
  const mockReport = {
    id: "CS-A7B9X3K2",
    category: "Harassment",
    status: "under-review",
    submitted: "2024-01-15T10:30:00Z",
    lastUpdate: "2024-01-16T14:20:00Z",
    assignedTo: "Campus Safety Team",
    timeline: [
      { status: "submitted", date: "2024-01-15T10:30:00Z", note: "Report received and assigned case number" },
      { status: "acknowledged", date: "2024-01-15T11:15:00Z", note: "Report acknowledged by campus safety team" },
      { status: "under-review", date: "2024-01-16T09:00:00Z", note: "Investigation initiated" },
    ]
  };

  const handleTrack = () => {
    if (!trackingId.trim()) {
      toast({
        title: "Tracking ID Required",
        description: "Please enter a valid tracking ID to check your report status.",
        variant: "destructive"
      });
      return;
    }

    // Simulate tracking lookup
    if (trackingId.toUpperCase() === "CS-A7B9X3K2") {
      setReportStatus(mockReport);
    } else {
      setReportStatus(null);
      toast({
        title: "Report Not Found",
        description: "No report found with this tracking ID. Please check and try again.",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted": return "bg-blue-100 text-blue-800";
      case "acknowledged": return "bg-yellow-100 text-yellow-800";
      case "under-review": return "bg-orange-100 text-orange-800";
      case "resolved": return "bg-green-100 text-green-800";
      case "closed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted": return <Clock className="w-4 h-4" />;
      case "acknowledged": return <CheckCircle className="w-4 h-4" />;
      case "under-review": return <AlertCircle className="w-4 h-4" />;
      case "resolved": return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <section id="track" className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Track Your Report</h2>
          <p className="text-muted-foreground">
            Enter your tracking ID to check the status of your report and view updates.
          </p>
        </div>

        <Card className="shadow-trust border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Report Tracking
            </CardTitle>
            <CardDescription>
              Your tracking ID was provided when you submitted your report (e.g., CS-A7B9X3K2)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <Label htmlFor="tracking-id" className="sr-only">Tracking ID</Label>
                <Input
                  id="tracking-id"
                  placeholder="Enter your tracking ID (e.g., CS-A7B9X3K2)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="h-12"
                />
              </div>
              <Button onClick={handleTrack} variant="trust" size="lg">
                <Search className="w-4 h-4" />
                Track Report
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Try demo tracking ID: <strong>CS-A7B9X3K2</strong>
            </p>
          </CardContent>
        </Card>

        {reportStatus && (
          <Card className="shadow-trust border-0">
            <CardHeader className="bg-gradient-trust">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-foreground">Report Status</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Tracking ID: {reportStatus.id}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(reportStatus.status)}>
                  {getStatusIcon(reportStatus.status)}
                  {reportStatus.status.replace('-', ' ').toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Report Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{reportStatus.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Submitted:</span>
                      <span className="font-medium">
                        {new Date(reportStatus.submitted).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Assigned to:</span>
                      <span className="font-medium">{reportStatus.assignedTo}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <MessageSquare className="w-4 h-4" />
                      Anonymous Chat
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <AlertCircle className="w-4 h-4" />
                      Report Update
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Timeline</h4>
                <div className="space-y-4">
                  {reportStatus.timeline.map((event: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          {getStatusIcon(event.status)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-medium text-foreground capitalize">
                            {event.status.replace('-', ' ')}
                          </h5>
                          <span className="text-sm text-muted-foreground">
                            {new Date(event.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{event.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default TrackingSection;