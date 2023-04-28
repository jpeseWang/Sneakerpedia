const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong, please make sure that ${selector} exists`)
}

const scrollHeader = () =>{
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('actived');
    }else{
        headerElement.classList.remove('actived');
    }
}