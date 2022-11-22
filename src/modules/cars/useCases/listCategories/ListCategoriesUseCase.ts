import { Request, Response } from "express"
import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

class ListCategoriesUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){}

        exexute(): Category[]{

        const categories = this.categoriesRepository.list();
        return categories;

    }

} 

export {ListCategoriesUseCase}