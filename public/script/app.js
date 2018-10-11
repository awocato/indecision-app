'use strict';

var appRoot = document.getElementById('app');

var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderApp();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            ' ',
            app.subtitle,
            ' '
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options.' : 'No options.'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            ' What should I do? '
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            ' Remove all '
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (el) {
                return React.createElement(
                    'li',
                    { key: el },
                    ' ',
                    el,
                    ' '
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                ' Add option '
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();