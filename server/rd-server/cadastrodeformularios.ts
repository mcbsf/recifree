import { Formulario } from '../../gui/rd-gui/src/app/components/formulario';

export class CadastroDeFormularios {
  formularios: Formulario[] = [];

  cadastrar(novoform: Formulario): Formulario {
    var aux = null;
    if (this.emailNaoCadastrado(novoform.email)) {
      aux = new Formulario();
      aux.copy(novoform);
      this.formularios.push(aux);
    }
    return aux;
  }

  //retorna se o email passado já está cadastrado ou nao
  emailNaoCadastrado(email: string): boolean {
	  return !this.formularios.find(f => f.email == email);
  }
  
  atualizar(formulario: Formulario): Formulario {
    var aux: Formulario = this.formularios.find(f => f.email == formulario.email);
    if (aux) { aux.copy(formulario); }
    return aux;
  }

  remover(formulario: Formulario): Formulario[] {
    //retorna um novo array sem o elemento passado como parametro
    this.formularios = this.formularios.filter(f => f.email !== formulario.email);
    /* //outra forma:
    var index: number = this.formularios.findIndex(f => f.email == formulario.email);
    if (index > -1) {
      this.formularios.splice(index,1);
    } */
    return this.getFormularios();
  }
  
  getFormularios(): Formulario[] {
    return this.formularios;
  }
}

/*

search(email: string): Formulario {
    return this.formularios.find(f => f.email == email)
  }


*/