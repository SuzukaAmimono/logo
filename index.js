var fs = require('fs');
var builder = require('xmlbuilder');

// create root svg element
var svg = builder.create('svg', {headless:true})
    .att('xmlns','http://www.w3.org/2000/svg')
    .att({'width':'600px','height':'150px'});

// create objects

// fonts
var ipaexmin = "IPAexMincho";
var honomin  = "Honoka Mincho";
var honogo   = "Honoka Maru Gothic";
var notol    = "NotoSansCJKjp-Light";
var notor    = "NotoSansCJKjp-Regular";
var notodl   = "NotoSansCJKjp-DemiLight";
var notot    = "NotoSansCJKjp-Thin";
var kokumin  = "Koku Mincho Regular"; // Koku-Mincho-Regular";

var font = kokumin; 

// text strings
var suzuka_amimono = "鈴鹿編物";
var since_en = "since 1989";


var text_suzuka_amimono = {
    text: {
        '@x':'300px',
        '@y':'70px',
        '@font-family': font,
        '@font-size':'90px',
//        '@font-weight':'bold',
        '@textLength':'400px',
        '@text-anchor':'middle',
        '@dominant-baseline':'middle',
        '@fill': 'rgb(0,0,0)',
        '#text':suzuka_amimono
    }};

var bg_suzuka_amimono = {
    rect: {
        '@x':'100px',
        '@y':'10px',
        '@height':'100px',
        '@width': '400px',
        '@style':'stroke:rgb(0,0,0); fill: white'
    }
};
    
var text_since = {
    text: {
        '@x':'300px',
        '@y':'137px',
        '@font-family': font,
        '@font-size':'30px',
        '@font-weight':'bold',
        '@text-anchor':'middle',
        '@fill': 'rgb(255,255,255)',
        '#text':since_en
    }};

var bg_since = {
    rect: {
        '@x':'100px',
        '@y':'110px',
        '@height':'30px',
        '@width': '400px',
        '@style':'stroke:rgb(0,0,0); fill: black'
    }
};

svg.ele(bg_suzuka_amimono);
svg.ele(text_suzuka_amimono);

svg.ele(bg_since);
svg.ele(text_since);

svg.end({pretty:true});

// output svg
fs.writeFile('out/logo.svg', svg, function(err){
    console.log(err);
});

