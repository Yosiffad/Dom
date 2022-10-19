const inputs = document.querySelectorAll(".inputs");
let sub = document.querySelector("[paste-event]");



inputs.forEach((input)=>{
    input.addEventListener('paste', (event)=>{
        const paste = event.clipboardData.getData('text');
        const data = paste.split('');
        for(let i = 0; i<data.length; i++){
            inputs[i].value = data[i];
        }
        
    })
})



inputs.forEach((input, index)=>{
    input.addEventListener('keyup',(event)=> {
        if (input.nextElementSibling && input.value){
            input.nextElementSibling.focus();
        }  
        let arr = [...inputs];
        let allValues = arr.every(input=> input.value);
        if (allValues) sub.submit();

    });

});



sub.addEventListener('submit',(event)=>{
    var bool = arr.every(input=>{input.addEventListener('keyup',(event)=> (input.value))});
     if (arr.every(input=> input.addEventListener('keyup',(event)=> (input.value)))) sub.submit();
})


extra 

inputs.forEach((input)=>{
    input.addEventListener('paste', (event)=>{
        const paste = event.clipboardData.getData('text');
        const data = paste.split('');
        input.value = data;
    })
})
