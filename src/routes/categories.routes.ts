import {response, Router} from 'express';
import {v4 as uuidV4} from 'uuid';
import { Category } from '../modules/cars/model/Category';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/CreateCategory';
//import { PostgresCaregoriesRepository } from '../modules/cars/repositories/PostgresCategoriesRepository';
import { CreateCategoryUseCase } from '../modules/cars/useCases/CreateCategory/CreateCategoryUseCase';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import multer  from 'multer';

const categoriesRoutes = Router();

const upload = multer({
    dest:"./tmp",
});
const categoriesRepository = CategoriesRepository.getIntance();

categoriesRoutes.post("/", (resquest, response) => {
    return createCategoryController.handle(resquest, response);
});

categoriesRoutes.get("/", (request, response)=>{
    
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import",upload.single("file"), (request, response)=>{
    const {file} = request;
    console.log(file);    
    return response.send();

});
export {categoriesRoutes};