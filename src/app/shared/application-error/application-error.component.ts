import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, } from "ngx-bootstrap/modal";
import { BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-application-error',
  templateUrl: './application-error.component.html',
  styleUrls: ['./application-error.component.css']
})
export class ApplicationErrorComponent implements OnInit {
  @ViewChild('errorTemplate', { static: true })
  errorTemplate!: TemplateRef<any>;

  constructor(private modalService: BsModalService) {
  }

  modalRef!: BsModalRef;

  ngOnInit(): void {
    this.modalRef = this.modalService.show(this.errorTemplate);
  }

  hide() {
    this.modalRef.hide();
  }
}
