interface Products {
  id: number;
  title: string;
}

interface Rating {
  rating: number;
}

interface User {
  username: string;
}

const usernames: User[] = [
  { username: "alice" },
  { username: "bob" },
  { username: "charlie" },
];

const ratings: Rating[] = [{ rating: 4.5 }, { rating: 3.8 }, { rating: 5 }];

const products: Products[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
