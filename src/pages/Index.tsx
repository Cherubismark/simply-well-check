import { useState } from "react";
import { HealthForm } from "@/components/HealthForm";
import { HealthResults } from "@/components/HealthResults";
import { WellnessTips } from "@/components/WellnessTips";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft } from "lucide-react";

interface HealthData {
  age: number;
  weight: number;
  height: number;
  gender: string;
  activityLevel: string;
}

const Index = () => {
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleHealthSubmit = (data: HealthData) => {
    setHealthData(data);
    setShowResults(true);
  };

  const handleReset = () => {
    setHealthData(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">HealthChecker</h1>
                <p className="text-sm text-muted-foreground">Your wellness companion</p>
              </div>
            </div>
            {showResults && (
              <Button 
                variant="outline" 
                onClick={handleReset}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                New Assessment
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!showResults ? (
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Check Your Health Status
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Get personalized health insights and BMI calculations with evidence-based wellness recommendations
              </p>
            </div>

            {/* Health Form */}
            <HealthForm onSubmit={handleHealthSubmit} />

            {/* Preview Tips */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">
                After your assessment, you'll receive personalized health tips
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Results Section */}
            {healthData && <HealthResults data={healthData} />}
            
            {/* Wellness Tips Section */}
            <WellnessTips />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © 2024 HealthChecker. This tool provides general information only. 
              Consult healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
