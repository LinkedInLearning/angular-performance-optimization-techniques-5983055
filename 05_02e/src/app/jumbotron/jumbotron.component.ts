import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  standalone: true,
  styleUrls: ['./jumbotron.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JumbotronComponent {

  @Input() title!: string;
  @Input() description!: string;

}
