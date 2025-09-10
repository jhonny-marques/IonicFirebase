import { Component, OnInit } from '@angular/core';
import { DataCuidadores, Cuidador } from '../../services/data-cuidadores';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cuidadores-list',
  templateUrl: './cuidadores-list.page.html',
  styleUrls: ['./cuidadores-list.page.scss'],
  standalone: false
})
export class CuidadoresListPage implements OnInit {
cuidadores: Cuidador[] = [];

  constructor(
    private data: DataCuidadores,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.data.getCuidadores().subscribe((res) => {
      this.cuidadores = res;
    });
  }

  addCuidador() {
    this.router.navigateByUrl('/cuidadores-detail');
  }

  editCuidador(cuidador: Cuidador) {
  this.router.navigate([`/cuidadores-detail/${cuidador.id}`]);
}

async deleteCuidador(id: string) {
  const alert = await this.alertController.create({
    header: 'Confirmar exclusão',
    message: 'Tem certeza que deseja excluir este cuidador(a)?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary'
      },
      {
        text: 'Excluir',
        handler: () => {
          this.data.deleteCuidador(id);
        }
      }
    ]
  });

  await alert.present();
}

}
