import { Metadata } from 'next';
import Link from 'next/link';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { School, Users, BookOpen, Laptop, ArrowLeft, Check, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Premium Schools | Claude for India',
  description: 'Future-Ready Generation - Campaign strategy for 15-25 million students in premium schools.',
};

const campaigns = [
  {
    title: 'Parent Webinars',
    description: '"Preparing Your Child for an AI-First World" - Educational sessions for decision-makers',
    icon: Users,
  },
  {
    title: 'School Partnership Program',
    description: 'Bulk licensing for institutions with dedicated support and training',
    icon: School,
  },
  {
    title: 'Teacher Training',
    description: 'Help educators leverage Claude effectively in classrooms',
    icon: BookOpen,
  },
  {
    title: '"Build Your First App" Camps',
    description: 'Summer programs for students aged 12-17 to create with Claude',
    icon: Laptop,
  },
];

const costComparison = [
  { item: 'School fees', cost: '₹1-5 lakh' },
  { item: 'Tuitions', cost: '₹50K-2 lakh' },
  { item: 'Coaching classes', cost: '₹1-3 lakh' },
  { item: 'Total education spend', cost: '₹2.5-10 lakh', highlight: true },
  { item: 'Claude Pro subscription', cost: '~₹8-15K', isGreen: true },
  { item: 'As % of education spend', cost: '<5%', isGreen: true },
];

export default function SchoolsPillarPage() {
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
          <div className="p-4 bg-purple-100 rounded-xl">
            <School className="w-10 h-10 text-purple-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Premium Schools</h1>
            <p className="text-xl text-muted">Future-Ready Generation</p>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent>
              <p className="text-sm text-muted">Premium Schools</p>
              <p className="text-3xl font-bold text-purple-600">15-20K</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm text-muted">Students</p>
              <p className="text-3xl font-bold text-purple-600">15-25M</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm text-muted">Fee Range</p>
              <p className="text-3xl font-bold text-purple-600">₹1L+</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-sm text-muted">Decision Maker</p>
              <p className="text-3xl font-bold text-purple-600">Parents</p>
            </CardContent>
          </Card>
        </div>

        {/* Target Audience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Target Audience</h2>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-600" />
                <span>15,000-20,000 schools charging ₹1 lakh+ annually</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-600" />
                <span>15-25 million students in premium segment</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-600" />
                <span>CBSE private schools (~16,741)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-600" />
                <span>ICSE schools (~2,800) and International schools (500+)</span>
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
                    <BookOpen className="w-5 h-5 text-purple-600 mt-0.5" />
                    <span>Personalized learning companion available 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-purple-600 mt-0.5" />
                    <span>Homework help that teaches concepts, not just answers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-purple-600 mt-0.5" />
                    <span>Project research and ideation partner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-purple-600 mt-0.5" />
                    <span>Early exposure to AI collaboration skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>For Parents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Future-proof their child&apos;s education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Complement expensive school fees with AI mentor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Safe, ethical AI exposure for children</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Reduced tuition dependency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Math for Parents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">The Math for Parents</h2>
          <Card>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Annual Education Investment</span>
              </div>
              <div className="space-y-3">
                {costComparison.map((item) => (
                  <div
                    key={item.item}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      item.highlight
                        ? 'bg-gray-100 font-bold'
                        : item.isGreen
                        ? 'bg-green-50 text-green-700'
                        : ''
                    }`}
                  >
                    <span>{item.item}</span>
                    <span className={item.isGreen ? 'font-bold' : ''}>{item.cost}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted text-center">
                Claude subscription is less than 5% of typical premium education spend for exponentially higher returns in AI-readiness.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Proposed Campaigns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Proposed Campaigns</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.title} hover>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <campaign.icon className="w-6 h-6 text-purple-600" />
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

        {/* CTA */}
        <div className="bg-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Year 1 Target</h2>
          <p className="text-4xl font-bold mb-2">500 School Adoptions</p>
          <p className="text-purple-100 mb-6">Starting with CBSE and ICSE schools in metro cities</p>
          <Button href="/contact" variant="secondary" size="lg">
            Discuss Partnership
          </Button>
        </div>
      </div>
    </div>
  );
}
