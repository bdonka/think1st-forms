import { useEffect, useState } from "react";
import formStyles from "../../styles/tailwind_form_styles";
import { SubmitButtonProps} from "../interfaces/types";
import { fetchHolidays } from "../services/holidays";
import { Holiday } from "../types";

const SubmitButton: React.FC<SubmitButtonProps> = ({ isDisabled, onSend }) => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  useEffect(() => {
    const fetchHolidaysEffect = async () => {
      try {
        const { data } = await fetchHolidays("PL", 2024);
        setHolidays(data);
      } catch (_) {
        setHolidays([]);
      }
    };
    fetchHolidaysEffect();
  }, []);

  const handleSend = async () => {
    try {
      await onSend();
    } catch (error) {
      console.error("Error sending form:", error);
    }
  };

  return (
    <div className={formStyles.fieldContainer}>
      <button
        type="button"
        disabled={isDisabled}
        onClick={handleSend}
        className={formStyles.button}
      >
        Send Application
      </button>
    </div>
  );
};

export default SubmitButton;
