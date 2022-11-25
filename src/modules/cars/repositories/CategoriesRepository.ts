
import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategotyDTO } from "./ICategoriesRepository";

// singleton ideia é fazer uma instancia global. 
class CategoriesRepository implements ICategoriesRepository{
   private categories: Category[];
   private static INSTACE: CategoriesRepository;

   private constructor(){
    this.categories=[];
    
   }
   public static getIntance(): CategoriesRepository{
      if(!CategoriesRepository.INSTACE){
         CategoriesRepository.INSTACE = new CategoriesRepository();
      }
      return CategoriesRepository.INSTACE;
   }
//DTO => Data Transfer Object
   create({name, description}: ICreateCategotyDTO): void{
    const category = new Category();
    Object.assign(category,{
        name,
        description,
        created_at: new Date(),
    }); 

    this.categories.push(category);
   }
   list(): Category[]{
    return this.categories;
   }
   findByName(name: string): Category{
    const category = this.categories.find((category)=> category.name===name);
    return category;
   }

}
export {CategoriesRepository}