//Step 1: Load path and express
const path = require('path')
const express = require('express')

//Step 2: Create an instance of the application
const app = express();

//Step 3: Define routes
//Serve resources from public
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, resp) => {
    // resp.redirect('/')
    resp.status(404);
    resp.sendfile(path.join(__dirname, 'public', '404.html'));
});

//Step 4: Start the server
//Evaluation order: cmd arguments, env variable, default
const port = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000
app.listen(port, () => {
    console.info(`Application started on port ${port} at ${new Date()}`);
});

