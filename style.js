console.log('klaus')
//Consegna
//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
//Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
//BONUS
//Facciamo accendi e spegni:
//Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
//Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
//e così via...
const lampElement = document.getElementById('lamp');
console.log(lampElement)
const btnElement = document.getElementById('btn');
console.log(btnElement)

btnElement.addEventListener('click',function() {
    console.log('ho cliccato su btn')

})