import { Noticia } from '../../gui/rd-gui/src/app/components/noticia';

export class CadastroDeNoticias {
  noticias: Noticia[] = [];

  criar(noticia: Noticia): Noticia {
    var result = null;
    if (this.cpfNaoCadastrado(noticia.cpf)) {
      result = new Noticia();
      result.copyFrom(noticia);
      this.noticias.push(result);
    }
    return result;
  }

  cpfNaoCadastrado(cpf: string): boolean {
     return !this.noticias.find(a => a.cpf == cpf);
  }

  atualizar(noticia: Noticia): Noticia {
    var result: Noticia = this.noticias.find(a => a.cpf == noticia.cpf);
    if (result) result.copyFrom(noticia);
    return result;
  }

  getAlunos(): Noticia[] {
    return this.alunos;
  }
}
