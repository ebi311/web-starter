export type Gender = 'man' | 'woman' | 'none';
export default interface IUser {
  familyName: string;
  givenName: string;
  gender: Gender;
}
