VIAMME Style
======================

Верстка проекта. HTMl&CSS&JS

## Требования
* Node.js

## Инструменты
* HTML5
* CSS3
* PostCss


## Как начать работу:

```
https://github.com/green-zelen/viamme.git
глобально:
~ sudo npm install gulp -g

или локально:
~ cd viamme
~ npm install --save-dev gulp
```

## Как установить плагины PostCss*

```
~ npm install --save-dev gulp-postcss
~ npm install --save-dev gulp-autoprefixer
~ npm install --save-dev gulp-concat
~ npm install --save-dev precss
~ npm install --save-dev postcss-scss
~ npm install --save-dev postcss-nested
~ npm install --save-dev short
~ npm install --save-dev postcss-sorting
~ npm install --save-dev cssnano
~ npm install --save-dev postcss-strip-inline-comments
~ npm install -save-dev postcss-short
~ npm install --save-dev gulp-csslint
~ npm i gulp-pug

```
## Структура директорий

* Исполняемый код /public
* Исходный код /src
* Компоненты /src/project/*/*
* Переменные /src/variables

## Как компилировать HTML:

```
~ gulp html
```

## Как компилировать CSS3:

```
~ gulp css
```

## Как компилировать JS:

```
~ gulp js
```

## Запустить Linter:

```
~ gulp lint
```