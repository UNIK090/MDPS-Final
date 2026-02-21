// Disease prediction data, thresholds, medicines, and YouTube recommendations

export interface DiseaseField {
  name: string;
  label: string;
  min: number;
  max: number;
  step: number;
  unit: string;
  description: string;
}

export interface Medicine {
  name: string;
  type: string;
  usage: string;
}

export interface PredictionResult {
  risk: "low" | "moderate" | "high";
  score: number;
  message: string;
  medicines: Medicine[];
  youtubeVideos: { title: string; videoId: string }[];
  tips: string[];
}

// ==================== DIABETES ====================
export const diabetesFields: DiseaseField[] = [
  { name: "pregnancies", label: "Pregnancies", min: 0, max: 17, step: 1, unit: "", description: "Number of pregnancies" },
  { name: "glucose", label: "Glucose Level", min: 0, max: 200, step: 1, unit: "mg/dL", description: "Plasma glucose concentration" },
  { name: "bloodPressure", label: "Blood Pressure", min: 0, max: 122, step: 1, unit: "mmHg", description: "Diastolic blood pressure" },
  { name: "skinThickness", label: "Skin Thickness", min: 0, max: 99, step: 1, unit: "mm", description: "Triceps skin fold thickness" },
  { name: "insulin", label: "Insulin", min: 0, max: 846, step: 1, unit: "mu U/ml", description: "2-Hour serum insulin" },
  { name: "bmi", label: "BMI", min: 0, max: 67, step: 0.1, unit: "kg/m²", description: "Body mass index" },
  { name: "dpf", label: "Diabetes Pedigree Function", min: 0.078, max: 2.42, step: 0.01, unit: "", description: "Diabetes pedigree function score" },
  { name: "age", label: "Age", min: 21, max: 81, step: 1, unit: "years", description: "Age in years" },
];

export function predictDiabetes(values: Record<string, number>): PredictionResult {
  let score = 0;
  if (values.glucose > 140) score += 30;
  else if (values.glucose > 120) score += 15;
  if (values.bmi > 30) score += 20;
  else if (values.bmi > 25) score += 10;
  if (values.age > 45) score += 15;
  else if (values.age > 35) score += 8;
  if (values.bloodPressure > 90) score += 10;
  if (values.insulin > 200) score += 10;
  if (values.dpf > 0.5) score += 10;
  if (values.skinThickness > 35) score += 5;

  const risk = score >= 60 ? "high" : score >= 30 ? "moderate" : "low";

  return {
    risk, score: Math.min(score, 100),
    message: risk === "high" ? "High risk of diabetes detected. Please consult an endocrinologist immediately."
      : risk === "moderate" ? "Moderate risk. Lifestyle modifications and monitoring recommended."
      : "Low risk. Maintain a healthy lifestyle for continued wellness.",
    medicines: [
      { name: "Metformin", type: "Oral Hypoglycemic", usage: "500mg twice daily with meals" },
      { name: "Glimepiride", type: "Sulfonylurea", usage: "1-2mg once daily before breakfast" },
      { name: "Insulin Glargine", type: "Long-acting Insulin", usage: "As prescribed by endocrinologist" },
      { name: "Sitagliptin", type: "DPP-4 Inhibitor", usage: "100mg once daily" },
    ],
    youtubeVideos: [
      { title: "Understanding Diabetes - Causes & Prevention", videoId: "wZAjVQWbMlE" },
      { title: "Diabetes Diet Plan - What to Eat", videoId: "qyM_A3tDVSo" },
      { title: "Exercise for Diabetes Management", videoId: "lMKhpCpp-6U" },
    ],
    tips: [
      "Monitor blood glucose levels regularly",
      "Follow a low-glycemic index diet",
      "Exercise at least 30 minutes daily",
      "Maintain a healthy weight (BMI < 25)",
      "Stay hydrated and limit sugar intake",
    ],
  };
}

