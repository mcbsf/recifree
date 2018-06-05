"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Noticia {
    constructor() {
        this.clean();
    }
    clean() {
        this.titulo = "";
        this.descricao = "";
        this.texto = "";
        this.data = null;
    }
    clone() {
        var noticia = new Noticia();
        noticia.copyFrom(this);
        return noticia;
    }
    copyFrom(from) {
        this.titulo = from.titulo;
        this.descricao = from.descricao;
        this.texto = from.texto;
    }
}
exports.Noticia = Noticia;
//# sourceMappingURL=noticia.js.map