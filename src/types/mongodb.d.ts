import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
  var mongoose: any; // This must be a `var` and not a `let / const`
}
