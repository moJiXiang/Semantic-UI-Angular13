# PixoworUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Create angular library

https://indepth.dev/posts/1193/create-your-standalone-angular-library-in-10-minutes

## Create new ui library component

```
ng generate component components/my-lib

```

需要手动添加 **my-lib.module.ts**, **ng-package.json**, **public_api.ts**三个文件

## Build

```
yarn build:library
```

## Develop

本地调试

```
yarn start
```

其他项目依赖 pixowor-ui

```
1. cd dist
2. npm pack
3. cd ../pixowor-ui-demo
4. yarn add ../pixowor-ui/dist/pixowor-ui-0.0.3.tgz

```
