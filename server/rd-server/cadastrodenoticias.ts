import { Noticia } from '../../gui/rd-gui/src/app/components/noticia';

export class CadastroDeNoticias {
  noticias: Noticia[] = [];

  criar(noticia: Noticia): Noticia {
    var result = null;
    if (this.tituloNaoCadastrado(noticia.titulo)) {
      result = new Noticia();
      result.copyFrom(noticia);
      this.noticias.push(result);
    }
    return result;
  }

  tituloNaoCadastrado(titulo: string): boolean {
     return !this.noticias.find(a => a.titulo == titulo);
  }

  atualizar(noticia: Noticia): Noticia {
    var result: Noticia = this.noticias.find(a => a.titulo == noticia.titulo);
    if (result) result.copyFrom(noticia);
    return result;
  }

  getAlunos(): Noticia[] {
    return this.noticias;
  }
}

