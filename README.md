# Separating Business Logic From Presentational Components With NX

## Why are we here?


## Steps
- Run `npx create-nx-workspace --preset=empty`
- Run `npm i @nrwl/angular --save-dev`
- Run `nx g @nrwl/angular:app marvel-web`
- Run `nx g @nrwl/angular:app marvel-ionic`
- Run `npm i ionic ionicons`
- Run `npm i ionic/cli @capacitor/cli --save-dev`
- Run `cd apps`
- Run `npx ionic start` and overwrite the existing folder
- CD into `marvel-ionic` and add project.json
- Copy project.json from `marvel-web` and replace all instances of `marvel-web` with `marvel-ionic`
- Delete angular.json
- Run `nx g @angular/material:ng-add --project=marvel-web`
- Run `nx g @nrwl/angular:lib marvel-apps-shared`
- Run `npm i ts-md5 --save`
- Run `nx g @nrwl/angular:lib marvel-home-module`
- Run `npm i @ngrx/store @ngrx/effects --save`
- Run `npm i @ngrx/store-devtools --save-dev`