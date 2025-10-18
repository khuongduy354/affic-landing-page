import { Users, Layers, FileText, TrendingUp } from "lucide-react";

const DepartmentsSection = () => {
  const departments = [
    {
      icon: TrendingUp,
      title: "Growth Department",
      description: "AI agents that find, qualify, and convert leads together.",
    },
    {
      icon: Users,
      title: "Media Department",
      description: "Collaborative agents managing your online presence 24/7.",
    },
    {
      icon: FileText,
      title: "Content Department",
      description: "AI writers, strategists, and video creators working as one team.",
    },
    {
      icon: Layers,
      title: "Operations Department",
      description: "Behind-the-scenes AI agents keeping everything running.",
    },
  ];

  return (
    <section id="departments" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            These Aren't Templates. They're <span className="gradient-text">Elite AI Squads</span>.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            We've built "Automated Departments" for the toughest jobs in your business. Just pick what you need, click, and it's done.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl text-center border border-border transition-smooth hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4">
                <dept.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{dept.title}</h3>
              <p className="text-muted-foreground mt-2">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
