import instance from "./instance";

export const getAll = () => {
    const url = "/user";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/user/${id}`;
    return instance.get(url);
};

export const add = (user) => {
    const url = "/user";
    return instance.post(url, user);
};

export const remove = (id) => {
    const url = `/user/${id}`;
    return instance.delete(url);
};

export const update = (user) => {
    const url = `/user/${user.id}`;
    return instance.put(url, user);
};