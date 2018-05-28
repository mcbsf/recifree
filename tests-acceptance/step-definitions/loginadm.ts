import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));
let sameProfile = ((elem, name) => elem.element(by.name('profile')).getText().then(text => text === name));
let sameNoticia = ((elem, name) => elem.element(by.name('noticialist')).getText().then(text => text === name));

let sameMeta = ((elem, meta) => elem.element(by.name('metalist')).getText().then(text => text === meta));
let sameDiscrepancia = ((elem, meta) => elem.element(by.name('discrepancias')).getText().then(text => text === meta));


defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Estou na pagina inicial$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Recifree');
    })

    Given(/^tem o nome "([^\"]*)" na tela$/, async (adm) => {
        var allalunos : ElementArrayFinder = element.all(by.name('profile'));
        await allalunos;
        var sameProfile = allalunos.filter(elem =>sameName(elem,adm));

    })

    When(/^vou para a pagina de noticias"$/, async () => {
        await element(by.buttonText('Noticias')).click();
        await expect(browser.getTitle()).to.eventually.equal('Noticias');
    });

    When(/^And preencho o campo "([^\"]*)" com valor "([^\"]*)"$/, async (field, value) => {
        await $("input[name='"+field+"']").sendKeys(<string> value);
    });

    When(/^salvo a noticia$/, async () => {
        await element(by.buttonText('Salvar')).click();
    });

    Then(/^consigo ver o valor "([^\"]*)" na lista de noticias $/, async (titulo) => {
        var allalunos : ElementArrayFinder = element.all(by.name('noticiaslist'));
        await allalunos;
        var samenoticia = allalunos.filter(elem => sameNoticia(elem, titulo));
        await samenoticia;
        await samenoticia.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
});
})

Scenario: fazer noticia com sucesso GUI
Given Estou na pagina inicial
And tem o nome "Administrador" na tela
When vou para a pagina de noticias
And vou para a pagina de criar noticias
And preencho o campo "titulo_noticia" com valor "primeiro titulo"
And preencho o campo "descricao_noticia" com valor "primeira descricao"
And preencho o campo "texto_noticia" com valor "primeira noticia"
And salvo a noticia
Then consigo ver a noticia na lista de noticias "noticias_list"

Scenario: fazer noticia sem estar logado como administrador GUI
Given Estou na pagina inicial
And nao tem o nome "Administrador" na tela
When vou para a pagina de noticias
And vou para a pagina de criar noticias
Then consigo ver uma mensagem de erro
And vou para a pagina de login