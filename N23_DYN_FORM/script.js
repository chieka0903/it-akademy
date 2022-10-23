var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];


function buildForm(formDef,formElem) {

    formDef.forEach( elemDef => {

        switch (elemDef.kind) {

            case "longtext":{
                let labelElem=document.createElement("label");
                labelElem.innerHTML=elemDef.label;
                formElem.appendChild(labelElem);
                let inputElem=document.createElement("input");
                inputElem.type="text";
                inputElem.name=elemDef.name;
                formElem.appendChild(inputElem);
                let carry=document.createElement("br");
                formElem.appendChild(carry);
                break;
            }
                
            case "number":{ 
                let labelElem=document.createElement("label");
                labelElem.innerHTML=elemDef.label;
                formElem.appendChild(labelElem);
                let inputElem=document.createElement("input");
                inputElem.type="text";
                inputElem.name=elemDef.name;
                formElem.appendChild(inputElem);
                let carry=document.createElement("br");
                formElem.appendChild(carry);
                break;
            }
            case "shorttext":{ 
                let labelElem=document.createElement("label");
                labelElem.innerHTML=elemDef.label;
                formElem.appendChild(labelElem);
                let inputElem=document.createElement("input");
                inputElem.type="text";
                inputElem.name=elemDef.name;
                formElem.appendChild(inputElem);
                let carry=document.createElement("br");
                formElem.appendChild(carry);
                break;
            }

            case "combo":{ 
                let labelElem=document.createElement("label");
                labelElem.innerHTML=elemDef.label;
                formElem.appendChild(labelElem);
                let inputElem=document.createElement("select");
                inputElem.name=elemDef.name;
                formElem.appendChild(inputElem);
                let carry=document.createElement("br");
                formElem.appendChild(carry);
                elemDef.variants.forEach( elemDefLevel2 => {
                    let inputOption = document.createElement("option");
                    inputOption.setAttribute("value", elemDefLevel2.value);
                    inputOption.textContent = elemDefLevel2.text;
                    inputElem.appendChild(inputOption);
                    
                });
                break;
            }

            case "radio":{ 
                let labelElem=document.createElement("label");
                labelElem.innerHTML=elemDef.label;
                formElem.appendChild(labelElem);
                elemDef.variants.forEach(elemDefLevel2 => {
                    let inputElem = document.createElement("input");
                    inputElem.type = "radio";
                    inputElem.name = elemDef.name;
                    inputElem.setAttribute("value", elemDefLevel2.value);
                    let newSpanRadio = document.createElement("span");
                    newSpanRadio.textContent = elemDefLevel2.text;
                    formElem.appendChild(inputElem);
                    formElem.appendChild(newSpanRadio);
                    let carry=document.createElement("br");
                    formElem.appendChild(carry);
                })
                break;
            }

            case "check":{ 
                let labelElem=document.createElement("label");
                labelElem.innerHTML=elemDef.label;
                formElem.appendChild(labelElem);
                let inputElem=document.createElement("input");
                inputElem.type="checkbox";
                inputElem.name=elemDef.name;
                formElem.appendChild(inputElem);
                let carry=document.createElement("br");
                formElem.appendChild(carry);
                break;
            }

            case "memo":{ 
                let labelElem=document.createElement("label");
                labelElem.innerHTML=elemDef.label;
                formElem.appendChild(labelElem);
                let carry1=document.createElement("br");
                formElem.appendChild(carry1);
                let inputElem=document.createElement("textarea");
                inputElem.name=elemDef.name;
                formElem.appendChild(inputElem);
                let carry=document.createElement("br");
                formElem.appendChild(carry);
                break;
            }

            case "submit":{ 
                let inputElem=document.createElement("input");
                inputElem.type="submit";
                inputElem.value=elemDef.caption;
                formElem.appendChild(inputElem);
                let carry=document.createElement("br");
                formElem.appendChild(carry);
                break;
            }


        }

           
        
        });

    };




buildForm(formDef1,document.forms.form1);
buildForm(formDef2,document.forms.form2);
