import { Field, Holiday } from "../types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface PersonalInfoProps {
  firstname: Field;
  surname: Field;
  email: Field;
  age: Field;
  attachment: Field;
  setFirstname: Dispatch<SetStateAction<Field>>;
  setSurname: Dispatch<SetStateAction<Field>>;
  setEmail: Dispatch<SetStateAction<Field>>;
  setAge: Dispatch<SetStateAction<Field>>;
  setAttachment: Dispatch<SetStateAction<Field>>;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>, callback: Dispatch<SetStateAction<Field>>) => void;
  onBlurHandler: (callback: Dispatch<SetStateAction<Field>>) => void;
}

export interface WorkoutInfoProps {
  date: Field;
  selectedTime: Field;
  holidays: Holiday[];
  holiday: Holiday | null;
  availableTimes: string[];
  setDate: Dispatch<SetStateAction<Field>>;
  setSelectedTime: Dispatch<SetStateAction<Field>>;
  isNationalHolidays: () => boolean;
  isSunday: () => boolean;
  isObservanceHoliday: () => boolean;
}

export interface SubmitButtonProps {
  isDisabled: boolean;
  onSend: () => void;
}