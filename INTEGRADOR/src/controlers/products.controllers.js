import * as service from '../service/product.services.js'

export const getall = async (req, res, next)=>{
    try {
        const response = await service.getall();
        res.json(response);
    } catch (error) {
        throw new Error(error);
    }
}

export const getByID = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const prod = await service.getbyId(id);
        if(!prod) res.status(404).json({msg:'product not foun'});
        else res.json(prod);
    } catch (error) {
        throw new Error(error);
    }
}

export const create = async (req, res, next)=>{
    try {
        const prod = await service.create(req.body);
        if(!prod) res.status(404).json({msg:'product not foun'});
        else res.json(prod);
    } catch (error) {
        throw new Error(error);
    }
}

export const update = async (req, res, next)=>{
    try {
        const { id } = req.params;
        const prod = await service.update(id, req.body);
        if(!prod) res.status(404).json({msg:'product not foun'});
        else res.json(prod);
    } catch (error) {
        throw new Error(error);
    }
}

export const remove = async (req, res, next)=>{
    try {
        const { id } = req.params;
        const prod = await service.remove(id);
        if(!prod) res.status(404).json({msg:'product not foun'});
        else res.json(prod);
    } catch (error) {
        throw new Error(error);
    }
}