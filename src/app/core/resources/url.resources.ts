import { environment } from "../../../environments/environment.development";

export const URL_RESOURCES = {
  user: `${environment.apiUrl}/user`,
  userParams: (params:string) => `${environment.apiUrl}/user/${params}`
}