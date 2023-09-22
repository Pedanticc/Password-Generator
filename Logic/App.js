let break_animation = false
let loading_animation_chars = [".", "|", "/", "-"]
let all_selected_options = [8, 12, 18]
let selected_option = 0
let special_characters = "!#$%@_-&"
let numbers = "1234567890"
let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
let generated_password = ""
let disable_options = false
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function animation(){
    while(break_animation == false) {
        for (let i = 0; i <= loading_animation_chars.length - 1; i++) {
            if (i >= 4){
                i = 0
            }
            else{
                await sleep(100);
                let selected_char = loading_animation_chars[i]
                out_put_result.innerHTML = selected_char
                if (break_animation == true){
                    out_put_result.innerHTML = generated_password
                }
            }
        }
    }

    if(break_animation == true) {
        out_put_result.innerHTML = generated_password
    }
}

copy_password.addEventListener('click', (event) => {
    console.log("adwd")
    copy_me()
});

option_1.addEventListener('click', (event) => {
    reset_selected()
    selected_option = 8
    option_1.style.border = "white 1px solid"
});
option_2.addEventListener('click', (event) => {
    reset_selected()
    selected_option = 12
    option_2.style.border = "white 1px solid"
});
option_3.addEventListener('click', (event) => {
    reset_selected()
    selected_option = 16
    option_3.style.border = "white 1px solid"
});

function reset_selected() {
    for (let i of all_options){
        i.style.animation = ""
        i.style.border = "1px rgb(255, 217, 0, 0.4) solid"
    }
}

generate_button.addEventListener('click', async(event) => {
    if (disable_options == false){
        if (!(selected_option in all_selected_options)) {
            break_animation = true
            disable_options = true
            generate_password(selected_option)
        }

        else{
            for (let i of all_options){
                i.style.animation = "blink 1s infinite"
            }
        }
    }
    else {

    }
});


async function generate_password(x) {
    let char = ""
    generated_password = ""
    for (let i = 0; i <= x; i++){
        let random_number =  Math.floor(Math.random() * 3)
        switch(random_number){
            case 0:
                char = special_characters.charAt(Math.floor(Math.random() * special_characters.length))
                generated_password += char
                break
            case 1:
                char = numbers.charAt(Math.floor(Math.random() * numbers.length))
                generated_password += char
                break
            case 2:
                char = letters.charAt(Math.floor(Math.random() * letters.length))
                generated_password += char
                break
        }
        await sleep(30);
        out_put_result.innerText = generated_password
    }
    out_put_result.innerText = " "
    out_put_result.innerText = generated_password
    disable_options = false
}

function copy_me() {
    let raw_pass = out_put_result.innerText
}

animation()