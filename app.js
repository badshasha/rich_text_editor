// element 

const elements = document.querySelectorAll(".btn");

// events 

elements.forEach(element => {
    element.addEventListener('click',function(e){
        e.preventDefault();
        // let command = element.dataset["element"] // chekc whta isthe button name
        let command = element.dataset["element"];

        // someinformation needs 
        if (command === "insertimage" || command === "createLink"){
            let url = prompt('enter the link url' , 'http://' )
            document.execCommand(command, false , url ); 
        }else{
            document.execCommand(command, false , null ); 
        }


        
    })
});
