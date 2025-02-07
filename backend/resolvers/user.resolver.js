const { Query } = require("mongoose");
const { users } = require("./dummyData/data");

const userResolver = {
  Query: {
    users: () => {
      return users;
    },
  },
  Mutation: {},
};

export default userResolver;
