import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';


@Component({
  standalone: true,
  template: `<button click=(buttonClicked())>+</button>{{value}}`
})
export class MyCellComponent implements ICellRendererAngularComp {
  public value!: string;

  agInit(params: ICellRendererParams) {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams) {
    return true;
  }
  buttonClicked() {
    alert();
  }
}
