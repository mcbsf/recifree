"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const noticia_1 = require("../../gui/rd-gui/src/app/components/noticia");
class CadastroDeNoticias {
    constructor() {
        this.noticias = [];
    }
    criar(noticia) {
        var result = null;
        if (this.tituloNaoCadastrado(noticia.titulo)) {
            result = new noticia_1.Noticia();
            result.copyFrom(noticia);
            this.noticias.push(result);
        }
        return result;
    }
    tituloNaoCadastrado(titulo) {
        return !this.noticias.find(a => a.titulo == titulo);
    }
    atualizar(noticia) {
        var result = this.noticias.find(a => a.titulo == noticia.titulo);
        if (result)
            result.copyFrom(noticia);
        return result;
    }
    getAlunos() {
        return this.noticias;
    }
}
exports.CadastroDeNoticias = CadastroDeNoticias;
//# sourceMappingURL=cadastrodenoticias.js.map