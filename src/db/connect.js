import { Sequelize } from "sequelize";

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

console.log("sequilize instance created");

export const testConnection = async () => {
  try {
    await sequelize.authenticate({ logging: false });
    console.log("Can be established");
  } catch (error) {
    console.log(error);
  }
};

export const connectDB = async () => {
  try {
    console.log("syncronizes all tables in connectDB");
    await sequelize.sync(/* { force: true } */);
  } catch (error) {
    console.log(error);
  }
};

export default sequelize;
