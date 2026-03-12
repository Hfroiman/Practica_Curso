import * as Service from '../service/carts.services.js'


export const getall = async (req, res, next) => {
    try {
        const response = await Service.getall();
        res.json(response);
    } catch (error) {
        next(error.message);
    }
}

export const create = async (req, res, next) => {
    try {
        const response = await Service.create(req.body);
        res.json(response);
    } catch (error) {
        next(error.message);
    }
}

export const getbyid = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await Service.getbyid(id);
        if(!response) res.status(404).json({msg:"Product not found"});
        else res.json(response);
    } catch (error) {
        next(error.message);
    }
}

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { pid } = req.params;
        const response = await Service.update(id, pid);
        if(!response) res.status(404).json({msg:"Cart not found"});
        else res.json(response);
    } catch (error) {
        next(error.message);
    }
}

export const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await Service.remove(id);
        if(!response) res.status(404).json({msg:"Cart not find"});
        else res.json(response);
    } catch (error) {
        next(error.message);
    }
}