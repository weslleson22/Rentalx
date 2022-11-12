
import { Category } from "../model/Category";

interface IcreateCategotyDTO{
    name: string;
    description: string;
}
class CategoriesRepository{
   private categories: Category[];

   constructor(){
    this.categories=[];
    
   }
//DTO => Data Transfer Object
   create({name, description}: IcreateCategotyDTO): void{
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

}
export {CategoriesRepository}