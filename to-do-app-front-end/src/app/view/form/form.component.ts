import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <form action="" class="flex p-2 gap-1 border-b">
        <input type="text"
               placeholder="Eg. Finish To Do App Design"
        class="border flex-grow p-1 px-2 outline-0
                bg-transparent border-gray-600  caret-sky-500 text-white
                rounded focus:ring-2 hover:border-sky-300 focus:ring-sky-400">
        <button class="border px-2 border-gray-700
            hover:shadow-lg hover:shadow-cyan-700 outline-0 focus:ring-1 ring-emerald-600
            bg-gradient-to-r from-emerald-600 to-sky-500 text-white rounded">
            ADD
        </button>
    </form>
  `,
  styleUrl: './form.component.scss'
})
export class FormComponent {

}