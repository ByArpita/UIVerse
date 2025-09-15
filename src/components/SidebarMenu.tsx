import React from 'react';

interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

interface SidebarMenuProps {
  items: MenuItem[];
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isCollapsed,
  onToggleCollapse,
}) => {
  return (
    <aside
      className={`bg-foreground text-background h-screen transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'
        } flex flex-col`}
    >
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && <h2 className="text-xl font-semibold">Menu</h2>}
        <button onClick={onToggleCollapse} className="text-background focus:outline-none">
          <svg
            className="w-6 h-6 transform transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            ></path>
          </svg>
        </button>
      </div>
      <nav className="flex-grow">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href || '#'}
                className={`flex items-center py-3 px-4 hover:bg-popover ${isCollapsed ? 'justify-center' : ''
                  }`}
              >
                {item.icon && <span className={`${isCollapsed ? '' : 'mr-3'}`}>{item.icon}</span>}
                {!isCollapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarMenu;
