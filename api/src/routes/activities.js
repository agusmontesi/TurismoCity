const {Rouer} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send("Activities")
})

module.exports = router;