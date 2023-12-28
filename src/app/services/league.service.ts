import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LEAGUES } from '../core/league-store';
import { LastGame, ResponseLastGame } from '../model/lastGame';
import { League } from '../model/leagues';
import { Teams } from '../model/teams';


@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  constructor(
    private http: HttpClient,
  ) { }

  getLeagues(): Promise<League[]> {
    return Promise.resolve(LEAGUES);
  }

  getTeamsLeague(id: number) {

    let params = new HttpParams();
    params = params.append('league', id);
    params = params.append('season', new Date().getFullYear());

    const headers = new HttpHeaders().set('x-rapidapi-key', '42390803d900443de9ac43136481ca61');
    const httpOptions = { params: params, headers: headers };

    return this.http.get<Teams>('https://v3.football.api-sports.io/standings',httpOptions);
  }

  getLastGame(id: number) {
    let params = new HttpParams();
    params = params.append('team', id);
    params = params.append('season', new Date().getFullYear());
    params = params.append('last', 10);

    const headers = new HttpHeaders().set('x-rapidapi-key', '42390803d900443de9ac43136481ca61');
    const httpOptions = { params: params, headers: headers };

    return this.http.get<LastGame>('https://v3.football.api-sports.io/fixtures',httpOptions);

  }
}
