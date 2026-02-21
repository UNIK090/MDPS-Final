import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const categories = [
  { label: "Underweight", range: "< 18.5", color: "text-info" },
  { label: "Normal", range: "18.5 – 24.9", color: "text-success" },
  { label: "Overweight", range: "25 – 29.9", color: "text-warning" },
  { label: "Obese", range: "≥ 30", color: "text-destructive" },
];

const BMIPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) setBmi(parseFloat((w / (h * h)).toFixed(1)));
  };

  const category = bmi
    ? bmi < 18.5 ? categories[0]
    : bmi < 25 ? categories[1]
    : bmi < 30 ? categories[2]
    : categories[3]
    : null;

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-lg">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">BMI Calculator</h1>
            <p className="text-muted-foreground">Calculate your Body Mass Index</p>
          </div>
        </div>

        <form onSubmit={calculate} className="mb-8 space-y-4 rounded-xl border border-border bg-card p-6 shadow-card">
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input id="weight" type="number" step="0.1" min="1" required value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 70" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="height">Height (cm)</Label>
            <Input id="height" type="number" step="0.1" min="1" required value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 170" className="mt-1" />
          </div>
          <Button type="submit" className="w-full gradient-primary border-0 text-primary-foreground">Calculate BMI</Button>
        </form>

        {bmi !== null && category && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="mb-4 text-center">
              <div className={`text-5xl font-bold ${category.color}`}>{bmi}</div>
              <div className={`text-lg font-semibold ${category.color}`}>{category.label}</div>
            </div>
            <Progress value={Math.min((bmi / 40) * 100, 100)} className="mb-6 h-3" />
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              {categories.map((c) => (
                <div key={c.label} className={`rounded-lg p-2 ${c.label === category.label ? "bg-secondary ring-2 ring-primary" : "bg-secondary/50"}`}>
                  <div className={`font-semibold ${c.color}`}>{c.label}</div>
                  <div className="text-muted-foreground">{c.range}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="mt-6 rounded-lg bg-secondary/50 p-4 text-sm text-muted-foreground flex gap-2">
          <Info className="h-4 w-4 shrink-0 mt-0.5" />
          BMI is a general indicator and does not account for muscle mass, bone density, or body composition. Consult a healthcare provider for a complete assessment.
        </div>
      </motion.div>
    </div>
  );
};

export default BMIPage;
