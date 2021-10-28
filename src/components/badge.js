import React from "react";

export default function Badge({ color, children, ...rest }) {
  const badgeClasses = `text-lg inline-flex mr-3 mb-3 rounded-full px-3`;
  const colorClasses = `bg-indigo-700 dark:bg-indigo-600 text-white`;

  return (
    <span className={`${badgeClasses} ${colorClasses}`} {...rest}>
      {children}
    </span>
  );
}
