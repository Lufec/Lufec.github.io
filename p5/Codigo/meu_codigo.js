var Px = 45;
var Py = 45;
var tamBloco=30;
var numGhost=1
var Ghostx=[];
var Ghosty=[];
var gdx=[];
var gdy=[];
var distpg=[];
var pontox=[];
var pontoy=[];
var veloc = 15
var vida=3
var pontos=0
var recorde=0;
var direcao, posDx, posDy, posC, posL, posColuna, posLinha;
var bonusx=[]
var bonusy=[]
var distpb=[]
var bonus=5
var multiplicador=1
var numbonus=5
var t=0
var fps=60
var contagem=0
var cenario=[]
var mudancanivel=1
var tela=1
var ligarfantasma=0
var ligarbonus=0
var velocg=5
var textobonus='Nenhum'
var imgcomeco
var imgplay
var imgoptions
var nomejogo
var play
var options

function preload(){


	cenario1=[
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['D','P','P','D','D','D','D','D','P','P','P','D','D','P','P','P','P','P','D','D'],
	['D','B','B','D','D','D','D','D','B','B','B','D','D','B','B','B','B','B','D','D'],
	['D','B','B','D','D','D','D','B','B','B','B','B','P','B','B','B','B','B','B','D'],
	['D','B','B','D','D','D','D','B','B','V','B','B','P','B','B','V','V','B','B','D'],
	['D','B','B','D','D','D','D','B','B','V','B','B','P','B','B','B','B','B','B','D'],
	['D','B','B','D','D','D','D','B','B','V','B','B','P','B','B','B','B','B','D','D'],
	['D','B','B','D','D','D','D','B','B','V','B','B','P','B','B','D','D','D','D','D'],
	['D','B','B','D','D','D','D','B','B','V','B','B','P','B','B','D','D','D','D','D'],
	['D','B','B','D','D','D','D','B','B','V','B','B','P','B','B','D','D','D','D','D'],
	['D','B','B','B','B','B','P','B','B','B','B','B','P','B','B','D','D','D','D','D'],
	['D','B','B','B','B','B','D','D','B','B','B','D','D','B','B','D','D','D','D','D'],
	['D','P','P','P','P','P','D','D','P','P','P','D','D','P','P','D','D','D','D','D'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','L']
	
	
	]
	//130
	
	cenario2=[
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['B','D','P','D','P','P','P','P','P','P','P','P','P','P','P','P','P','D','P','D','B'],
	['B','P','B','P','B','B','B','B','B','B','B','B','B','B','B','B','B','P','B','P','B'],
	['B','D','P','D','P','P','P','D','P','P','P','P','P','D','P','P','P','D','P','D','B'],
	['B','P','B','P','B','B','B','P','B','B','B','B','B','P','B','B','B','P','B','P','B'],
	['B','P','B','P','B','D','P','D','P','D','B','D','P','D','P','D','B','P','B','P','B'],
	['B','P','B','P','B','P','B','B','B','P','B','P','B','B','B','P','B','P','B','P','B'],
	['B','P','B','D','P','D','B','D','P','D','D','D','P','D','B','D','P','D','B','P','B'],
	['B','P','B','P','B','P','B','P','B','B','P','B','B','P','B','P','B','P','B','P','B'],
	['B','P','B','P','B','D','P','D','B','D','D','D','B','D','P','D','B','P','B','P','B'],
	['B','P','B','P','B','B','B','D','P','D','D','D','P','D','B','B','B','P','B','P','B'],
	['B','P','B','P','B','D','P','D','B','D','D','D','B','D','P','D','B','P','B','P','B'],
	['B','P','B','P','B','P','B','P','B','B','P','B','B','P','B','P','B','P','B','P','B'],
	['B','P','B','D','P','D','B','D','P','D','D','D','P','D','B','D','P','D','B','P','B'],
	['B','P','B','P','B','P','B','B','B','P','B','P','B','B','B','P','B','P','B','P','B'],
	['B','P','B','P','B','D','P','D','P','D','B','D','P','D','P','D','B','P','B','P','B'],
	['B','P','B','P','B','B','B','P','B','B','B','B','B','P','B','B','B','P','B','P','B'],
	['B','D','P','D','P','P','P','D','P','P','P','P','P','D','P','P','P','D','P','D','B'],
	['B','P','B','P','B','B','B','B','B','B','B','B','B','B','B','B','B','P','B','P','B'],
	['B','D','P','D','P','P','P','P','P','P','P','P','P','P','P','P','P','D','P','D','B'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','L'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V']
	]	
	//225 P's e D's
	
	cenario3=[
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B','P','B'],
	['P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P','D','P'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	['V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V'],
	
	]
	
	//331
	
	cenario4=[
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','L'],
	['B','D','P','P','P','P','D','P','P','P','P','P','D','B','B','D','P','P','P','P','P','D','P','P','P','P','D','B','L'],
	['B','P','B','B','B','B','P','B','B','B','B','B','P','B','B','P','B','B','B','B','B','P','B','B','B','B','P','B','L'],
	['B','P','B','B','B','B','P','B','B','B','B','B','P','B','B','P','B','B','B','B','B','P','B','B','B','B','P','B','L'],
	['B','P','B','B','B','B','P','B','B','B','B','B','P','B','B','P','B','B','B','B','B','P','B','B','B','B','P','B','L'],
	['B','D','P','P','P','P','D','P','P','D','P','P','D','P','P','D','P','P','D','P','P','D','P','P','P','P','D','B','L'],
	['B','P','B','B','B','B','P','B','B','P','B','B','B','B','B','B','B','B','P','B','B','P','B','B','B','B','P','B','L'],
	['B','P','B','B','B','B','P','B','B','P','B','B','B','B','B','B','B','B','P','B','B','P','B','B','B','B','P','B','L'],
	['B','D','P','P','P','P','D','B','B','D','P','P','D','B','B','D','P','P','D','B','B','D','P','P','P','P','D','B','L'],
	['B','B','B','B','B','B','P','B','B','B','B','B','P','B','B','P','B','B','B','B','B','P','B','B','B','B','B','B','L'],
	['B','B','B','B','B','B','P','B','B','B','B','B','P','B','B','P','B','B','B','B','B','P','B','B','B','B','B','B','L'],
	['B','B','B','B','B','B','P','B','B','D','P','P','D','P','P','D','P','P','D','B','B','P','B','B','B','B','B','B','L'],
	['B','B','B','B','B','B','P','B','B','P','B','B','P','B','B','P','B','B','P','B','B','P','B','B','B','B','B','B','L'],
	['B','B','B','B','B','B','P','B','B','P','B','B','P','B','B','P','B','B','P','B','B','P','B','B','B','B','B','B','L'],
	['P','P','P','P','P','P','D','P','P','D','B','B','P','B','B','P','B','B','D','P','P','D','P','P','P','P','P','P','L'],
	['B','B','B','B','B','B','P','B','B','P','B','B','P','B','B','P','B','B','P','B','B','P','B','B','B','B','B','B','L'],
	['B','B','B','B','B','B','P','B','B','P','B','B','P','B','B','P','B','B','P','B','B','P','B','B','B','B','B','B','L'],
	['B','B','B','B','B','B','P','B','B','D','P','P','D','P','P','D','P','P','D','B','B','P','B','B','B','B','B','B','L'],
	['B','B','B','B','B','B','P','B','B','P','B','B','B','B','B','B','B','B','P','B','B','P','B','B','B','B','B','B','L'],
	['B','B','B','B','B','B','P','B','B','P','B','B','B','B','B','B','B','B','P','B','B','P','B','B','B','B','B','B','L'],
	['B','D','P','P','P','P','D','P','P','D','P','P','D','B','B','D','P','P','D','P','P','D','P','P','P','P','D','B','L'],	
	['B','P','B','B','B','B','P','B','B','B','B','B','P','B','B','P','B','B','B','B','B','P','B','B','B','B','P','B','L'],
	['B','P','B','B','B','B','P','B','B','B','B','B','P','B','B','P','B','B','B','B','B','P','B','B','B','B','P','B','L'],
	['B','D','P','D','B','B','D','P','P','D','P','P','D','P','P','D','P','P','D','P','P','D','B','B','D','P','D','B','L'],
	['B','B','B','P','B','B','P','B','B','P','B','B','B','B','B','B','B','B','P','B','B','P','B','B','P','B','B','B','L'],
	['B','B','B','P','B','B','P','B','B','P','B','B','B','B','B','B','B','B','P','B','B','P','B','B','P','B','B','B','L'],
	['B','D','P','D','P','P','D','B','B','D','P','P','D','B','B','D','P','P','D','B','B','D','P','P','D','P','D','B','L'],
	['B','P','B','B','B','B','B','B','B','B','B','B','P','B','B','P','B','B','B','B','B','B','B','B','B','B','P','B','L'],
	['B','P','B','B','B','B','B','B','B','B','B','B','P','B','B','P','B','B','B','B','B','B','B','B','B','B','P','B','L'],
	['B','D','P','P','P','P','P','P','P','P','P','P','D','P','P','D','P','P','P','P','P','D','P','P','P','P','D','B','L'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','L'],
		
	]
	//310
	cenario5=[
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D','D'],
	['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B']
	]
	//812
}
	
	
function colisao(px, py) {
  posColuna = Math.floor( px / tamBloco ); 
  posLinha = Math.floor( py / tamBloco );
  if ( cenario[posLinha][posColuna] == 'B' ) {
     return true;     
     
  }
  else {
     return false;  
  }
}
function mudardirecao (gx,gy){
	posColuna = Math.floor(gx/tamBloco);
	posLinha = Math.floor(gy/ tamBloco);
	if( cenario[posLinha][posColuna]== 'D'||cenario[posLinha][posColuna]=='E'){
		return true;
	}
	else{
		return false
	
	}
}
function colisaoponto (px,py){
	posColuna = Math.floor(px/tamBloco);
	posLinha = Math.floor(py/ tamBloco);
	if( cenario[posLinha][posColuna]== 'P'|| cenario[posLinha][posColuna]== 'D'){
		return true;
	}
	else{
		return false
	
	}
}
function pacMan(posPacX, posPacY) {
  stroke(250,250,5); 
  strokeWeight(3); 
  fill(230,230,0);
  arc(posPacX+2, posPacY+2, tamBloco -6, tamBloco-6, PI/6,TWO_PI - PI/6, PIE);
  strokeWeight(1); 
  fill(0,0,0);
  ellipse(posPacX,posPacY-(tamBloco)/5,tamBloco/6, tamBloco/6);    
}

function setup() {
  createCanvas(960,930);

    imgcomeco= loadImage("imagens/pacman.jpg")
	imgoptions=loadImage("imagens/options.jpg")
	imgplay=loadImage ("imagens/play.jpg")

	

}

function draw() {
 frameRate(fps)
 if(tela==1){
background(0);
image(imgcomeco,20,20,2*width,300)
image(imgplay,330,400)
image(imgoptions, 330,500)
fill(0, 0, 0);
  mouseClicked = function() {
    if (mouseX >= 330 && mouseX <= 540 &&
        mouseY >= 400 && mouseY <= 470) {
        tela=2;    
    }
    else if(mouseX>=330&& mouseX<=540 &&
			mouseY>=500 && mouseY<=570){
				tela=9
			}
}
 }

if(tela==2){
background(0);
if(ligarbonus==0){
	for(i=0;i<numbonus;i++){
	bonusx[i]=1000
	bonusy[i]=1000
}
ligarbonus++
}
 if(contagem<130&&mudancanivel==1){
 for(i=0;i<cenario1.length;i++){
	 cenario[i]=[]
  for(j=0;j<cenario1[0].length;j++){
	cenario[i][j]=cenario1[i][j]   
}
}
	numGhost=1
	 for(i=0;i<numGhost;i++){
	  Ghostx[i]=555
	  Ghosty[i]=315
	  gdx[i]=0
	  gdy[i]=-velocg
	    }

mudancanivel++
}
if(contagem>=130&&contagem<355&&mudancanivel==2){
 for(i=0;i<cenario2.length;i++){
	 cenario[i]=[]
  for(j=0;j<cenario2[0].length;j++){
	cenario[i][j]=cenario2[i][j]   
}
}
numGhost=4
for(i=0;i<numGhost;i++){
	Ghostx[i]=405
	Ghosty[i]=570
	gdx[i]=0
	gdy[i]=-velocg
}
for(i=0;i<numbonus;i++){
	bonusx[i]=1000
	bonusy[i]=1000
}
Px=45
Py=45
mudancanivel++
}
if(contagem>=355&&contagem<686&&mudancanivel==3){
for(i=0;i<cenario3.length;i++){
	cenario[i]=[]
  for(j=0;j<cenario3[0].length;j++){
	cenario[i][j]=cenario3[i][j]   
}
}
numGhost=6
for(i=0;i<numGhost;i++){
	Ghostx[i]=405
	Ghosty[i]=570
	gdx[i]=0
	gdy[i]=-velocg
}
numbonus=5
for(i=0;i<numbonus;i++){
	bonusx[i]=1000
	bonusy[i]=1000
}
Px=45
Py=45
mudancanivel++
}
if(contagem>=686&&contagem<996&&mudancanivel==4){
for(i=0;i<cenario4.length;i++){
	cenario[i]=[]
  for(j=0;j<cenario4[0].length;j++){
	cenario[i][j]=cenario4[i][j]   
}
}
numGhost=5
for(i=0;i<numGhost;i++){
	Ghostx[i]=375
	Ghosty[i]=435
	gdx[i]=0
	gdy[i]=-velocg
}
numbonus=6
for(i=0;i<numbonus;i++){
	bonusx[i]=1000
	bonusy[i]=1000
}
Px=45
Py=45
mudancanivel++
}
if(contagem>=996&&contagem<1808&&mudancanivel==5){
for(i=0;i<cenario5.length;i++){
	cenario[i]=[]
  for(j=0;j<cenario5[0].length;j++){
	cenario[i][j]=cenario5[i][j]   
}
}
numGhost=8
for(i=0;i<numGhost;i++){
	Ghostx[i]=405
	Ghosty[i]=570
	gdx[i]=0
	gdy[i]=-velocg
}
numbonus=10
for(i=0;i<numbonus;i++){
	bonusx[i]=1000
	bonusy[i]=1000
}
Px=45
Py=45
mudancanivel++
}


  //blocos
for ( i = 0; i < cenario.length; i++ ) { 
     for ( j = 0; j < cenario[0].length; j++ ) {  
      if ( cenario[i][j] == 'B' ) {
        fill(0,0,255);
        rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
      }
    }
  }
  //pontos
  for ( i = 0; i < cenario.length; i++ ) { 
    for ( j = 0; j < cenario[0].length; j++ ) {  
      if ( cenario[i][j] == 'D'||cenario[i][j] == 'P') {
		pontox[j]=j*tamBloco+tamBloco/2
		pontoy[i]=i*tamBloco+tamBloco/2
        fill(255,255,255);
        ellipse(pontox[j],pontoy[i],10,10); 
      }
    }
  }
  //Bônus (desenho)
  
for(i=0;i<numbonus;i++){
	if(bonusx[i]==1000 && bonusy[i]==1000){
		bonusx[i]=Math.floor((Math.random() * 28) + 1)
		bonusy[i]=Math.floor((Math.random()*28)+1)
		bonusx[i]=bonusx[i]*tamBloco+tamBloco/2
		bonusy[i]=bonusy[i]*tamBloco+tamBloco/2
		while(colisao(bonusx[i],bonusy[i])){
			bonusx[i]=Math.floor((Math.random() *28) + 1)
			bonusy[i]=Math.floor((Math.random()*28)+1)
			bonusx[i]=bonusx[i]*tamBloco+tamBloco/2
			bonusy[i]=bonusy[i]*tamBloco+tamBloco/2
	}
}
if(colisaoponto(bonusx[i],bonusy[i])){
	fill(255,0,0)
	ellipse(bonusx[i],bonusy[i],tamBloco/2,tamBloco/2)
}
else{ //jogar pra fora do desenho da matriz 
	bonusx[i]=855
	bonusy[i]=15
}
}

  //movimentação
 if (keyIsDown(65)){
	if ( ! colisao( Px - veloc - tamBloco/2, Py ) ) { 
   Px-=veloc
  
 }  
}
  if (keyIsDown(68)){
    if ( ! colisao( Px + veloc + tamBloco/2, Py ) ) {
   Px+=veloc
}
}
  if (keyIsDown(87)){
	  if ( ! colisao( Px,Py - veloc - tamBloco/2) ) {
   Py-=veloc
}
}
  if (keyIsDown(83)){
	  if ( ! colisao( Px, Py + veloc + tamBloco/2) ) {
   Py+=veloc;
 }
}
//atravessar parede
if(Px>(cenario[0].length -1)*30){
	Px=0
}
if(Px<0){
	Px=(cenario[0].length -1)*30
}
if(Py>cenario.length*30){
	Py=0
}
if(Py<0){
	Py=cenario.length*30
}

pacMan(Px,Py)

//Pontuação
if(colisaoponto(Px,Py)){
	posColuna = Math.floor(Px/tamBloco);
	posLinha = Math.floor(Py/ tamBloco);
	if( cenario[posLinha][posColuna]== 'P'){
		cenario[posLinha][posColuna]='V'
	}
	else if(cenario[posLinha][posColuna]== 'D'){
		cenario[posLinha][posColuna]='E'
	}
	pontos+=multiplicador
	contagem++
}
    
//Bonus (colisao)
	for(i=0;i<numbonus;i++){
	distpb[i]=dist(Px,Py,bonusx[i],bonusy[i])	
		if(distpb[i]<=15){
			bonus=Math.floor((Math.random()*4)+1)
			if(bonus==1){ //vida extra
				vida++
				if(t<2*fps){
					textobonus='Vida Extra'
					t++
				}
				else{
				bonus=0	
				t=0
				}
				
			}
			if(bonus==4){ //+50 pontos
				pontos+=50
				if(t<2*fps){
					textobonus='+50 pontos'
					t++
				}
				else{
				bonus=0
				t=0
				}
			}
			
		}
		distpb[i]=1000
	}
//*2 pontos
if(bonus==2){
	if(t<(5*fps)){
		multiplicador=2
		t++
		textobonus='Pontos Dobrados'
	}
	else{
		t=0
		bonus=0
		multiplicador=1
	}
	
}
//+ velocidade
if(bonus==3){
	if(t<(8*fps)){
		veloc=8
		t++
		textobonus='Velocidade Extra'
	}
	else{
		t=0
		bonus=0
		veloc=5
	}
	
}
if(bonus==0){
	textobonus="Nenhum"
}
if(bonus!=3&&veloc==8){ //debbug ( coletar bonus 3 e outro bonus enquanto o 3 não expirar)
	veloc=5
	t=0
}

 //Fantasmas

 for(i=0;i<numGhost;i++){
	 
 Ghostx[i]+=gdx[i]

	
Ghosty[i]+=gdy[i]


 if(Ghostx[i]>(cenario[1].length -1)*30){
	Ghostx[i]=0
}
if(Ghostx[i]<0){
	Ghostx[i]=(cenario[1].length -1)*30
}
if(Ghosty[i]>=cenario.length*30){
	Ghosty[i]=0
}
if(Ghosty[i]<=0){
	Ghosty[i]=cenario.length*30
} 
}
//movimentação fantasmas
		//estar no bloco direção (D)
  for(i=0;i<numGhost;i++){
	  if(mudardirecao(Ghostx[i],Ghosty[i])){
		  posC = Math.floor(Ghostx[i]/tamBloco);
		  posL = Math.floor(Ghosty[i]/ tamBloco);
		  posDx=(posC*tamBloco)+tamBloco/2
	      posDy=(posL*tamBloco)+tamBloco/2
	          //Estar no meio do Bloco D
		  if(Ghostx[i]==posDx && Ghosty[i]==posDy){
		//escolha da direção
			direcao=Math.floor((Math.random() * 4) + 1);
			
			if(direcao==1){
				if(colisao(Ghostx[i] + velocg + tamBloco/2,Ghosty[i]) ){
					while(direcao==1){
					gdx[i]=0
					gdy[i]=0
					direcao=Math.floor((Math.random() * 4) + 1);		
				}
				}
				else{
					gdx[i]=velocg
					gdy[i]=0
					}		
			}
			if(direcao==2){
				if(colisao(Ghostx[i],Ghosty[i] + velocg + tamBloco/2)){
					while(direcao==2){
					gdx[i]=0
					gdy[i]=0
					direcao=Math.floor((Math.random() * 4) + 1);
					}
					}
				
				else{			
					gdx[i]=0
					gdy[i]=velocg	
			}
		
		}
			if(direcao==3){
				if( colisao(Ghostx[i] - velocg - tamBloco/2,Ghosty[i]) ){
				 	 while(direcao==3){
						gdx[i]=0
						gdy[i]=0
						direcao=Math.floor((Math.random() * 4) + 1);
					}
				}
				else{
				  gdx[i]=-velocg
				    gdy[i]=0
				}
				
	}
			if(direcao==4){
				if(  colisao(Ghostx[i],Ghosty[i] - velocg - tamBloco/2)){
					while(direcao==4){
						gdx[i]=0
						gdy[i]=0
						direcao=Math.floor((Math.random() * 4) + 1);
					}
				
				}
				else{
					gdx[i]=0
					gdy[i]=-velocg
					}	
				}
}
direcao=0
}
}
//desenhar fantasmas e detectar colisao
for(i=0;i<numGhost;i++){
 distpg[i]=dist(Px,Py,Ghostx[i]+10,Ghosty[i]+10)
 fill(256,0,256)
 ellipse(Ghostx[i],Ghosty[i],28,28)
}
 //Recorde
 if(pontos>recorde){
	 recorde=pontos
 }
 //Perder vida, textos
 for(i=0;i<numGhost;i++){
 if(distpg[i]<45){
	 Px=45
	 Py=45
	 vida--
 }
}
 textSize(20);
 fill(255);
 text("Vida: " + vida+ "         Pontos: " + pontos 	  +"     Recorde: "+ recorde + "          Bonus   "+ textobonus, 20,20)
 
 //reinício
 if(vida<=0){
	vida=3
	pontos=0
	for ( i = 0; i < cenario.length; i++ ) { 
    for ( j = 0; j < cenario[0].length; j++ ) {  
      if ( cenario[i][j] == 'V') {
		cenario[i][j]='P'
	}
	  else if(cenario[i][j]=='E'){
		  cenario[i][j]='D'
	  }
	}
	
}
for(i=0;i<numGhost;i++){
			  Ghostx[i]=375
	  Ghosty[i]=375
	  gdx[i]=0
	  gdy[i]=-velocg
	}
	for(i=1;i<numGhost;i++){
		distpg[i]=90
	}
	for(i=0;i<numbonus;i++){
		bonusx[i]=1000
		bonusy[i]=1000
	}
	contagem=0
	mudancanivel=1
	tela=3
}
}
if(tela==3){
	 background(0);
    textSize(32); 
    fill(135,206,235);
    text("Tela 3 - FIM", 50, 160);
    fill (0,0,255)
    rect(330,400,210,70,5)
    rect(330,500,210,70,5)
    if (keyIsDown(8) ) {
       tela = 1;
       tempo = 0; 
    } 
    mouseClicked = function() {
    if (mouseX >= 330 && mouseX <= 540 &&
        mouseY >= 400 && mouseY <= 470) {
        tela=1;
        tempo=0;
     
 }
}
}
if (tela==8){
	
}
if(tela==9){
	background(0);
fill(0, 234, 255);
rect(330, 400, 210, 70, 5);
rect(330,500,210,70,5);
rect(330,600,210,70,5);
rect(330,700,210,70,5);
rect(330,800,210,70,5);
fill(0, 0, 0);
textSize(20);
text("Começar no Nível", 360, 435);
text("Velocidade",360,535);
text("Frames Por Segundo",360,635);
text("Número de Bonus",360,735);
text("Sair",360,835)
text(mudancanivel, 380, 450)
text(veloc, 360, 550)
text(fps,360,650)
text(bonus, 360, 750)
  mouseClicked = function() {
    if (mouseX >= 330 && mouseX <= 540 &&
        mouseY >= 400 && mouseY <= 470) {
        mudancanivel++
        if(mudancanivel>=6){
			mudancanivel=1
			};    
		if(mudancanivel==2){
			contagem=130
		}
		else if(mudancanivel==3){
			contagem=355
		}
		else if(mudancanivel==4){
			contagem=686
		}
		else if(mudancanivel==5){
			contagem=996
		}
    }
    if(mouseX>=330&& mouseX<=540 &&
	   mouseY>=500 && mouseY<=570){
			veloc++
			if(veloc>=15){
				veloc=1
			}
			}
	if(mouseX>=330&& mouseX<=540 &&
	   mouseY>=600 && mouseY<=670){
		   fps+=15
		   
		   if(fps>60){
			   fps=15
		   }
	   }
	 if(mouseX>=330&& mouseX<=540 &&
	   mouseY>=700 && mouseY<=770){
		   bonus++
		   
		   if(bonus>15){
			   bonus=0
		   }
	   }
	   if(mouseX>=330&& mouseX<=540 &&
	   mouseY>=800 && mouseY<=870){
	  tela=1
}
}
}
}
