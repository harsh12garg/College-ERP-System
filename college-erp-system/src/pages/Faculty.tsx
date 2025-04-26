
import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Search, UserPlus } from 'lucide-react';

// Sample data
const facultyMembers = [
  { id: 1, name: 'Dr. Robert Smith', email: 'robert.smith@example.com', empId: 'FAC-001', department: 'Computer Science', designation: 'Professor', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 2, name: 'Dr. Emily Johnson', email: 'emily.j@example.com', empId: 'FAC-015', department: 'Electronics', designation: 'Associate Professor', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 3, name: 'Prof. David Brown', email: 'david.b@example.com', empId: 'FAC-032', department: 'Mechanical', designation: 'Assistant Professor', status: 'On Leave', imgUrl: '/placeholder.svg' },
  { id: 4, name: 'Dr. Sarah Williams', email: 'sarah.w@example.com', empId: 'FAC-058', department: 'Civil', designation: 'Professor', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 5, name: 'Prof. James Lee', email: 'james.lee@example.com', empId: 'FAC-089', department: 'Computer Science', designation: 'Assistant Professor', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 6, name: 'Dr. Jennifer Garcia', email: 'jennifer.g@example.com', empId: 'FAC-102', department: 'Information Tech', designation: 'Associate Professor', status: 'Active', imgUrl: '/placeholder.svg' },
  { id: 7, name: 'Prof. Michael Wilson', email: 'michael.w@example.com', empId: 'FAC-125', department: 'Computer Science', designation: 'Professor', status: 'On Leave', imgUrl: '/placeholder.svg' },
  { id: 8, name: 'Dr. Patricia Moore', email: 'p.moore@example.com', empId: 'FAC-143', department: 'Electronics', designation: 'Assistant Professor', status: 'Active', imgUrl: '/placeholder.svg' },
];

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredFaculty = facultyMembers.filter(faculty => 
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faculty.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.empId.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <PageLayout title="Faculty">
      <div className="mb-6">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <TabsList>
              <TabsTrigger value="all">All Faculty</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="onleave">On Leave</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search faculty..." 
                  className="pl-9 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button className="gap-1">
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Add Faculty</span>
              </Button>
            </div>
          </div>
          
          <TabsContent value="all">
            <Card>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">All Faculty Members</CardTitle>
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
                      <TableHead>Faculty</TableHead>
                      <TableHead>Employee ID</TableHead>
                      <TableHead className="hidden md:table-cell">Department</TableHead>
                      <TableHead className="hidden lg:table-cell">Designation</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredFaculty.length > 0 ? (
                      filteredFaculty.map((faculty) => (
                        <TableRow key={faculty.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={faculty.imgUrl} alt={faculty.name} />
                                <AvatarFallback>{faculty.name.charAt(0)}{faculty.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{faculty.name}</p>
                                <p className="text-sm text-muted-foreground">{faculty.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{faculty.empId}</TableCell>
                          <TableCell className="hidden md:table-cell">{faculty.department}</TableCell>
                          <TableCell className="hidden lg:table-cell">{faculty.designation}</TableCell>
                          <TableCell>
                            <Badge variant={faculty.status === 'Active' ? 'default' : 'secondary'}>
                              {faculty.status}
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
                          No faculty members found. Try a different search term.
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
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Active Faculty Members</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Content for active faculty tab</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="onleave">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Faculty On Leave</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Content for faculty on leave tab</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Faculty;
