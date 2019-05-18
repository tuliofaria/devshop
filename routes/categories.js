const init = db => {
    const router = require('express').Router()
    const categories = require('../controllers/categories')
    
    router.get('/:id/:slug', categories.getCategories(db))

    return router
}

module.exports = init
