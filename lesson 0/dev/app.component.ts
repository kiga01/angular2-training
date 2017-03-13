
import {Component} from 'angular2/core';
import {InputComponent} from './bindings/input.component';
import {ConfirmComponent} from './bindings/confirm.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 input-container">
                <my-input></my-input>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 input-container">
                 <my-confirm></my-confirm>
            </div>
        </div>
    `,
    directives: [InputComponent, ConfirmComponent],
})
export class AppComponent {


}