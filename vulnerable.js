// SQL Injection example for CodeQL
const userInput = req.query.id;
const query = "SELECT * FROM users WHERE id = " + userInput;  
db.execute(query); 
