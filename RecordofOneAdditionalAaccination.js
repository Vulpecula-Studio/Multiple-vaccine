/*
多一针

***************************
QuantumultX:

[rewrite_local]
^https\:\/\/szgd\.tgovcloud\.com\/preorder\/v[0-9]\.[0-9]\.[0-9]\/emergency\/report\/pneumonia\/getVaccineList\.do url script-response-body https://raw.githubusercontent.com/Vulpecula-Studio/Multiple-vaccine/main/RecordofOneAdditionalAaccination.js

[mitm]
hostname = szgd.tgovcloud.com
**************************/
var yCyvhguy1=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);var MDyIU2=JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](yCyvhguy1['\x64\x61\x74\x61']['\x72\x65\x63\x6f\x72\x64\x73'][0])var OINH3=JSON['\x70\x61\x72\x73\x65'](MDyIU2);OINH3['\x69\x6e\x6f\x63\x44\x61\x74\x65']="\x32\x30\x32\x32\x2d\x30\x33\x2d\x32\x37";OINH3['\x69\x6e\x6f\x63\x54\x69\x6d\x65']+=1;yCyvhguy1['\x64\x61\x74\x61']['\x72\x65\x63\x6f\x72\x64\x73']['\x75\x6e\x73\x68\x69\x66\x74'](OINH3)$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](yCyvhguy1)});
