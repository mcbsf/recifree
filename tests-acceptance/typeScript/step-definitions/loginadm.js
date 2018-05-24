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
let sameCPF = ((elem, cpf) => elem.element(protractor_1.by.name('cpflist')).getText().then(text => text === cpf));
let sameName = ((elem, name) => elem.element(protractor_1.by.name('nomelist')).getText().then(text => text === name));
let sameMeta = ((elem, meta) => elem.element(protractor_1.by.name('metalist')).getText().then(text => text === meta));
let sameDiscrepancia = ((elem, meta) => elem.element(protractor_1.by.name('discrepancias')).getText().then(text => text === meta));
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Estou na pagina inicial$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('Recifree');
    }));
    When(/^vou para a pagina de login"$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.buttonText('Login')).click();
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('Login');
    }));
    When(/^And preencho o login com valor "([^\"]*)"$/, (login) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='loginbox']").sendKeys(login);
    }));
    Then(/^I can see "([^\"]*)" with CPF "(\d*)" in the students list$/, (name, cpf) => __awaiter(this, void 0, void 0, function* () {
        var allalunos = protractor_1.element.all(protractor_1.by.name('alunolist'));
        yield allalunos;
        var samenamecpf = allalunos.filter(elem => sameCPF(elem, cpf) && sameName(elem, name));
        yield samenamecpf;
        yield samenamecpf.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    }));
});
