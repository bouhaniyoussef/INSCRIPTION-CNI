import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, } from "ngx-bootstrap/modal";
import { BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-resource-not-found',
  templateUrl: './resource-not-found.component.html',
  styleUrls: ['./resource-not-found.component.css']
})
export class ResourceNotFoundComponent implements OnInit {

  @ViewChild('notFoundTemplate', { static: true })
  notFoundTemplate!: TemplateRef<any>;

  constructor(private modalService: BsModalService) {
  }

  modalRef: BsModalRef = new BsModalRef;

  ngOnInit(): void {
    this.modalRef = this.modalService.show(this.notFoundTemplate);
  }

  hide() {
    this.modalRef.hide();
  }

}
