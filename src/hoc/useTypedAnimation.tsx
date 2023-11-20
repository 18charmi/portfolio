import { useState, useEffect } from "react";
const roles = [
  "React Developer...",
  "Web Developer...",
  "Frontend Dev...",
];
export const useTypedAnimation = () => {
  const [typeRole, updateTypedRole] = useState("");
  const [activeRole, updateActiveRole] = useState(0);
  useEffect(() => {
    let nextTypeRole = roles[activeRole].slice(0, typeRole.length + 1);
    if (nextTypeRole === typeRole) {
      updateActiveRole((i) => (i === roles.length - 1 ? 0 : i + 1));
      updateTypedRole("");
      return;
    }
    const timeout = setTimeout(() => {
      updateTypedRole(nextTypeRole);
    }, 300);

    return () => clearTimeout(timeout);
  }, [typeRole]);

  return { typeRole };
};
