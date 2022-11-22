import {Router} from 'express';
import {v4 as uuidV4} from 'uuid';
import { Category } from '../modules/cars/model/Category';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/CreateCategory';
//import { PostgresCaregoriesRepository } from '../modules/cars/repositories/PostgresCategoriesRepository';
import { CreateCategoryUseCase } from '../modules/cars/useCases/CreateCategory/CreateCategoryUseCase';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (resquest, response) => {
    return createCategoryController.handle(resquest, response);
});

categoriesRoutes.get("/", (request, response)=>{
    
    return listCategoriesController.handle(request, response);
});
export {categoriesRoutes};