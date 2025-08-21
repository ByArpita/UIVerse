import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center flex-nowrap">
        {items.map((item, index) => (
          <li key={item.label} className="inline-flex items-center">
            {index > 0 && (
              <span className="mx-1 text-gray-400">
                &lt;
              </span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-sm font-medium text-gray-500">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
