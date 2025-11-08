import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>How does DenaSetu work?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              DenaSetu connects donors, NGOs, and volunteers through a verified digital platform. 
              Donors create donation requests, and NGOs can accept and manage them. 
              Volunteers assist in the collection and delivery process.
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Is DenaSetu free to use?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Yes! DenaSetu is completely free for donors and volunteers. 
              NGOs undergo a simple document verification process to ensure authenticity.
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Can I donate money or only items?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              You can donate both! NGOs can accept monetary donations (via verified channels) 
              or physical goods like books, clothes, electronics, and essentials.
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>How are NGOs verified?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Each NGO provides valid registration documents, which are reviewed by the DenaSetu admin 
              team before being activated on the platform.
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Can I volunteer without donating?</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Absolutely! You can sign up as a volunteer and assist NGOs in pickup, delivery, 
              or event management without making a donation.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
