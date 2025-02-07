import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./typeDefs/user.typeDef";
import transactionTypeDef from "./typeDefs/transaction.typeDef";

const mergeTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergeTypeDefs;
