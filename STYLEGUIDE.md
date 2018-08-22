## FOLDER STRUCTURE
  - app.module.ts
  - app.component.ts
  - modules
    - login
      - components
        - input
          - input.component.ts
        - password-check
          - password-check.component.ts
      - pages
        - login
          - login.page.ts
      - login.service.ts
      - login.module.ts
      - login.routes.ts
  - shared
    - components
    - mocks
    - models
    - ...
  
## CLASS PROPERTIES ORDER
1. Decorators (`@Input`, `@Output`, `@HostBinding` ...)
2. Public variables
3. Private variables
4. setters/getters (without setters and getters for two way binding, keep them near decorator)
5. Class constructor
6. Directive, component change detection and lifecycle hooks
7. Public methods
8. Private methods

## BOOSTRAPPING
```javascript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
```

Bootstraps the app, using the root component from the specified NgModule.
```javascript
platformBrowserDynamic().bootstrapModule(AppModule);
```

### Useful links:
- #### Docs: https://angular.io/guide/bootstrapping


## NG MODULES

```javascript
import { NgModule } from '@angular/core';

@NgModule({
  declarations: ...,
  imports: ...,
  exports: ...,
  providers: ...,
  bootstrap: ...
})
```

Defines a module that contains components, directives, pipes, and providers.
```javascript
class MyModule {}
```

List of components, directives, and pipes that belong to this module.
```javascript
declarations: [MyRedComponent, MyBlueComponent, MyDatePipe] 
```

List of modules to import into this module. Everything from the imported modules is available to declarations of this module.
```javascript
imports: [BrowserModule, SomeOtherModule] 
```

List of components, directives, and pipes visible to modules that import this module.
```javascript
exports: [MyRedComponent, MyDatePipe] 
```

List of dependency injection providers visible both to the contents of this module and to importers of this module.
```javascript
providers: [MyService, { provide: ... }]  
```

List of components to bootstrap when this module is bootstrapped.
```javascript
bootstrap: [MyAppComponent]
```

### Useful links:
- #### Docs: https://angular.io/guide/ngmodules

## TEMPLATE SYNTAX

Binds property value to the result of expression firstName.
```html
<input [value]="firstName"> 
```

Binds attribute role to the result of expression myAriaRole.
```html
<div [attr.role]="myAriaRole">  
```

Binds the presence of the CSS class extra-sparkle on the element to the truthiness of the expression isDelightful.
```html
<div [class.extra-sparkle]="isDelightful">
```

Binds style property width to the result of expression mySize in pixels. Units are optional.
```html
<div [style.width.px]="mySize"> 
```

Calls method readRainbow when a click event is triggered on this button element (or its children) and passes in the event object.
```html
<button (click)="readRainbow($event)">  
```

Binds a property to an interpolated string, for example, "Hello Seabiscuit". 
Equivalent to: ```<div [title]="'Hello ' + ponyName">```
```html
<div title="Hello {{ponyName}}">  
```

Binds text content to an interpolated string, for example, "Hello Seabiscuit".
```html
<p>Hello {{ponyName}}</p> 
```

Sets up two-way data binding.
Equivalent to: `<my-cmp [title]="name" (titleChange)="name=$event">`
```html
<my-cmp [(title)]="name">
```

Creates a local variable movieplayer that provides access to the video element instance in data-binding and event-binding expressions in the current template.
```html
<video #movieplayer ...>
   <button (click)="movieplayer.play()">
</video>  
```

The * symbol turns the current element into an embedded template. 
Equivalent to: `<ng-template [myUnless]="myExpression"><p>...</p></ng-template>`
```html
<p *myUnless="myExpression">...</p> 
```

Transforms the current value of expression cardNumber via the pipe called myCardNumberFormatter.
```html
<p>Card No.: {{cardNumber | myCardNumberFormatter}}</p> 
```

The safe navigation operator (?) means that the employer field is optional and if undefined, the rest of the expression should be ignored.
```html
<p>Employer: {{employer?.companyName}}</p>  
```

An SVG snippet template needs an svg: prefix on its root element to disambiguate the SVG element from an HTML component.
```html
<svg:rect x="0" y="0" width="100" height="100"/>  
```

An `<svg>` root element is detected as an SVG element automatically, without the prefix.
```html
<svg>
	<rect x="0" y="0" width="100" height="100"/>
</svg>  
```

### Useful links:
- #### Docs: https://angular.io/guide/template-syntax

## BUILT-IN DIRECTIVES

```js
import { CommonModule } from '@angular/common';
```
Removes or recreates a portion of the DOM tree based on the showSection expression. 
ngIf is compiled down to ng-template wrapped around the element where ngIf first existed.

