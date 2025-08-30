import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

interface HealthData {
  age: number;
  weight: number;
  height: number;
  gender: string;
  activityLevel: string;
}

interface HealthResultsProps {
  data: HealthData;
}

export const HealthResults = ({ data }: HealthResultsProps) => {
  const calculateBMI = () => {
    const heightInMeters = data.height / 100;
    return data.weight / (heightInMeters * heightInMeters);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Underweight", color: "health-warning", icon: AlertTriangle, advice: "Consider consulting with a healthcare provider about healthy weight gain strategies." };
    if (bmi < 25) return { category: "Normal Weight", color: "health-excellent", icon: CheckCircle, advice: "Great job! Maintain your current healthy lifestyle habits." };
    if (bmi < 30) return { category: "Overweight", color: "health-warning", icon: AlertTriangle, advice: "Consider incorporating more physical activity and balanced nutrition into your routine." };
    return { category: "Obese", color: "health-danger", icon: AlertTriangle, advice: "We recommend consulting with a healthcare provider for personalized guidance." };
  };

  const calculateBMR = () => {
    // Mifflin-St Jeor Equation
    if (data.gender === "male") {
      return 10 * data.weight + 6.25 * data.height - 5 * data.age + 5;
    } else {
      return 10 * data.weight + 6.25 * data.height - 5 * data.age - 161;
    }
  };

  const getActivityMultiplier = () => {
    const multipliers = {
      "sedentary": 1.2,
      "light": 1.375,
      "moderate": 1.55,
      "active": 1.725,
      "very-active": 1.9
    };
    return multipliers[data.activityLevel as keyof typeof multipliers] || 1.2;
  };

  const bmi = calculateBMI();
  const bmiInfo = getBMICategory(bmi);
  const bmr = calculateBMR();
  const dailyCalories = Math.round(bmr * getActivityMultiplier());
  const bmiProgress = Math.min((bmi / 35) * 100, 100); // Cap at 35 BMI for progress bar

  const Icon = bmiInfo.icon;

  return (
    <div className="space-y-6">
      {/* BMI Results */}
      <Card className="bg-gradient-card shadow-elevated border-0">
        <CardHeader className="text-center">
          <div className={`mx-auto w-12 h-12 bg-${bmiInfo.color} rounded-full flex items-center justify-center mb-4`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-xl font-bold">Your BMI Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {bmi.toFixed(1)}
            </div>
            <Badge variant="secondary" className={`text-${bmiInfo.color} border-${bmiInfo.color}`}>
              {bmiInfo.category}
            </Badge>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>BMI Scale</span>
              <span>{bmi.toFixed(1)}</span>
            </div>
            <Progress value={bmiProgress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>35+</span>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Health Advice:</strong> {bmiInfo.advice}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Daily Calories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary mb-1">
              {dailyCalories}
            </div>
            <p className="text-sm text-muted-foreground">
              Estimated daily caloric needs based on your activity level
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="h-5 w-5 text-accent" />
              BMR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent mb-1">
              {Math.round(bmr)}
            </div>
            <p className="text-sm text-muted-foreground">
              Basal Metabolic Rate (calories at rest)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};