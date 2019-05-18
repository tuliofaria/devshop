const slug = require('../utils/slug')

const getCategoryById = db => async(id) => {
    const category = await db('categories')
                        .select('*')
                        .where('id', id)
    return category
}

const getCategories = db => async() => {
    const categories = await db('categories').select('*')
    const categoriesWithSlug = categories.map( category => {
        const newCategory = { ...category, slug: slug(category.category) }
        return newCategory
    })
    return categoriesWithSlug
}
module.exports = {
    getCategories, getCategoryById
}
