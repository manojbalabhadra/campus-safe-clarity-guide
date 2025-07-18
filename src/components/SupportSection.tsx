import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock, Heart, Users, Shield } from "lucide-react";

const SupportSection = () => {
  const supportOptions = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Crisis Hotline",
      description: "24/7 immediate support for urgent situations",
      contact: "1-800-CAMPUS",
      available: "24/7",
      color: "bg-destructive/10 text-destructive"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Anonymous Chat",
      description: "Real-time support with trained counselors",
      contact: "Start Chat",
      available: "9 AM - 11 PM",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Mental Health Services",
      description: "Professional counseling and therapy services",
      contact: "counseling@campus.edu",
      available: "Mon - Fri, 8 AM - 6 PM",
      color: "bg-success/10 text-success"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Peer Support Groups",
      description: "Connect with other students in safe spaces",
      contact: "Join Groups",
      available: "Various times",
      color: "bg-warning/10 text-warning"
    }
  ];

  const resources = [
    {
      title: "Understanding Harassment",
      description: "Learn about different types of harassment and how to recognize them.",
      link: "#"
    },
    {
      title: "Mental Health Resources",
      description: "Comprehensive guide to mental health support and self-care.",
      link: "#"
    },
    {
      title: "Know Your Rights",
      description: "Understanding your rights as a student and available protections.",
      link: "#"
    },
    {
      title: "Bystander Intervention",
      description: "How to safely help others and create a supportive community.",
      link: "#"
    }
  ];

  return (
    <section id="support" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Support & Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            You're not alone. Access immediate support, resources, and professional help when you need it most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Immediate Support
            </h3>
            <div className="space-y-4">
              {supportOptions.map((option, index) => (
                <Card key={index} className="shadow-soft border hover:shadow-trust transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${option.color}`}>
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{option.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm">
                            {option.contact}
                          </Button>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {option.available}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Educational Resources
            </h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <Card key={index} className="shadow-soft border hover:shadow-trust transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{resource.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-gradient-trust border-0 shadow-trust">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Remember: You Matter</h3>
              <p className="text-muted-foreground leading-relaxed">
                Taking the step to report an issue or seek help shows incredible courage. 
                Our campus community is here to support you every step of the way. 
                Your wellbeing and safety are our top priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="hero" size="lg">
                  Get Immediate Help
                </Button>
                <Button variant="outline" size="lg">
                  Browse Resources
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SupportSection;