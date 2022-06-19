import React from "react";

export default function Badge({ color, children, ...rest }) {
  const badgeClasses = `text-lg inline-flex mr-3 mb-3 rounded-full px-3`;
  const colorClasses = `bg-black bg-opacity-100 dark:bg-opacity-20 dark:bg-indigo-600 border-0 border-gray-900 dark:border-2 dark:border-indigo-700 text-indigo-100 dark:text-indigo-200`;

  return (
    <span className={`${badgeClasses} ${colorClasses}`} {...rest}>
      {children}
    </span>
  );
}
