
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  BookOpen, 
  CalendarDays, 
  ChevronLeft,
  UserRound, 
  Users, 
  Building2, 
  GraduationCap, 
  Bell,
  ClipboardList,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  collapsed: boolean;
}

const NavItem = ({ to, icon: Icon, label, collapsed }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to={to} className="block">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 px-3 py-2 h-10 font-normal text-white",
                isActive ? "active-nav-link" : "hover:bg-sidebar-accent/50 hover:text-white",
                collapsed ? "px-3" : "px-4"
              )}
            >
              <Icon size={20} />
              {!collapsed && <span>{label}</span>}
            </Button>
          </Link>
        </TooltipTrigger>
        {collapsed && <TooltipContent side="right">{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};

interface NavGroupProps {
  title: string;
  children: React.ReactNode;
  collapsed: boolean;
}

const NavGroup = ({ title, children, collapsed }: NavGroupProps) => (
  <div className="mb-6">
    {!collapsed && (
      <h4 className="text-white/60 font-medium text-xs uppercase tracking-wider px-4 mb-2">
        {title}
      </h4>
    )}
    <div className="space-y-1">{children}</div>
  </div>
);

export const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen bg-sidebar flex flex-col border-r border-sidebar-border",
        collapsed ? "w-[70px]" : "w-64"
      )}
    >
      <div className="flex items-center h-16 px-4 border-b border-sidebar-border">
        {!collapsed ? (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-bold">
              ERP
            </div>
            <h1 className="font-semibold text-white">College ERP</h1>
          </div>
        ) : (
          <div className="h-8 w-8 mx-auto rounded-md bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-bold">
            ERP
          </div>
        )}
      </div>

      <div className="flex-1 py-4 overflow-y-auto erp-scrollbar">
        <NavGroup title="Overview" collapsed={collapsed}>
          <NavItem to="/" icon={BarChart3} label="Dashboard" collapsed={collapsed} />
          <NavItem to="/calendar" icon={CalendarDays} label="Calendar" collapsed={collapsed} />
          <NavItem to="/notifications" icon={Bell} label="Notifications" collapsed={collapsed} />
        </NavGroup>

        <NavGroup title="Core" collapsed={collapsed}>
          <NavItem to="/students" icon={GraduationCap} label="Students" collapsed={collapsed} />
          <NavItem to="/faculty" icon={UserRound} label="Faculty" collapsed={collapsed} />
          <NavItem to="/departments" icon={Building2} label="Departments" collapsed={collapsed} />
          <NavItem to="/courses" icon={BookOpen} label="Courses" collapsed={collapsed} />
        </NavGroup>

        <NavGroup title="Management" collapsed={collapsed}>
          <NavItem to="/attendance" icon={ClipboardList} label="Attendance" collapsed={collapsed} />
          <NavItem to="/users" icon={Users} label="User Management" collapsed={collapsed} />
          <NavItem to="/settings" icon={Settings} label="Settings" collapsed={collapsed} />
        </NavGroup>
      </div>

      <div className="border-t border-sidebar-border p-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-full h-10 justify-center text-white/60 hover:text-white hover:bg-sidebar-accent"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronLeft className={cn("h-5 w-5", collapsed && "rotate-180")} />
          {!collapsed && <span className="ml-2">Collapse</span>}
        </Button>
      </div>
    </div>
  );
};
