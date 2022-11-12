import {Router} from 'express';

const categoriesRoutes = Router();
const categories = [];
categoriesRoutes.post("/categories", (resquest, response)=>{

    const {name, description} = resquest.body;
    categories.push({
        name, 
        description
    });
    return response.status(201).send();
});
export {categoriesRoutes};