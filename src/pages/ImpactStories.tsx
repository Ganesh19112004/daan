import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ImpactStories() {
  const stories = [
    { title: "100+ Children Educated", content: "Donations helped an NGO in Mumbai provide books and tuition for underprivileged kids." },
    { title: "Flood Relief Success", content: "Clothes and food reached 500+ families in Bihar after monsoon floods." },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Impact Stories</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story, idx) => (
            <Card key={idx} className="shadow-card hover:shadow-elevated transition-all">
              <CardHeader>
                <CardTitle>{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{story.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
