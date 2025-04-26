
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Filter, 
  GraduationCap, 
  MoreHorizontal, 
  PlusCircle, 
  Search, 
  SlidersHorizontal, 
  UserRound 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Courses = () => {
  // Sample course data
  const courses = [
    {
      id: "CSE101",
      name: "Introduction to Computer Science",
      department: "Computer Science",
      instructor: "Dr. Robert Smith",
      instructorAvatar: "/placeholder.svg",
      semester: "Fall 2023",
      credits: 4,
      enrolledStudents: 120,
      maxCapacity: 150,
      schedule: "Mon, Wed, Fri 10:00 AM - 11:30 AM",
      classroom: "Hall A",
      status: "active",
      description: "An introductory course to computer science covering basic programming concepts, algorithms, and data structures.",
      prerequisites: ["None"],
      progress: 45
    },
    {
      id: "CSE203",
      name: "Data Structures and Algorithms",
      department: "Computer Science",
      instructor: "Dr. Emily Johnson",
      instructorAvatar: "/placeholder.svg",
      semester: "Fall 2023",
      credits: 4,
      enrolledStudents: 95,
      maxCapacity: 100,
      schedule: "Tue, Thu 2:00 PM - 4:00 PM",
      classroom: "Hall C",
      status: "active",
      description: "A comprehensive study of various data structures, algorithm design techniques, and analysis of algorithm efficiency.",
      prerequisites: ["CSE101", "MATH201"],
      progress: 62
    },
    {
      id: "CSE305",
      name: "Database Management Systems",
      department: "Computer Science",
      instructor: "Prof. David Brown",
      instructorAvatar: "/placeholder.svg",
      semester: "Fall 2023",
      credits: 3,
      enrolledStudents: 85,
      maxCapacity: 100,
      schedule: "Mon, Wed 1:00 PM - 2:30 PM",
      classroom: "Lab 2",
      status: "active",
      description: "Introduces concepts of database systems, data modeling, SQL, and database design and implementation.",
      prerequisites: ["CSE203"],
      progress: 38
    },
    {
      id: "CSE401",
      name: "Computer Networks",
      department: "Computer Science",
      instructor: "Dr. Sarah Williams",
      instructorAvatar: "/placeholder.svg",
      semester: "Fall 2023",
      credits: 3,
      enrolledStudents: 65,
      maxCapacity: 80,
      schedule: "Tue, Thu 10:00 AM - 11:30 AM",
      classroom: "Lab 3",
      status: "active",
      description: "Study of computer network architecture, protocols, and applications with emphasis on the Internet protocols.",
      prerequisites: ["CSE203", "CSE205"],
      progress: 25
    },
    {
      id: "ECE202",
      name: "Digital Electronics",
      department: "Electronics & Communication",
      instructor: "Prof. James Lee",
      instructorAvatar: "/placeholder.svg",
      semester: "Fall 2023",
      credits: 4,
      enrolledStudents: 78,
      maxCapacity: 90,
      schedule: "Mon, Wed, Fri 9:00 AM - 10:30 AM",
      classroom: "Lab 5",
      status: "active",
      description: "Introduction to digital circuit design, Boolean algebra, logic gates, and digital systems.",
      prerequisites: ["ECE101", "MATH201"],
      progress: 50
    },
    {
      id: "ME304",
      name: "Thermodynamics",
      department: "Mechanical Engineering",
      instructor: "Dr. Jennifer Garcia",
      instructorAvatar: "/placeholder.svg",
      semester: "Fall 2023",
      credits: 3,
      enrolledStudents: 60,
      maxCapacity: 70,
      schedule: "Tue, Thu 1:00 PM - 2:30 PM",
      classroom: "Hall B",
      status: "active",
      description: "Study of energy, heat, work, entropy, and thermodynamic cycles with engineering applications.",
      prerequisites: ["ME203", "PHYS202"],
      progress: 55
    }
  ];

  // Sample popular courses
  const popularCourses = [
    {
      id: "CSE304",
      name: "Artificial Intelligence",
      department: "Computer Science",
      students: 145,
      trend: "+12%"
    },
    {
      id: "CSE402",
      name: "Machine Learning",
      department: "Computer Science",
      students: 130,
      trend: "+18%"
    },
    {
      id: "CSE405",
      name: "Web Development",
      department: "Computer Science",
      students: 120,
      trend: "+8%"
    }
  ];

  return (
    <PageLayout title="Courses">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full pl-8"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cse">Computer Science</SelectItem>
                  <SelectItem value="ece">Electronics & Comm.</SelectItem>
                  <SelectItem value="me">Mechanical Eng.</SelectItem>
                  <SelectItem value="ce">Civil Engineering</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="fall">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall">Fall 2023</SelectItem>
                  <SelectItem value="spring">Spring 2024</SelectItem>
                  <SelectItem value="summer">Summer 2024</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
              <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Course
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <Card key={course.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle>{course.name}</CardTitle>
                            <Badge>{course.id}</Badge>
                          </div>
                          <CardDescription className="mt-1">{course.department}</CardDescription>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Course</DropdownMenuItem>
                            <DropdownMenuItem>Manage Students</DropdownMenuItem>
                            <DropdownMenuItem>Archive Course</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={course.instructorAvatar} alt={course.instructor} />
                            <AvatarFallback>{course.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="text-sm">{course.instructor}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{course.semester}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{course.credits} Credits</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm flex justify-between">
                            <span>Course Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="text-sm flex justify-between">
                          <span className="flex items-center gap-1">
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                            Enrolled Students
                          </span>
                          <span>{course.enrolledStudents}/{course.maxCapacity}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <Button variant="outline" size="sm">View Syllabus</Button>
                      <Button size="sm">Course Page</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="active">
              <div className="py-8 text-center text-muted-foreground">
                Showing active courses (same layout as "All Courses" tab)
              </div>
            </TabsContent>
            <TabsContent value="upcoming">
              <div className="py-8 text-center text-muted-foreground">
                Showing upcoming courses (same layout as "All Courses" tab)
              </div>
            </TabsContent>
            <TabsContent value="archived">
              <div className="py-8 text-center text-muted-foreground">
                Showing archived courses (same layout as "All Courses" tab)
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Total Courses</div>
                    <div className="text-2xl font-bold">86</div>
                  </div>
                </div>
                <Badge variant="outline">+5 new</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <UserRound className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Active Faculty</div>
                    <div className="text-2xl font-bold">42</div>
                  </div>
                </div>
                <Badge variant="outline">Full-time</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Enrolled Students</div>
                    <div className="text-2xl font-bold">1,248</div>
                  </div>
                </div>
                <Badge variant="outline">Current Term</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Popular Courses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {popularCourses.map((course) => (
                <div key={course.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div>
                    <div className="font-medium">{course.name}</div>
                    <div className="text-sm text-muted-foreground">{course.department}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{course.students} students</div>
                    <div className="text-xs text-green-500">{course.trend} this term</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Course Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Search
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BookOpen className="mr-2 h-4 w-4" />
                Course Registration
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Management
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Courses;
