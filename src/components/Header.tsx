import { Shield, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-card/95 backdrop-blur-sm border-b shadow-soft sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CampusSafe</h1>
              <p className="text-xs text-muted-foreground">Anonymous Reporting Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#report" className="text-foreground hover:text-primary transition-colors">
              Report Issue
            </a>
            <a href="#track" className="text-foreground hover:text-primary transition-colors">
              Track Report
            </a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors">
              Get Support
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>Emergency: 911</span>
            </div>
            <Button variant="trust" size="sm">
              Report Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;