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

    this.toString=function () {
        return drinkStorage.getValue;
       }
                
}

let drinkStorage = new HashStorageFunc;

function addDrink( ) {
    let drinkName = prompt ('Введите название напитка');
    let drinkRecept = prompt ('Ведите рецепт напитка');
    let alco = confirm ('напиток алкогольный?');
    
    drinkStorage.addValue(drinkName,{drinkRecept, alco});
   console.log(drinkStorage.getValue(drinkName));
}

function getDrink() {
    let drinkName = prompt ('Введите название напитка');
    drinkStorage.getValue(drinkName);
    console.log('название напитка ' + drinkName + `\n` +
                'Рецепт приготовления ' + this.drinkRecept + `\n` +
                'Алкогольный ' + drinkStorage.alco);
       
    }

function deleteDrink() {
    prompt ('Введите название напитка');
    drinkStorage.deleteValue();
}

function allDrinks() {
   alert(drinkStorage.getKeys());
   
}
