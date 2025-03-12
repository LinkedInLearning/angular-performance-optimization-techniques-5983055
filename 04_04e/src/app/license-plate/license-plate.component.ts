import {Component, Input} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-license-plate',
  standalone: true,
  templateUrl: './license-plate.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {

  @Input()
  plate!: LicensePlate;

  @Input()
  buttonText!: string;

}
