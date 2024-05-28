import express from 'express';
const app = express();

// Middleware to parse application/x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }));

// Serve the form on the /login route
app.get('/login', (req, res) => {
  res.send(`
    <form action="/register" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="user[username]"><br><br>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="user[email]"><br><br>
      
      <label for="password">Password:</label>
      <input type="password" id="password" name="user[password]"><br><br>
      
      <label for="city">City:</label>
      <input type="text" id="city" name="user[address][city]"><br><br>
      
      <label for="state">State:</label>
      <input type="text" id="state" name="user[address][state]"><br><br>
      
      <button type="submit">Register</button>
    </form>
  `);
});

// Handle the form submission on the /register route
app.post('/register', (req, res) => {
  console.log(req.body);
  res.send('Account created successfully');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
