import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const tools = [
    { name: "Player Details Checker", description: "Check detailed information about players" },
    { name: "Username Search", description: "Search for users by their username" },
    { name: "Agent Panel Site", description: "Access the agent control panel" },
    { name: "Players Site", description: "View and manage player information" },
    { name: "Team Marc VPN", description: "Secure your connection with our VPN service" },
    { name: "KYC Updated List", description: "View the latest Know Your Customer updates" },
    { name: "747 Official Marketing Infographics", description: "Access official marketing materials" },
    { name: "Team Marc Ads & Marketing Infographics", description: "View Team Marc specific marketing resources" },
    { name: "747 Official Portal", description: "Access blogs, promotions, and updates" },
    { name: "Forms", description: "Access and submit various forms" },
    { name: "Help", description: "Get assistance and support" },
    { name: "TMpay", description: "Manage payments and transactions" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Card className="mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Welcome to Team Marc Agents Tools</CardTitle>
          <CardDescription className="text-base md:text-lg text-white/80">
            This platform provides various tools and resources for Team Marc agents. Use the menu to navigate through different features.
          </CardDescription>
        </CardHeader>
      </Card>

      <h2 className="text-xl md:text-2xl font-semibold mb-6">Available Tools:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {tools.map((tool, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{tool.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{tool.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Access Tool
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-blue-50">
        <CardContent className="pt-6">
          <p className="text-gray-600 text-sm md:text-base">
            Select a tool from the menu to get started. If you need assistance, please refer to the Help section or contact support.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;