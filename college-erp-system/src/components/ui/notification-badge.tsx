
import React from 'react';
import { cn } from '@/lib/utils';

interface NotificationBadgeProps {
  count?: number;
  children: React.ReactNode;
  className?: string;
}

export function NotificationBadge({ count, children, className }: NotificationBadgeProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
      {count && count > 0 && (
        <div className="absolute -top-1 -right-1 rounded-full bg-destructive text-destructive-foreground text-xs min-w-[18px] h-[18px] flex items-center justify-center px-1">
          {count > 99 ? '99+' : count}
        </div>
      )}
    </div>
  );
}
