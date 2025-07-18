import { Button } from "@/components/ui/button";
import { Shield, Lock, MessageSquare, Clock } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-trust">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Your Voice Matters.
                <span className="block text-primary">Report Safely & Anonymously.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CampusSafe provides a secure platform for students to report sensitive issues like harassment, 
                ragging, or mental health concerns without fear. Your identity is protected, your voice is heard.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="hero" className="shadow-trust">
                <Shield className="w-5 h-5" />
                Report an Issue
              </Button>
              <Button variant="outline" size="hero">
                Track Your Report
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-trust-light rounded-lg flex items-center justify-center mx-auto">
                  <Lock className="w-6 h-6 text-trust" />
                </div>
                <h3 className="font-semibold text-sm">100% Anonymous</h3>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-success-light rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold text-sm">Secure Platform</h3>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Anonymous Chat</h3>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-warning-light rounded-lg flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <h3 className="font-semibold text-sm">24/7 Available</h3>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Safe campus environment" 
                className="w-full h-auto rounded-2xl shadow-trust"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-primary rounded-2xl opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;