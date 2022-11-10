class Controller {

    constructor() {

        this.formEl = document.getElementById("form-create");
        this.photo = document.getElementById("photo");
        this.option = document.getElementById("select");
        this.text = document.getElementById("text");
        this.result = document.getElementById("result");
        this.button = document.getElementById("why");

        this.onSubmit();
    }


    onSubmit() {

        this.formEl.addEventListener("submit", event => {

            event.preventDefault();

            this.band = this.option.value;

            this.data = new Data(this.band);

            //console.log(this.band)

            this.showWhyButton();

            this.selectedOption();

            this.hideText();
        });

    }

    selectedOption() {


        //Geral para todas as bandas, mudando o que está no HTML com innerText
        //usar getters and setters, pois estou utilizando atributo privado de outra classe


        if (!this.data._bandObject.result || !this.data._bandObject.text) {

            window.alert("Please, select a valid option");

        } else {

            this.result.innerText = this.data._bandObject.result;

            this.changePhoto();

            this.showInfo();
        }


    }


    changePhoto() {

        switch (this.option.value) {

            case "1914":
                this.photo.src = "./css/img/1914.jpg"
                break;

            case "Abigor":
                this.photo.src = "./css/img/abigor.png"
                break;


            case "Absurd":
                this.photo.src = "./css/img/absurd.jpg"
                break;

            case "Altar of Plagues":

                this.photo.src = "./css/img/altarofplagues.jpg"
                break;
        }

    }


    showWhyButton() {


        this.button.style.display = "block";

        this.button.addEventListener("click", e => {

            this.text.innerText = this.data._bandObject.text;
            this.showText();
            this.hideWhyButton();
        });

    }

    hideWhyButton() {

        this.button.style.display = "none";

    }

    hideText() {
        this.text.style.display = "none";
    }

    showText() {
        this.text.style.display = "block";
    }

    showInfo() {

        this.photo.style.display = "block";
        this.result.style.display = "block"
        this.showText();
    }


}