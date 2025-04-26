
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Bell, CheckCircle2, Clock, Filter, MoreVertical, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Notifications = () => {
  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "Attendance Alert",
      message: "Your attendance is below 75% in Database Management Systems",
      time: "10 minutes ago",
      type: "warning",
      isRead: false,
      category: "attendance"
    },
    {
      id: 2,
      title: "Assignment Deadline",
      message: "Assignment #3 for Data Structures is due tomorrow",
      time: "1 hour ago",
      type: "info",
      isRead: false,
      category: "academic"
    },
    {
      id: 3,
      title: "Exam Schedule Update",
      message: "Mid-term examination for Computer Networks has been rescheduled to next Monday",
      time: "3 hours ago",
      type: "important",
      isRead: false,
      category: "academic"
    },
    {
      id: 4,
      title: "Fee Payment Reminder",
      message: "The deadline for second semester fee payment is approaching. Please complete payment by 15th June.",
      time: "Yesterday",
      type: "critical",
      isRead: true,
      category: "finance"
    },
    {
      id: 5,
      title: "New Course Registration",
      message: "Registration for elective courses is now open. Last date to register is 20th June.",
      time: "2 days ago",
      type: "info",
      isRead: true,
      category: "academic"
    },
    {
      id: 6,
      title: "Library Book Return",
      message: "Your borrowed book 'Advanced Algorithms' is due for return in 2 days",
      time: "2 days ago",
      type: "warning",
      isRead: true,
      category: "library"
    },
    {
      id: 7,
      title: "Department Meeting",
      message: "All students are requested to attend a department meeting on Friday at 3 PM",
      time: "3 days ago",
      type: "info",
      isRead: true,
      category: "department"
    },
    {
      id: 8,
      title: "Result Declaration",
      message: "Results for the previous semester have been declared. Check your results in the academic portal.",
      time: "5 days ago",
      type: "important",
      isRead: true,
      category: "academic"
    }
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'warning':
        return 'warning';
      case 'important':
        return 'secondary';
      case 'critical':
        return 'destructive';
      default:
        return 'default';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <Bell className="h-4 w-4 text-orange-500" />;
      case 'important':
        return <Clock className="h-4 w-4 text-secondary" />;
      case 'critical':
        return <Bell className="h-4 w-4 text-destructive" />;
      default:
        return <Bell className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <PageLayout title="Notifications">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl">All Notifications</CardTitle>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button size="sm" variant="outline">
                  Mark all as read
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">
                    Unread
                    <Badge variant="secondary" className="ml-1">
                      {notifications.filter(n => !n.isRead).length}
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="finance">Financial</TabsTrigger>
                  <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-1">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-4 rounded-lg ${notification.isRead ? 'bg-card' : 'bg-muted/30 border-l-4 border-primary'}`}>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {getTypeIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{notification.title}</h3>
                              <Badge variant={getBadgeVariant(notification.type)}>
                                {notification.type}
                              </Badge>
                            </div>
                            <div className="flex items-center">
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <CheckCircle2 className="h-4 w-4 mr-2" />
                                    Mark as read
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="unread" className="space-y-1">
                  {notifications.filter(n => !n.isRead).map((notification) => (
                    <div key={notification.id} className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {getTypeIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{notification.title}</h3>
                              <Badge variant={getBadgeVariant(notification.type)}>
                                {notification.type}
                              </Badge>
                            </div>
                            <div className="flex items-center">
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <CheckCircle2 className="h-4 w-4 mr-2" />
                                    Mark as read
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="academic" className="space-y-1">
                  {notifications.filter(n => n.category === 'academic').map((notification) => (
                    <div key={notification.id} className={`p-4 rounded-lg ${notification.isRead ? 'bg-card' : 'bg-muted/30 border-l-4 border-primary'}`}>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {getTypeIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{notification.title}</h3>
                              <Badge variant={getBadgeVariant(notification.type)}>
                                {notification.type}
                              </Badge>
                            </div>
                            <div className="flex items-center">
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <CheckCircle2 className="h-4 w-4 mr-2" />
                                    Mark as read
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="finance" className="space-y-1">
                  {notifications.filter(n => n.category === 'finance').map((notification) => (
                    <div key={notification.id} className={`p-4 rounded-lg ${notification.isRead ? 'bg-card' : 'bg-muted/30 border-l-4 border-primary'}`}>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {getTypeIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{notification.title}</h3>
                              <Badge variant={getBadgeVariant(notification.type)}>
                                {notification.type}
                              </Badge>
                            </div>
                            <div className="flex items-center">
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <CheckCircle2 className="h-4 w-4 mr-2" />
                                    Mark as read
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="other" className="space-y-1">
                  {notifications.filter(n => !['academic', 'finance'].includes(n.category)).map((notification) => (
                    <div key={notification.id} className={`p-4 rounded-lg ${notification.isRead ? 'bg-card' : 'bg-muted/30 border-l-4 border-primary'}`}>
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {getTypeIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{notification.title}</h3>
                              <Badge variant={getBadgeVariant(notification.type)}>
                                {notification.type}
                              </Badge>
                            </div>
                            <div className="flex items-center">
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <CheckCircle2 className="h-4 w-4 mr-2" />
                                    Mark as read
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Email Notifications</h3>
                <div className="flex items-center justify-between py-2">
                  <div className="flex flex-col">
                    <span className="text-sm">Academic Updates</span>
                    <span className="text-xs text-muted-foreground">Exams, assignments, courses</span>
                  </div>
                  <div className="ml-auto">
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div className="flex flex-col">
                    <span className="text-sm">Financial Alerts</span>
                    <span className="text-xs text-muted-foreground">Fee payments, scholarships</span>
                  </div>
                  <div className="ml-auto">
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div className="flex flex-col">
                    <span className="text-sm">Attendance Reports</span>
                    <span className="text-xs text-muted-foreground">Weekly attendance status</span>
                  </div>
                  <div className="ml-auto">
                    <Button variant="outline" size="sm">
                      Disabled
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="pt-3">
                <h3 className="font-medium mb-2">Recent System Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">SYS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">System Maintenance</p>
                      <p className="text-xs text-muted-foreground">Scheduled maintenance on Sunday, 10 PM - 2 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">SYS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">New Feature Added</p>
                      <p className="text-xs text-muted-foreground">Online payment system is now available</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Notifications;
