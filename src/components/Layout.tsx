import React from 'react';

interface LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ sidebar, children }) => {
  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-foreground text-background p-4 overflow-y-auto">
        {sidebar}
      </aside>
      <main className="flex-1 p-4 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
