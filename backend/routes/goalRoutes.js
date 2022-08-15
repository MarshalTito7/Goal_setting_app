const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal} = require('../controller/goalController')

const {protect} = require('../middleware/authMiddleware')

// router.get('/', getGoals)
// router.post('/', setGoal)
// These two can be replace as
router.route('/').get(protect, getGoals).post(protect, setGoal)

// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
// These two can be replace as
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router