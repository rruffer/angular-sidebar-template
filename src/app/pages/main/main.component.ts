import { SidebarService } from './../../utils/services/sidebar.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public sidebarMenuOpened = true;

  constructor(
    private renderer: Renderer2,
    public sidebarservice: SidebarService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }

  toggleMenuSidebar(): void {
    if (this.sidebarMenuOpened) {
      this.renderer.addClass(
        document.getElementById('sidebar'),
        'active'
      );
      this.renderer.addClass(
        document.getElementById('content'),
        'active'
      );
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(
        document.getElementById('sidebar'),
        'active'
      );
      this.renderer.removeClass(
        document.getElementById('content'),
        'active'
      );
      this.sidebarMenuOpened = true;
    }
  }
}