// ==================== HEART DISEASE ====================
export const heartFields: DiseaseField[] = [
  { name: "age", label: "Age", min: 20, max: 80, step: 1, unit: "years", description: "Patient age" },
  { name: "sex", label: "Sex (0=F, 1=M)", min: 0, max: 1, step: 1, unit: "", description: "Biological sex" },
  { name: "cp", label: "Chest Pain Type", min: 0, max: 3, step: 1, unit: "", description: "0=typical angina, 1=atypical, 2=non-anginal, 3=asymptomatic" },
  { name: "trestbps", label: "Resting Blood Pressure", min: 90, max: 200, step: 1, unit: "mmHg", description: "Resting blood pressure on admission" },
  { name: "chol", label: "Cholesterol", min: 100, max: 600, step: 1, unit: "mg/dL", description: "Serum cholesterol" },
  { name: "fbs", label: "Fasting Blood Sugar > 120", min: 0, max: 1, step: 1, unit: "", description: "1=true, 0=false" },
  { name: "restecg", label: "Resting ECG", min: 0, max: 2, step: 1, unit: "", description: "0=normal, 1=ST-T abnormality, 2=LV hypertrophy" },
  { name: "thalach", label: "Max Heart Rate", min: 70, max: 220, step: 1, unit: "bpm", description: "Maximum heart rate achieved" },
  { name: "exang", label: "Exercise Induced Angina", min: 0, max: 1, step: 1, unit: "", description: "1=yes, 0=no" },
  { name: "oldpeak", label: "ST Depression", min: 0, max: 6, step: 0.1, unit: "", description: "ST depression induced by exercise" },
  { name: "slope", label: "Slope of ST Segment", min: 0, max: 2, step: 1, unit: "", description: "0=upsloping, 1=flat, 2=downsloping" },
  { name: "ca", label: "Number of Major Vessels", min: 0, max: 4, step: 1, unit: "", description: "Number colored by fluoroscopy" },
  { name: "thal", label: "Thalassemia", min: 0, max: 3, step: 1, unit: "", description: "0=normal, 1=fixed defect, 2=reversible defect" },
];

export function predictHeart(values: Record<string, number>): PredictionResult {
  let score = 0;
  if (values.age > 55) score += 15;
  else if (values.age > 45) score += 8;
  if (values.sex === 1) score += 5;
  if (values.cp === 0) score += 15;
  if (values.trestbps > 140) score += 15;
  else if (values.trestbps > 130) score += 8;
  if (values.chol > 240) score += 15;
  else if (values.chol > 200) score += 8;
  if (values.fbs === 1) score += 5;
  if (values.thalach < 120) score += 10;
  if (values.exang === 1) score += 10;
  if (values.oldpeak > 2) score += 10;
  if (values.ca > 1) score += 10;

  const risk = score >= 55 ? "high" : score >= 25 ? "moderate" : "low";

  return {
    risk, score: Math.min(score, 100),
    message: risk === "high" ? "High risk of heart disease. Immediate cardiology consultation recommended."
      : risk === "moderate" ? "Moderate risk. Regular monitoring and lifestyle changes advised."
      : "Low risk. Continue heart-healthy habits.",
    medicines: [
      { name: "Aspirin", type: "Antiplatelet", usage: "75-100mg once daily" },
      { name: "Atorvastatin", type: "Statin", usage: "10-40mg once daily at bedtime" },
      { name: "Metoprolol", type: "Beta Blocker", usage: "25-100mg twice daily" },
      { name: "Lisinopril", type: "ACE Inhibitor", usage: "5-20mg once daily" },
    ],
    youtubeVideos: [
      { title: "Heart Disease Prevention - Complete Guide", videoId: "t1O4tip2lds" },
      { title: "Heart Healthy Diet Tips", videoId: "TBp2FNuaJ7w" },
      { title: "Cardio Exercises for Heart Health", videoId: "VHyGqsPOUHs" },
    ],
    tips: [
      "Monitor blood pressure and cholesterol regularly",
      "Quit smoking and limit alcohol consumption",
      "Eat a heart-healthy Mediterranean diet",
      "Exercise 150 minutes per week minimum",
      "Manage stress through meditation or yoga",
    ],
  };
}

// ==================== PARKINSON'S ====================
export const parkinsonsFields: DiseaseField[] = [
  { name: "fo", label: "MDVP:Fo (Hz)", min: 80, max: 270, step: 0.1, unit: "Hz", description: "Average vocal fundamental frequency" },
  { name: "fhi", label: "MDVP:Fhi (Hz)", min: 100, max: 600, step: 0.1, unit: "Hz", description: "Maximum vocal fundamental frequency" },
  { name: "flo", label: "MDVP:Flo (Hz)", min: 60, max: 240, step: 0.1, unit: "Hz", description: "Minimum vocal fundamental frequency" },
  { name: "jitterPercent", label: "MDVP:Jitter (%)", min: 0, max: 1, step: 0.001, unit: "%", description: "Variation in fundamental frequency" },
  { name: "shimmer", label: "MDVP:Shimmer", min: 0, max: 0.12, step: 0.001, unit: "", description: "Variation in amplitude" },
  { name: "nhr", label: "NHR", min: 0, max: 0.35, step: 0.001, unit: "", description: "Noise-to-harmonics ratio" },
  { name: "hnr", label: "HNR", min: 8, max: 35, step: 0.1, unit: "dB", description: "Harmonics-to-noise ratio" },
  { name: "rpde", label: "RPDE", min: 0.25, max: 0.7, step: 0.01, unit: "", description: "Recurrence period density entropy" },
  { name: "dfa", label: "DFA", min: 0.5, max: 0.85, step: 0.01, unit: "", description: "Detrended fluctuation analysis" },
  { name: "spread1", label: "Spread1", min: -8, max: -2, step: 0.01, unit: "", description: "Nonlinear measure of fundamental frequency" },
  { name: "spread2", label: "Spread2", min: 0, max: 0.5, step: 0.01, unit: "", description: "Nonlinear measure of fundamental frequency" },
  { name: "ppe", label: "PPE", min: 0, max: 0.6, step: 0.01, unit: "", description: "Pitch period entropy" },
];

