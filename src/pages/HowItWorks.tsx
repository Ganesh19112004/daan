import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">How DenaSetu Works</h1>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Join the Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Sign up as a donor, NGO, or volunteer to start contributing to local causes.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Connect with NGOs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Browse registered NGOs in your area and view their needs and initiatives.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Donate or Volunteer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Contribute funds, goods, or your time — every action helps build impact.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Track Your Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get updates from NGOs and see how your contribution made a difference.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
