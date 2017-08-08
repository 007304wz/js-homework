export class User {
  id: number;
  buyer_id: number;
  first_name: string;
  last_name: string;
  email: string;

  constructor(id: number, first_name: string, last_name: string, email: string = null) {
    this.id = id;
    this.buyer_id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
  }
}
