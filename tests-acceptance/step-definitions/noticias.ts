import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));
let sameProfile = ((elem, name) => elem.element(by.name('profile')).getText().then(text => text === name));
let sameNoticia = ((elem, name) => elem.element(by.name('titulo')).getText().then(text => text === name));

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


defineSupportCode(function ({ Given, When, Then }) {

    Given(/^estou na pagina de noticias$/, async () => {
        await browser.get("http://localhost:4200/noticias");
        await expect(browser.getTitle()).to.eventually.equal('RdGui');
    });

    When(/^vou para a pagina de criar noticias$/, async () => {
        await element(by.buttonText('Criar')).click();
    });

    When(/^preencho o campo "([^\"]*)" com valor "([^\"]*)"$/, async (field, value) => {
        await $("input[name='"+field+"']").sendKeys(<string> value);
    });

    When(/^salvo a noticia$/, async () => {
        await element(by.buttonText('Salvar')).click();
        await browser.get("http://localhost:4200/noticias");
    });

    Then(/^consigo ver o valor "([^\"]*)" na lista de noticias$/, async (titulo) => {
        var allnoticias : ElementArrayFinder = element.all(by.name('noticiaslist'));
        await allnoticias;
        var samenoticia = allnoticias.filter(elem => sameNoticia(elem, titulo));
        await samenoticia;
        await samenoticia.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));

    });
})
