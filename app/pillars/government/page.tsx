import { Metadata } from 'next';
import Link from 'next/link';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Heart, Truck, BookOpen, Globe, Star, ArrowLeft, Check, Megaphone, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Government Schools | Claude for India',
  description: 'Democratizing Magic - Campaign strategy for 12+ crore students in government schools.',
};

const campaigns = [
  {
    title: '"Claude Yatra" (Claude Journey)',
    description: 'Traveling workshops to government schools - 2-hour hands-on sessions with one completed mini-project per student. Target: 1,000 schools in Year 1.',
    icon: Truck,
  },
  {
    title: 'Teacher Enablement',
    description: 'Train 1 teacher per school as Claude champion for sustainable, multiplier impact.',
    icon: BookOpen,
  },
  {
    title: 'Vernacular First',
    description: 'Sessions in Kannada, Tamil, Hindi, Telugu, Marathi - respecting local context and language.',
    icon: Globe,
  },
  {
    title: '"First App" Stories',
    description: 'Document and share stories of government school students building their first project - authentic marketing that inspires others.',
    icon: Star,
  },
  {
    title: 'Community Champions',
    description: 'Identify and empower local volunteers, college students, and educators to spread Claude awareness in their communities.',
    icon: Users,
  },
];

export default function GovernmentPillarPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Back Link */}
        <Link href="/pillars" className="inline-flex items-center text-muted hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Four Pillars
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 bg-red-100 rounded-xl">
            <Heart className="w-10 h-10 text-red-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Government Schools</h1>
            <p className="text-xl text-muted">Democratizing Magic</p>
          </div>
        </div>
        <div className="inline-block mb-8 px-4 py-1 bg-red-100 text-red-700 font-medium rounded-full">
          The Heart of the Campaign
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent>
              <p className="text-sm text-muted">Government Schools</p>
              <p className="text-3xl font-bold text-red-600">10L+</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm text-muted">Students</p>
              <p className="text-3xl font-bold text-red-600">12Cr+</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm text-muted">Of Total Enrollment</p>
              <p className="text-3xl font-bold text-red-600">50%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm text-muted">Internet Access</p>
              <p className="text-3xl font-bold text-red-600">54%</p>
            </CardContent>
          </Card>
        </div>

        {/* Why This Matters */}
        <section className="mb-12">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Why This Is the Heart of the Campaign</h2>
            <p className="text-red-700 mb-6 text-lg">
              This is NOT charity. This is living Anthropic&apos;s mission in its purest form.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-red-800 mb-3">What This Represents</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 mt-0.5" />
                    <span className="text-red-700">Brand building through authentic impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 mt-0.5" />
                    <span className="text-red-700">Creating future users and advocates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 mt-0.5" />
                    <span className="text-red-700">Pressure-testing Claude for diverse contexts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 mt-0.5" />
                    <span className="text-red-700">Living &ldquo;AI for the benefit of humanity&rdquo;</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-800 mb-3">The Children Who Need It Most</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-red-600 mt-0.5" />
                    <span className="text-red-700">World-class learning regardless of background</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-red-600 mt-0.5" />
                    <span className="text-red-700">Bridge the gap with private school students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-red-600 mt-0.5" />
                    <span className="text-red-700">Exposure to AI otherwise inaccessible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-red-600 mt-0.5" />
                    <span className="text-red-700">Building confidence and aspiration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Grassroots Approach */}
        <section className="mb-12">
          <div className="bg-white border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Megaphone className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl font-bold text-foreground">Grassroots Approach</h2>
            </div>
            <p className="text-muted mb-6">
              This is about people-powered outreach. Claude branding through genuine community engagement,
              not top-down institutional partnerships. Real people helping real students discover what they can create.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Local Volunteers</h3>
                <p className="text-sm text-muted">College students and young professionals conducting workshops in their communities</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Teacher Networks</h3>
                <p className="text-sm text-muted">Empowering teachers to become Claude ambassadors in their schools</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Student-to-Student</h3>
                <p className="text-sm text-muted">Older students mentoring younger ones, creating peer learning circles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Proposed Campaigns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Proposed Campaigns</h2>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <Card key={campaign.title} hover>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-lg flex-shrink-0">
                      <campaign.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{campaign.title}</h3>
                      <p className="text-muted">{campaign.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-red-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Year 1 Target</h2>
          <p className="text-4xl font-bold mb-2">50,000 Students Reached</p>
          <p className="text-red-100 mb-6">Through Claude Yatra workshops and community-driven outreach</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Join the Movement
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
              Meet the Author
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
