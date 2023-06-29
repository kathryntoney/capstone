sequelize model:generate --name users --attributes id:string,name:string,email:string,profilePic:string

sequelize model:generate --name favorites --attributes userID:string,picture:string,notes:string