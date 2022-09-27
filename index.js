const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes');

app.use(cors());
router(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`mi port ${port}`);
});
