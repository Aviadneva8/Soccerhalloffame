function buttonDateTime(){
//����� �� ���� ����� ����, ��� ������
	   var greeting, d = new Date(), hour = d.getHours();
	   if(hour>5 & hour<12){
	      greeting='Good morning!';
	   }
	   else if (hour>=12 & hour < 19){
	      greeting='Good afternoon!';
	   }
	   else{
	      greeting='Good evening!';
	   }
	   document.getElementById('greeting').innerHTML = greeting;
	   document.getElementById('hmTime').innerHTML = d.toLocaleTimeString();/* ������ ������ ���*/
	   document.getElementById('fullDate').innerHTML = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
}
function hlBgChange(){
//���� �� ��� ���� ����� ����
	   var d = new Date(), bichange, hour = d.getHours();
	   if(hour>5 & hour<12){
		  bichange='#fff0b3';
	   }
	   else if (hour>=12 & hour < 19){
		  bichange='#cccc00';
	   }
	   else{
		  bichange='#000099';
	   }
	   document.getElementById('bichange').style.background = bichange;
}

function getrndInt() {
//������ ���� ������� ��� 10000 �3000
var min=3000, max=10000;
return Math.floor(Math.random() * (max - min)) + min; 
}
function changImg(){
//���� �� ������ �� ��� ����� �����
	var lampard='Images/Futcards/Lampardc.png';
    document.getElementById('lampard').src=lampard;
	}
function changeImgBack(){
//�� ��� ���� ����� �������, ������ ����� ��� ������
	var lampard='Images/Lampard.jpg';
	document.getElementById('lampard').src=lampard;
}
var imgtracker='imgb';
		function changeBa(){
		//���� ��� ������ �� �� ���
		var img = document.getElementById('ba');
	   if(imgtracker=='imgb'){
		  img.src='Images/Backgroundi/Bab.jpg';
	      imgtracker='imgbb';
       }
       else{
		  img.src='Images/Backgroundi/Ba.jpg';
		  imgtracker='imgb';
	   }
    }
var timerba = setInterval('changeBa();', getrndInt());
		function changeBb(){
				//���� ��� ������ �� �� ���
		var img = document.getElementById('bb');
	   if(imgtracker=='imgb'){
		  img.src='Images/Backgroundi/Bbb.jpg';
	      imgtracker='imgbb';
       }
       else{
		  img.src='Images/Backgroundi/Bb.jpg';
		  imgtracker='imgb';
	   }
    }
var timerbb = setInterval('changeBb();', getrndInt());
		function changeBc(){
				//���� ��� ������ �� �� ���
		var img = document.getElementById('bc');
	   if(imgtracker=='imgb'){
		  img.src='Images/Backgroundi/Bcb.png';
	      imgtracker='imgbb';
       }
       else{
		  img.src='Images/Backgroundi/Bc.jpg';
		  imgtracker='imgb';
	   }
    }
var timerbc = setInterval('changeBc();', getrndInt());
function changeBd(){
		//���� ��� ������ �� �� ���
		var img = document.getElementById('bd');
	   if(imgtracker=='imgb'){
		  img.src='Images/Backgroundi/Bdb.png';
	      imgtracker='imgbb';
       }
       else{
		  img.src='Images/Backgroundi/Bd.jpg';
		  imgtracker='imgb';
	   }
    }
var	timerbd = setInterval('changeBd();', getrndInt());
function changeBe(){
		//���� ��� ������ �� �� ���
		var img = document.getElementById('be');
	   if(imgtracker=='imgb'){
		  img.src='Images/Backgroundi/Beb.jpg';
	      imgtracker='imgbb';
       }
       else{
		  img.src='Images/Backgroundi/Be.jpg';
		  imgtracker='imgb';
	   }
    }
var	timerbe = setInterval('changeBe();', getrndInt());
function changeBf(){
		//���� ��� ������ �� �� ���
		var img = document.getElementById('bf');
	   if(imgtracker=='imgb'){
		  img.src='Images/Backgroundi/Bfb.jpg';
	      imgtracker='imgbb';
       }
       else{
		  img.src='Images/Backgroundi/Bf.jpg';
		  imgtracker='imgb';
	   }
    }
var	timerbe = setInterval('changeBf();', getrndInt());
function changeBg(){
		//���� ��� ������ �� �� ���
		var img = document.getElementById('bg');
	   if(imgtracker=='imgb'){
		  img.src='Images/Backgroundi/Bgb.jpg';
	      imgtracker='imgbb';
       }
       else{
		  img.src='Images/Backgroundi/Bg.jpg';
		  imgtracker='imgb';
	   }
    }
var	timerbe = setInterval('changeBg();', getrndInt());
function changeBh(){
		//���� ��� ������ �� �� ���
		var img = document.getElementById('bh');
	   if(imgtracker=='imgb'){
		  img.src='Images/Backgroundi/Bhb.jpg';
	      imgtracker='imgbb';
       }
       else{
		  img.src='Images/Backgroundi/Bh.jpg';
		  imgtracker='imgb';
	   }
    }
var	timerbe = setInterval('changeBh();', getrndInt());
        function setParamsFromGet() {
            //���� ����� ������� ��� ������-����� ������� ����� �����
            parms = new URLSearchParams(location.search);
            var gk = parms.get('gk');
			var rb = parms.get('rb');
			var rcb = parms.get('rcb');
			var lcb = parms.get('lcb');
			var lb = parms.get('lb');
			var rcm = parms.get('rcm');
			var ccm = parms.get('ccm');
			var lcm = parms.get('lcm');
			var rw = parms.get('rw');
			var lw = parms.get('lw');
			var s = parms.get('s');
            document.getElementById('gk').innerHTML = gk;
			document.getElementById('rb').innerHTML = rb;
			document.getElementById('rcb').innerHTML = rcb;
			document.getElementById('lcb').innerHTML = lcb;
			document.getElementById('lb').innerHTML = lb;
			document.getElementById('rcm').innerHTML = rcm;
			document.getElementById('ccm').innerHTML = ccm;
			document.getElementById('lcm').innerHTML = lcm;
			document.getElementById('rw').innerHTML = rw;
			document.getElementById('lw').innerHTML = lw;
			document.getElementById('s').innerHTML = s;
        }
    function textShadowh(id,b) {
	//���� �� ������ �� �������
	var element=document.getElementById(id);
        if(b && element.classList.contains('tsh') == false){
		     element.classList.add('tsh');
		}   
        else{
            element.classList.remove('tsh');
		}
    }