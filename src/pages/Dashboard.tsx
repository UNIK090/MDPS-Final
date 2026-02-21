import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, CartesianGrid, Legend, LineChart, Line } from "recharts";
import { diabetesDataset, heartDataset } from "@/lib/diseases";

const pieData = [
  { name: "Diabetes", value: 35 },
  { name: "Heart Disease", value: 40 },
  { name: "Parkinson's", value: 25 },
];
const COLORS = ["hsl(210,80%,55%)", "hsl(0,72%,51%)", "hsl(38,92%,50%)"];

const accuracyData = [
  { model: "SVM", diabetes: 78, heart: 82, parkinsons: 87 },
  { model: "Logistic Reg.", diabetes: 80, heart: 85, parkinsons: 79 },
  { model: "Random Forest", diabetes: 84, heart: 88, parkinsons: 90 },
  { model: "KNN", diabetes: 75, heart: 78, parkinsons: 83 },
];

const trendData = [
  { month: "Jan", predictions: 120 },
  { month: "Feb", predictions: 185 },
  { month: "Mar", predictions: 240 },
  { month: "Apr", predictions: 310 },
  { month: "May", predictions: 380 },
  { month: "Jun", predictions: 450 },
];

const Dashboard = () => (
  <div className="container mx-auto px-4 py-10">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="mb-2 text-3xl font-bold text-foreground">Health Analytics Dashboard</h1>
      <p className="mb-8 text-muted-foreground">Visualizing datasets and model performance metrics</p>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Model Accuracy Comparison */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="mb-4 font-semibold text-card-foreground">Model Accuracy Comparison (%)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200,20%,88%)" />
              <XAxis dataKey="model" tick={{ fontSize: 12 }} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="diabetes" fill="hsl(210,80%,55%)" name="Diabetes" radius={[4, 4, 0, 0]} />
              <Bar dataKey="heart" fill="hsl(0,72%,51%)" name="Heart" radius={[4, 4, 0, 0]} />
              <Bar dataKey="parkinsons" fill="hsl(38,92%,50%)" name="Parkinson's" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Disease Distribution */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="mb-4 font-semibold text-card-foreground">Disease Prediction Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}%`}>
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Diabetes Scatter */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="mb-4 font-semibold text-card-foreground">Diabetes Dataset — Glucose vs BMI</h3>
          <ResponsiveContainer width="100%" height={280}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200,20%,88%)" />
              <XAxis dataKey="glucose" name="Glucose" unit=" mg/dL" tick={{ fontSize: 12 }} />
              <YAxis dataKey="bmi" name="BMI" unit=" kg/m²" tick={{ fontSize: 12 }} />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Scatter name="Diabetic" data={diabetesDataset.filter((d) => d.outcome === 1)} fill="hsl(0,72%,51%)" />
              <Scatter name="Non-Diabetic" data={diabetesDataset.filter((d) => d.outcome === 0)} fill="hsl(152,60%,42%)" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Prediction Trends */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h3 className="mb-4 font-semibold text-card-foreground">Prediction Usage Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200,20%,88%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="predictions" stroke="hsl(174,62%,38%)" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Heart Dataset Table */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card lg:col-span-2">
          <h3 className="mb-4 font-semibold text-card-foreground">Heart Disease Dataset Sample (UCI)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="p-2 text-muted-foreground">Age</th>
                  <th className="p-2 text-muted-foreground">Cholesterol</th>
                  <th className="p-2 text-muted-foreground">BP</th>
                  <th className="p-2 text-muted-foreground">Max HR</th>
                  <th className="p-2 text-muted-foreground">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {heartDataset.map((r, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="p-2 text-foreground">{r.age}</td>
                    <td className="p-2 text-foreground">{r.chol}</td>
                    <td className="p-2 text-foreground">{r.trestbps}</td>
                    <td className="p-2 text-foreground">{r.thalach}</td>
                    <td className="p-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${r.outcome ? "bg-destructive/10 text-destructive" : "bg-success/10 text-success"}`}>
                        {r.outcome ? "Positive" : "Negative"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Dashboard;
