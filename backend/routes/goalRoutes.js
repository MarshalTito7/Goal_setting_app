const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal} = require('../controller/goalController')

// router.get('/', getGoals)
// router.post('/', setGoal)
// These two can be replace as
router.route('/').get(getGoals).post(setGoal)

// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
// These two can be replace as
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router