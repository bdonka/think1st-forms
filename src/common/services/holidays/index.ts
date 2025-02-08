import { AxiosResponse } from "axios";
import api from "./api";
import { Holiday } from "src/common/types";

export const fetchHolidays = async (country: string, year: number): Promise<AxiosResponse<Holiday[]>> => {
  return await api.get("/holidays", { params: { country, year } })
};

