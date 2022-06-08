import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() name: string = "";
@Input() icon: string = "";
@Input() href: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
