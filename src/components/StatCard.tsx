import type { LucideIcon } from "lucide-react";
import { CountUp } from "@/components/CountUp";

export function StatCard({
  value,
  suffix = "",
  label,
  icon: Icon,
}: {
  value: number;
  suffix?: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <article className="stat-card glass-card">
      <Icon size={19} className="card-icon" />
      <strong><CountUp value={value} />{suffix}</strong>
      <span>{label}</span>
    </article>
  );
}
