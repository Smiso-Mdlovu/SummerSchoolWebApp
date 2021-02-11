import { Component, OnInit, Inject } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  constructor(
    public dialoRef: MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) {}

  ngOnInit()  {
  }

  onSubmitted(updatedItem: BudgetItem){
    this.dialoRef.close(updatedItem);
  }


}
