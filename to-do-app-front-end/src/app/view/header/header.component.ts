import { Component } from '@angular/core';

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
        <div class="bg-contain relative w-9 border bg-sky-500 border-gray-700 cursor-pointer  hover:shadow-lg hover:shadow-cyan-900 flex justify-center items-center text-white font-bold rounded-full">
            U
            <div id="user-menu" class="absolute">

            </div>
        </div>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
