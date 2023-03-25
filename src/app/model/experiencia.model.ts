export class Experiencia {

    id?: number;
    nombreE : string;
    descripcionE: string;
    img : string;
    fecha_inicio: Date;
    fecha_fin: Date;
    empleador: string;

    constructor(nombreE: string, descripcionE: string, img:string, fecha_inicio:Date, fecha_fin:Date, empleador:string){
        this.nombreE=nombreE;
        this.descripcionE=descripcionE;
        this.img= img;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.empleador = empleador;
    }

}
