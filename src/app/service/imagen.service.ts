import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { getDownloadURL, list } from '@firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  url: string = "";

  constructor(private storage: Storage) { }

  public async uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imagen/' + name)
    return uploadBytes(imgRef, file).then(respuesta => {
      getDownloadURL(respuesta.ref).then(url => {
        this.url = url
        return this.url;
      });
    }).then(p => { return this.url }).catch(err => console.log(err)
    );
  }



  /*   getImagen(){
      const imagenesRef = ref(this.storage, 'imagen')
      this.url="";
      list(imagenesRef).then( async resp => {
        for (let item of resp.items){
          this.url = await getDownloadURL(item);
        }
       
      }).catch( error => console.log(error)
      );
    } */

  clearUrl() {
    this.url = '';
  }

}
