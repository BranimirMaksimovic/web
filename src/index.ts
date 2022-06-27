import { User } from './models/User';

const user = new User({ name: 'pera', age: 35 });

user.set({ name: 'newName', age: 99 });
user.set({ name: 'makii' });

console.log(user.get('name'));
console.log(user.get('age'));
