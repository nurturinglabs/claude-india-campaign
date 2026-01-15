import { Metadata } from 'next';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import DataTable from '@/components/ui/DataTable';
import { BarChart3, TrendingUp, AlertCircle } from 'lucide-react';
import engineeringData from '@/data/engineering.json';
import schoolsData from '@/data/schools.json';
import examsData from '@/data/exams.json';
import sourcesData from '@/data/sources.json';

export const metadata: Metadata = {
  title: 'The Opportunity | Claude for India',
  description: 'Data-driven analysis of India\'s education market - Engineering colleges, schools, and competitive exam aspirants.',
};

export default function OpportunityPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Opportunity
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            India by numbers — authentic data that reveals the massive opportunity for Claude in education.
          </p>
        </div>

        {/* Engineering Colleges Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Engineering Colleges & Students
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent>
                <p className="text-sm text-muted">AICTE-Approved Colleges</p>
                <p className="text-3xl font-bold text-foreground">{engineeringData.overview.totalColleges.toLocaleString()}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm text-muted">B.Tech Seats (2025-26)</p>
                <p className="text-3xl font-bold text-foreground">15.98 L</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm text-muted">Seats Filled (2024-25)</p>
                <p className="text-3xl font-bold text-foreground">12.53 L</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm text-muted">Vacancy Rate</p>
                <p className="text-3xl font-bold text-orange-600">{engineeringData.overview.vacancyRate}%</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Top States by Engineering Seats</CardTitle>
              </CardHeader>
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

            <Card>
              <CardHeader>
                <CardTitle>Branch-wise Enrollment (2024-25)</CardTitle>
              </CardHeader>
              <CardContent>
                <DataTable
                  data={engineeringData.branchWise}
                  columns={[
                    { key: 'branch', header: 'Branch' },
                    { key: 'enrolled', header: 'Students Enrolled', render: (item) => item.enrolled.toLocaleString() },
                  ]}
                />
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
              <p className="text-sm text-blue-800">
                <strong>Campaign Insight:</strong> {engineeringData.campaignInsight}
              </p>
            </div>
          </div>
        </section>

        {/* Schools Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Schools — The Foundation
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent>
                <p className="text-sm text-muted">Total Schools</p>
                <p className="text-3xl font-bold text-foreground">14.72 L</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm text-muted">Total Students</p>
                <p className="text-3xl font-bold text-foreground">24.8 Cr</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm text-muted">Total Teachers</p>
                <p className="text-3xl font-bold text-foreground">98 L</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-sm text-muted">Government Schools</p>
                <p className="text-3xl font-bold text-foreground">{schoolsData.overview.governmentSchoolsPercent}%</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Board-wise Affiliation</CardTitle>
              </CardHeader>
              <CardContent>
                <DataTable
                  data={schoolsData.boards}
                  columns={[
                    { key: 'board', header: 'Board' },
                    { key: 'schools', header: 'Schools Affiliated' },
                    { key: 'students', header: 'Students (approx)' },
                  ]}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Infrastructure Reality</CardTitle>
              </CardHeader>
              <CardContent>
                <DataTable
                  data={schoolsData.infrastructure}
                  columns={[
                    { key: 'facility', header: 'Facility' },
                    { key: 'percentage', header: '% Schools with Access', render: (item) => `${item.percentage}%` },
                  ]}
                />
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-purple-600 mt-0.5" />
              <p className="text-sm text-purple-800">
                <strong>Campaign Insight:</strong> {schoolsData.campaignInsight}
              </p>
            </div>
          </div>
        </section>

        {/* Exam Aspirants Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Competitive Exam Aspirants — The Pressure Cooker
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* JEE */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">JEE (Engineering)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted">2025 Registered</span>
                    <span className="font-semibold">15.4 L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted">2025 Appeared</span>
                    <span className="font-semibold">14.75 L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted">Qualified for Advanced</span>
                    <span className="font-semibold">2.5 L</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NEET */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">NEET (Medical)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted">2024 Registered</span>
                    <span className="font-semibold">24.06 L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted">2024 Appeared</span>
                    <span className="font-semibold">23.33 L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted">Qualified</span>
                    <span className="font-semibold">13.16 L</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UPSC */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">UPSC (Civil Services)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted">Applied</span>
                    <span className="font-semibold">9.93 L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted">Appeared (Prelims)</span>
                    <span className="font-semibold">5.83 L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted">Final Selection</span>
                    <span className="font-semibold text-red-600">1,009</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-sm font-medium">Selection Rate</span>
                    <span className="font-bold text-red-600">~0.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Other Major Competitive Exams</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable
                data={examsData.other}
                columns={[
                  { key: 'exam', header: 'Exam' },
                  { key: 'aspirants', header: 'Annual Aspirants (approx)' },
                ]}
              />
            </CardContent>
          </Card>

          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <p className="text-sm text-orange-800">
                <strong>Total Competitive Exam Aspirants Annually: 50+ Million</strong><br />
                {examsData.campaignInsight}
              </p>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Data Sources</h2>
          <Card>
            <CardContent>
              <DataTable
                data={sourcesData.sources}
                columns={[
                  { key: 'dataPoint', header: 'Data Point' },
                  { key: 'source', header: 'Source' },
                  { key: 'date', header: 'Date' },
                ]}
              />
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
