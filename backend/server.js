const app = require('./app.js');
const PORT = process.env.PORT || 600;

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
})