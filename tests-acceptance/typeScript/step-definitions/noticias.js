"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
let sameName = ((elem, name) => elem.element(protractor_1.by.name('nomelist')).getText().then(text => text === name));
let sameProfile = ((elem, name) => elem.element(protractor_1.by.name('profile')).getText().then(text => text === name));
let sameNoticia = ((elem, name) => elem.element(protractor_1.by.name('titulo')).getText().then(text => text === name));
/*
Scenario: criar noticia sem sucesso com titulo duplicado GUI
Given estou na a pagina de noticias
And consigo ver o titulo “primeiro titulo” na lista de noticias
When vou para a pagina de criacao de noticias
And preencho o campo "titulo_noticia" com valor "primeiro titulo"
And preencho o campo "descricao_noticia" com valor "primeira descricao"
And preencho o campo "texto_noticia" com valor "primeira noticia"
And tento criar a noticia
Then recebo uma mensagem “titulo ja existente”

Scenario: criar noticia sem sucesso com titulo vazio GUI
Given estou na pagina de noticias
When vou para a pagina de criacao de noticias
And preencho o campo "titulo_noticia" com valor ""
And preencho o campo "descricao_noticia" com valor "primeira descricao"
And preencho o campo "texto_noticia" com valor "primeira noticia"
And tento criar a noticia
Then recebo uma mensagem “titulo vazio”
*/
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^estou na pagina de noticias$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/noticias");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('RdGui');
    }));
    When(/^vou para a pagina de criar noticias$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.buttonText('Criar')).click();
    }));
    When(/^preencho o campo "([^\"]*)" com valor "([^\"]*)"$/, (field, value) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='" + field + "']").sendKeys(value);
    }));
    When(/^salvo a noticia$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.buttonText('Salvar')).click();
        yield protractor_1.browser.get("http://localhost:4200/noticias");
    }));
    Then(/^consigo ver o valor "([^\"]*)" na lista de noticias$/, (titulo) => __awaiter(this, void 0, void 0, function* () {
        var allnoticias = protractor_1.element.all(protractor_1.by.name('noticiaslist'));
        yield allnoticias;
        var samenoticia = allnoticias.filter(elem => sameNoticia(elem, titulo));
        yield samenoticia;
        yield samenoticia.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    }));
    Then(/^recebo uma mensagem "([^\"]*)"$/, (mensagem) => __awaiter(this, void 0, void 0, function* () {
        var allnoticias = protractor_1.element.all(protractor_1.by.name('tituloDuplicado'));
        yield allnoticias;
        yield allnoticias.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        ;
    }));
});
