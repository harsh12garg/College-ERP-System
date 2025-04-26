
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { CalendarIcon, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const CalendarPage = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  
  // Mock data for calendar events
  const events = [
    { 
      id: 1, 
      title: 'Mid-term Exam - Computer Networks', 
      date: '2023-06-15', 
      time: '10:00 AM - 12:00 PM',
      type: 'exam',
      location: 'Hall B'
    },
    { 
      id: 2, 
      title: 'Faculty Meeting', 
      date: '2023-06-15', 
      time: '2:00 PM - 3:30 PM',
      type: 'meeting',
      location: 'Conference Room'
    },
    { 
      id: 3, 
      title: 'Workshop on AI & Machine Learning', 
      date: '2023-06-16', 
      time: '11:00 AM - 1:00 PM',
      type: 'workshop',
      location: 'Seminar Hall'
    },
    { 
      id: 4, 
      title: 'Technical Symposium Planning', 
      date: '2023-06-17', 
      time: '3:00 PM - 4:30 PM',
      type: 'meeting',
      location: 'Department Office'
    },
    { 
      id: 5, 
      title: 'End Semester Exam - Database Systems', 
      date: '2023-06-20', 
      time: '9:00 AM - 12:00 PM',
      type: 'exam',
      location: 'Main Hall'
    },
  ];
  
  // Create a 6x7 grid for days (6 weeks, 7 days per week)
  const generateCalendarDays = () => {
    // This is a simplified version - a real implementation would calculate actual dates
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(i);
    }
    
    // Pad the beginning with empty cells if needed
    const firstDayOfMonth = 3; // Assuming 3rd day of week (Wednesday)
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.unshift(null);
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <PageLayout title="Academic Calendar">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle>
              <div className="flex items-center space-x-1">
                <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                <span>{currentMonth} {currentYear}</span>
              </div>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">Today</Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1">
              {/* Week days */}
              {weekdays.map((day, index) => (
                <div key={day} className={`text-center py-2 text-sm font-medium ${index === 0 || index === 6 ? 'text-muted-foreground' : ''}`}>
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {calendarDays.map((day, index) => (
                <div 
                  key={index} 
                  className={`
                    min-h-[80px] border border-border rounded-md p-1
                    ${!day ? 'bg-muted/30' : ''} 
                    ${day === currentDate.getDate() ? 'ring-2 ring-primary/20' : ''}
                    ${(index % 7 === 0 || index % 7 === 6) ? 'bg-muted/30' : ''}
                  `}
                >
                  {day && (
                    <>
                      <div className="text-right text-sm">
                        {day}
                      </div>
                      {day === 15 && (
                        <div className="mt-1">
                          <div className="bg-blue-500/10 text-blue-600 text-xs p-1 rounded mb-1 truncate">
                            Mid-term Exam
                          </div>
                          <div className="bg-green-500/10 text-green-600 text-xs p-1 rounded truncate">
                            Faculty Meeting
                          </div>
                        </div>
                      )}
                      {day === 16 && (
                        <div className="mt-1">
                          <div className="bg-purple-500/10 text-purple-600 text-xs p-1 rounded truncate">
                            AI Workshop
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle>Upcoming Events</CardTitle>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add Event
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="exams">Exams</TabsTrigger>
                <TabsTrigger value="meetings">Meetings</TabsTrigger>
                <TabsTrigger value="workshops">Workshops</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                {events.map(event => (
                  <div key={event.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{event.title}</h3>
                      <Badge variant={
                        event.type === 'exam' ? 'destructive' : 
                        event.type === 'meeting' ? 'secondary' : 
                        'default'
                      }>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                    <div className="text-sm flex flex-col space-y-1 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="exams" className="space-y-4">
                {events.filter(e => e.type === 'exam').map(event => (
                  <div key={event.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{event.title}</h3>
                      <Badge variant="destructive">Exam</Badge>
                    </div>
                    <div className="text-sm flex flex-col space-y-1 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="meetings" className="space-y-4">
                {events.filter(e => e.type === 'meeting').map(event => (
                  <div key={event.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{event.title}</h3>
                      <Badge variant="secondary">Meeting</Badge>
                    </div>
                    <div className="text-sm flex flex-col space-y-1 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="workshops" className="space-y-4">
                {events.filter(e => e.type === 'workshop').map(event => (
                  <div key={event.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{event.title}</h3>
                      <Badge>Workshop</Badge>
                    </div>
                    <div className="text-sm flex flex-col space-y-1 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default CalendarPage;
