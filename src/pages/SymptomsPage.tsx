import { useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SymptomGroup {
  disease: string;
  color: string;
  symptoms: string[];
}

const symptomGroups: SymptomGroup[] = [
  {
    disease: "Diabetes",
    color: "text-info",
    symptoms: ["Frequent urination", "Excessive thirst", "Unexplained weight loss", "Blurred vision", "Slow healing wounds", "Fatigue", "Tingling in hands/feet", "Increased hunger"],
  },
  {
    disease: "Heart Disease",
    color: "text-destructive",
    symptoms: ["Chest pain or discomfort", "Shortness of breath", "Pain in neck/jaw/throat", "Irregular heartbeat", "Swollen legs/ankles", "Dizziness or lightheadedness", "Cold sweats", "Nausea"],
  },
  {
    disease: "Parkinson's",
    color: "text-warning",
    symptoms: ["Tremor in hands", "Slowed movement", "Rigid muscles", "Impaired posture/balance", "Loss of automatic movements", "Speech changes", "Writing changes", "Difficulty sleeping"],
  },
];

const SymptomsPage = () => {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [results, setResults] = useState<{ disease: string; count: number; total: number; color: string }[] | null>(null);

  const toggle = (s: string) => setSelected((prev) => ({ ...prev, [s]: !prev[s] }));

  const check = () => {
    const res = symptomGroups.map((g) => ({
      disease: g.disease,
      color: g.color,
      count: g.symptoms.filter((s) => selected[s]).length,
      total: g.symptoms.length,
    }));
    setResults(res.sort((a, b) => b.count - a.count));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-3 text-primary"><Stethoscope className="h-6 w-6" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Symptom Checker</h1>
            <p className="text-muted-foreground">Select your symptoms to identify potential health risks</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {symptomGroups.map((g) => (
            <div key={g.disease} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <h3 className={`mb-4 font-semibold ${g.color}`}>{g.disease} Symptoms</h3>
              <div className="space-y-3">
                {g.symptoms.map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <Checkbox id={s} checked={!!selected[s]} onCheckedChange={() => toggle(s)} />
                    <Label htmlFor={s} className="text-sm text-muted-foreground cursor-pointer">{s}</Label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Button onClick={check} size="lg" className="mt-6 gradient-primary border-0 text-primary-foreground shadow-glow">
          Check Symptoms
        </Button>

        {results && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 space-y-4">
            <h2 className="text-xl font-bold text-foreground">Results</h2>
            {results.map((r) => {
              const pct = Math.round((r.count / r.total) * 100);
              return (
                <div key={r.disease} className="rounded-lg border border-border bg-card p-4 shadow-sm flex items-center gap-4">
                  {pct >= 50 ? (
                    <AlertTriangle className={`h-6 w-6 ${r.color}`} />
                  ) : (
                    <CheckCircle className="h-6 w-6 text-success" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold ${r.color}`}>{r.disease}</span>
                      <span className="text-sm text-muted-foreground">{r.count}/{r.total} symptoms</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
            <p className="text-xs text-muted-foreground">⚠️ This is not a medical diagnosis. Please consult a healthcare professional for accurate assessment.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SymptomsPage;
