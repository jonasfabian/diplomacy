import {Component, OnInit} from '@angular/core';
import {CombatService} from '../../services/combat.service';
import {CountryService} from '../../services/country.service';
import {RelationService} from '../../services/relation.service';
import {Relation} from '../../models/relation';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {

  constructor(
    public combatService: CombatService,
    public countryService: CountryService,
    private relationService: RelationService
  ) {
  }

  relation: Relation = new Relation(-1, 0, 0, 0);
  showRelationMessage = false;
  showCombatPanel = false;

  ngOnInit() {
    this.combatService.fillAvailableCountriesArray();
  }

  declareWar() {
    this.relation.countryId1 = this.countryService.country.id;
    this.relation.countryId2 = this.combatService.selectedCountryToAttack.id;
    this.relation.relationType = 2;
    this.relationService.createRelation(this.relation);
    this.showRelationMessage = true;
    this.showCombatPanel = true;
  }

}
