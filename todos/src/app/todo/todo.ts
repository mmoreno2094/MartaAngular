export class Todo {
    //hay que poner el export en la clase para poder utilizarla en el app.module

    /*public tarea: string;

    constructor(tarea) {
        this.tarea = tarea;
    }*/

    constructor(
        public tarea:string //este constructor y la parte comentada de arriba es lo mismo
    ){}
}