```html
<section *ngIf="showSection"></section>
	
<ng-template [ngIf]="showSection">
  <section></section>
</ng-template>
```

Notice ng-template's ngIf has brackets. Angular supports only one structural directive on an element (i.e ngIf, ngFor).

ngFor turns the li element and its contents into a template, and uses that to instantiate a view for each item in list. Using ngIf and ngFor on the same element would throw and error. Instead, wrap the ngFor with and ng-template using the bracket syntax for ngIf.

```html
<li *ngFor="let item of list">  

<li *ngIf="showList" *ngFor="let item of list"> // Error!!!

// Correct way
<ng-template [ngIf]="showList">
  <li *ngFor="let item of list"> 
</ng-template>
```

Conditionally swaps the contents of the div by selecting one of the embedded templates based on the current value of conditionExpression.
```html
<div [ngSwitch]="conditionExpression">
	<ng-template [ngSwitchCase]="case1Exp">...</ng-template>
	<ng-template ngSwitchCase="case2LiteralString">...</ng-template>
	<ng-template ngSwitchDefault>...</ng-template>
</div>  
```

Binds the presence of CSS classes on the element to the truthiness of the associated map values. The right-hand expression should return {class-name: true/false} map.
```html
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">  
```

Allows you to assign styles to an HTML element using CSS. You can use CSS directly, as in the first example, or you can call a method from the component.
```html
<div [ngStyle]="{'property': 'value'}">
<div [ngStyle]="dynamicStyles()"> 
```

### Useful links:
- #### Docs: https://angular.io/guide/attribute-directives

## FORMS
We more prefer ReactiveForms than TemplateDriven.
Avoid of use TemplateDriven forms, use them only if you really must.

```js
import { ReactiveFormsModule } from '@angular/forms';
```

Provides two-way data-binding, parsing, and validation for form controls.

```js
public formGroup: FormGroup;

constructor(
  private fb: FormBuilder
) {}

ngOnInit() {
  this.formGroup = this.fb.group({
    name: null
  })
}
```

```html
<div [formGroup]="formGroup">
  <input type="text" formControlName="name">
</div>
```

You can bind an object to a Select input in ReactiveForms using ngValue and compareWith.

```js

public items: any[] = [
  {
    id: 1,
    name: 'foo'
  },
  {
    id: 2,
    name: 'bar'
  }
];

compareFn(optionOne, optionTwo) : boolean {
  return optionOne.id === optionTwo.id;
}

```

```html
<select formControlName="name" [compareWith]="compareFn">
  <option [value]="null">Select an option</option>
  <option *ngFor="let item of items" [ngValue]="item"></option>
</select>
```

### Useful links:
- #### Docs: https://angular.io/guide/reactive-forms
- #### Full example / guide: https://malcoded.com/posts/angular-fundamentals-reactive-forms
- #### Select Input Docs: https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection
- #### compareWith Overview: https://netbasal.com/understanding-the-comparefn-input-in-angular-v4-4a401ef4fc4c


## CLASS DECORATORS
```js
import { Directive, ... } from '@angular/core';
```

Declares that a class is a component and provides metadata about the component.
```js
@Component({...})
class MyComponent() {}  
```

Declares that a class is a directive and provides metadata about the directive.
```js
@Directive({...})
class MyDirective() {}  
```

Declares that a class is a pipe and provides metadata about the pipe.
```js
@Pipe({...})
class MyPipe() {} 
```

Declares that a class can be injected into the constructor of another class by the dependency injector.
```js
@Injectable()
class MyService() {}  
```

## DIRECTIVE CONFIGURATION

```js
@Directive({ property1: value1, ... })
```

Specifies a CSS selector that identifies this directive within a template. Supported selectors include element, [attribute], .class, and :not().
```js
selector: '.cool-button:not(a)' 
```
Does not support parent-child relationship selectors.

List of dependency injection providers for this directive and its children.
```js
providers: [MyService, { provide: ... }]  
```

## COMPONENT CONFIGURATION

`@Component` extends `@Directive`, so the @Directive configuration applies to components as well

If set, the templateUrl and styleUrl are resolved relative to the component.
```js
moduleId: module.id 
```

List of dependency injection providers scoped to this component's view.
```js
viewProviders: [MyService, { provide: ... }]  
```

Inline template or external template URL of the component's view.
```js
template: 'Hello {{name}}'
templateUrl: 'my-component.html'  
```

List of inline CSS styles or external stylesheet URLs for styling the component’s view.
```js
styles: ['.primary {color: red}']
styleUrls: ['my-component.css'] 
```

