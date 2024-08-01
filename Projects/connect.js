import pg from "pg";

 export const db= new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"Social",
    password:"Venugopal7@",
    port:5432,
  });
  
  db.connect();
  