export class Educacion {
    id?: number;
    nombre : string;
    descripcion: string;
    img : string;
    fecha_inicio: Date;
    fecha_fin: Date;
    institucion: string;

    constructor(nombre: string, descripcion: string, img:string, fecha_inicio:Date, fecha_fin:Date, institucion:string){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.img= img;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.institucion = institucion;
    }
}
