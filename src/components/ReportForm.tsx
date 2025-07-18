import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertTriangle, Shield, Upload, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    category: "",
    severity: "",
    location: "",
    description: "",
    anonymous: true,
    contactMethod: ""
  });

  const generateTrackingId = () => {
    return 'CS-' + Math.random().toString(36).substr(2, 8).toUpperCase();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trackingId = generateTrackingId();
    
    toast({
      title: "Report Submitted Successfully",
      description: `Your tracking ID is: ${trackingId}. Please save this for future reference.`,
    });

    // Reset form
    setFormData({
      category: "",
      severity: "",
      location: "",
      description: "",
      anonymous: true,
      contactMethod: ""
    });
  };

  const categories = [
    { value: "harassment", label: "Harassment" },
    { value: "ragging", label: "Ragging/Bullying" },
    { value: "mental-health", label: "Mental Health Support" },
    { value: "academic", label: "Academic Issues" },
    { value: "discrimination", label: "Discrimination" },
    { value: "safety", label: "Campus Safety" },
    { value: "other", label: "Other" }
  ];

  return (
    <section id="report" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Submit Anonymous Report</h2>
          <p className="text-muted-foreground">
            Your report is completely anonymous and secure. All information is encrypted and your identity is protected.
          </p>
        </div>

        <Card className="shadow-trust border-0">
          <CardHeader className="bg-gradient-trust rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-trust rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-background" />
              </div>
              <div>
                <CardTitle className="text-foreground">Secure Report Form</CardTitle>
                <CardDescription className="text-muted-foreground">
                  All fields are optional except the description
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Issue Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => setFormData({...formData, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="severity">Severity Level</Label>
                  <Select 
                    value={formData.severity} 
                    onValueChange={(value) => setFormData({...formData, severity: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - General concern</SelectItem>
                      <SelectItem value="medium">Medium - Ongoing issue</SelectItem>
                      <SelectItem value="high">High - Urgent attention needed</SelectItem>
                      <SelectItem value="critical">Critical - Immediate danger</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location (Optional)</Label>
                <Input
                  id="location"
                  placeholder="e.g., Library, Dormitory, Campus grounds"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide details about the issue. The more information you provide, the better we can help."
                  className="min-h-32"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-4">
                <Label>Reporting Preference</Label>
                <RadioGroup 
                  value={formData.anonymous ? "anonymous" : "identifiable"}
                  onValueChange={(value) => setFormData({...formData, anonymous: value === "anonymous"})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="anonymous" id="anonymous" />
                    <Label htmlFor="anonymous" className="font-normal">
                      Anonymous (Recommended) - Your identity will never be revealed
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="identifiable" id="identifiable" />
                    <Label htmlFor="identifiable" className="font-normal">
                      Allow follow-up contact - Authorities may contact you for clarification
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {!formData.anonymous && (
                <div className="space-y-2">
                  <Label htmlFor="contact">Preferred Contact Method</Label>
                  <Input
                    id="contact"
                    placeholder="Email or phone number"
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
                  />
                </div>
              )}

              <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Upload evidence (images, documents) - Optional
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Files are automatically anonymized
                </p>
              </div>

              <div className="bg-warning-light p-4 rounded-lg flex gap-3">
                <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Emergency Situations</p>
                  <p className="text-muted-foreground">
                    If you're in immediate danger, please call emergency services (911) or campus security immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" variant="hero" size="lg" className="flex-1">
                  <Send className="w-4 h-4" />
                  Submit Report
                </Button>
                <Button type="button" variant="outline" size="lg">
                  Save Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReportForm;