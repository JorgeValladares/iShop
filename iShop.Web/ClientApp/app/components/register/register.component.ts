import { Component, Output, EventEmitter, Input } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes, useAnimation, query, animateChild, group, stagger } from '@angular/animations';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    animations: [
       
      
    ]
})
export class RegisterComponent {
    @Output('onclick') onclick = new EventEmitter<boolean>();
    exit() {
        this.onclick.emit(false);
    }
  
}