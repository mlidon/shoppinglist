import { FormsModule } from '@angular/forms';
import { Component} from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  addToList:string[]=[];
  attachToList:string[]=[];
  element?:string;
  deleteList:boolean = false;

  constructor(){}

  ngOnInit(): void {
    
  }


  setAddToList(item:string){
    this.addToList.push(item)
    this.element = "";
  }
    
  setAddToAttach(item:string){
    let i = this.addToList.indexOf(item)
    this.attachToList.push(this.addToList[i])
    this.deleteToList(this.addToList[i])
  }

  deleteToList(item:string){
    let index;
    index = this.addToList.indexOf(item)
    this.addToList.splice(index,1);
  }

  deleteToAttach(item:string){
    let i = this.attachToList.indexOf(item)
    this.attachToList.splice(i,1);

  }

  deleteToAttachAndReturn(item:string){
    let i = this.attachToList.indexOf(item)
    this.addToList.push(this.attachToList[i])
    this.attachToList.splice(i,1);

  }

  deleteAllList(){
    this.addToList=[];
    this.attachToList=[];
  }
  
}
