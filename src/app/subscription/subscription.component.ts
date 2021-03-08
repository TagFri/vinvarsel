import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { registerLocaleData } from '@angular/common';
import localeNor from '@angular/common/locales/nb';
registerLocaleData(localeNor, 'no');

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
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
    'Antillene',
    'Argentina',
    'Australia',
    'Brasil',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Frankrike',
    'Hellas',
    'Italia',
    'Kroatia',
    'Peru',
    'Portugal',
    'Spania',
    'Sør-Afrika',
    'Tyskland',
    'Uruguay',
    'USA',
    'Venezuela'
  ];
  countries = [
    'Amer. Jomfruøy.',
    'Antillene',
    'Argentina',
    'Armenia',
    'Australia',
    'Bahamas',
    'Barbados',
    'Belgia',
    'Bermuda',
    'Bosnia-Herceg.',
    'Brasil',
    'Brit. Jomfruøy.',
    'Bulgaria',
    'Canada',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Danmark',
    'Dominik. rep.',
    'Ecuador',
    'England',
    'Estland',
    'Etiopia',
    'EU',
    'Filippinene',
    'Finland',
    'Frankrike',
    'Georgia',
    'Guadeloupe',
    'Guatemala',
    'Guyana',
    'Haiti',
    'Hellas',
    'India',
    'Irland',
    'Island',
    'Israel',
    'Italia',
    'Jamaica',
    'Japan',
    'Kina',
    'Kosovo',
    'Kroatia',
    'Latvia',
    'Libanon',
    'Litauen',
    'Luxemburg',
    'Makedonia',
    'Marokko',
    'Martinique',
    'Mauritius',
    'Mexico',
    'Moldova',
    'Monaco',
    'Nederland',
    'Nepal',
    'New Zealand',
    'Nicaragua',
    'Norge',
    'Palestina',
    'Panama',
    'Paraguay',
    'Peru',
    'Polen',
    'Portugal',
    'Puerto Rico',
    'Romania',
    'Russland',
    'Serbia',
    'Skottland',
    'Slovakia',
    'Slovenia',
    'Spania',
    'St. Chr.& Nevis',
    'St. Lucia',
    'Storbritannia',
    'Sveits',
    'Sverige',
    'Syria',
    'Sør-Afrika',
    'Sør-Korea',
    'Taiwan',
    'Thailand',
    'Trinidad,Tobago',
    'Tsjekkia',
    'Tyrkia',
    'Tyskland',
    'Ukraina',
    'Ungarn',
    'Uruguay',
    'USA',
    'Venezuela',
    'Wales',
    'Østerrike',
    'Øvrige',
  ];
  beverages = [
    'Alkoholfritt',
    'Aromatisert vin',
    'Brennevin',
    'Fruktvin',
    'Gaveartikler',
    'Hvitvin',
    'Mjød',
    'Musserende vin',
    'Perlende vin',
    'Rosévin',
    'Rødvin',
    'Sake',
    'Sider',
    'Sterkvin',
    'Øl',
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onExpandCountries(): void {
    this.hideCountries = this.hideCountries ? false : true;
  }
  sendSubscription(): void {

  }

}
