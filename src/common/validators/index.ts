import { emailRegex } from "../regex";

export const emailValidator = (value: string) => emailRegex().test(value.toLowerCase()) ? [] : ["Please use correct formating.", "Example: address@email.com"];
