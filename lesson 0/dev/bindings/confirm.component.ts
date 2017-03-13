import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-confirm',
    template: `
        <h1>You submitted the following details. Is this Correct</h1>
        <p>Your name is <span class="highlight">{{myself.name}}</span> and you're <span class="highlight">{{myself.age}}</span> years old. please click on Confirm if that is ok</p>
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
export class ConfirmComponent {

}