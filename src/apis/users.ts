import { File } from './files';
import { UserType } from './user-types';

export interface User {
  email: string;
  username: string;
  profile: File;
  userType: UserType;
}