### Useful inks:
- #### Docs: https://angular.io/api/core/Component

## CLASS FIELD DECORATORS FOR DIRECTIVES AND COMPONENTS

```js
import { Input, Output } from '@angular/core';
```

If you want to declare two way binding property make sure it supports bannana in box (example: `<my-cmp [(myProperty)]="someExpression">`).
```js
emailValue: string;
@Input()
get email(): string {
  return this.emailValue;
}
set email(value: string) {
  this.emailValue = value;
  this.emailChange.emit(this.emailValue)
}
@Output() emailChange = new EventEmitter<string>();
```

Declares an input property that you can update via property binding (example: `<my-cmp [myProperty]="someExpression">`).
```js
@Input() myProperty;  
```

Declares an output property that fires events that you can subscribe to with an event binding (example: `<my-cmp (myEvent)="doSomething()">`).
```js
@Output() myEvent = new EventEmitter(); 
```

Binds a host element property (here, the CSS class valid) to a directive/component property (`isValid`).
```js
@HostBinding('class.valid') isValid;  
```

Subscribes to a host element event (click) with a directive/component method (`onClick`), optionally passing an argument (`$event`).
```js
@HostListener('click', ['$event']) onClick(e) {...} 
```

Binds the first result of the component content query (`myPredicate`) to a property (`myChildComponent`) of the class.
```js
@ContentChild(myPredicate) myChildComponent; 
```

Binds the results of the component content query (`myPredicate`) to a property (`myChildComponents`) of the class.
```js
@ContentChildren(myPredicate) myChildComponents;
```

/Binds the first result of the component view query (`myPredicate`) to a property (`myChildComponent`) of the class. Not available for directives.
```js
@ViewChild(myPredicate) myChildComponent; 
```

Binds the results of the component view query (`myPredicate`) to a property (`myChildComponents`) of the class. Not available for directives.
```js
@ViewChildren(myPredicate) myChildComponents; 
```

## DIRECTIVE AND COMPONENT CHANGE DETECTION AND LIFECYCLE HOOKS (implemented as class methods)

Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
```js
constructor(myService: MyService, ...) { ... }  
```
Called after every change to input properties and before processing content or child views.
```js
ngOnChanges(changeRecord) { ... } 
```
Called after the constructor, initializing input properties, and the first call to `ngOnChanges`.
```js
ngOnInit() { ... }  
```
Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check. 
```js
ngDoCheck() { ... } 
```
Called after ngOnInit when the component's or directive's content has been initialized.
```js
ngAfterContentInit() { ... }  
```
Called after every check of the component's or directive's content.
```js
ngAfterContentChecked() { ... } 
```

Called after ngAfterContentInit when the component's views and child views / the view that a directive is in has been initialized.
```js
ngAfterViewInit() { ... } 
```
Called after every check of the component's views and child views / the view that a directive is in.
```js
ngAfterViewChecked() { ... }  
```
Called once, before the instance is destroyed.
```js
ngOnDestroy() { ... } 
```

## DEPENDENCY INJECTION CONFIGURATION

Sets or overrides the provider for MyService to the MyMockService class.
```js
{ provide: MyService, useClass: MyMockService } 
```

Sets or overrides the provider for MyService to the myFactory factory function.
```js
{ provide: MyService, useFactory: myFactory }
```

 Sets or overrides the provider for MyValue to the value 41.
 ```js
{ provide: MyValue, useValue: 41 }  
```

### Useful links:
- #### Docs: https://angular.io/guide/dependency-injection

## COMPONENT COMMUNICATION

Unidirectional data flow is a major concept in modern JS frameworks.
Components are categorized as either smart components or presentation components. Smart components should interact with services/stores and pass data to presentation components. If events from presentation components need to be communicated to other presentation components, the preferred route is to communicate to the parent smart component using a service.

This may seem like a trivial example that could be achieved with inputs and outputs, but as your component hierarchy grows, it becomes cumbersome to handle passing data up and down components.

Service: Holds a subject that the parent smart component will create a subscription and the presentation components will publish an event. 

Best practices:

- only expose subjects as observables, this allows the implementation details to only be defined in the service. 
- end observable names with a $ (i.e., myObservable$), easily identifies a property as an observable

```js
export class MyService {
  private eventSubject: Subject<{message: string}> = new Subject();

  constructor() {}
  
  get event$(): Observable<{message: string}> {
    return this.eventSubject.asObservable();
  }
  
  publishEvent(event): {message: string} {
    return this.eventSubject.next(event);
  }
}
```

