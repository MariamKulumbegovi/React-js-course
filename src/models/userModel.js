export class UserModel {
  constructor(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = 0;
  }

  getName() {
    return this.firstName;
  }
}
