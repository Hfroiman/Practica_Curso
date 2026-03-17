import * as Service from '../service/carts.services.js'


export const getall = async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const response = await Service.getall(page, limit);
        const next = response.hasNextPage ? `http://localhost:8080/carts?page=${response.nextpage}`: null;
        const prev = response.hasPrevPage ? `http://localhost:8080/carts?page=${response.prevpage}`: null;
        res.json({
            status: response.status,
            payload: response.docs,
            Total_Pages: response.totalPages,
            prev,
            next,
            page: response.page,
            hasPrevPage: response.hasPrevPage ? true:false,
            hasNextPage: response.hasNextPage ? true:false,
            prevLink: response.hasPrevPage ? `http://localhost:8080/carts?page=${response.prevpage}`:null,
            nexLink: response.hasNextPage ? `http://localhost:8080/carts?page=${response.nextpage}`: null
        })
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
        const { cid } = req.params;
        const response = await Service.getbyid(cid);
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
        const { cid } = req.params;
        const response = await Service.remove(cid);
        if(!response) res.status(404).json({msg:"Cart not find"});
        else res.json(response);
    } catch (error) {
        next(error.message);
    }
}

export const removeSelect = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const { pid } = req.params;
        const response = await Service.removeSelect(cid, pid);
        if(!response) res.status(404).json({msg:"Cart not find"});
        else res.json(response);
    } catch (error) {
        next(error.message);
    }
}

export const updatexSelect = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const { pid } = req.params;
        const cantselect =Number(req.body.quantity);
        const response = await Service.updatexSelect(cid, pid, cantselect);
        if(!response) res.status(404).json({msg:"Cart not find"});
        else res.json(response);
    } catch (error) {
        next(error.message);
    }
}