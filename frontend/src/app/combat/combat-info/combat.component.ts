import {Component, OnInit} from '@angular/core';
import {CombatService} from '../../services/combat.service';
import {Country} from '../../models/country';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {

  constructor(
    public combatService: CombatService,
  ) {
  }
co
  ngOnInit() {
    this.combatService.fillAvailableCountriesArray();
  }

}
