import {Component, OnInit} from '@angular/core';
import {CombatService} from '../../services/combat.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {

  constructor(
    private combatService: CombatService
  ) {
  }

  ngOnInit() {
  }

}
