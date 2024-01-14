import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  template: `
    <header class="flex justify-between border-b border-gray-700 p-2">
        <h1 class="flex items-center text-2xl
         font-bold bg-gradient-to-r from-emerald-600
          to-sky-500 bg-clip-text text-transparent">
            <span class="material-symbols-outlined text-5xl pr-2">
                task_alt
            </span>
            To-Do-App</h1>
        <div #avatar (click)="onAvatarClick($event, avatar)"
                class="bg-contain relative w-9 border bg-sky-500 border-gray-700 cursor-pointer  hover:shadow-lg hover:shadow-cyan-900 flex justify-center items-center text-white font-bold rounded-full ">
            U
            <div #userMenu
                 class="hidden cursor-auto flex-col gap-2 font-normal text-center bg-[#1E1F22] absolute border top-full mt-2 rounded-md right-0 p-2 shadow-lg shadow-gray-700 z-10">
                <div  class="px-2 font-bold">Someone&#64;ijse.lk</div>
                <div class="whitespace-nowrap px-2">Hi, User</div>
                <div (click)="onClick()" class="cursor-pointer group flex flex-row rounded justify-center items-center
                        bg-slate-600 p-2 hover:bg-slate-700">
                    <span class="material-symbols-outlined group-hover:text-lime-500 pr-1">
                        logout
                    </span>
                    Sign out
                </div>
            </div>
        </div>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('userMenu')
  userMenuElm!: ElementRef<HTMLDivElement>
  // userImage: string;


  constructor(public authService: AuthService,public routerService:Router) {
    // this.userImage = `url(${authService.getPrincipal()!?.photoURL!})`;
  }


  @HostListener('document:click')
  onDocumentClick(){
    const userMenu = this.userMenuElm.nativeElement;
    if (userMenu.classList.contains("flex")){
      userMenu.classList.toggle('flex');
      userMenu.classList.toggle('hidden');
    }
  }

  onAvatarClick($event: MouseEvent, avatar: HTMLDivElement) {
    $event.stopPropagation();
    if ($event.target != avatar) return;
    this.userMenuElm.nativeElement.classList.toggle('flex');
    this.userMenuElm.nativeElement.classList.toggle('hidden');
  }

  onClick(){
    this.authService.signOut().then(value => this.routerService.navigateByUrl("/login"));
  }
}
