import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Brain, Droplets, BarChart3, Shield, Zap, ArrowRight, Activity, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { label: "Diseases Covered", value: "3+", icon: Activity },
  { label: "ML Algorithms", value: "4", icon: Zap },
  { label: "Accuracy Rate", value: "95%", icon: CheckCircle },
  { label: "Users Helped", value: "1K+", icon: Users },
];

const diseases = [
  {
    title: "Diabetes Prediction",
    description: "Analyze glucose, BMI, insulin levels and more to assess diabetes risk using Logistic Regression.",
    icon: Droplets,
    to: "/predict/diabetes",
    color: "bg-info/10 text-info",
  },
  {
    title: "Heart Disease Prediction",
    description: "Evaluate cardiac risk factors including cholesterol, blood pressure, ECG and exercise tests.",
    icon: Heart,
    to: "/predict/heart",
    color: "bg-destructive/10 text-destructive",
  },
  {
    title: "Parkinson's Prediction",
    description: "Assess neurological risk through vocal frequency analysis using SVM classification.",
    icon: Brain,
    to: "/predict/parkinsons",
    color: "bg-warning/10 text-warning",
  },
];

const features = [
  { title: "Real-Time Predictions", desc: "Instant risk assessment powered by ML algorithms", icon: Zap },
  { title: "Medicine Recommendations", desc: "Get relevant medicine suggestions based on results", icon: Shield },
  { title: "Health Analytics", desc: "Interactive charts and visualizations of health data", icon: BarChart3 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="container relative mx-auto px-4 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur">
            🔬 AI-Powered Healthcare Diagnostics
          </span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
            Multi-Disease<br />
            <span className="text-accent">Prediction System</span>
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            Leveraging machine learning algorithms to predict Diabetes, Heart Disease, and Parkinson's — enabling early detection and timely intervention.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gradient-primary border-0 text-primary-foreground shadow-glow">
              <Link to="/predict/diabetes">
                Start Prediction <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="relative -mt-12 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={item} className="glass rounded-xl p-5 text-center shadow-card">
              <s.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
              <div className="text-2xl font-bold text-foreground animate-count-up">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Diseases */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground">Disease Prediction Models</h2>
          <p className="text-muted-foreground">Select a disease to begin your health risk assessment</p>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3">
          {diseases.map((d) => (
            <motion.div key={d.title} variants={item}>
              <Link to={d.to} className="group block rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-lg hover:-translate-y-1">
                <div className={`mb-4 inline-flex rounded-lg p-3 ${d.color}`}>
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{d.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{d.description}</p>
                <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Predict Now <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground">Advanced Features</h2>
          <p className="text-muted-foreground">Built with cutting-edge ML algorithms and real healthcare datasets</p>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <motion.div key={f.title} variants={item} className="rounded-xl bg-card p-6 shadow-card">
              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Check Your Health?</h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Get instant AI-powered health risk assessments with medicine recommendations and expert video guidance.
          </p>
          <Button asChild size="lg" className="gradient-primary border-0 text-primary-foreground shadow-glow">
            <Link to="/predict/diabetes">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
