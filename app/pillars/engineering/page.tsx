import { Metadata } from 'next';
import Link from 'next/link';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import DataTable from '@/components/ui/DataTable';
import { GraduationCap, Code, Users, Trophy, Lightbulb, ArrowLeft, Check } from 'lucide-react';
import engineeringData from '@/data/engineering.json';

export const metadata: Metadata = {
  title: 'Engineering Colleges | Claude for India',
  description: 'Building Tomorrow\'s Builders - Campaign strategy for 5,875 engineering colleges and 15.98 lakh students.',
};

const campaigns = [
  {
    title: '"Code with Claude" Workshops',
    description: 'Partner with coding clubs in top 500 colleges for hands-on sessions',
    icon: Code,
  },
  {
    title: 'Claude Code Hackathons',
    description: 'Sponsor inter-college competitions showcasing AI-assisted development',
    icon: Trophy,
  },
  {
    title: 'Faculty Enablement',
    description: 'Train professors to integrate Claude in curriculum and projects',
    icon: Users,
  },
  {
    title: 'Student Ambassador Program',
    description: 'Campus champions who demonstrate Claude\'s capabilities to peers',
    icon: Lightbulb,
  },
];

const roiPoints = [
  'Improved placement rates through better project quality',
  'Enhanced coding skills and problem-solving abilities',
  'Reduced dependency on expensive lab infrastructure',
  'Better hackathon and competition performance',
  '24/7 coding mentor for students outside class hours',
];

export default function EngineeringPillarPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Back Link */}
        <Link href="/pillars" className="inline-flex items-center text-muted hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Four Pillars
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-blue-100 rounded-xl">
            <GraduationCap className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Engineering Colleges</h1>
            <p className="text-xl text-muted">Building Tomorrow&apos;s Builders</p>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent>
              <p className="text-sm text-muted">AICTE Colleges</p>
              <p className="text-3xl font-bold text-blue-600">{engineeringData.overview.totalColleges.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm text-muted">Annual Intake</p>
              <p className="text-3xl font-bold text-blue-600">15.98L</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm text-muted">CSE Students</p>
              <p className="text-3xl font-bold text-blue-600">3.9L</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm text-muted">Focus Branches</p>
              <p className="text-3xl font-bold text-blue-600">CS/IT</p>
            </CardContent>
          </Card>
        </div>

        {/* Target Audience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Target Audience</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>5,875 AICTE-approved engineering colleges</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>15.98 lakh students (annual intake)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Primary focus: CS/IT branches (3.9 lakh students)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Secondary: Electronics, Mechanical, Civil</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Value Proposition</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>For Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Transform from syntax-learners to problem-solvers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>24/7 coding mentor for debugging and best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Project collaborator for hackathons and final year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Interview prep partner for placements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>For Colleges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {roiPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Proposed Campaigns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Proposed Campaigns</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.title} hover>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <campaign.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{campaign.title}</h3>
                      <p className="text-muted text-sm">{campaign.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* State-wise Data */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Top States by Engineering Seats</h2>
          <Card>
            <CardContent>
              <DataTable
                data={engineeringData.stateWise}
                columns={[
                  { key: 'state', header: 'State' },
                  { key: 'seats', header: 'Seats (2024-25)', render: (item) => item.seats.toLocaleString() },
                ]}
              />
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Year 1 Target</h2>
          <p className="text-4xl font-bold mb-2">100 College Partnerships</p>
          <p className="text-blue-100 mb-6">Starting with top engineering colleges in Tamil Nadu, Karnataka, and Maharashtra</p>
          <Button href="/contact" variant="secondary" size="lg">
            Discuss Partnership
          </Button>
        </div>
      </div>
    </div>
  );
}
