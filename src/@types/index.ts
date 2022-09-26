export enum EGender {
  Male = "Male",
  Female = "Female",
}

export interface IUser {
  id?: string;
  phone: string;
  firstName: string;
  lastName: string;
  gender: EGender;
  city: string;
  country: string;
  avt?: string;
  hobbies: string[];
}

export interface IChat {
  id?: string;
  from: string;
  to: string;
  text: string;
  createdAt: Date | number;
}
