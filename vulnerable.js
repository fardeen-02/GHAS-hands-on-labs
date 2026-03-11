// SQL Injection example for CodeQL
const userInput = req.query.id;
const query = "SELECT * FROM users WHERE id = " + userInput;  
db.execute(query); 
AWS_SECRET_ACCESS_KEY = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
