import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from 'src/app/model/leagues';
import { Standing, Teams } from 'src/app/model/teams';
import { LeagueService } from 'src/app/services/league.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leagues: League[] = [];
  dataTable: Standing[] = [];


  displayedColumns: string[] = ['rank', 'logo', 'name', 'games', 'win', 'lose', 'draw', 'goalsDiff', 'points'];
  dataSource = JSON.parse(localStorage.getItem('teams') || '[]');

  constructor(
    private leagueService: LeagueService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.leagueService.getLeagues().then(leagues => this.leagues = leagues);
  }


  getDataLeague(el: League) {
    this.leagueService.getTeamsLeague(el.id).subscribe(
    (res) => {
      this.dataTable = res.response[0].league.standings[0]
      localStorage.setItem('teams', JSON.stringify(this.dataTable))
      this.dataSource = JSON.parse(localStorage.getItem('teams') || '[]');
    });
  }

  detailResults(el: Standing) {
    this.router.navigate(['detail-results', el.team.id])
  }
}
