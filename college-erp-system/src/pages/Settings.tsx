
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BellRing, 
  CloudUpload, 
  Globe, 
  Lock, 
  LogOut, 
  Mail, 
  Moon, 
  Settings as SettingsIcon, 
  Shield, 
  Sun, 
  User
} from 'lucide-react';

const Settings = () => {
  return (
    <PageLayout title="Settings">
      <Tabs defaultValue="profile" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Account
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <BellRing className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="profile">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 items-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" size="sm">
                      <CloudUpload className="mr-2 h-4 w-4" />
                      Upload new photo
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      Remove photo
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="Robert Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input id="jobTitle" defaultValue="Professor of Computer Science" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select defaultValue="cs">
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="ece">Electronics & Communication</SelectItem>
                      <SelectItem value="me">Mechanical Engineering</SelectItem>
                      <SelectItem value="ce">Civil Engineering</SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Write a few sentences about yourself"
                    className="min-h-[100px]"
                    defaultValue="Professor of Computer Science with 15 years of experience in teaching and research. Specializing in Artificial Intelligence and Machine Learning."
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Update your contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="robert.smith@college.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="office">Office Location</Label>
                    <Input id="office" defaultValue="Building A, Room 305" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="officeHours">Office Hours</Label>
                    <Input id="officeHours" defaultValue="Monday & Wednesday 2-4 PM" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Social Profiles</CardTitle>
                  <CardDescription>Connect your social accounts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" type="url" defaultValue="https://robert-smith.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input id="linkedin" defaultValue="linkedin.com/in/robert-smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input id="twitter" defaultValue="@robertsmith" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="account">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="rsmith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="robert.smith@college.edu" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="Faculty (Administrator)" readOnly className="bg-muted/50" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="twoFactorAuth">Two-factor Authentication</Label>
                    <div className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </div>
                  </div>
                  <Switch id="twoFactorAuth" defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="gap-2 text-destructive border-destructive hover:bg-destructive/10">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Language & Region</CardTitle>
                  <CardDescription>Set your language and regional preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English (US)</SelectItem>
                        <SelectItem value="en-gb">English (UK)</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeZone">Time Zone</Label>
                    <Select defaultValue="est">
                      <SelectTrigger id="timeZone">
                        <SelectValue placeholder="Select time zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="est">Eastern Time (ET)</SelectItem>
                        <SelectItem value="cst">Central Time (CT)</SelectItem>
                        <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                        <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                        <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select defaultValue="mdy">
                      <SelectTrigger id="dateFormat">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Danger Zone</CardTitle>
                  <CardDescription>Irreversible account actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border border-destructive/20 p-4">
                      <div className="flex flex-col space-y-2">
                        <h4 className="font-medium text-destructive">Delete Account</h4>
                        <p className="text-sm text-muted-foreground">
                          Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                      </div>
                      <div className="mt-4">
                        <Button variant="destructive" size="sm">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border p-4">
                      <div className="flex flex-col space-y-2">
                        <h4 className="font-medium">Export Data</h4>
                        <p className="text-sm text-muted-foreground">
                          Download a copy of all your data in JSON format
                        </p>
                      </div>
                      <div className="mt-4">
                        <Button variant="outline" size="sm">
                          Export Data
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize how the College ERP System looks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-base">Theme</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-24 w-full items-center justify-center rounded-md border bg-background">
                      <Sun className="h-12 w-12 text-muted-foreground/30" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="light-theme" />
                      <Label htmlFor="light-theme">Light</Label>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-24 w-full items-center justify-center rounded-md border bg-slate-950">
                      <Moon className="h-12 w-12 text-white/30" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="dark-theme" defaultChecked />
                      <Label htmlFor="dark-theme">Dark</Label>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-24 w-full items-center justify-center rounded-md border bg-background">
                      <div className="flex flex-col gap-2">
                        <div className="h-3 w-8 rounded-sm bg-primary/10"></div>
                        <div className="h-3 w-10 rounded-sm bg-primary/20"></div>
                        <div className="h-3 w-6 rounded-sm bg-primary/30"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="system-theme" />
                      <Label htmlFor="system-theme">System</Label>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label className="text-base">Color Theme</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-8 w-full items-center justify-center rounded-md bg-secondary">
                      <div className="text-xs font-medium text-secondary-foreground">Purple</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-8 w-full items-center justify-center rounded-md bg-blue-600">
                      <div className="text-xs font-medium text-white">Blue</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-8 w-full items-center justify-center rounded-md bg-teal-600">
                      <div className="text-xs font-medium text-white">Teal</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label className="text-base">Font Size</Label>
                <div className="flex items-center space-x-4">
                  <Label htmlFor="font-size" className="text-sm">Small</Label>
                  <Input
                    id="font-size"
                    type="range"
                    min="0"
                    max="4"
                    defaultValue="2"
                    className="w-96"
                  />
                  <Label htmlFor="font-size" className="text-lg">Large</Label>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="animations">Animations</Label>
                  <div className="text-sm text-muted-foreground">
                    Enable animations and transitions
                  </div>
                </div>
                <Switch id="animations" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="compact-mode">Compact Mode</Label>
                  <div className="text-sm text-muted-foreground">
                    Reduce spacing in the interface
                  </div>
                </div>
                <Switch id="compact-mode" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <BellRing className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications in your browser
                      </p>
                    </div>
                  </div>
                  <Switch id="push-notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Desktop Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications on your desktop
                      </p>
                    </div>
                  </div>
                  <Switch id="desktop-notifications" />
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-3">Notification Categories</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Academic Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Course changes, exam schedules, etc.
                      </p>
                    </div>
                    <Switch id="academic-updates" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Attendance Alerts</p>
                      <p className="text-sm text-muted-foreground">
                        Low attendance warnings and updates
                      </p>
                    </div>
                    <Switch id="attendance-alerts" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">System Announcements</p>
                      <p className="text-sm text-muted-foreground">
                        Maintenance updates, new features, etc.
                      </p>
                    </div>
                    <Switch id="system-announcements" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Faculty Communications</p>
                      <p className="text-sm text-muted-foreground">
                        Messages from faculty members
                      </p>
                    </div>
                    <Switch id="faculty-communications" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Administrative Notices</p>
                      <p className="text-sm text-muted-foreground">
                        Important notices from administration
                      </p>
                    </div>
                    <Switch id="administrative-notices" defaultChecked />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label htmlFor="notification-time">Quiet Hours</Label>
                <div className="flex items-center gap-4">
                  <Select defaultValue="22">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="From" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i.toString().padStart(2, '0')}:00
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span>to</span>
                  <Select defaultValue="7">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="To" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i.toString().padStart(2, '0')}:00
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-sm text-muted-foreground">
                  No notifications will be sent during quiet hours
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Update your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span>At least 8 characters</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span>At least one uppercase letter</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span>At least one number</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    <span>At least one special character</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Update Password</Button>
              </CardFooter>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>Add an extra layer of security to your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-8 w-8 text-muted-foreground" />
                    <div className="space-y-1">
                      <p className="font-medium">Two-factor authentication is enabled</p>
                      <p className="text-sm text-muted-foreground">
                        Your account is protected with an authenticator app
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline">
                      Reconfigure 2FA
                    </Button>
                    <Button variant="ghost" className="text-destructive hover:bg-destructive/10">
                      Disable 2FA
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Login Devices</CardTitle>
                  <CardDescription>Manage your active sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start border-b pb-4">
                      <div className="space-y-1">
                        <p className="font-medium">Chrome on Windows</p>
                        <p className="text-xs text-muted-foreground">
                          Current session • Last active: Just now
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" disabled>
                        Current
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-start border-b pb-4">
                      <div className="space-y-1">
                        <p className="font-medium">Safari on iPhone</p>
                        <p className="text-xs text-muted-foreground">
                          Last active: 2 hours ago
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        Sign Out
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="font-medium">Firefox on MacBook</p>
                        <p className="text-xs text-muted-foreground">
                          Last active: Yesterday
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        Sign Out
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full text-destructive">
                    Sign out of all devices
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Settings;
