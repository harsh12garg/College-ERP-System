
import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Filter, Plus, Search, SlidersHorizontal, UserPlus } from 'lucide-react';

// Sample data
const students = [
  { id: 1, name: 'John Smith', email: 'john.smith@example.com', enrollmentNo: 'CSE2020001', department: 'Computer Science', year: '3rd', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 2, name: 'Emma Johnson', email: 'emma.j@example.com', enrollmentNo: 'ECE2020015', department: 'Electronics', year: '3rd', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 3, name: 'Michael Brown', email: 'mbrown@example.com', enrollmentNo: 'ME2020032', department: 'Mechanical', year: '3rd', status: 'Inactive', imgUrl: '/placeholder.svg' },
  { id: 4, name: 'Sophia Davis', email: 'sophia.d@example.com', enrollmentNo: 'CE2020058', department: 'Civil', year: '3rd', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 5, name: 'William Lee', email: 'w.lee@example.com', enrollmentNo: 'CSE2020109', department: 'Computer Science', year: '3rd', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 6, name: 'Olivia Wilson', email: 'owilson@example.com', enrollmentNo: 'IT2020087', department: 'Information Tech', year: '3rd', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 7, name: 'James Taylor', email: 'james.t@example.com', enrollmentNo: 'CSE2020125', department: 'Computer Science', year: '3rd', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 8, name: 'Ava Robinson', email: 'ava.r@example.com', enrollmentNo: 'ECE2020043', department: 'Electronics', year: '3rd', status: 'Inactive', imgUrl: '/placeholder.svg' },
  { id: 9, name: 'Benjamin Moore', email: 'b.moore@example.com', enrollmentNo: 'ME2020076', department: 'Mechanical', year: '3rd', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 10, name: 'Charlotte Clark', email: 'c.clark@example.com', enrollmentNo: 'CSE2020099', department: 'Computer Science', year: '3rd', status: 'Active', imgUrl: '/placeholder.svg' },
];

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openAddDialog, setOpenAddDialog] = useState(false);
  
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.enrollmentNo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <PageLayout title="Students">
      <div className="mb-6">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <TabsList>
              <TabsTrigger value="all">All Students</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search students..." 
                  className="pl-9 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
                <DialogTrigger asChild>
                  <Button className="gap-1">
                    <UserPlus className="h-4 w-4" />
                    <span className="hidden sm:inline">Add Student</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Student</DialogTitle>
                    <DialogDescription>
                      Enter the details of the new student to add them to the system.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="First Name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="student@example.com" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="enrollmentNo">Enrollment No.</Label>
                        <Input id="enrollmentNo" placeholder="e.g. CSE2023001" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="year">Year</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cs">Computer Science</SelectItem>
                          <SelectItem value="ece">Electronics</SelectItem>
                          <SelectItem value="me">Mechanical</SelectItem>
                          <SelectItem value="ce">Civil</SelectItem>
                          <SelectItem value="it">Information Technology</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setOpenAddDialog(false)}>Cancel</Button>
                    <Button>Save Student</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <TabsContent value="all">
            <Card>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">All Students</CardTitle>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Enrollment No.</TableHead>
                      <TableHead className="hidden md:table-cell">Department</TableHead>
                      <TableHead className="hidden lg:table-cell">Year</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.length > 0 ? (
                      filteredStudents.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={student.imgUrl} alt={student.name} />
                                <AvatarFallback>{student.name.charAt(0)}{student.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{student.name}</p>
                                <p className="text-sm text-muted-foreground">{student.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{student.enrollmentNo}</TableCell>
                          <TableCell className="hidden md:table-cell">{student.department}</TableCell>
                          <TableCell className="hidden lg:table-cell">{student.year} Year</TableCell>
                          <TableCell>
                            <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>
                              {student.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">View</Button>
                            <Button variant="ghost" size="sm">Edit</Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8">
                          No students found. Try a different search term.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="active">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Active Students</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p>Content for active students tab</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="inactive">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Inactive Students</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p>Content for inactive students tab</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Students;
