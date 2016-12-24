'use strict';

var cheerio = require('cheerio');
var _ = require('lodash');

const ROW_KEYS_OFFER = [
    null,
    "company",
    "description",
    "city",
    "workday",
    "requirements",
    ["insertionDate", "expirationDate"],
    null,
    "projectDescription",
    "contact",
    "moreInfo"
];



function parseHTML(html) {
    var $ = cheerio.load(html);
    var ofertes = [];

    $('.ofertaFeina').each(function() {
        let oferta = {};
        var rows = $('table tr', this);
        rows.each(function(index, row) {
            switch (index) {
                case 0:
                    //Ignore
                    break;
                case 6:
                oferta[ROW_KEYS_OFFER[index][0]] = $($('td', this)[0]).text();
                oferta[ROW_KEYS_OFFER[index][1]] = $($('td', this)[1]).text();                    //Ignore
                    break;
                case 7:
                    //Ignore
                    break;
                case 8:
                    var correctIndex = index;
                    //TODO tener en cuenta el idioma del user
                    if(!$($('th', this)[0]).text().startsWith('Breve')){
                      ++correctIndex;
                    }
                    oferta[ROW_KEYS_OFFER[correctIndex]] = $('td', this).text();
                    break;
                default:
                    oferta[ROW_KEYS_OFFER[index]] = $('td', this).text();
            }
        });
        ofertes.push(oferta);
    });
    return {offers : ofertes};
}


module.exports = {
    parseHTML: parseHTML
}