Smart Component: The smart component sets the observable from MyService as a public instance variable to be used in the template.

```js
export class SmartComponent {
  public event$: Observable<{message: string}> = this.myService.event$;

  constructor(
    private myService: MyService
  ) {}
}

```

The smart component's template is composed of 2 presentation components: one to emit an event to the service and one to receive the event from the smart component.

We are using the async pipe here to manage creating/destroying the subscription, as well as calling change detection and passing down the event to the presentation-bar component.

```html
<presentation-foo></presentation-foo>
<presentation-bar [event]="event$ | async"></presentation-bar>
```

Presentation Foo component: This presentation component is emitting an event that the other presentation components needs to listen to.

```js
export class PresentationFooComponent {
  constructor(
    private myService: MyService
  ) {}
  
  // imagine a click event on button element
  onButtonClick() {
    this.myService.publishEvent({ event: 'Hello' });
  }
}
```
Presentation Bar component: This presentation component is getting passed the latest value from the eventSubject by the smart components subscription to the event$ observable. 

```js
export class PresentationBarComponent {
  @Input() event: boolean;
 
  ngOnChanges(changes: SimpleChanges) {
    if (changes.event && changes.event.currentValue) {
      this.doSomething();
    }  
  }
  
  doSomething() {}
}
```

### Useful links:
- #### Async Pipe: https://angular.io/api/common/AsyncPipe
- #### Cookbook Component Communication: https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service

## ROUTING AND NAVIGATION

```js
import { Routes, RouterModule, ... } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'path/:routeParam', component: MyComponent },
  { path: 'staticPath', component: ... },
  { path: '**', component: ... },
  { path: 'oldPath', redirectTo: '/staticPath' },
  { path: ..., component: ..., data: { message: 'Custom' } }
]);
```

Configures routes for the application. Supports static, parameterized, redirect, and wildcard routes. Also supports custom route data and resolve.
```js
const routing = RouterModule.forRoot(routes); 
```

Marks the location to load the component of the active route.
```html
<router-outlet></router-outlet>
<router-outlet name="aux"></router-outlet>
```

Creates a link to a different view based on a route instruction consisting of a route path, required and optional parameters, query parameters, and a fragment. To navigate to a root route, use the `/` prefix; for a child route, use the `./prefix`; for a sibling or parent, use the `../` prefix.
``` html
<a routerLink="/path">
<a [routerLink]="[ '/path', routeParam ]">
<a [routerLink]="[ '/path', { matrixParam: 'value' } ]">
<a [routerLink]="[ '/path' ]" [queryParams]="{ page: 1 }">
<a [routerLink]="[ '/path' ]" fragment="anchor">
```

The provided classes are added to the element when the `routerLink` becomes the current active route.
```html
<a [routerLink]="[ '/path' ]" routerLinkActive="active">  
```  

&nbsp;&nbsp;
An interface for defining a class that the router should call first to determine if it should activate this component. Should return a boolean or an `Observable`/`Promise` that resolves to a `boolean`.
```js
class CanActivateGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean { ... }
}

{
  path: ...,
  canActivate: [CanActivateGuard]
} 
```

An interface for defining a class that the router should call first to determine if it should deactivate this component after a navigation. Should return a boolean or an `Observable`/`Promise` that resolves to a `boolean`.
```js
class CanDeactivateGuard implements CanDeactivate<T> {
  canDeactivate(
    component: T,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean { ... }
}

{
  path: ...,
  canDeactivate: [CanDeactivateGuard]
}
```

An interface for defining a class that the router should call first to determine if it should activate the child route. Should return a boolean or an `Observable`/`Promise` that resolves to a `boolean`.
```js

class CanActivateChildGuard implements CanActivateChild {
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean { ... }
}

{
  path: ...,
  canActivateChild: [CanActivateGuard],
  children: ...
}
```

An interface for defining a class that the router should call first to resolve route data before rendering the route. Should return a value or an `Observable`/`Promise` that resolves to a value.
```js
class ResolveGuard implements Resolve<T> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any { ... }
}


{
  path: ...,
  resolve: [ResolveGuard]
}
```

An interface for defining a class that the router should call first to check if the lazy loaded module should be loaded. Should return a boolean or an `Observable`/`Promise` that resolves to a `boolean`.
```js
class CanLoadGuard implements CanLoad {
  canLoad(
    route: Route
  ): Observable<boolean>|Promise<boolean>|boolean { ... }
}

{
  path: ...,
  canLoad: [CanLoadGuard],
  loadChildren: ...
}
```

### Useful links:
- #### Docs: https://angular.io/guide/router
