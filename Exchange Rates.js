
let pound = document.getElementById('pound');
let dollar = document.getElementById('dollar');
let Dirhams = document.getElementById('Dirhams');
let Dinar = document.getElementById('Dinar');
let Riyal = document.getElementById('Riyal');
let Euro = document.getElementById('Euro');
let BritainPound = document.getElementById('BritainPound');
let IndianRupees = document.getElementById('IndianRupees');
let taka = document.getElementById('taka');
let PhilippenePeso = document.getElementById('PhilippenePeso');


pound.onkeyup = function(){
    dollar.value = pound.value / 19.31;
    Dirhams.value = pound.value / 5.26;
    Dinar.value = pound.value / 62.43;
    Riyal.value = pound.value /5.15;
    Euro.value = pound.value / 19.56 ;
    BritainPound.value = pound.value / 22.40 ;
    IndianRupees.value = pound.value / 0.243;
    taka.value = pound.value /0.180;
    PhilippenePeso.value = pound.value / 0.33;
}

dollar.onkeyup = function(){
    pound.value = dollar.value / 0.0517;
    Dirhams.value = dollar.value / 0.272;
    Dinar.value = dollar.value / 3.232;
    Riyal.value = dollar.value / 0.267;
    Euro.value = dollar.value / 1.013;
    BritainPound.value = dollar.value / 1.160 ;
    IndianRupees.value = dollar.value / 0.0126;
    taka.value = dollar.value /0.00935;
    PhilippenePeso.value = dollar.value / 0.01750;
}

Dirhams.onkeyup = function(){
    dollar.value = Dirhams.value / 3.666;
    pound.value = Dirhams.value / 0.189;
    Dinar.value = Dirhams.value / 11.85;
    Riyal.value = Dirhams.value / 0.97;
    Euro.value = Dirhams.value / 3.71 ;
    BritainPound.value = Dirhams.value / 4.25 ;
    IndianRupees.value = Dirhams.value / 0.046;
    taka.value = Dirhams.value /0.034;
    PhilippenePeso.value = Dirhams.value / 0.064;
}
 
Dinar.onkeyup = function(){
    dollar.value = Dinar.value / 0.309;
    Dirhams.value = Dinar.value / 0.084;
    pound.value = Dinar.value / 0.0160;
    Riyal.value = Dinar.value /0.082;
    Euro.value = Dinar.value / 0.313;
    BritainPound.value = Dinar.value / 0.358 ;
    IndianRupees.value = Dinar.value / 0.0039;
    taka.value = Dinar.value /0.0028;
    PhilippenePeso.value = Dinar.value / 0.0054;
}
Riyal.onkeyup = function(){
    dollar.value = Riyal.value / 3.74;
    Dirhams.value = Riyal.value /1.02;
    Dinar.value = Riyal.value / 12.10;
    pound.value = Riyal.value /0.19;
    Euro.value = Riyal.value / 3.79 ;
    BritainPound.value = Riyal.value / 4.344 ;
    IndianRupees.value = Riyal.value / 0.047;
    taka.value = Riyal.value /0.035;
    PhilippenePeso.value = Riyal.value / 0.065;
}

Euro.onkeyup = function(){
    dollar.value = Euro.value / 0.98;
    Dirhams.value = Euro.value / 0.26;
    Dinar.value = Euro.value / 3.190;
    Riyal.value = Euro.value /0.269;
    pound.value = Euro.value / 0.051;
    BritainPound.value = Euro.value / 1.14 ;
    IndianRupees.value = Euro.value / 0.012;
    taka.value = Euro.value /0.0092;
    PhilippenePeso.value = Euro.value / 0.017;
}

BritainPound.onkeyup = function(){
    dollar.value = BritainPound.value / 0.86;
    Dirhams.value = BritainPound.value / 0.235;
    Dinar.value = BritainPound.value / 2.78;
    Riyal.value = BritainPound.value /0.230;
    Euro.value = BritainPound.value / 0.87 ;
    pound.value = BritainPound.value / 0.044 ;
    IndianRupees.value = BritainPound.value / 0.010;
    taka.value = BritainPound.value /0.0080;
    PhilippenePeso.value = BritainPound.value / 0.015;
}

IndianRupees.onkeyup = function(){
    dollar.value = IndianRupees.value / 79.2;
    Dirhams.value = IndianRupees.value / 21.60;
    Dinar.value = IndianRupees.value / 256.016;
    Riyal.value = IndianRupees.value /21.15;
    Euro.value = IndianRupees.value / 80.24 ;
    BritainPound.value = IndianRupees.value / 91.88 ;
    pound.value = IndianRupees.value / 4.100;
    taka.value = IndianRupees.value /0.74;
    PhilippenePeso.value = IndianRupees.value / 1.38;
}

taka.onkeyup = function(){
    dollar.value = taka.value / 106.94;
    Dirhams.value = taka.value / 29.16;
    Dinar.value = taka.value / 345.66;
    Riyal.value = taka.value /28.55;
    Euro.value = taka.value / 108.33 ;
    BritainPound.value = taka.value / 124.05 ;
    IndianRupees.value = taka.value / 1.350;
    pound.value = taka.value / 5.53;
    PhilippenePeso.value = taka.value / 1.87;
}

PhilippenePeso.onkeyup = function(){
    dollar.value = PhilippenePeso.value / 57.13;
    Dirhams.value = PhilippenePeso.value / 15.58;
    Dinar.value = PhilippenePeso.value /184.67 ;
    Riyal.value = PhilippenePeso.value / 15.25;
    Euro.value = PhilippenePeso.value / 57.88 ;
    BritainPound.value = PhilippenePeso.value / 66.27 ;
    IndianRupees.value = PhilippenePeso.value / 0.72;
    taka.value = PhilippenePeso.value /0.53;
    pound.value = PhilippenePeso.value / 2.95;
}





