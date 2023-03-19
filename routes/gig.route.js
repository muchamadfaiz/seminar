import express from "express"
import {
    createGig,
    getGigs,
    getGig,
    deleteGig
} from "../controllers"

const router = express.Router();

router.post('/gigs', createGig)
router.get('/gigs', getGigs)
router.get('/gigs/:id', getGig)
// router.put('/gigs/:id', updateGig)
router.delete('/gigs/:id', deleteGig)

export default router