import Car from './Car.js'

class CarController {
    async create(req, res) {
        try {
            // const car = await Car.create(req.body)
            // res.json(car)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAll(req, res) {
        try {
            const cars = await Car.find().populate('manufacturer', 'title')
            // const formattedCars = cars.map(({ _id, manufacturer: { title }, model, __v }) => ({
            //     _id,
            //     manufacturer: title,
            //     model,
            //     __v
            // }));
            return res.json(cars);
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

export default new CarController()

// як я наповнював базу

// файл car_DB.js
// export const carDB = [
//     {
//       "id": 1,
//       "manufacturer": "Abarth",
//       "model": "124 Spider"
//     }
//      ...
// ]

// async create(req, res) {
//     try {
//         for (const car of carDB) {
//             const CarManufacturerData = await CarManufacturer.findOne({ title: car.manufacturer })
//             const newCar = {
//                 manufacturer: CarManufacturerData._id,
//                 model: car.model
//             }
//             const data = await Car.create(newCar)
//             console.log("Created new car: " + data)
//         }
//         res.status(200).json("All cars created successfully")
//     } catch (e) {
//         res.status(500).json(e.message)
//     }
// }