import { Component, Input, OnInit } from '@angular/core';
import { ropa } from '../../models/ropa.models';

@Component({
  selector: 'app-ropa-item',
  standalone: false,
  templateUrl: './ropa-item.component.html',
  styleUrls: ['./ropa-item.component.css']
})
export class RopaItemComponent implements OnInit {

  @Input() ropa: ropa | undefined;  // Recibe la ropa como un Input

  ngOnInit(): void {
    console.log(this.ropa)
  }

}
