import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Pill, AlertCircle, ShoppingCart, FileText, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { searchMedicines, medicineDatabase, type MedicineInfo } from "@/lib/medicines";

const MedicineCard = ({ med }: { med: MedicineInfo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-border bg-card shadow-card overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-card-foreground text-lg">{med.name}</h3>
            <p className="text-sm text-muted-foreground">{med.genericName}</p>
          </div>
          <Badge variant="secondary" className="shrink-0">{med.category}</Badge>
        </div>

        {/* Symptoms */}
        <div className="mb-3">
          <p className="text-xs font-medium text-muted-foreground mb-1.5">Used for:</p>
          <div className="flex flex-wrap gap-1.5">
            {med.symptoms.map((s) => (
              <span key={s} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{s}</span>
            ))}
          </div>
        </div>

        {/* Dosage */}
        <div className="mb-3 rounded-lg bg-secondary p-3">
          <p className="text-xs font-medium text-muted-foreground mb-1">💊 Dosage</p>
          <p className="text-sm text-secondary-foreground">{med.dosage}</p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="mb-2 w-full justify-between text-muted-foreground"
        >
          {expanded ? "Show Less" : "View Prescription & More"}
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>

        {expanded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {/* Doctor Prescription */}
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-2">
                <FileText className="h-3.5 w-3.5" /> Medical Prescription
              </p>
              <pre className="whitespace-pre-wrap text-sm text-foreground font-mono leading-relaxed">{med.prescription}</pre>
            </div>

            {/* Side Effects */}
            <div>
              <p className="flex items-center gap-1.5 text-xs font-medium text-destructive mb-1.5">
                <AlertCircle className="h-3.5 w-3.5" /> Side Effects
              </p>
              <div className="flex flex-wrap gap-1.5">
                {med.sideEffects.map((se) => (
                  <span key={se} className="rounded-full bg-destructive/10 px-2.5 py-0.5 text-xs text-destructive">{se}</span>
                ))}
              </div>
            </div>

            {/* Precautions */}
            <div>
              <p className="text-xs font-medium text-warning mb-1.5">⚠️ Precautions</p>
              <ul className="space-y-1">
                {med.precautions.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex items-start gap-1.5">
                    <span className="text-warning mt-1">•</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>

      {/* Buy Online */}
      <div className="border-t border-border bg-secondary/30 p-4">
        <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-2">
          <ShoppingCart className="h-3.5 w-3.5" /> Buy Online
        </p>
        <div className="grid grid-cols-2 gap-2">
          {med.onlineLinks.map((link) => (
            <a
              key={link.store}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-card-foreground hover:bg-secondary transition-colors"
            >
              <span>{link.logo}</span>
              {link.store}
              <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MedicinePage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<MedicineInfo[]>(medicineDatabase);

  const handleSearch = (val: string) => {
    setQuery(val);
    if (val.trim() === "") {
      setResults(medicineDatabase);
    } else {
      setResults(searchMedicines(val));
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
            <Pill className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Medicine Guide</h1>
            <p className="text-muted-foreground">Search medicines by name, symptom, or category</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-xl">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by medicine name, symptom, or condition..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Quick symptom filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {["Diabetes", "Heart", "Parkinson", "Blood pressure", "Cholesterol"].map((s) => (
            <Button
              key={s}
              variant={query.toLowerCase() === s.toLowerCase() ? "default" : "outline"}
              size="sm"
              onClick={() => handleSearch(query === s ? "" : s)}
              className={query.toLowerCase() === s.toLowerCase() ? "gradient-primary border-0 text-primary-foreground" : ""}
            >
              {s}
            </Button>
          ))}
        </div>

        <p className="mb-4 text-sm text-muted-foreground">{results.length} medicine(s) found</p>

        <div className="grid gap-6 md:grid-cols-2">
          {results.map((med) => (
            <MedicineCard key={med.name} med={med} />
          ))}
        </div>

        {results.length === 0 && (
          <div className="rounded-xl border border-border bg-card p-10 text-center shadow-card">
            <Pill className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
            <p className="text-lg font-medium text-card-foreground">No medicines found</p>
            <p className="text-sm text-muted-foreground">Try searching with different keywords</p>
          </div>
        )}

        <div className="mt-8 rounded-lg bg-destructive/5 border border-destructive/20 p-4 text-sm text-muted-foreground">
          ⚠️ <strong>Disclaimer:</strong> This information is for educational purposes only. Always consult a qualified healthcare professional before taking any medication. Never self-medicate.
        </div>
      </motion.div>
    </div>
  );
};

export default MedicinePage;
