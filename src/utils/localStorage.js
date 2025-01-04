export const getTasks = (key) => {
    if(window !== undefined){
       const item = localStorage.getItem(key);
       return item ? JSON.parse(item) : null;
    }
    return null;
}

export const addTaskToStore = (key, value) => {
    if(window !== undefined){
        const addedTask = localStorage.setItem(key, JSON.stringify(value));
    }
}

export const deleteItem = (key) => {
    if(window !== undefined){
        localStorage.removeItem(key);
    }
}
