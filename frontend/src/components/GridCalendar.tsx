import dayjs from "dayjs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const GridCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs("2024-06-01"));
  const startOfMonth = currentMonth.startOf("month");
  const endOfMonth = currentMonth.endOf("month");
  const days: dayjs.Dayjs[] = [];

  let day = startOfMonth.startOf("week");
  while (day.isBefore(endOfMonth.endOf("week"))) {
    days.push(day);
    day = day.add(1, "day");
  }

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const events = [
    { date: "2026-02-19", label: "Choir Practice" },
    { date: "2026-02-19", label: "Choir Practice" },
    { date: "2026-02-19", label: "Choir Practice" },
    { date: "2026-02-19", label: "Choir Practice" },
    { date: "2026-02-19", label: "Choir Practice" },
  ];

  return (
    <>
      <div className="w-screen h-screen py-10">
        {/* Current Month & Year */}
        <div className="flex justify-start text-2xl font-bold text-white">
          <button
            className="cursor-pointer"
            onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
          </button>
          <button
            className="ml-2 cursor-pointer"
            onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-white" />
          </button>
          <button
            className="ml-4 cursor-pointer rounded-xl border border-white px-2 py-1 text-sm hover:bg-white hover:text-[var(--color-primary)] transition-colors duration-200"
            onClick={() => setCurrentMonth(dayjs())}
          >
            Today
          </button>
          <span className="ml-4">{currentMonth.format("MMMM YYYY")}</span>
        </div>
        <div className="w-[90%] grid grid-cols-7 text-center font-bold gap-1 text-white">
          {weekDays.map((day) => (
            <div
              key={day}
              className="p-2 text-xs font-bold uppercase tracking-[0.04em]"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="w-[90%] h-[90%] grid grid-cols-7 gap-1 text-[var(--color-text-primary)]">
          {days.map((d) => {
            const dayEvents = events.filter((e) =>
              dayjs(e.date).isSame(d, "day"),
            );
            return (
              <div
                className={`flex flex-col justify-center border border-black rounded-md p-2 cursor-pointer transition-colors duration-200 justify-start flex bg-white ${d.isSame(dayjs(), "day") ? "bg-[var(--color-primary)] text-white" : ""} ${
                  d.month() !== currentMonth.month() ? "opacity-50" : ""
                }`}
                key={d.toString()}
                onClick={() => setCurrentMonth(d)}
              >
                <div className="h-fit w-full flex gap-1 justify-start font-bold text-[var(--color-primary)] text-sm">
                  {(d.isSame(
                    currentMonth.subtract(1, "month").endOf("month"),
                    "day",
                  ) && <span>{d.format("MMMM")}</span>) ||
                    (d.isSame(
                      currentMonth.add(1, "month").startOf("month"),
                      "day",
                    ) && <span>{d.format("MMMM")}</span>)}
                  {d.date()}
                </div>
                <div className="h-full w-full flex justify-start flex-col items-center">
                  {dayEvents.map((event, index) => (
                    <div
                      key={index}
                      className="bg-[var(--color-accent)] text-[var(--color-text-primary)] font-bold text-xs rounded-md px-1 py-0.5 mt-1 w-full"
                    >
                      {event.label}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GridCalendar;
