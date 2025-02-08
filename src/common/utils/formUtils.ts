import { Field } from "../types";
import formStyles from "../../styles/tailwind_form_styles";

export const isRequiredError = (field: Field) => field.dirty && !String(field.value).length;

export const isValidationError = (field: Field) => 
  field.dirty && field.validators.some(validator => validator(field.value).length > 0);

export const getInputClassName = (field: Field) => 
  `${formStyles.input} ${(isRequiredError(field) || isValidationError(field)) ? formStyles.inputError : ""}`;