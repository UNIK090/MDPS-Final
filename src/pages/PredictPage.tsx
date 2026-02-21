import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle, CheckCircle, Info, Pill, Youtube, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  diabetesFields, heartFields, parkinsonsFields,
  predictDiabetes, predictHeart, predictParkinsons,
  type DiseaseField, type PredictionResult,
} from "@/lib/diseases";

const configs: Record<string, { title: string; description: string; fields: DiseaseField[]; predict: (v: Record<string, number>) => PredictionResult; color: string }> = {
  diabetes: {
    title: "Diabetes Prediction",
    description: "Enter patient health parameters from the Pima Indians Diabetes Dataset to assess risk.",
    fields: diabetesFields,
    predict: predictDiabetes,
    color: "text-info",
  },
  heart: {
    title: "Heart Disease Prediction",
    description: "Enter cardiac parameters from the UCI Heart Disease Dataset to evaluate risk.",
    fields: heartFields,
    predict: predictHeart,
    color: "text-destructive",
  },
  parkinsons: {
    title: "Parkinson's Prediction",
    description: "Enter vocal measurement parameters from the UCI Parkinson's Dataset.",
    fields: parkinsonsFields,
    predict: predictParkinsons,
    color: "text-warning",
  },
};

const riskColors = {
  low: { bg: "bg-success/10", text: "text-success", icon: CheckCircle },
  moderate: { bg: "bg-warning/10", text: "text-warning", icon: Info },
  high: { bg: "bg-destructive/10", text: "text-destructive", icon: AlertTriangle },
};

const PredictPage = () => {
  const { disease } = useParams<{ disease: string }>();
  const config = configs[disease || ""];
  const [values, setValues] = useState<Record<string, number>>({});
  const [result, setResult] = useState<PredictionResult | null>(null);

  if (!config) return <div className="p-10 text-center text-muted-foreground">Disease not found.</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(config.predict(values));
    window.scrollTo({ top: document.getElementById("results")?.offsetTop || 0, behavior: "smooth" });
  };

  const rc = result ? riskColors[result.risk] : null;
  const RiskIcon = rc?.icon || Info;

  return (
    <div className="container mx-auto px-4 py-10">
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className={`mb-2 text-3xl font-bold ${config.color}`}>{config.title}</h1>
        <p className="mb-8 text-muted-foreground">{config.description}</p>

        <form onSubmit={handleSubmit} className="mb-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {config.fields.map((f) => (
              <div key={f.name} className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <Label htmlFor={f.name} className="mb-1 block text-sm font-medium text-card-foreground">
                  {f.label} {f.unit && <span className="text-muted-foreground">({f.unit})</span>}
                </Label>
                <Input
                  id={f.name}
                  type="number"
                  step={f.step}
                  min={f.min}
                  max={f.max}
                  placeholder={`${f.min} - ${f.max}`}
                  required
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: parseFloat(e.target.value) }))}
                  className="mt-1"
                />
                <p className="mt-1 text-xs text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
          <Button type="submit" size="lg" className="mt-6 gradient-primary border-0 text-primary-foreground shadow-glow">
            Analyze & Predict
          </Button>
        </form>
      </motion.div>

      {/* Results */}
      {result && rc && (
        <motion.div id="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          {/* Risk Score */}
          <div className={`rounded-xl p-6 ${rc.bg} border border-border`}>
            <div className="flex items-center gap-3 mb-4">
              <RiskIcon className={`h-8 w-8 ${rc.text}`} />
              <div>
                <h2 className={`text-2xl font-bold capitalize ${rc.text}`}>{result.risk} Risk</h2>
                <p className="text-sm text-muted-foreground">{result.message}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Progress value={result.score} className="flex-1 h-3" />
              <span className={`text-lg font-bold ${rc.text}`}>{result.score}%</span>
            </div>
          </div>

          {/* Medicine Recommendations */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-card-foreground">
              <Pill className="h-5 w-5 text-primary" /> Medicine Recommendations
            </h3>
            <p className="mb-4 text-xs text-muted-foreground">⚠️ These are general suggestions. Always consult a qualified healthcare professional.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {result.medicines.map((m) => (
                <div key={m.name} className="rounded-lg bg-secondary p-4">
                  <div className="font-medium text-secondary-foreground">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.type}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{m.usage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube Videos */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-card-foreground">
              <Youtube className="h-5 w-5 text-destructive" /> Recommended Videos
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {result.youtubeVideos.map((v) => (
                <div key={v.videoId} className="overflow-hidden rounded-lg border border-border">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="p-3 text-sm font-medium text-card-foreground">{v.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Tips */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-card-foreground">
              <Lightbulb className="h-5 w-5 text-warning" /> Health Tips
            </h3>
            <ul className="space-y-2">
              {result.tips.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PredictPage;
