
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { StatCard } from '@/components/ui/stat-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GraduationCap, Users, Building2, BookOpen, Clock } from 'lucide-react';

const attendanceData = [
  { name: 'CSE', attendance: 92 },
  { name: 'ECE', attendance: 88 },
  { name: 'ME', attendance: 76 },
  { name: 'CE', attendance: 82 },
  { name: 'IT', attendance: 90 },
];

const recentActivities = [
  { id: 1, user: 'Dr. Smith', action: 'Added new course', department: 'Computer Science', time: '2 hours ago' },
  { id: 2, user: 'Admin', action: 'Updated semester schedule', department: 'All', time: '3 hours ago' },
  { id: 3, user: 'Prof. Johnson', action: 'Submitted attendance', department: 'Electrical Engineering', time: '5 hours ago' },
  { id: 4, user: 'John Doe', action: 'Uploaded assignment', department: 'Computer Science', time: '6 hours ago' },
  { id: 5, user: 'Jane Smith', action: 'Registered for course', department: 'Mechanical Engineering', time: '1 day ago' },
];

const upcomingEvents = [
  { id: 1, title: 'Mid-term Examination', department: 'All Departments', date: 'Oct 15, 2023' },
  { id: 2, title: 'Faculty Meeting', department: 'Computer Science', date: 'Oct 10, 2023' },
  { id: 3, title: 'Annual Tech Symposium', department: 'All Departments', date: 'Oct 20, 2023' },
];

const Dashboard = () => {
  return (
    <PageLayout title="Dashboard">
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Students" 
            value="2,543" 
            trend={{ value: 12, isPositive: true }}
            icon={<GraduationCap className="h-5 w-5" />}
          />
          <StatCard 
            title="Faculty Members" 
            value="186" 
            trend={{ value: 5, isPositive: true }}
            icon={<Users className="h-5 w-5" />}
          />
          <StatCard 
            title="Departments" 
            value="12" 
            icon={<Building2 className="h-5 w-5" />}
          />
          <StatCard 
            title="Active Courses" 
            value="158" 
            trend={{ value: 8, isPositive: true }}
            icon={<BookOpen className="h-5 w-5" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Department Attendance</CardTitle>
              <CardDescription>Average attendance percentage by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis domain={[50, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Attendance']} />
                    <Bar dataKey="attendance" fill="#7e3af2" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Schedule for the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex gap-3 pb-3 border-b last:border-0 last:pb-0">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.department}</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest actions across all departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex justify-between items-center pb-3 border-b last:border-0 last:pb-0">
                  <div className="flex flex-col">
                    <span className="font-medium">{activity.user}</span>
                    <span className="text-sm text-muted-foreground">{activity.action}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium">{activity.department}</span>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
