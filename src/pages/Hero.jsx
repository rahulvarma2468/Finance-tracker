import Logo from "../components/Logo";
import { Button } from "../components/ui/Button"; // assuming Button import
import {
  ChartPie,
  CircleDollarSign,
  BarChartHorizontal,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Full-width header with centered logo */}
        <header 
        className="bg-card border-b border-border w-full z-50 h-12 flex items-center justify-center top-0 left-0 right-0"
            >
            <Logo />
        
        </header>

      {/* Hero Section */}
      <section className="py-20 flex-1 flex items-center bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Take control of your finances
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Track expenses, manage budgets, and achieve your financial goals with our intuitive personal finance tool.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/register")}>
                Get Started For Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/dashboard")}>
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Financial Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <ChartPie className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Track Expenses</h3>
              <p className="text-muted-foreground">
                Categorize and monitor your spending patterns with intuitive charts and reports.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <CircleDollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Budget Management</h3>
              <p className="text-muted-foreground">
                Create personalized budgets and receive alerts when you're approaching limits.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <BarChartHorizontal className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Financial Insights</h3>
              <p className="text-muted-foreground">
                Get actionable insights into your financial health with detailed analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;