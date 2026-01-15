import { Metadata } from 'next';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { User, BookOpen, Code, Heart, Globe, Mic, Quote, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Claude for India',
  description: 'About Umesh - Builder, educator, and the author behind the Claude for India campaign.',
};

const projects = [
  {
    name: 'BAREYIRI',
    description: 'Kannada writing competition promoting regional language literacy and creative expression',
    icon: BookOpen,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Kaanunu',
    description: 'CLAT preparation platform helping law aspirants prepare for entrance exams',
    icon: Code,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Dhairya',
    description: 'Cancer peer support platform for Kannada-speaking communities, providing emotional support',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    name: 'Math Learning Apps',
    description: 'Educational applications built for elementary students to make learning math fun',
    icon: Code,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Voice-Powered Tools',
    description: 'Exploring AI in vernacular education through voice-enabled learning experiences',
    icon: Mic,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

const qualifications = [
  {
    title: 'Builder Who Understands Builders',
    description: 'Technical background combined with deep passion for education',
  },
  {
    title: 'Cultural Translator',
    description: 'Understands Indian context deeply, not just the market',
  },
  {
    title: 'Regional Language Advocate',
    description: 'Kannada-first thinking, respecting vernacular education',
  },
  {
    title: 'Parent Perspective',
    description: 'Sees education through the lens of family and generational impact',
  },
  {
    title: 'On-the-Ground Experience',
    description: 'Not theorizing from afar — building and testing in real contexts',
  },
];

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Umesh
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Builder, educator, and advocate for vernacular education in India
          </p>
        </div>

        {/* Why I'm Building This */}
        <section className="mb-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="py-8">
              <Quote className="w-10 h-10 text-primary mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-foreground text-center italic max-w-3xl mx-auto mb-6">
                &ldquo;I have always been looking for opportunities to make an impact in education in India but not been able to do it in a big way. I do not have the resources to do it all by myself. With this role, I can make Claude the real collaborator, guru, mentor that will give kids the wings to fly.&rdquo;
              </blockquote>
              <p className="text-center text-muted">— Umesh, on why he&apos;s building this campaign</p>
            </CardContent>
          </Card>
        </section>

        {/* Relevant Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Work in Education
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.name} hover>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${project.bgColor}`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{project.name}</h3>
                      <p className="text-muted text-sm">{project.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Unique Qualifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Unique Qualifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-2 text-foreground">{qual.title}</h3>
                <p className="text-muted">{qual.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Role */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why This Role at Anthropic
          </h2>
          <div className="bg-secondary text-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary-light mb-4">The Opportunity</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary-light mt-0.5" />
                    <span>Access to world-class AI technology (Claude)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary-light mt-0.5" />
                    <span>Resources to execute at scale across India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary-light mt-0.5" />
                    <span>Platform to reach 500+ million young people</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary-light mt-0.5" />
                    <span>Alignment with Anthropic&apos;s mission</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-light mb-4">What I Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary-light mt-0.5" />
                    <span>Deep understanding of Indian education landscape</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary-light mt-0.5" />
                    <span>Track record of building education products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary-light mt-0.5" />
                    <span>Regional language and cultural sensitivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary-light mt-0.5" />
                    <span>Passion that has been waiting for this platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Let&apos;s Build This Together
          </h2>
          <p className="text-muted mb-6 max-w-xl mx-auto">
            This isn&apos;t just a job application. This is a blueprint for bringing Claude to 500+ million young people who deserve a patient, knowledgeable, always-available mentor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button href="/pillars" variant="outline" size="lg">
              View Campaign Strategy
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
