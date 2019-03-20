import { Component, OnInit } from '@angular/core';
import {CombatService} from '../../services/combat.service';

@Component({
  selector: 'app-modifiers',
  templateUrl: './modifiers.component.html',
  styleUrls: ['./modifiers.component.scss']
})
export class ModifiersComponent implements OnInit {

  constructor(
    public combatService: CombatService
  ) { }

  ngOnInit() {
  }

}