export function predictParkinsons(values: Record<string, number>): PredictionResult {
  let score = 0;
  if (values.jitterPercent > 0.006) score += 20;
  if (values.shimmer > 0.04) score += 15;
  if (values.nhr > 0.05) score += 15;
  if (values.hnr < 20) score += 15;
  if (values.rpde > 0.5) score += 10;
  if (values.dfa > 0.7) score += 10;
  if (values.spread1 > -5) score += 10;
  if (values.ppe > 0.2) score += 10;

  const risk = score >= 55 ? "high" : score >= 25 ? "moderate" : "low";

  return {
    risk, score: Math.min(score, 100),
    message: risk === "high" ? "High risk indicators for Parkinson's disease. Neurologist consultation strongly recommended."
      : risk === "moderate" ? "Some risk indicators present. Consider further neurological evaluation."
      : "Low risk indicators. Continue regular health check-ups.",
    medicines: [
      { name: "Levodopa/Carbidopa", type: "Dopamine Precursor", usage: "As prescribed, typically 3 times daily" },
      { name: "Pramipexole", type: "Dopamine Agonist", usage: "0.125mg three times daily, gradually increased" },
      { name: "Rasagiline", type: "MAO-B Inhibitor", usage: "1mg once daily" },
      { name: "Amantadine", type: "NMDA Antagonist", usage: "100mg twice daily" },
    ],
    youtubeVideos: [
      { title: "Understanding Parkinson's Disease", videoId: "cRLB7WqX0fU" },
      { title: "Parkinson's Disease Exercises", videoId: "Rwpy3oqIcm8" },
      { title: "Living Well with Parkinson's", videoId: "U_PMnCpaJcQ" },
    ],
    tips: [
      "Engage in regular physical therapy",
      "Practice balance and coordination exercises",
      "Maintain a nutrient-rich diet with antioxidants",
      "Get adequate sleep and manage stress",
      "Join support groups for emotional well-being",
    ],
  };
}

// Sample datasets for visualization
export const diabetesDataset = [
  { glucose: 148, bmi: 33.6, age: 50, outcome: 1 },
  { glucose: 85, bmi: 26.6, age: 31, outcome: 0 },
  { glucose: 183, bmi: 23.3, age: 32, outcome: 1 },
  { glucose: 89, bmi: 28.1, age: 21, outcome: 0 },
  { glucose: 137, bmi: 43.1, age: 33, outcome: 1 },
  { glucose: 116, bmi: 25.6, age: 30, outcome: 0 },
  { glucose: 78, bmi: 31.0, age: 26, outcome: 1 },
  { glucose: 115, bmi: 35.3, age: 29, outcome: 0 },
  { glucose: 197, bmi: 30.5, age: 53, outcome: 1 },
  { glucose: 125, bmi: 32.0, age: 54, outcome: 1 },
  { glucose: 110, bmi: 27.5, age: 40, outcome: 0 },
  { glucose: 168, bmi: 38.2, age: 45, outcome: 1 },
];

export const heartDataset = [
  { age: 63, chol: 233, trestbps: 145, thalach: 150, outcome: 1 },
  { age: 37, chol: 250, trestbps: 130, thalach: 187, outcome: 1 },
  { age: 41, chol: 204, trestbps: 130, thalach: 172, outcome: 1 },
  { age: 56, chol: 236, trestbps: 120, thalach: 178, outcome: 1 },
  { age: 57, chol: 354, trestbps: 140, thalach: 163, outcome: 0 },
  { age: 57, chol: 192, trestbps: 120, thalach: 150, outcome: 0 },
  { age: 56, chol: 294, trestbps: 130, thalach: 131, outcome: 0 },
  { age: 44, chol: 263, trestbps: 120, thalach: 173, outcome: 0 },
  { age: 52, chol: 199, trestbps: 138, thalach: 169, outcome: 0 },
  { age: 67, chol: 286, trestbps: 160, thalach: 108, outcome: 1 },
];
