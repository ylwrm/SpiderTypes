let rootDiv:any = document.getElementById('root') as HTMLDivElement;
let component:any = new MyComponent();
component.init(rootDiv);
// for GC
component = null;