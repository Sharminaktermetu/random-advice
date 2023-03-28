const loadApi = (i) => {
    fetch(`https://api.adviceslip.com/advice/search/${i}`)
      .then(res => res.json())
      .then(data => showData(data));  
     
  };
const showData =(slags)=>{
        const divCont = document.getElementById('container');
        divCont.innerHTML=`
        <h3>Advice:${slags.slips[0].id}</h3>
        <h2 class="design">${slags.slips[0].advice}</h2>
        
        `
   
}
const search=()=>{
    const value = document.getElementById('search-field');
    const newValue =value.value;
    value.value=''
    loadApi(newValue)

}
const reloadApi = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => reload(data));  
     
  };
const reload =(load)=>{

        const divCont = document.getElementById('container');
        divCont.innerHTML=`
        <h3>Advice:${load.slip.id}</h3>
        <h2 class="design"><i>${load.slip.advice}</i></h2>
        
        `
}
reloadApi()