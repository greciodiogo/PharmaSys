import { Component, Input, OnInit } from '@angular/core';
import { NavInterface } from '../NavInterface';
import { _nav } from '../_nav';
import { Nav } from '@app/containers/layout/themeApp';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  @Input() NavTheme:Nav;
  @Input() data: NavInterface[] = _nav;

  public menus: Array<NavInterface> = _nav;
  constructor() {}

  ngOnInit(): void {

    // if (this.data !== undefined) console.log('data=>', this.data);
  }
}
