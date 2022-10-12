function HashStorageFunc() {

    let storage={};

    this.addValue = function(key,value) {
        storage[key]=value;
    }
    
    this.getValue = function(key) {
        return storage[key];
    }

    this.deleteValue = function(key,value) {
        if (key in storage) {
            delete storage[key];
            return true;
        }
        else
            return false;
       
    }

    this.getKeys = function() {
        return Object.keys(storage);
    }

}

let drinkStorage=new HashStorageFunc;

function addDrink() {
    let drink = promt ('Введите название напитка');
    let recept = promt ('Введите рецепт напитка');
    let alco = confirm ('напиток алкогольный?');
    let info = {
        r: recept,
        a: alco
    }
    drinkStorage.addValue(drink,info);
}

