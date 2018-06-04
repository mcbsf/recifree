export class Noticia {
  titulo: string;
  descricao: string;
  texto: string;
  data: Date
  

  constructor() {
    this.clean();
  }

  clean(): void {
    this.titulo = "";
    this.descricao = "";
    this.texto = "";
    this.data = null

  }

  clone(): Noticia {
    var noticia: Noticia = new Noticia();

    noticia.copyFrom(this);
    return noticia;
  }

  copyFrom(from: Noticia): void {
    this.titulo = from.titulo;
    this.descricao = from.descricao;
    this.texto = from.texto;

  }

  
}
