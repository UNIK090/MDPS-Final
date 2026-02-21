import { Activity, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50 py-10">
    <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
      <div>
        <Link to="/" className="mb-3 flex items-center gap-2">
          <div className="gradient-primary rounded-lg p-2">
            <Activity className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">HealthAI</span>
        </Link>
        <p className="text-sm text-muted-foreground">
          AI-powered multi-disease prediction system leveraging machine learning for efficient healthcare diagnostics.
        </p>
      </div>
      <div>
        <h4 className="mb-3 font-semibold text-foreground">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <Link to="/predict/diabetes" className="hover:text-primary transition-colors">Diabetes Prediction</Link>
          <Link to="/predict/heart" className="hover:text-primary transition-colors">Heart Disease Prediction</Link>
          <Link to="/predict/parkinsons" className="hover:text-primary transition-colors">Parkinson's Prediction</Link>
          <Link to="/dashboard" className="hover:text-primary transition-colors">Health Dashboard</Link>
        </div>
      </div>
      <div>
        <h4 className="mb-3 font-semibold text-foreground">Contact</h4>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> healthai@project.edu</span>
          <span className="flex items-center gap-2"><Github className="h-4 w-4" /> Multi-Disease Prediction System</span>
          <span>Malla Reddy University, Telangana</span>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground px-4">
      © 2026 HealthAI — Multi-Disease Prediction System | Final Year Project
    </div>
  </footer>
);

export default Footer;
