import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from 'src/app/services/league.service';
import { ResponseLastGame } from 'src/app/model/lastGame';

@Component({
  selector: 'app-detail-results',
  templateUrl: './detail-results.component.html',
  styleUrls: ['./detail-results.component.css']
})
export class DetailResultsComponent implements OnInit {

  id!: number;

  dataLastGame: ResponseLastGame[] = []

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private leagueService: LeagueService

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.leagueService.getLastGame(this.id).subscribe(
        (res) => {
          this.dataLastGame = res.response
        });
    });



  }

  backClicked() {
    this._location.back();
  }

}
