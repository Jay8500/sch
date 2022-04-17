import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css'],
})
export class ShomeComponent implements OnInit {
  public text = '';
  public filteredCountries: any;
  public countries: any;
  constructor(private _Router: Router) {}

  ngOnInit(): void {
    this.countries = [
      {
        name: 'student profile',
        url: 'profile.png',
      },
      {
        name: 'fee collection',
        url: 'download.png',
      },
      {
        name: 'masters',
        url: 'settings.png',
      },
    ];
  }

  search(event: { query: any }) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredCountries = filtered;
  }

  onModuleClick(_group: any) {
    switch (_group.name) {
      case 'student profile':
        this._Router.navigateByUrl('/home/studentinfo');
        break;
      case 'fee collection':
        this._Router.navigateByUrl('/home/feecollection');
        break;
      case 'masters':
        this._Router.navigateByUrl('/home/configurations-masters');
        break;
    }
  }
}
