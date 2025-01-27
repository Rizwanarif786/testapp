import { Router } from 'express';

const router = Router();

router.route('/').get((req, res) => {
    console.log(req.param)
    res.status(200)
        .send(`<h1>My Custom Router is now working</h1>`)
})

export default router;