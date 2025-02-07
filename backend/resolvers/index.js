import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver.js";
import transactionResolver from "./transaction.resolver.js";

// Use a different variable name for the merged resolvers
export const Mresolvers = mergeResolvers([userResolver, transactionResolver]);
