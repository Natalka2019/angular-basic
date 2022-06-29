export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number | string;
  avatar: string;
  isSelected?: boolean;
  name?: string;
}
