import CartsDaoMongoDb from '../daos/mongodb/carts.dao.js'
const CartDao = new CartsDaoMongoDb();


export const getall = async (page, limit) =>{
    try {
        return await CartDao.getall(page, limit);
    } catch (error) {
        throw new error(error);
    }
}

export const create = async (obj) =>{
    try {
        return await CartDao.create(obj)
    } catch (error) {
        throw new error(error);
    }
}

export const getbyid = async (cid) =>{
    try {
        return await CartDao.getbyid(cid);
    } catch (error) {
        throw new error(error);
    }
}

export const update = async (id, pid) =>{
    try {
        return await CartDao.update(id, pid);
    } catch (error) {
        throw new error(error);
    }
}

export const remove = async (cid) =>{
    try {
        return await CartDao.remove(cid);
    } catch (error) {
        throw new error(error);
    }
}

//SEGUNDA ENTREGA
export const removeSelect = async (cid, pid) =>{
    try {
        return await CartDao.removeSelect(cid, pid);
    } catch (error) {
        throw new error(error);
    }
}

export const updatexSelect = async (cid, pid, cantselect) =>{
    try {
        return await CartDao.updatexSelect(cid, pid, cantselect);
    } catch (error) {
        throw new error(error);
    }
}