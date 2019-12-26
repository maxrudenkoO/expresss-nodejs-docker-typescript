export class UserEntity {
  id: number;
  email: string;
  fullName: string;
  password: string;
  role: UserRole;
}

export enum UserRole {
  Administrator = 0,
  Client = 1
}
