export interface MedicineInfo {
  name: string;
  genericName: string;
  category: string;
  symptoms: string[];
  dosage: string;
  sideEffects: string[];
  prescription: string;
  precautions: string[];
  onlineLinks: { store: string; url: string; logo: string }[];
}

export const medicineDatabase: MedicineInfo[] = [
  {
    name: "Metformin 500mg",
    genericName: "Metformin Hydrochloride",
    category: "Antidiabetic",
    symptoms: ["High blood sugar", "Type 2 diabetes", "Insulin resistance", "Polycystic ovary syndrome"],
    dosage: "500mg twice daily with meals. May increase to 1000mg twice daily.",
    sideEffects: ["Nausea", "Diarrhea", "Stomach upset", "Metallic taste", "Vitamin B12 deficiency"],
    prescription: "Rx: Tab. Metformin 500mg\nSig: 1 tab BD (twice daily) after meals\nDuration: 30 days\nRefill: As needed\nPrescribed by: Dr. Endocrinologist",
    precautions: ["Monitor kidney function", "Avoid alcohol", "Hold before contrast dye procedures", "Take with food"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=metformin", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=metformin", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=metformin", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/metformin", logo: "⚕️" },
    ],
  },
  {
    name: "Glimepiride 2mg",
    genericName: "Glimepiride",
    category: "Sulfonylurea",
    symptoms: ["Type 2 diabetes", "High fasting blood sugar", "Elevated HbA1c"],
    dosage: "1-2mg once daily before breakfast. Max 8mg/day.",
    sideEffects: ["Hypoglycemia", "Weight gain", "Dizziness", "Nausea", "Headache"],
    prescription: "Rx: Tab. Glimepiride 2mg\nSig: 1 tab OD before breakfast\nDuration: 30 days\nPrescribed by: Dr. Diabetologist",
    precautions: ["Monitor blood sugar regularly", "Carry glucose tablets", "Avoid skipping meals"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=glimepiride", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=glimepiride", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=glimepiride", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/glimepiride", logo: "⚕️" },
    ],
  },
  {
    name: "Atorvastatin 10mg",
    genericName: "Atorvastatin Calcium",
    category: "Statin (Cholesterol Lowering)",
    symptoms: ["High cholesterol", "High LDL", "Atherosclerosis risk", "Heart disease prevention"],
    dosage: "10-40mg once daily at bedtime.",
    sideEffects: ["Muscle pain", "Headache", "Joint pain", "Digestive issues", "Elevated liver enzymes"],
    prescription: "Rx: Tab. Atorvastatin 10mg\nSig: 1 tab HS (at bedtime)\nDuration: 90 days\nPrescribed by: Dr. Cardiologist",
    precautions: ["Regular liver function tests", "Report muscle pain immediately", "Avoid grapefruit juice"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=atorvastatin", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=atorvastatin", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=atorvastatin", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/atorvastatin", logo: "⚕️" },
    ],
  },
  {
    name: "Aspirin 75mg",
    genericName: "Acetylsalicylic Acid",
    category: "Antiplatelet",
    symptoms: ["Heart attack prevention", "Blood clot prevention", "Chest pain", "Post-cardiac surgery"],
    dosage: "75-150mg once daily after food.",
    sideEffects: ["Stomach bleeding", "Gastric irritation", "Bruising", "Allergic reactions"],
    prescription: "Rx: Tab. Aspirin 75mg (Enteric Coated)\nSig: 1 tab OD after lunch\nDuration: Long-term\nPrescribed by: Dr. Cardiologist",
    precautions: ["Take after food", "Avoid with blood thinners without consultation", "Stop before surgery"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=aspirin", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=aspirin", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=aspirin", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/aspirin", logo: "⚕️" },
    ],
  },
  {
    name: "Metoprolol 50mg",
    genericName: "Metoprolol Tartrate",
    category: "Beta Blocker",
    symptoms: ["High blood pressure", "Rapid heart rate", "Angina", "Heart failure", "Arrhythmia"],
    dosage: "25-100mg twice daily.",
    sideEffects: ["Fatigue", "Dizziness", "Cold hands/feet", "Slow heart rate", "Weight gain"],
    prescription: "Rx: Tab. Metoprolol 50mg\nSig: 1 tab BD\nDuration: 30 days\nPrescribed by: Dr. Cardiologist",
    precautions: ["Do not stop suddenly", "Monitor heart rate", "Avoid in asthma patients"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=metoprolol", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=metoprolol", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=metoprolol", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/metoprolol", logo: "⚕️" },
    ],
  },
  {
    name: "Amlodipine 5mg",
    genericName: "Amlodipine Besylate",
    category: "Calcium Channel Blocker",
    symptoms: ["Hypertension", "High blood pressure", "Angina pectoris", "Coronary artery disease"],
    dosage: "5-10mg once daily.",
    sideEffects: ["Swelling of ankles", "Headache", "Flushing", "Dizziness", "Palpitations"],
    prescription: "Rx: Tab. Amlodipine 5mg\nSig: 1 tab OD morning\nDuration: 30 days\nPrescribed by: Dr. Physician",
    precautions: ["Monitor blood pressure regularly", "Report ankle swelling", "Avoid grapefruit"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=amlodipine", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=amlodipine", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=amlodipine", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/amlodipine", logo: "⚕️" },
    ],
  },
  {
    name: "Levodopa/Carbidopa 100/25mg",
    genericName: "Levodopa + Carbidopa",
    category: "Dopamine Precursor",
    symptoms: ["Parkinson's tremor", "Muscle stiffness", "Slowness of movement", "Balance problems"],
    dosage: "1 tablet three times daily. Adjust as per neurologist advice.",
    sideEffects: ["Nausea", "Dyskinesia", "Dizziness", "Orthostatic hypotension", "Vivid dreams"],
    prescription: "Rx: Tab. Levodopa/Carbidopa 100/25mg\nSig: 1 tab TDS (three times daily)\nDuration: 30 days\nPrescribed by: Dr. Neurologist",
    precautions: ["Take 30 min before meals for best absorption", "Avoid high-protein meals near dose", "Do not stop abruptly"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=levodopa+carbidopa", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=levodopa", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=levodopa", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/levodopa", logo: "⚕️" },
    ],
  },
  {
    name: "Pramipexole 0.5mg",
    genericName: "Pramipexole Dihydrochloride",
    category: "Dopamine Agonist",
    symptoms: ["Parkinson's disease", "Restless leg syndrome", "Tremor", "Rigidity"],
    dosage: "Start 0.125mg TDS, increase gradually to 0.5mg TDS.",
    sideEffects: ["Nausea", "Somnolence", "Dizziness", "Hallucinations", "Impulse control disorders"],
    prescription: "Rx: Tab. Pramipexole 0.5mg\nSig: 1 tab TDS\nDuration: 30 days\nPrescribed by: Dr. Neurologist",
    precautions: ["Gradual dose increase required", "Report unusual urges", "Avoid driving if drowsy"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=pramipexole", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=pramipexole", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=pramipexole", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/pramipexole", logo: "⚕️" },
    ],
  },
  {
    name: "Lisinopril 5mg",
    genericName: "Lisinopril",
    category: "ACE Inhibitor",
    symptoms: ["Hypertension", "Heart failure", "Post heart attack", "Diabetic kidney protection"],
    dosage: "5-20mg once daily.",
    sideEffects: ["Dry cough", "Dizziness", "Hyperkalemia", "Angioedema (rare)", "Fatigue"],
    prescription: "Rx: Tab. Lisinopril 5mg\nSig: 1 tab OD morning\nDuration: 30 days\nPrescribed by: Dr. Cardiologist",
    precautions: ["Monitor kidney function and potassium", "Avoid in pregnancy", "Stay hydrated"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=lisinopril", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=lisinopril", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=lisinopril", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/lisinopril", logo: "⚕️" },
    ],
  },
  {
    name: "Insulin Glargine (Lantus)",
    genericName: "Insulin Glargine",
    category: "Long-acting Insulin",
    symptoms: ["Type 1 diabetes", "Uncontrolled Type 2 diabetes", "Very high blood sugar", "Diabetic ketoacidosis"],
    dosage: "10-40 units subcutaneously once daily at bedtime. Adjust per blood sugar.",
    sideEffects: ["Hypoglycemia", "Weight gain", "Injection site reactions", "Lipodystrophy"],
    prescription: "Rx: Inj. Insulin Glargine 100 IU/ml\nSig: 20 units SC at bedtime\nDuration: 30 days\nPrescribed by: Dr. Endocrinologist",
    precautions: ["Rotate injection sites", "Monitor blood sugar 4 times daily", "Carry fast-acting sugar", "Store in refrigerator"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=insulin+glargine", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=insulin+glargine", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=insulin+glargine", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/insulin+glargine", logo: "⚕️" },
    ],
  },
  {
    name: "Rasagiline 1mg",
    genericName: "Rasagiline Mesylate",
    category: "MAO-B Inhibitor",
    symptoms: ["Early Parkinson's disease", "Parkinson's tremor", "Motor fluctuations"],
    dosage: "1mg once daily.",
    sideEffects: ["Headache", "Joint pain", "Nausea", "Dizziness", "Insomnia"],
    prescription: "Rx: Tab. Rasagiline 1mg\nSig: 1 tab OD morning\nDuration: 30 days\nPrescribed by: Dr. Neurologist",
    precautions: ["Avoid tyramine-rich foods", "Drug interactions with antidepressants", "Report mood changes"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=rasagiline", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=rasagiline", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=rasagiline", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/rasagiline", logo: "⚕️" },
    ],
  },
  {
    name: "Sitagliptin 100mg",
    genericName: "Sitagliptin Phosphate",
    category: "DPP-4 Inhibitor",
    symptoms: ["Type 2 diabetes", "High post-meal blood sugar", "Elevated HbA1c"],
    dosage: "100mg once daily with or without food.",
    sideEffects: ["Upper respiratory infection", "Headache", "Nasopharyngitis", "Joint pain"],
    prescription: "Rx: Tab. Sitagliptin 100mg\nSig: 1 tab OD\nDuration: 30 days\nPrescribed by: Dr. Diabetologist",
    precautions: ["Monitor kidney function", "Report joint pain", "Can be combined with metformin"],
    onlineLinks: [
      { store: "1mg", url: "https://www.1mg.com/search/all?name=sitagliptin", logo: "🏥" },
      { store: "PharmEasy", url: "https://pharmeasy.in/search/all?name=sitagliptin", logo: "💊" },
      { store: "Netmeds", url: "https://www.netmeds.com/catalogsearch/result?q=sitagliptin", logo: "🏪" },
      { store: "Apollo Pharmacy", url: "https://www.apollopharmacy.in/search-medicines/sitagliptin", logo: "⚕️" },
    ],
  },
];

