import { User } from './user';

export interface NewState {
  users: User[];
}

export const NEW_USERS: NewState = {users: []};
