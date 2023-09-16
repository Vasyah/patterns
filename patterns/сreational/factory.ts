export interface IUser {
  name: string;
  age: number;
  city: string;
  adult: boolean;
}

export const userFactory = (
  name: IUser['name'],
  age: IUser['age'],
  city: IUser['city']
) => ({ name, age, city, adult: age >= 18 });
