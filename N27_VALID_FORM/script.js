"use strict";

    let form = document.forms['valid'];
    let fields = form.elements;

    
    form.addEventListener('submit', (eo) => {
        eo = eo || window.event;
        try {
            let totalErrorCount = 0;

            totalErrorCount += developersValidator(!totalErrorCount);
            totalErrorCount += siteValidator(!totalErrorCount);
            totalErrorCount += urlValidator(!totalErrorCount);
            totalErrorCount += dateValidator(!totalErrorCount);
            totalErrorCount += visitorsValidator(!totalErrorCount);
            totalErrorCount += emailValidator(!totalErrorCount);
            totalErrorCount += rubricValidator();
            totalErrorCount += paymentValidator();
            totalErrorCount += reviewsValidator();
            totalErrorCount += descriptionValidator(!totalErrorCount);

            if (totalErrorCount) {
                eo.preventDefault();
            }
        } catch (exception) {
            eo.preventDefault();
        }
    }, false);

    // Получение полей
    let developers = fields.developers;
    let site = fields.site;
    let url = fields.url;
    let date = fields.date;
    let visitors = fields.visitors;
    let email = fields.email;
    let rubric = fields.rubric;
    let payment = form.querySelectorAll('.payment');
    let reviews = fields.reviews;
    let description = fields.description;

    // Валидация Developers
    developers.addEventListener('blur', eo => {
        developersValidator(0);
    });

    function developersValidator(autoFocus) {
        let errorCount = 0;

        let developersValue = developers.value;
        let errorSpan = developers.nextElementSibling;

        if (developersValue === '') {
            errorSpan.innerHTML = 'Разработчики не должны быть пусты';
            errorCount++;
        } else if (developersValue.length < 6) {
            errorSpan.innerHTML = 'Разработчики должны быть длиннее 6 символов';
            errorCount++;
        } else {
            errorSpan.innerHTML = '';
        }

        if (errorCount && autoFocus) {
            developers.focus();
        }
        return errorCount;
    }

    // Валидация Site
    site.addEventListener('blur', () => {
        siteValidator(0);
    }, false);

    function siteValidator(autoFocus) {
        let errorCount = 0;

        let siteValue = site.value;
        let errorSpan = site.nextElementSibling;

        if (siteValue === '') {
            errorSpan.innerHTML = 'Название сайта не может быть пустым';
            errorCount++;
        } else if (siteValue.length < 6) {
            errorSpan.innerHTML = 'Название сайта должно быть длиннее 6 символов';
            errorCount++;
        } else {
            errorSpan.innerHTML = '';
        }

        if (errorCount && autoFocus) {
            site.focus();
        }
        return errorCount;
    }

    // Валидация URL
    url.addEventListener('blur', () => {
        urlValidator(0);
    }, false);

    function urlValidator(autoFocus) {
        let errorCount = 0;
        let re = /^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i;

        let urlValue = url.value;
        let errorSpan = url.nextElementSibling;

        if (urlValue === '') {
            errorSpan.innerHTML = 'URL не может быть пустым';
            errorCount++;
        } else if (!urlValue.match(re)) {
            errorSpan.innerHTML = 'Не правильный URL';
            errorCount++;
        } else {
            errorSpan.innerHTML = '';
        }

        if (errorCount && autoFocus) {
            url.focus();
        }
        return errorCount;
    }

    // Валидация даты
    date.addEventListener('blur', () => {
        dateValidator(0);
    }, false);

    function dateValidator(autoFocus) {
        let errorCount = 0;
        let re = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;

        let dateValue = date.value;
        let errorSpan = date.nextElementSibling;

        if (dateValue === '') {
            errorSpan.innerHTML = 'Дата не может быть пустой';
            errorCount++;
        } else if (!dateValue.match(re)) {
            errorSpan.innerHTML = 'Не правильная дата';
            errorCount++;
        } else {
            errorSpan.innerHTML = '';
        }

        if (errorCount && autoFocus) {
            date.focus();
        }
        return errorCount;
    }

    // Валидация посетителей
    visitors.addEventListener('blur', () => {
        visitorsValidator(0);
    }, false);

    function visitorsValidator(autoFocus) {
        let errorCount = 0;
        let re = /^[0-9]+$/;

        let visitorsValue = visitors.value;
        let errorSpan = visitors.nextElementSibling;

        if (visitorsValue === '') {
            errorSpan.innerHTML = 'Посетители не могут быть пустыми';
            errorCount++;
        } else if (!visitorsValue.match(re)) {
            errorSpan.innerHTML = 'Посетители должны быть числом';
            errorCount++;
        } else {
            errorSpan.innerHTML = '';
        }

        if (errorCount && autoFocus) {
            visitors.focus();
        }
        return errorCount;
    }

    // Валидация Email
    email.addEventListener('blur', () => {
        emailValidator(0);
    }, false);

    function emailValidator(autoFocus) {
        let errorCount = 0;
        let re = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

        let emailValue = email.value;
        let errorSpan = email.nextElementSibling;

        if (emailValue === '') {
            errorSpan.innerHTML = 'Email не может быть пустым';
            errorCount++;
        } else if (!emailValue.match(re)) {
            errorSpan.innerHTML = 'Не правильный email';
            errorCount++;
        } else {
            errorSpan.innerHTML = '';
        }

        if (errorCount && autoFocus) {
            email.focus();
        }
        return errorCount;
    }

    // Валидация Rubric
    rubric.addEventListener('change', () => {
        rubricValidator();
    }, false);

    function rubricValidator() {
        let errorCount = 0;

        let rubricValue = Number(rubric.value);
        let errorSpan = rubric.nextElementSibling;

        if (rubricValue === 0) {
            errorSpan.innerHTML = 'Вы ничего не выбрали';
            errorCount++;
        } else if (rubricValue === 1) {
            errorSpan.innerHTML = 'Данная рубрика не подходит';
            errorCount++;
        } else {
            errorSpan.innerHTML = '';
        }

        return errorCount;
    }

    // Валидация Payment
    function paymentValidator() {
        let errorCount = 0;
        let paymentLength = payment.length;
        let paymentCheckCount = paymentLength;

        for (let i = 0; i < paymentLength; i++) {
            payment[i].addEventListener('change', paymentCheckChange, false);

            let errorSpan = payment[i].parentElement.lastElementChild;

            if (!payment[i].checked && paymentCheckCount === 1) {
                errorSpan.innerHTML = 'Вы ничего не выбрали';
                errorCount++;
            }
            if (!payment[i].checked) {
                paymentCheckCount--;
            }
        }
        return errorCount;
    }

    function paymentCheckChange(eo) {
        let errorSpan = eo.target.parentElement.lastElementChild;

        if (eo.target.checked) {
            errorSpan.innerHTML = '';
        }
    }

    // Валидация Reviews
    reviews.addEventListener('change', () => {
        reviewsValidator();
    }, false);

    function reviewsValidator() {
        let errorCount = 0;

        let reviewsChecked = reviews.checked;
        let errorSpan = reviews.nextElementSibling;

        if (!reviewsChecked) {
            errorSpan.innerHTML = 'Вы ничего не выбрали';
            errorCount++;
        } else {
            errorSpan.innerHTML = '';
        }

        return errorCount;
    }

    // Валидация Description
    description.addEventListener('blur', () => {
        descriptionValidator(0);
    }, false);

    function descriptionValidator(autoFocus) {
        let errorCount = 0;

        let descriptionValue = description.value;
        let errorSpan = description.nextElementSibling;

        if (descriptionValue === '') {
            errorSpan.innerHTML = 'Описание не может быть пустым';
            errorCount++;
        } else if (descriptionValue.length < 50) {
            errorSpan.innerHTML = 'Описание должно быть более 50 символов';
            errorCount++;
        } else {
            errorSpan.innerHTML = '';
        }

        if (errorCount && autoFocus) {
            description.focus();
        }
        return errorCount;
    }