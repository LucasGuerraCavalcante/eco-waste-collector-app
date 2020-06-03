import express from 'express'

const routes = express.Router()

import PointsController from './controllers/pointsController'
import ItemsController from './controllers/itemsController'

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)
routes.post('/points', pointsController.create)

export default routes