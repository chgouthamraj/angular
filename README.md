# Angular
- To create a project : `ng new project-name`
- To create a component :`ng generate component component-name`
- To run the project : `ng serve`
  
## Angular structure
- 'main.ts' is the entry to the root module that app module
- All the created components can be found in root module
- App flow:main.ts -> app module -> app.module.ts -> app.component.ts
  
## Modules
- Angular app is a collection of many individual modules
- Modules represent the feature a feature area in the Appilication
  `eg: usermodule, adminmodule`
- Each module internally made of components and services
  
## Components 
- A component controls the portion of the view in the browser
- eg: we can have a component for sidebar, header
![localImage](./Images/component.png)
- component is made of 3 parts
    - template(View HTML)
    - class (code, typescript & data methods)
    - metadata (information , decorator)
- component decorartor has the template and style 
- eg: @Component({
    selector: 'app-test-comp',<br/>
    templateUrl: './test-comp.component.html',<br/>
    styleUrls: ['./test-comp.component.css'],<br/>
     })
     - Selector:is used to represent this component
     - templateUrl: points to the hmtl template view
     - styleUrls: styles that point to this component
- To add component anywhere add as a custom tag `<app-test-comp></app-test-comp>`
- can be used as a class by adding "." in selector `<div class="app-test-comp"></div>`
- use as html attribute `<div app-test-comp></div>`
- Each component we have
  - HTML template + class(to control logic)
- services: contain business logic 
![localImage](./Images/service.png)

