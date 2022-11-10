class Controller {

    constructor() {

        this.formEl = document.getElementById("form-create");
        this.photo = document.getElementById("photo");
        this.option = document.getElementById("select"); //Banda selecionada (.value)
        this.text = document.getElementById("text");
        this.result = document.getElementById("result");

        this.onSubmit();
    }


    onSubmit() {

        this.formEl.addEventListener("submit", event => {

            event.preventDefault();

            this.selectedOption();

        });
    }

    selectedOption() {

        let band = this.option.value;

        let data = new Data(band);

        //Geral para todas as bandas, mudando o que está no HTML com innerText
        //usar getters and setters, pois estou utilizando atributo privado de outra classe


        if (!data._bandObject.result || !data._bandObject.text) {

            window.alert("Please, select a valid option");

        } else {

            this.result.innerText = data._bandObject.result;
            this.text.innerText = data._bandObject.text;

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


    showInfo() {

        this.photo.style.display = "block";
        this.result.style.display = "block"
        this.text.style.display = "block";

    }


}