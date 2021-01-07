export interface User {
  id: number;
  firstName: string;
  lastName: string;
  combinedName?: string;
}

export let users: User[] = [
  {
    "id": 1,
    "firstName": "Krystian",
    "lastName": "Nowak"
  },
  {
    "id": 2,
    "firstName": "Maciej",
    "lastName": "Kowalski"
  },
  {
    "id": 3,
    "firstName": "Zbigniew",
    "lastName": "Czajka"
  }
]
