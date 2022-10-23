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
    (printedDrinkName===undefined)?  alert('Данного напитка нет в базе'):  
        alert('название напитка: ' + drinkName + `\n` +
                    'Рецепт напитка: ' + printedDrinkName.r + `\n` +
                    'Алкогольный: ' + printedDrinkName.a );             
        
}
       

       
function deleteDrink() {
   let drinkName = prompt ('Введите название напитка, который хотите удалить');
   drinkStorage.deleteValue(drinkName)? alert(`Данный напиток удален`) 
    : alert(`Напиток не удален, его нет в базе`);
}

function allDrinks() {
   alert(drinkStorage.getKeys());
   
}
