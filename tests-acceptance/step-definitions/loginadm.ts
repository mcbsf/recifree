import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));

let sameMeta = ((elem, meta) => elem.element(by.name('metalist')).getText().then(text => text === meta));
let sameDiscrepancia = ((elem, meta) => elem.element(by.name('discrepancias')).getText().then(text => text === meta));


defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Estou na pagina inicial$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Recifree');
    })

    When(/^vou para a pagina de login"$/, async () => {
        await element(by.buttonText('Login')).click();
        await expect(browser.getTitle()).to.eventually.equal('Login');
    });

    When(/^And preencho o login com valor "([^\"]*)"$/, async (login) => {
        await $("input[name='loginbox']").sendKeys(<string> login);
    });

    Then(/^I can see "([^\"]*)" with CPF "(\d*)" in the students list$/, async (name, cpf) => {
        var allalunos : ElementArrayFinder = element.all(by.name('alunolist'));
        await allalunos;
        var samenamecpf = allalunos.filter(elem => sameCPF(elem,cpf) && sameName(elem,name));
        await samenamecpf;
        await samenamecpf.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
});
})