export function searchMedicines(query: string): MedicineInfo[] {
  const q = query.toLowerCase();
  return medicineDatabase.filter(
    (m) =>
      m.name.toLowerCase().includes(q) ||
      m.genericName.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.symptoms.some((s) => s.toLowerCase().includes(q))
  );
}

export function getMedicinesBySymptom(symptom: string): MedicineInfo[] {
  const s = symptom.toLowerCase();
  return medicineDatabase.filter((m) =>
    m.symptoms.some((sym) => sym.toLowerCase().includes(s))
  );
}

// Common prescription medicine names for matching uploaded prescriptions
export const commonMedicineNames = medicineDatabase.map((m) => ({
  searchTerms: [
    m.name.split(" ")[0].toLowerCase(),
    m.genericName.split(" ")[0].toLowerCase(),
  ],
  medicine: m,
}));

export function matchMedicinesFromText(text: string): MedicineInfo[] {
  const lower = text.toLowerCase();
  const matched = new Set<string>();
  const results: MedicineInfo[] = [];

  commonMedicineNames.forEach(({ searchTerms, medicine }) => {
    if (!matched.has(medicine.name)) {
      for (const term of searchTerms) {
        if (lower.includes(term)) {
          matched.add(medicine.name);
          results.push(medicine);
          break;
        }
      }
    }
  });

  return results;
}
