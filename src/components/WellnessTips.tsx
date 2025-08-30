import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Moon, Utensils, Dumbbell, Brain, Droplets } from "lucide-react";

export const WellnessTips = () => {
  const tips = [
    {
      category: "Exercise",
      icon: Dumbbell,
      color: "health-excellent",
      tips: [
        "Aim for 150 minutes of moderate aerobic activity weekly",
        "Include strength training exercises 2-3 times per week",
        "Take breaks from sitting every 30-60 minutes",
        "Find activities you enjoy to stay consistent"
      ]
    },
    {
      category: "Sleep",
      icon: Moon,
      color: "primary",
      tips: [
        "Get 7-9 hours of quality sleep each night",
        "Maintain a consistent sleep schedule",
        "Create a relaxing bedtime routine",
        "Avoid screens 1 hour before bedtime"
      ]
    },
    {
      category: "Nutrition",
      icon: Utensils,
      color: "health-good",
      tips: [
        "Eat a variety of colorful fruits and vegetables",
        "Choose whole grains over refined carbs",
        "Include lean proteins in every meal",
        "Limit processed foods and added sugars"
      ]
    },
    {
      category: "Hydration",
      icon: Droplets,
      color: "accent",
      tips: [
        "Drink 8-10 glasses of water daily",
        "Monitor urine color as hydration indicator",
        "Increase intake during exercise or hot weather",
        "Limit caffeine and alcohol consumption"
      ]
    },
    {
      category: "Mental Health",
      icon: Brain,
      color: "health-warning",
      tips: [
        "Practice stress management techniques",
        "Connect with friends and family regularly",
        "Take time for hobbies and relaxation",
        "Seek professional help when needed"
      ]
    },
    {
      category: "Heart Health",
      icon: Heart,
      color: "health-danger",
      tips: [
        "Monitor blood pressure regularly",
        "Maintain healthy cholesterol levels",
        "Don't smoke or use tobacco products",
        "Manage stress effectively"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Wellness Tips</h2>
        <p className="text-muted-foreground">
          Simple habits for a healthier lifestyle
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tipGroup) => {
          const Icon = tipGroup.icon;
          return (
            <Card key={tipGroup.category} className="bg-gradient-card shadow-card border-0 hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className={`w-10 h-10 bg-${tipGroup.color} rounded-full flex items-center justify-center mb-3`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg">{tipGroup.category}</CardTitle>
                <CardDescription>
                  Essential tips for {tipGroup.category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tipGroup.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-primary text-white border-0">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-semibold">Remember</h3>
          </div>
          <p className="text-white/90 leading-relaxed">
            These tips are general guidelines. Always consult with healthcare professionals 
            for personalized advice, especially if you have existing health conditions or concerns.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};