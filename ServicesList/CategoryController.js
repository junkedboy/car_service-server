import CategoryService from "./CategoryService.js"

class CategoryController {
    async create(req, res) {
        try {
            const createdCategory = await CategoryService.createService(req.body)
            res.json(createdCategory)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAll(req, res) {
        try {
            const categories = await CategoryService.getAllService()
            return res.json(categories)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res) {
        try {
            const category = await CategoryService.getOneService(req.params.id)
            return res.json(category)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req, res) {
        try {
            const updayedCategory = await CategoryService.updateService(req.body)
            return res.json(updayedCategory)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const category = await CategoryService.deleteService(req.params.id)
            return res.json(category)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new CategoryController()