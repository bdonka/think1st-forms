import { AxiosResponse } from "axios";
import api from "./api";
import { FormPayload } from "src/common/types";


export const saveForm = async (payload: FormPayload): Promise<AxiosResponse<void>> => await api.post("/submit", payload);
