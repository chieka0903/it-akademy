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
    let alco = confirm ('напиток алкогольный? Если ДА, нажмите ОК, если НЕТ, нажмите ОТМЕНА');
    let info = {
        a: alco,
        r: drinkRecept
    };
    drinkStorage.addValue(drinkName,info);
}

function getDrink() {
    let drinkName = prompt ('Введите название напитка');
    let printedDrinkname = drinkStorage.getValue(drinkName);
       console.log('название напитка: ' + drinkName + `\n` +
                    'Рецепт напитка: ' + printedDrinkname.r + `\n` +
                    'Алкогольный: ' + printedDrinkname.a );
    }
    
       
function deleteDrink() {
   let drinkName = prompt ('Введите название напитка');
   console.log(drinkStorage.deleteValue(drinkName));
}

function allDrinks() {
   alert(drinkStorage.getKeys());
   
}
