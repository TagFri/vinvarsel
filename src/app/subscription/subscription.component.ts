import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";
import { registerLocaleData } from "@angular/common";
import localeNor from "@angular/common/locales/nb";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SliderComponent } from "@angular-slider/ngx-slider/slider.component";

registerLocaleData(localeNor, "no");

@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SubscriptionComponent implements OnInit {
  hideCountries = true;
  minValue = 100;
  maxValue = 1000;
  options: Options = {
    logScale: true,
    floor: 100,
    ceil: 100000,
    step: 100,
  };
  popularContries = [
    "Antillene",
    "Argentina",
    "Australia",
    "Brasil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Frankrike",
    "Hellas",
    "Italia",
    "Kroatia",
    "Peru",
    "Portugal",
    "Spania",
    "Sør-Afrika",
    "Tyskland",
    "Uruguay",
    "USA",
    "Venezuela",
  ];
  countries = [
    "Amer. Jomfruøy.",
    "Antillene",
    "Argentina",
    "Armenia",
    "Australia",
    "Bahamas",
    "Barbados",
    "Belgia",
    "Bermuda",
    "Bosnia-Herceg.",
    "Brasil",
    "Brit. Jomfruøy.",
    "Bulgaria",
    "Canada",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Danmark",
    "Dominik. rep.",
    "Ecuador",
    "England",
    "Estland",
    "Etiopia",
    "EU",
    "Filippinene",
    "Finland",
    "Frankrike",
    "Georgia",
    "Guadeloupe",
    "Guatemala",
    "Guyana",
    "Haiti",
    "Hellas",
    "India",
    "Irland",
    "Island",
    "Israel",
    "Italia",
    "Jamaica",
    "Japan",
    "Kina",
    "Kosovo",
    "Kroatia",
    "Latvia",
    "Libanon",
    "Litauen",
    "Luxemburg",
    "Makedonia",
    "Marokko",
    "Martinique",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Nederland",
    "Nepal",
    "New Zealand",
    "Nicaragua",
    "Norge",
    "Palestina",
    "Panama",
    "Paraguay",
    "Peru",
    "Polen",
    "Portugal",
    "Puerto Rico",
    "Romania",
    "Russland",
    "Serbia",
    "Skottland",
    "Slovakia",
    "Slovenia",
    "Spania",
    "St. Chr.& Nevis",
    "St. Lucia",
    "Storbritannia",
    "Sveits",
    "Sverige",
    "Syria",
    "Sør-Afrika",
    "Sør-Korea",
    "Taiwan",
    "Thailand",
    "Trinidad,Tobago",
    "Tsjekkia",
    "Tyrkia",
    "Tyskland",
    "Ukraina",
    "Ungarn",
    "Uruguay",
    "USA",
    "Venezuela",
    "Wales",
    "Østerrike",
    "Øvrige",
  ];
  beverages = [
    "Alkoholfritt",
    "Aromatisert vin",
    "Brennevin",
    "Fruktvin",
    "Gaveartikler",
    "Hvitvin",
    "Mjød",
    "Musserende vin",
    "Perlende vin",
    "Rosévin",
    "Rødvin",
    "Sake",
    "Sider",
    "Sterkvin",
    "Øl",
  ];
  public wineForm: FormGroup;
  public showFormErrors = false;
  @ViewChild("rangeSliderContainer") rsc!: ElementRef;
  constructor() {
    this.wineForm = new FormGroup({
      email: new FormControl("", {
        updateOn: "blur",
        validators: [Validators.required, Validators.email],
      }),
      range: new FormControl("", {
        updateOn: "change",
        validators: [
          Validators.min(this.minValue),
          Validators.max(this.maxValue),
        ],
      }),
    });
  }

  ngOnInit(): void {}

  onExpandCountries(): void {
    this.hideCountries = !this.hideCountries;
  }
  sendSubscription(): void {
    // Check if form is valid
    this.wineForm.get("email")?.updateValueAndValidity({
      onlySelf: false,
    });
    console.log(this.wineForm.get("email")?.value);
    if (this.wineForm.valid) {
      // Form is valid, we can submit
      // TODO submit functionality
    } else {
      // Form is not valid
      this.showFormErrors = true;
      if (this.wineForm.get("email")?.errors) {
        // Scroll to e-mail input
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        });
      } else if (this.wineForm.get("range")?.errors) {
        // Range is not within range
        const slider = <HTMLDivElement>this.rsc.nativeElement;
        slider.scrollTo({
          behavior: "smooth",
        });
      }
    }
  }
}
