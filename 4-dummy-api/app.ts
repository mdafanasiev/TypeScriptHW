const axios = require("axios").default;

const url: string = "https://dummyjson.com/users";

async function getUsers(url: string): Promise<void> {
  try {
    const response = await axios.get(url);
    for (const user of response.data.users) {
      console.log(user as User);
    } 
  } catch (error) {
    console.log((error as Error).message);
  }
}

enum Gender {
  FEMALE = "female",
  MALE = "male",
}

enum Roles {
  ADMIN = "admin",
  USER = "user",
  MODERATOR = "moderator",
}

type Coordinates = {
  lat: string;
  lng: string;
};

interface Hair {
  color: string;
  type: string;
}

interface Adress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  adress: Adress;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

interface User {
  id: number;
  firstname: string;
  lastname: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  Adress: Adress;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: Roles;
}

getUsers(url);