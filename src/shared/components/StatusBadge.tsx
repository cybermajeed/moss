import React from "react";

type Status = "idle" | "active" | "error";

interface StatusBadgeProps {
  status: Status;
}

const colors: Record<Status, string> = {
  idle:   "bg-moss-900 text-moss-500",
  active: "bg-moss-500 text-moss-950",
  error:  "bg-red-900 text-red-400",
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => (
  <span className={`text-[10px] px-2 py-0.5 rounded font-bold tracking-widest uppercase ${colors[status]}`}>
    {status}
  </span>
);

export default StatusBadge;
