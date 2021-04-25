import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "denison", age: 18 },
    { id: 2, name: "gabrielle", age: 22 },
    { id: 3, name: "isaque", age: 11 },
  ];

  return response.json(users);
};
