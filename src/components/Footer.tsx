import { Shield, Mail, Phone, MapPin, Lock, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">CampusSafe</h3>
                <p className="text-xs text-background/70">Anonymous Reporting</p>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Empowering students to report safely and anonymously, 
              creating a safer campus environment for everyone.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#report" className="text-background/80 hover:text-background transition-colors">Submit Report</a></li>
              <li><a href="#track" className="text-background/80 hover:text-background transition-colors">Track Report</a></li>
              <li><a href="#support" className="text-background/80 hover:text-background transition-colors">Get Support</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Emergency Contacts</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80">Emergency: 911</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80">Campus Security: (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80">safety@campus.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Privacy & Security</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-background/80">
                <Lock className="w-4 h-4 text-success" />
                <span>End-to-end encryption</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Shield className="w-4 h-4 text-success" />
                <span>Anonymous reporting</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Heart className="w-4 h-4 text-success" />
                <span>24/7 availability</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2024 CampusSafe. All rights reserved. Committed to student safety and privacy.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;