import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @ViewChild('calculatorContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(private injector: Injector) { }

  async loadCalculator() {
    this.container.clear();

    const remoteModule = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'calculatorApp',
      exposedModule: './AppComponent'
    });

    const component = remoteModule.CalculatorComponent;

    const compRef = this.container.createComponent(component, {
      injector: this.injector
    });
  }
}
