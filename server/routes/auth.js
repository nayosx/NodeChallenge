const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/success', (req, res) => {
        res.sendFile('welcome.html', { root: path.join(__dirname, '../public') });
    }
);
router.get('/error', (req, res) => {
        res.sendFile('error.html', { root: path.join(__dirname, '../public') });
    }
);

module.exports = router;