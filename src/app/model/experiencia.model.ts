export class Experiencia {

    id?: number;
    nombreE : string;
    descripcionE: string;
    img : string;
    fecha_inicio: string;
    fecha_fin: string;
    empleador: string;

    constructor(nombreE: string, descripcionE: string, img:string, fecha_inicio:string, fecha_fin:string, empleador:string){
        this.nombreE=nombreE;
        this.descripcionE=descripcionE;
        this.img= img;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.empleador = empleador;
    }

}
