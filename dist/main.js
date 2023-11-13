import express from 'express';
import swaggerUi from 'swagger-ui-express';
import config from 'dotenv';
const app = express();
const port = config['PORT'];
import fs from 'fs';
let swaggerDocument = JSON.parse(fs.readFileSync('api/openapi.json', 'utf-8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => {
    res.send('Hello Ankit!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=main.js.map