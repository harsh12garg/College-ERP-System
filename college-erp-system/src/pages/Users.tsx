
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowUpDown, 
  Check, 
  Edit2, 
  Filter, 
  MoreHorizontal, 
  PlusCircle, 
  Search, 
  Shield, 
  ShieldAlert,
  User as UserIcon, 
  UserCog, 
  UserPlus,
  X 
} from 'lucide-react';

const Users = () => {
  // Sample user data
  const users = [
    {
      id: 1,
      name: "Robert Smith",
      email: "robert.smith@college.edu",
      role: "Administrator",
      department: "Computer Science",
      status: "active",
      lastActive: "2 hours ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Emily Johnson",
      email: "emily.johnson@college.edu",
      role: "Faculty",
      department: "Electronics & Communication",
      status: "active",
      lastActive: "1 day ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "David Brown",
      email: "david.brown@college.edu",
      role: "Faculty",
      department: "Mechanical Engineering",
      status: "active",
      lastActive: "3 hours ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.williams@college.edu",
      role: "Staff",
      department: "Civil Engineering",
      status: "inactive",
      lastActive: "2 weeks ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 5,
      name: "James Lee",
      email: "james.lee@college.edu",
      role: "Faculty",
      department: "Information Technology",
      status: "active",
      lastActive: "Just now",
      avatar: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Jennifer Garcia",
      email: "jennifer.garcia@college.edu",
      role: "Staff",
      department: "Electrical Engineering",
      status: "active",
      lastActive: "5 hours ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 7,
      name: "Michael Miller",
      email: "michael.miller@college.edu",
      role: "Administrator",
      department: "Computer Science",
      status: "active",
      lastActive: "Yesterday",
      avatar: "/placeholder.svg"
    },
    {
      id: 8,
      name: "Lisa Taylor",
      email: "lisa.taylor@college.edu",
      role: "Faculty",
      department: "Physics",
      status: "inactive",
      lastActive: "1 month ago",
      avatar: "/placeholder.svg"
    }
  ];
  
  // Sample recent activities
  const recentActivities = [
    {
      id: 1,
      user: "Robert Smith",
      action: "Created a new user account",
      time: "2 hours ago"
    },
    {
      id: 2,
      user: "Michael Miller",
      action: "Updated user permissions",
      time: "Yesterday"
    },
    {
      id: 3,
      user: "Sarah Williams",
      action: "Account deactivated",
      time: "2 weeks ago"
    }
  ];
  
  // Sample role distribution
  const roleDistribution = [
    { role: "Faculty", count: 85 },
    { role: "Staff", count: 42 },
    { role: "Administrator", count: 12 },
    { role: "Student", count: 1580 }
  ];

  return (
    <PageLayout title="User Management">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search users..."
                className="w-full pl-8"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all-users">
            <TabsList>
              <TabsTrigger value="all-users">All Users</TabsTrigger>
              <TabsTrigger value="admins">Administrators</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all-users" className="mt-6">
              <Card>
                <CardHeader className="pb-1">
                  <div className="flex justify-between items-center">
                    <CardTitle>All Users</CardTitle>
                    <CardDescription>{users.length} users found</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-[1fr_1fr_1fr_auto] md:grid-cols-[1fr_1fr_1fr_1fr_auto] bg-muted/50 p-2">
                      <div className="flex items-center px-2 font-medium text-sm">
                        <div className="flex items-center gap-1 cursor-pointer">
                          User <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="hidden md:flex items-center px-2 font-medium text-sm">
                        <div className="flex items-center gap-1 cursor-pointer">
                          Department <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="flex items-center px-2 font-medium text-sm">
                        <div className="flex items-center gap-1 cursor-pointer">
                          Role <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="flex items-center px-2 font-medium text-sm">
                        <div className="flex items-center gap-1 cursor-pointer">
                          Status <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="flex items-center justify-center px-2 font-medium text-sm">
                        Actions
                      </div>
                    </div>
                    
                    <div className="divide-y">
                      {users.map((user) => (
                        <div key={user.id} className="grid grid-cols-[1fr_1fr_1fr_auto] md:grid-cols-[1fr_1fr_1fr_1fr_auto] items-center p-2">
                          <div className="flex items-center gap-2 px-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{user.name}</div>
                              <div className="text-xs text-muted-foreground">{user.email}</div>
                            </div>
                          </div>
                          <div className="hidden md:block px-2 text-sm">
                            {user.department}
                          </div>
                          <div className="px-2 text-sm">
                            <Badge variant={user.role === "Administrator" ? "secondary" : "outline"}>
                              {user.role}
                            </Badge>
                          </div>
                          <div className="px-2 text-sm">
                            <Badge variant={user.status === "active" ? "default" : "destructive"}>
                              {user.status === "active" ? 
                                <Check className="mr-1 h-3 w-3" /> : 
                                <X className="mr-1 h-3 w-3" />
                              }
                              {user.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-center">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <UserIcon className="mr-2 h-4 w-4" />
                                  View Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit2 className="mr-2 h-4 w-4" />
                                  Edit User
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Shield className="mr-2 h-4 w-4" />
                                  Permissions
                                </DropdownMenuItem>
                                {user.status === "active" ? (
                                  <DropdownMenuItem className="text-destructive">
                                    <X className="mr-2 h-4 w-4" />
                                    Deactivate
                                  </DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem>
                                    <Check className="mr-2 h-4 w-4" />
                                    Activate
                                  </DropdownMenuItem>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">Previous</Button>
                  <div className="text-sm text-muted-foreground">Page 1 of 3</div>
                  <Button variant="outline" size="sm">Next</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="admins">
              <div className="py-8 text-center text-muted-foreground">
                Showing administrators (same layout as "All Users" tab)
              </div>
            </TabsContent>
            
            <TabsContent value="faculty">
              <div className="py-8 text-center text-muted-foreground">
                Showing faculty (same layout as "All Users" tab)
              </div>
            </TabsContent>
            
            <TabsContent value="staff">
              <div className="py-8 text-center text-muted-foreground">
                Showing staff (same layout as "All Users" tab)
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                <UserPlus className="mr-2 h-4 w-4" />
                Add New User
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <UserCog className="mr-2 h-4 w-4" />
                Manage Permissions
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <ShieldAlert className="mr-2 h-4 w-4" />
                Security Audit
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Role
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Role Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {roleDistribution.map((item) => (
                  <div key={item.role} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${
                        item.role === "Faculty" ? "bg-blue-500" :
                        item.role === "Staff" ? "bg-green-500" :
                        item.role === "Administrator" ? "bg-purple-500" :
                        "bg-orange-500"
                      }`}></div>
                      <span>{item.role}</span>
                    </div>
                    <span className="font-medium">{item.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="border-b pb-3 last:border-0 last:pb-0">
                    <div className="font-medium">{activity.user}</div>
                    <div className="text-sm text-muted-foreground">{activity.action}</div>
                    <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View All Activities
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Users;
