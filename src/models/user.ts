import { v4 as uuid } from 'uuid';

export class User {
  id?: string;
  username: string;
  api_key: string;
  roles: string[];
  permissions: string[];
  constructor(name: string, roles: string) {
    this.api_key = uuid();
    this.username = name;
    this.roles = [...roles];
    this.permissions = ['USER'];
  }
}
