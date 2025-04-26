
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, GraduationCap, UserRound, BookOpen, PlusCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

// Sample data
const departments = [
  { 
    id: 1, 
    name: 'Computer Science & Engineering', 
    shortName: 'CSE',
    hod: 'Dr. Robert Smith',
    students: 450,
    faculty: 32,
    courses: 24,
    utilizationPercentage: 92
  },
  { 
    id: 2, 
    name: 'Electronics & Communication Engineering', 
    shortName: 'ECE',
    hod: 'Dr. Emily Johnson',
    students: 380,
    faculty: 28,
    courses: 22,
    utilizationPercentage: 85
  },
  { 
    id: 3, 
    name: 'Mechanical Engineering', 
    shortName: 'ME',
    hod: 'Prof. David Brown',
    students: 410,
    faculty: 30,
    courses: 20,
    utilizationPercentage: 78
  },
  { 
    id: 4, 
    name: 'Civil Engineering', 
    shortName: 'CE',
    hod: 'Dr. Sarah Williams',
    students: 320,
    faculty: 25,
    courses: 18,
    utilizationPercentage: 82
  },
  { 
    id: 5, 
    name: 'Information Technology', 
    shortName: 'IT',
    hod: 'Prof. James Lee',
    students: 390,
    faculty: 26,
    courses: 23,
    utilizationPercentage: 88
  },
  { 
    id: 6, 
    name: 'Electrical Engineering', 
    shortName: 'EE',
    hod: 'Dr. Jennifer Garcia',
    students: 350,
    faculty: 24,
    courses: 19,
    utilizationPercentage: 76
  },
];

const Departments = () => {
  return (
    <PageLayout title="Departments">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <Card key={dept.id} className="overflow-hidden">
            <CardHeader className="p-6 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{dept.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{dept.shortName}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-0">
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Head of Department:</strong> {dept.hod}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Resource Utilization</span>
                  <span className="font-medium">{dept.utilizationPercentage}%</span>
                </div>
                <Progress value={dept.utilizationPercentage} className="h-2" />
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-erp-purple/10 flex items-center justify-center text-erp-purple mb-1">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{dept.students}</span>
                    <span className="text-xs text-muted-foreground">Students</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-erp-teal/10 flex items-center justify-center text-erp-teal mb-1">
                      <UserRound className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{dept.faculty}</span>
                    <span className="text-xs text-muted-foreground">Faculty</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-erp-blue/10 flex items-center justify-center text-erp-blue mb-1">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{dept.courses}</span>
                    <span className="text-xs text-muted-foreground">Courses</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4 border-t bg-muted/30">
              <Button variant="outline" size="sm" className="text-xs">Faculty List</Button>
              <Button variant="outline" size="sm" className="text-xs">Courses</Button>
              <Button variant="outline" size="sm" className="text-xs">Students</Button>
            </CardFooter>
          </Card>
        ))}
        
        <Card className="border-dashed flex items-center justify-center p-6">
          <Button variant="outline" className="h-32 w-full border-dashed flex flex-col gap-2">
            <PlusCircle className="h-8 w-8 text-muted-foreground" />
            <span>Add New Department</span>
          </Button>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Departments;
