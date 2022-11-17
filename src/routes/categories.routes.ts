import {Router} from 'express';
import {v4 as uuidV4} from 'uuid';
import { Category } from '../modules/cars/model/Category';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
//import { PostgresCaregoriesRepository } from '../modules/cars/repositories/PostgresCategoriesRepository';
import { CreateCategoryService } from '../modules/cars/useCases/CreateCategory/CreateCategoryUseCase';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (resquest, response) => {
    const {name, description} = resquest.body;
    const createCategoryService = new CreateCategoryService(categoriesRepository);
    createCategoryService.execute({name, description})
    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response)=>{
    const all = categoriesRepository.list();

    return response.json(all);
});
export {categoriesRoutes};