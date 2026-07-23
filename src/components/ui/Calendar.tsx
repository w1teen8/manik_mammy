"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"];

type CalendarProps = {
  selected: Date | null;
  onSelect: (date: Date) => void;
};

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export default function Calendar({ selected, onSelect }: CalendarProps) {
  const today = startOfDay(new Date());
  const [viewMonth, setViewMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const monthLabel = useMemo(() => {
    const label = viewMonth.toLocaleDateString("uk-UA", { month: "long", year: "numeric" });
    return label.charAt(0).toUpperCase() + label.slice(1);
  }, [viewMonth]);

  const days = useMemo(() => {
    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const offset = (firstDay.getDay() + 6) % 7; // Monday-first
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: (Date | null)[] = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    return cells;
  }, [viewMonth]);

  const canGoPrev =
    viewMonth.getFullYear() > today.getFullYear() ||
    (viewMonth.getFullYear() === today.getFullYear() && viewMonth.getMonth() > today.getMonth());

  return (
    <div className="rounded-[24px] border border-white/[0.1] bg-white/[0.03] p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <button
          type="button"
          data-cursor-hover
          aria-label="Попередній місяць"
          disabled={!canGoPrev}
          onClick={() => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white transition-colors enabled:hover:border-white/25 enabled:hover:bg-white/[0.06] disabled:opacity-20"
        >
          <ChevronLeft size={15} />
        </button>
        <p className="font-display text-base text-white">{monthLabel}</p>
        <button
          type="button"
          data-cursor-hover
          aria-label="Наступний місяць"
          onClick={() => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white transition-colors hover:border-white/25 hover:bg-white/[0.06]"
        >
          <ChevronRight size={15} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-center">
        {WEEKDAYS.map((w) => (
          <span key={w} className="text-[10px] uppercase tracking-[0.1em] text-[#B8B8B8]">
            {w}
          </span>
        ))}
        {days.map((date, i) => {
          if (!date) return <span key={i} />;
          const isPast = date < today;
          const isSelected = !!selected && startOfDay(selected).getTime() === date.getTime();
          const isToday = date.getTime() === today.getTime();
          return (
            <button
              key={i}
              type="button"
              data-cursor-hover
              disabled={isPast}
              onClick={() => onSelect(date)}
              className={cn(
                "mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors",
                isPast && "cursor-not-allowed text-white/15",
                !isPast && !isSelected && "text-white hover:bg-white/[0.08]",
                isSelected && "bg-white font-medium text-[#090909]",
                isToday && !isSelected && "border border-[#F3E7FF]/40"
              )}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
