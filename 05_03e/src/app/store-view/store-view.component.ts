import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import {HttpClient} from '@angular/common/http';
import {LicensePlate} from '../license-plate';
import { SlicePipe} from '@angular/common';
import {LicensePlateComponent} from '../license-plate/license-plate.component';
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-store-view',
    imports: [JumbotronComponent,  LicensePlateComponent, SlicePipe],
    templateUrl: './store-view.component.html',
    styleUrl: './store-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreViewComponent {

  http = inject(HttpClient);
  plates = toSignal(
    this.http.get<LicensePlate[]>("https://lp-store-server.vercel.app/data"),
    {initialValue: []}
  );

}
