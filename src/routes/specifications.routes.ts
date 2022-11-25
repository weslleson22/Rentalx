import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";
const specificationRoutes= Router();

specificationRoutes.post("/", (request, response)=>{
    return createSpecificationController.handle(request, response);

});

export {specificationRoutes};