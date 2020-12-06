import express from "express";
import { schema } from "./data/schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("GraphQL is amazing");
});

app.listen(8080, () =>
  console.log("GraphQL up and running on port 8080/graphql")
);
