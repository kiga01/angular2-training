import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-input',
    template: `
        <h1>Your details, please</h1>
        <div>
            <label for="name">Your Name</label>
            <input type="text" id="name" class="form-control">
        </div>
        <div>
            <label for="age">Your Age</label>
            <input type="text" id="age" class="form-control">
        </div>
        <br>
        <div>Filled Out: {{isFilled ? 'yes' : 'no'}}</div>
        <div>Filled Out: {{isValid ? 'yes' : 'no'}}</div>
        <br>
        <button class="btn btn-default">Submit</button>
    `,
})
export class InputComponent {

}