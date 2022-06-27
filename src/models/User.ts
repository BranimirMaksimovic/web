interface UserProps {
  name?: string; // ? make property optional
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  //  set(update: { name: string; age: number }): void {} is the same as

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
