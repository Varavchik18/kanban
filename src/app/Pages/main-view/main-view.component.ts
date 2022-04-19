import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.models';
import { Column } from 'src/app/models/column.model';



@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Organizer', [
    new Column('Ideas', [
      "Some random idea",
      "This is another idea",
      "Build an awesome drag&drop application"
    ]),

    new Column('Research', [
      "Lorem ipsum",
      "Foo",
      "This was in the 2020"
    ]),
    new Column("ToDo", [
      'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
    ]),
    new Column ("Done", [
      'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
    ])
  ])

  ngOnInit(): void {
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
