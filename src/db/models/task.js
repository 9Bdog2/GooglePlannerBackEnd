import sequelize from "../connect.js";
import x from "sequelize";

const { DataTypes } = x;

/*
 TASK STRUCTURE: 
	id: PK, UUID
	content: string, REQUIRED //actual to do
	done: boolean, REQUIRED  
 */

const Task = sequelize.define("tasks", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default Task;
