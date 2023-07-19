import CarUser from './CarUser.js'

class CarUserController {
    async create(req, res) {
        try {
            const car = await CarUser.create(req.body)
            res.json(car)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAllByUserId(req, res) {
        try {
            const UserCars = await CarUser.find({user: req.params.id}).populate({
                path: 'car',
                populate: {
                    path: "manufacturer",
                    model: "car_manufacturers"
                }
            }).exec()
            return res.json(UserCars);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAllByManufacturer(req, res) {
        try {
            const cars = await Car.find({manufacturer: req.params.id}).populate('manufacturer', 'title')
            return res.json(cars);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOneById(req, res) {
        try {
            const data = await Car.findById(req.params.id).populate('manufacturer', 'title')
            const car = {
                _id: data._id,
                manufacturer: data.manufacturer.title,
                model: data.model,
                __v: data.__v
            }
            return res.json(car)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOneByTitle(req, res) {
        try {
            // const category = await CategoryService.getOneService(req.params.id)
            // return res.json(category)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req, res) {
        try {
            // const updayedCategory = await CategoryService.updateService(req.body)
            // return res.json(updayedCategory)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            // const category = await CategoryService.deleteService(req.params.id)
            // return res.json(category)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new CarUserController()