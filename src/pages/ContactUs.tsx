import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <Card className="p-6">
          <CardHeader>
            <CardTitle>We’d Love to Hear from You!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="ganesh paswan" />
            <Input placeholder="ganesh.17478@sakec.ac.in" />
            <Textarea placeholder="connecting donors to ngo" rows={4} />
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
