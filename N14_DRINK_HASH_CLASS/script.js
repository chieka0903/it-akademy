class HashStorageFunc {

    constructor(){
        this.storage={};
    }

    addValue(key,value) {
        this.storage[key]=value;
    }

    getValue (key) {
        return this.storage[key];
        
    }

    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            return true;
        }
        else
            return false;
       
    }

    getKeys() {
        return Object.keys(this.storage);
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
    let printedDrinkName = drinkStorage.getValue(drinkName);
    let infoDrinkName = (printedDrinkName===undefined)?  alert('нет напитка'):  
        console.log('название напитка: ' + drinkName + `\n` +
                    'Рецепт напитка: ' + printedDrinkName.r + `\n` +
                    'Алкогольный: ' + printedDrinkName.a );             
}
    
       
function deleteDrink() {
   let drinkName = prompt ('Введите название напитка');
   console.log(drinkStorage.deleteValue(drinkName));
}

function allDrinks() {
   alert(drinkStorage.getKeys());
   
}
