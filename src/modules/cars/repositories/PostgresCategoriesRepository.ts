import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategotyDTO } from "./ICategoriesRepository";


class PostgresCaregoriesRepository implements ICategoriesRepository{

    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({name, description}: ICreateCategotyDTO): void {
        console.log(name, description);
    }

}

export {PostgresCaregoriesRepository};