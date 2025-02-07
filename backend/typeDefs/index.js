import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./user.typeDef.js";
import transactionTypeDef from "./transaction.typeDef.js";

const mTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mTypeDefs;
