
import React from 'react';
import { Header } from './Header';
import { AppSidebar } from './AppSidebar';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-6 erp-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};
