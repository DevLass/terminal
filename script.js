const prompt_input = document.querySelector('#prompt-input')
const side_text = document.querySelector('.side-text')

/*Commands Ideas
Random project
*/

prompt_input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        console.log("enter");
        let command = prompt_input.value;
        console.log(command);
        if (command == "!commands"){
            side_text.innerHTML = `!commands <br> !name <br> !age <br> !projects <br> !aboutme`;
            prompt_input.value = "";
        }
        if (command == "!name"){
            side_text.innerHTML = "Nicollas Venancio"
            prompt_input.value = "";
        }
        if (command == "!age"){
            side_text.innerHTML = "10/28/2002 "
            prompt_input.value = "";
        }
        if (command == "!projects"){
            side_text.innerHTML = `
                My Personal Projects: (Click to see more) <br>
                <a href="#"> Timer</a>  ~ A simple timer with html, css and js <br>
                <a href="#"> Calculator </a> <br>
            `
            prompt_input.value = "";
        }
        if (command == "!aboutme"){
            side_text.innerHTML = "1"
            prompt_input.value = "";
        }
    }else{
        console.log("nao enter");
    }

})