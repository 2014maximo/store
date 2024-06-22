import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SliderOneComponent } from '../../shared/components/slider-one/slider-one.component';
import { BestSellersComponent } from '../../shared/components/best-sellers/best-sellers.component';
import { DealDayComponent } from '../../shared/components/deal-day/deal-day.component';
import { SpecialOffertOneComponent } from '../../shared/components/special-offert-one/special-offert-one.component';
import { NewArrivalsComponent } from '../../shared/components/new-arrivals/new-arrivals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SliderOneComponent,
    BestSellersComponent,
    DealDayComponent,
    NewArrivalsComponent,
    SpecialOffertOneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
