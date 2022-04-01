/* https://catfact.ninja/
-Aggiungi le due curiosità dall'array in modo che vengano visualizzate nell'elenco HTML. 
Mostra questi fatti nell'elemento <ul> di index.html
-Ogni volta che l'utente fa clic sul pulsante Rimuovi un cat fact, rimuove l'ultimo elemento dall'elenco.
-Ogni volta che l'utente preme il pulsante per aggiungere una curiosità, 
chiama l'API e aggiunge una curiosità casuale. 
-Assicurati che le curiosità duplicate non vengano mai visualizzate.
<--- parte mancante
-Aggiunge un elemento di input all'HTML di tipo numero. Quando l'utente 
cambia il numero di questo input, 
il testo dei pulsanti cambia in modo che appaia "Aggiungi/Rimuovi x cat fact""
-Modifica le funzioni precedenti in modo che cliccando sul pulsante aggiunga o 
rimuova questo numero di curiosità.
<div id="container">
        <ul id="lista">li</ul>
        <button id="add">aggiugi</button>
        <button id="remove">rimuovi</button>
        <input type="number" name="a" id="number">
    </div> */

    
    let ulist = document.getElementById('lista');
    let factArray = ["i gatti so stupidi.", "i gatti non hanno padrone."];
    for ( let i = 0; i < factArray.length; i++){
        let ilist = document.createElement('li')
        ilist.appendChild(document.createTextNode(factArray[i]));
        ulist.appendChild(ilist);
    } 
    
    let btnremove = document.getElementById('remove');
    
    btnremove.addEventListener('click', () => {
        let value = document.getElementById('numero').value;
        if (value){
            for (let i=0; i < value; i++ ){
             ulist.removeChild(ulist.lastChild);
             }  
        }else{
            ulist.removeChild(ulist.lastChild);
        }
    })
    let btnadd = document.getElementById('add');
    btnadd.addEventListener('click', async () => {
      let value = document.getElementById('numero').value;
        if (value){
            for (let i=0; i < value; i++ ){
        let aggiungi = await fetch('https://catfact.ninja/fact');
        let aggi2 = await aggiungi.json();
        //let ulist = document.getElementById('lista');
        for (let i=0; i < ulist.childElementCount; i++){
                   
         if (aggi2.fact === ulist.childNodes[i].innerText) {
               return console.log(ulist.childNodes[i].innerText)
            }
          
        }
        let ilist = document.createElement('li')
        ilist.appendChild(document.createTextNode(aggi2.fact));
        ulist.appendChild(ilist);
        }
        }else{
            let ilist = document.createElement('li')
            ilist.appendChild(document.createTextNode(aggi2.fact));
            ulist.appendChild(ilist);
        }
    })

    
   
          
  
   
    


 