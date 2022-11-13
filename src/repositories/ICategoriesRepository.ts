import { Category } from "../model/Category";

interface ICreateCategotyDTO{
    name: string;
    description: string;
}
interface ICategoriesRepository{
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: ICreateCategotyDTO): void;
}

export {ICategoriesRepository, ICreateCategotyDTO};