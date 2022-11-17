import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest{
    name: string,
    description: string
}
/*[] Definir o tipo de retorno
  [] - Alterar o retorno de erro
  [] - Acessar o repositorio
*/
class CreateCategoryUseCase{
    
    constructor(private categoriesRepository: ICategoriesRepository){

    }
    
    execute({description, name}: IRequest): void{

        
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if(categoryAlreadyExists){
            throw new Error("Category Already exists!");
            
        }
    
        this.categoriesRepository.create({name,description});
    }
}

export {CreateCategoryUseCase}