import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <div class="flex flex-row items-center justify-between gap-2 hover:bg-gradient-to-r from-transparent via-sky-900 to-transparent p-2">
        <div class="flex flex-row gap-2 items-center">
            <input id="chk" class="w-5 h-5 ml-2 bg-slate-700 rounded text-green-600 focus:shadow-none
          hover:ring-1 hover:ring-lime-600
           focus:shadow-sky-700 focus:ring-offset-0 focus:ring-0
              peer"
                   type="checkbox">

            <label class="select-none peer-checked:line-through peer-checked:text-gray-400 peer-checked:decoration-lime-500
        peer-checked:decoration-2 text-slate-300 cursor-pointer"
                   for="">Task 1
            </label>
        </div>
    </div>
    <div title="delete" class="select-none flex mr-2 items-center rounded-full p-0.5 group cursor-pointer">
        <span class="material-symbols-outlined text-gray-400 group-hover:text-amber-500">
            close
        </span>
    </div>

  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {

}
