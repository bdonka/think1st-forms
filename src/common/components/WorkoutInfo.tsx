import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import formStyles from "../../styles/tailwind_form_styles";
import RequiredFieldContainer from "./RequiredFieldContainer";
import ValidatorFieldContainer from "./ValidatorFieldContainer";
import { WorkoutInfoProps } from "../interfaces/types";
import { useEffect, useState } from "react";
import { Holiday } from "../types";

const WorkoutInfo: React.FC<WorkoutInfoProps> = ({
  date,
  selectedTime,
  holidays,
  holiday,
  availableTimes,
  setDate,
  setSelectedTime,
}) => {
  const [currentHoliday, setCurrentHoliday] = useState<Holiday | null>(null);

  useEffect(() => {
    const relatedHoliday = holidays.find((h) => h.date === date.value) || null;
    setCurrentHoliday(relatedHoliday);
  }, [date, holidays]);

  const getSelectedDate = () => new Date(date.value);
  const isSunday = () => getSelectedDate().getDay() === 0;
  const isObservanceHoliday = () => currentHoliday?.type === "OBSERVANCE";
  const isNationalHolidays = () => currentHoliday?.type === "NATIONAL_HOLIDAY";
  return (
    <>
      <h2 className={formStyles.heading}>Your workout</h2>

      <div className={formStyles.timeContainer}>
        <div className={formStyles.fieldContainer}>
          <label className={formStyles.label}>Date</label>
          <Calendar
            locale="en-GB"
            onChange={(value) => {
              if (value instanceof Date) {
                setDate({ ...date, value: value.toLocaleDateString("sv-SE") });
              }
            }}
            value={date.value ? new Date(date.value) : null}
            className={formStyles.calendar}
            tileClassName={({ date }) => {
              const formattedDate = date.toLocaleDateString("sv-SE");
              const holiday = holidays.find((h) => h.date === formattedDate);
              const isSunday = date.getDay() === 0;

              if (holiday?.type === "NATIONAL_HOLIDAY" || isSunday) {
                return `${formStyles.calendarTile} ${formStyles.holidayOrSunday}`;
              }

              return formStyles.calendarTile;
            }}
            navigationLabel={({ date }) =>
              date.toLocaleDateString("en-GB", { month: "long", year: "numeric" })
            }
            nextLabel="▶"
            prevLabel="◀"
            next2Label={null}
            prev2Label={null}
            formatShortWeekday={(locale, date) => {
              const shortDay = date.toLocaleDateString("en-GB", { weekday: "short" });
              return shortDay.charAt(0).toUpperCase() + shortDay.charAt(1).toLowerCase();
            }}
          />
          <div className={formStyles.validationMessage}>
            <RequiredFieldContainer {...date} />
            <ValidatorFieldContainer {...date} />
          </div>
        </div>

        {date.value && !isNationalHolidays() && !isSunday() && (
          <div className={formStyles.fieldContainer}>
            <label className={formStyles.label}>Time</label>
            <div className={formStyles.hoursContainer}>
              {availableTimes.map((time) => (
                <button
                  key={time}
                  className={`${formStyles.hourButton} ${
                    selectedTime.value === time ? formStyles.hour : formStyles.selectedHour
                  }`}
                  onClick={() => setSelectedTime((prev) => ({ ...prev, value: time }))}
                >
                  {time}
                </button>
              ))}
            </div>
            <div className={formStyles.validationMessage}>
              <RequiredFieldContainer {...selectedTime} />
              <ValidatorFieldContainer {...selectedTime} />
            </div>
          </div>
        )}
      </div>

      <div className={formStyles.fieldContainer}>
        {(isObservanceHoliday() || isNationalHolidays()) && (
          <div className={formStyles.holidayInfo}>
            <span className={formStyles.holidayIcon}>It is {holiday?.name}.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default WorkoutInfo;
