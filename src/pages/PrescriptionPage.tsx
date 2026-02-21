import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, Camera, FileText, ShoppingCart, ExternalLink, Pill, MapPin, X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { matchMedicinesFromText, type MedicineInfo } from "@/lib/medicines";

const PrescriptionPage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [manualText, setManualText] = useState("");
  const [matchedMeds, setMatchedMeds] = useState<MedicineInfo[]>([]);
  const [analyzed, setAnalyzed] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const analyze = () => {
    // Match medicines from manually entered text
    const meds = matchMedicinesFromText(manualText);
    setMatchedMeds(meds);
    setAnalyzed(true);
  };

  const clearAll = () => {
    setImage(null);
    setManualText("");
    setMatchedMeds([]);
    setAnalyzed(false);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Prescription Upload</h1>
            <p className="text-muted-foreground">Upload your prescription to find medicines & buy online</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Upload Section */}
          <div className="space-y-6">
            {/* Image Upload */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="mb-4 font-semibold text-card-foreground flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" /> Upload Prescription Image
              </h3>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
              {!image ? (
                <div
                  onClick={() => fileRef.current?.click()}
                  className="flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed border-border bg-secondary/30 p-10 transition-colors hover:border-primary/50 hover:bg-secondary/50"
                >
                  <Upload className="h-10 w-10 text-muted-foreground" />
                  <p className="text-sm font-medium text-muted-foreground">Click to upload or drag & drop</p>
                  <p className="text-xs text-muted-foreground">Supports JPG, PNG, PDF</p>
                </div>
              ) : (
                <div className="relative">
                  <img src={image} alt="Prescription" className="w-full rounded-lg border border-border" />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() => setImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Manual Text Entry */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="mb-4 font-semibold text-card-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Enter Medicine Names from Prescription
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Type the medicine names from your prescription (one per line or comma-separated):
              </p>
              <Textarea
                placeholder="e.g., Metformin 500mg, Atorvastatin 10mg, Aspirin 75mg..."
                value={manualText}
                onChange={(e) => setManualText(e.target.value)}
                rows={4}
                className="mb-4"
              />
              <div className="flex gap-3">
                <Button
                  onClick={analyze}
                  disabled={!manualText.trim()}
                  className="gradient-primary border-0 text-primary-foreground"
                >
                  <Pill className="mr-2 h-4 w-4" /> Find Medicines
                </Button>
                <Button variant="outline" onClick={clearAll}>Clear All</Button>
              </div>
            </div>

            {/* Nearby Pharmacies */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="mb-4 font-semibold text-card-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Nearby Medical Stores
              </h3>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60886.72!2d78.45!3d17.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spharmacy+medical+store+near+me!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nearby Pharmacies"
                />
              </div>
              <div className="mt-3 space-y-2">
                <a
                  href="https://www.google.com/maps/search/pharmacy+near+me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-secondary p-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  Search Pharmacies Near You
                  <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
                </a>
                <a
                  href="https://www.google.com/maps/search/apollo+pharmacy+near+me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-secondary p-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  <span>⚕️</span> Apollo Pharmacy Near You
                  <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
                </a>
                <a
                  href="https://www.google.com/maps/search/medplus+pharmacy+near+me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-secondary p-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  <span>🏥</span> MedPlus Near You
                  <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div>
            {analyzed && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">
                  {matchedMeds.length > 0
                    ? `✅ ${matchedMeds.length} Medicine(s) Found`
                    : "No matches found"}
                </h2>

                {matchedMeds.length === 0 && (
                  <div className="rounded-xl border border-border bg-card p-8 text-center shadow-card">
                    <ImageIcon className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      No medicines matched. Try entering names like "Metformin", "Aspirin", "Atorvastatin", etc.
                    </p>
                  </div>
                )}

                {matchedMeds.map((med) => (
                  <div key={med.name} className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-card-foreground">{med.name}</h3>
                          <p className="text-xs text-muted-foreground">{med.genericName}</p>
                        </div>
                        <Badge variant="secondary">{med.category}</Badge>
                      </div>

                      {/* Prescription */}
                      <div className="my-3 rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <p className="text-xs font-semibold text-primary mb-1 flex items-center gap-1">
                          <FileText className="h-3 w-3" /> Doctor's Prescription
                        </p>
                        <pre className="whitespace-pre-wrap text-xs text-foreground font-mono">{med.prescription}</pre>
                      </div>

                      <div className="rounded-lg bg-secondary p-3 mb-3">
                        <p className="text-xs font-medium text-muted-foreground">💊 Dosage</p>
                        <p className="text-sm text-secondary-foreground">{med.dosage}</p>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Symptoms treated:</p>
                        <div className="flex flex-wrap gap-1">
                          {med.symptoms.map((s) => (
                            <span key={s} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-destructive mb-1">⚠️ Side Effects:</p>
                        <div className="flex flex-wrap gap-1">
                          {med.sideEffects.map((se) => (
                            <span key={se} className="rounded-full bg-destructive/10 px-2 py-0.5 text-xs text-destructive">{se}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Buy Links */}
                    <div className="border-t border-border bg-secondary/30 p-4">
                      <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-2">
                        <ShoppingCart className="h-3.5 w-3.5" /> Buy This Medicine Online
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
                            <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {matchedMeds.length > 0 && (
                  <div className="rounded-lg bg-destructive/5 border border-destructive/20 p-3 text-xs text-muted-foreground">
                    ⚠️ Always verify medicines with your pharmacist. Online prices may vary. Prescription medicines require a valid doctor's prescription.
                  </div>
                )}
              </motion.div>
            )}

            {!analyzed && (
              <div className="rounded-xl border border-border bg-card p-10 text-center shadow-card">
                <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">How It Works</h3>
                <ol className="text-left text-sm text-muted-foreground space-y-3 max-w-sm mx-auto">
                  <li className="flex gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">1</span>
                    Upload your prescription image for reference
                  </li>
                  <li className="flex gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">2</span>
                    Type the medicine names from the prescription
                  </li>
                  <li className="flex gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">3</span>
                    Get detailed info, buy links & nearby pharmacy locations
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrescriptionPage;
