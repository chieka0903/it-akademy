function HashStorageFunc() {

    let storage={};

    this.addValue = function(key,value) {
        storage[key]=value;
    }

    this.getValue = function(key) {
        return storage[key];
    }

    this.deleteValue = function(key) {
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

let drinkStorage = new HashStorageFunc;

function addDrink( ) {
    let drinkName = prompt ('Введите название напитка');
    let drinkRecept = prompt ('Ведите рецепт напитка');
    let alco = confirm ('напиток алкогольный?');
    let info = {
        r: drinkRecept,
        a: alco
    }
    drinkStorage.addValue(drinkName,info);
   
}

function getDrink() {
    let drinkName = prompt ('Введите название напитка');
    if ( drinkName in drinkStorage ){
        return true
    }
    console.log(drinkStorage.getValue);
       
    }

function deleteDrink() {
    prompt ('Введите название напитка');
    drinkStorage.deleteValue();
}

function allDrinks() {
   drinkStorage.getKeys();
   alert('Название ' + drinkStorage.drinkName + `\n`+
        'Рецепт ' + drinkStorage.drinkRecept + `\n` +
        'Алкогольный' + drinkStorage.alco)
  
}
