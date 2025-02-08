import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Field, FormPayload, Holiday } from "./common/types";
import { saveForm } from "./common/services/form";
import { emailValidator } from "./common/validators";
import formStyles from "./styles/tailwind_form_styles";
import PersonalInfo from "./common/components/PersonalInfo";
import WorkoutInfo from "./common/components/WorkoutInfo";
import SubmitButton from "./common/components/SubmitButton";

const App: React.FC = () => {
  const [firstname, setFirstname] = useState<Field>({ value: "", dirty: false, validators: [] });
  const [surname, setSurname] = useState<Field>({ value: "", dirty: false, validators: [] });
  const [email, setEmail] = useState<Field>({ value: "", dirty: false, validators: [emailValidator] });
  const [age, setAge] = useState<Field>({ value: 8, dirty: false, validators: [] });
  const [attachment, setAttachment] = useState<Field>({ value: "", dirty: false, validators: [] });
  const [date, setDate] = useState<Field>({ value: "", dirty: false, validators: [] });
  const [selectedTime, setSelectedTime] = useState<Field>({ value: "", dirty: false, validators: [] });

  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [holiday, setHoliday] = useState<Holiday | null>(null);

  const [availableTimes, setAvailableTimes] = useState<string[]>(["12:00", "14:00", "16:30", "18:30", "20:00"]);

  const getSelectedDate = () => new Date(date.value);
  const isSunday = () => getSelectedDate().getDay() === 0;
  const isObservanceHoliday = () => holiday?.type === "OBSERVANCE";
  const isNationalHolidays = () => holiday?.type === "NATIONAL_HOLIDAY";

  const isEveryFieldRequired = () => {
    const formFields = [firstname, surname, email, age, attachment, date, selectedTime];
    return formFields.every((field) =>
      String(field.value).length > 0 && field.validators.every((validator) => validator(String(field.value)).length === 0)
    );
  };

  const isDisabledForm = () => !isEveryFieldRequired();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, callback: Dispatch<SetStateAction<Field>>) => {
    callback((prev: Field) => ({ ...prev, value: e.target.value }));
  };

  const onBlurHandler = (callback: Dispatch<SetStateAction<Field>>) => {
    callback((prev: Field) => ({ ...prev, dirty: true }));
  };

  const onSendHandler = async () => {
    const payload = { 
      firstname: firstname.value, 
      surname: surname.value, 
      email: email.value, 
      age: age.value, 
      attachment: attachment.value, 
      date: date.value, 
      selectedTime: selectedTime.value 
    };
    try {
      await saveForm(payload as FormPayload);
    } catch (error) {
      console.error("Exception", error);
    }
  };

  return (
    <div className={formStyles.container}>
      <form 
        className={formStyles.form} 
        onSubmit={(event) => {
          event.preventDefault();
          onSendHandler();
        }}
      >
        <PersonalInfo 
          firstname={firstname} 
          surname={surname} 
          email={email} 
          age={age} 
          attachment={attachment}
          setFirstname={setFirstname} 
          setSurname={setSurname} 
          setEmail={setEmail} 
          setAge={setAge} 
          setAttachment={setAttachment}
          onChangeHandler={onChangeHandler} 
          onBlurHandler={onBlurHandler} 
        />

        <WorkoutInfo
          date={date}
          selectedTime={selectedTime}
          holidays={holidays}
          holiday={holiday}
          availableTimes={availableTimes}
          setDate={setDate}
          setSelectedTime={setSelectedTime}
          isNationalHolidays={isNationalHolidays}
          isSunday={isSunday}
          isObservanceHoliday={isObservanceHoliday}
        />

        <SubmitButton 
          isDisabled={isDisabledForm()} 
          onSend={onSendHandler} 
        />
      </form>
    </div>
  );
};

export default App;
