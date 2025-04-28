
import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { format } from 'date-fns';
import { Bell, CalendarDays, CheckCircle, ClipboardList, Clock, Download, Filter, Info, Mail, PlusCircle, Search, SendHorizontal, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';

// Sample data
const students = [
  { id: 1, name: 'John Smith', enrollmentNo: 'CSE2020001', department: 'Computer Science', present: true, imgUrl: '/placeholder.svg' },
  { id: 2, name: 'Emma Johnson', enrollmentNo: 'ECE2020015', department: 'Electronics', present: true, imgUrl: '/placeholder.svg' },
  { id: 3, name: 'Michael Brown', enrollmentNo: 'ME2020032', department: 'Mechanical', present: false, imgUrl: '/placeholder.svg' },
  { id: 4, name: 'Sophia Davis', enrollmentNo: 'CE2020058', department: 'Civil', present: true, imgUrl: '/placeholder.svg' },
  { id: 5, name: 'William Lee', enrollmentNo: 'CSE2020109', department: 'Computer Science', present: true, imgUrl: '/placeholder.svg' },
  { id: 6, name: 'Olivia Wilson', enrollmentNo: 'IT2020087', department: 'Information Tech', present: false, imgUrl: '/placeholder.svg' },
  { id: 7, name: 'James Taylor', enrollmentNo: 'CSE2020125', department: 'Computer Science', present: true, imgUrl: '/placeholder.svg' },
  { id: 8, name: 'Ava Robinson', enrollmentNo: 'ECE2020043', department: 'Electronics', present: true, imgUrl: '/placeholder.svg' },
  { id: 9, name: 'Benjamin Moore', enrollmentNo: 'ME2020076', department: 'Mechanical', present: true, imgUrl: '/placeholder.svg' },
  { id: 10, name: 'Charlotte Clark', enrollmentNo: 'CSE2020099', department: 'Computer Science', present: false, imgUrl: '/placeholder.svg' },
];

const recentAttendanceRecords = [
  { 
    id: 1, 
    course: 'Database Management Systems', 
    courseCode: 'CS301',
    department: 'Computer Science', 
    date: '2023-10-05', 
    presentCount: 42, 
    totalCount: 45, 
    percentage: 93.3,
    notificationSent: true
  },
  { 
    id: 2, 
    course: 'Digital Signal Processing', 
    courseCode: 'EC304',
    department: 'Electronics', 
    date: '2023-10-05', 
    presentCount: 38, 
    totalCount: 42, 
    percentage: 90.5,
    notificationSent: true
  },
  { 
    id: 3, 
    course: 'Thermodynamics', 
    courseCode: 'ME202',
    department: 'Mechanical', 
    date: '2023-10-05', 
    presentCount: 36, 
    totalCount: 45, 
    percentage: 80.0,
    notificationSent: false
  },
  { 
    id: 4, 
    course: 'Artificial Intelligence', 
    courseCode: 'CS405',
    department: 'Computer Science', 
    date: '2023-10-04', 
    presentCount: 40, 
    totalCount: 45, 
    percentage: 88.9,
    notificationSent: true
  },
  { 
    id: 5, 
    course: 'Structural Engineering', 
    courseCode: 'CE301',
    department: 'Civil', 
    date: '2023-10-04', 
    presentCount: 30, 
    totalCount: 38, 
    percentage: 78.9,
    notificationSent: false
  },
];

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [attendanceData, setAttendanceData] = useState(students);
  const [showNotificationDialog, setShowNotificationDialog] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const { toast } = useToast();
  
  const filteredStudents = attendanceData.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.enrollmentNo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handlePresenceChange = (studentId: number, isPresent: boolean) => {
    setAttendanceData(prev => 
      prev.map(student => 
        student.id === studentId ? { ...student, present: isPresent } : student
      )
    );
  };
  
  const presentCount = attendanceData.filter(s => s.present).length;
  const attendancePercentage = (presentCount / attendanceData.length) * 100;
  
  const handleSendNotifications = (record: any) => {
    setSelectedRecord(record);
    setShowNotificationDialog(true);
  };
  
  const handleSubmitNotification = () => {
    setShowNotificationDialog(false);
    
    toast({
      title: "Notifications Sent Successfully",
      description: `Attendance notifications sent to all absent students for ${selectedRecord.course}.`,
      duration: 5000,
    });
    
    // Update the record to mark notification as sent
    const updatedRecords = recentAttendanceRecords.map(record => 
      record.id === selectedRecord.id ? { ...record, notificationSent: true } : record
    );
    
   
  };
  
  const handleSubmitAttendance = () => {
    toast({
      title: "Attendance Submitted",
      description: `Attendance for ${format(selectedDate, 'PPP')} has been recorded successfully.`,
      duration: 5000,
    });
  };
  
  return (
    <PageLayout title="Attendance Management">
      <Tabs defaultValue="take" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="take">Take Attendance</TabsTrigger>
          <TabsTrigger value="records">Attendance Records</TabsTrigger>
        </TabsList>
        
        <TabsContent value="take" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle>Mark Attendance</CardTitle>
                      <CardDescription>
                        Course: Database Management Systems (CS301)
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm" className="gap-1">
                            <CalendarDays className="h-4 w-4" />
                            {format(selectedDate, 'PP')}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => date && setSelectedDate(date)}
                            className="p-3 pointer-events-auto"
                            disabled={(date) => date > new Date() || date < new Date(new Date().setDate(new Date().getDate() - 30))}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search students..." 
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead style={{ width: '50px' }}>
                            <Checkbox 
                              checked={attendanceData.every(s => s.present)}
                              onCheckedChange={(checked) => {
                                setAttendanceData(prev => 
                                  prev.map(student => ({ ...student, present: checked === true }))
                                );
                              }}
                            />
                          </TableHead>
                          <TableHead>Student</TableHead>
                          <TableHead className="hidden md:table-cell">Enrollment No.</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="w-[100px] text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredStudents.map((student) => (
                          <TableRow key={student.id}>
                            <TableCell>
                              <Checkbox 
                                checked={student.present}
                                onCheckedChange={(checked) => handlePresenceChange(student.id, checked === true)}
                              />
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={student.imgUrl} alt={student.name} />
                                  <AvatarFallback>{student.name.charAt(0)}{student.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium text-sm">{student.name}</p>
                                  <p className="text-xs text-muted-foreground md:hidden">{student.enrollmentNo}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">{student.enrollmentNo}</TableCell>
                            <TableCell>
                              <Badge variant={student.present ? 'default' : 'destructive'} className="gap-1 flex items-center text-xs">
                                {student.present ? (
                                  <>
                                    <CheckCircle className="h-3 w-3" />
                                    Present
                                  </>
                                ) : (
                                  <>
                                    <X className="h-3 w-3" />
                                    Absent
                                  </>
                                )}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => handlePresenceChange(student.id, !student.present)}
                              >
                                {student.present ? <X className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between py-4">
                  <div className="flex items-center gap-1">
                    <div className="bg-muted p-2 rounded-md">
                      <div className="text-lg font-semibold">{attendancePercentage.toFixed(1)}%</div>
                      <div className="text-xs text-muted-foreground">Attendance</div>
                    </div>
                    <div className="bg-muted p-2 rounded-md">
                      <div className="text-lg font-semibold">{presentCount}/{attendanceData.length}</div>
                      <div className="text-xs text-muted-foreground">Present/Total</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Save Draft</Button>
                    <Button onClick={handleSubmitAttendance}>Submit Attendance</Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Mark All Present
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Bell className="h-4 w-4" />
                    Send Notifications
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Download className="h-4 w-4" />
                    Export Attendance
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Previous Records</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAttendanceRecords.slice(0, 3).map((record) => (
                    <div key={record.id} className="flex justify-between items-start pb-3 border-b last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium text-sm">{record.course}</p>
                        <p className="text-xs text-muted-foreground">{format(new Date(record.date), 'PP')}</p>
                      </div>
                      <Badge variant={record.percentage >= 85 ? 'default' : record.percentage >= 75 ? 'secondary' : 'destructive'}>
                        {record.percentage.toFixed(1)}%
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="records" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle>Attendance Records</CardTitle>
                  <CardDescription>
                    View and manage attendance records for all courses
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  Export Records
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="cse">Computer Science</SelectItem>
                      <SelectItem value="ece">Electronics</SelectItem>
                      <SelectItem value="me">Mechanical</SelectItem>
                      <SelectItem value="ce">Civil</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Courses</SelectItem>
                      <SelectItem value="cs301">Database Management Systems</SelectItem>
                      <SelectItem value="cs405">Artificial Intelligence</SelectItem>
                      <SelectItem value="ec304">Digital Signal Processing</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start gap-1 text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span>Select Date Range</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-4" align="start">
                      <div className="flex flex-col gap-4">
                        <p className="text-sm font-medium">Choose a date range</p>
                        <div className="grid gap-2">
                          <Label htmlFor="from">From</Label>
                          <Input id="from" type="date" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="to">To</Label>
                          <Input id="to" type="date" />
                        </div>
                        <Button size="sm">Apply</Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-center">Attendance</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentAttendanceRecords.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{record.course}</p>
                            <p className="text-xs text-muted-foreground">{record.courseCode}</p>
                          </div>
                        </TableCell>
                        <TableCell>{record.department}</TableCell>
                        <TableCell>{format(new Date(record.date), 'PP')}</TableCell>
                        <TableCell className="text-center">
                          <span className="font-medium">{record.presentCount}/{record.totalCount}</span>
                          <span className="text-xs text-muted-foreground ml-1">
                            ({record.percentage.toFixed(1)}%)
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          {record.notificationSent ? (
                            <Badge variant="outline" className="gap-1">
                              <SendHorizontal className="h-3 w-3" />
                              Notifications Sent
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="gap-1">
                              <Info className="h-3 w-3" />
                              Pending Notifications
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleSendNotifications(record)}
                            disabled={record.notificationSent}
                          >
                            <Bell className="h-4 w-4 mr-1" />
                            Send Notifications
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Send Notification Dialog */}
      <Dialog open={showNotificationDialog} onOpenChange={setShowNotificationDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Absence Notifications</DialogTitle>
            <DialogDescription>
              {selectedRecord && (
                <>
                  Send notifications to absent students for {selectedRecord.course} ({selectedRecord.courseCode}).
                  {selectedRecord.totalCount - selectedRecord.presentCount} students were absent on {format(new Date(selectedRecord.date), 'PP')}.
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="flex items-start space-x-4 rounded-md border p-4">
              <Mail className="h-6 w-6 text-primary" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Email Notification</p>
                <p className="text-xs text-muted-foreground">
                  Send an email to all absent students and their parents/guardians.
                </p>
              </div>
              <Checkbox defaultChecked />
            </div>
            
            <div className="flex items-start space-x-4 rounded-md border p-4">
              <Bell className="h-6 w-6 text-primary" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">App Notification</p>
                <p className="text-xs text-muted-foreground">
                  Send a push notification to the student's mobile app.
                </p>
              </div>
              <Checkbox defaultChecked />
            </div>
            
            <div className="flex flex-col gap-3">
              <Label htmlFor="message">Message (Optional)</Label>
              <Input
                id="message"
                defaultValue="This is to inform you that you were marked absent for today's class. Please ensure regular attendance as per college policy."
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNotificationDialog(false)}>Cancel</Button>
            <Button onClick={handleSubmitNotification}>Send Notifications</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Attendance;
