class Controller {

    constructor() {

        this.formEl = document.getElementById("form-create");
        this.newFormEl = document.getElementById("newband-form")
        this.photo = document.getElementById("photo");
        this.option = document.getElementById("select");
        this.text = document.getElementById("text");
        this.result = document.getElementById("result");
        this.button = document.getElementById("why");

        this.onSubmit();
        this.newBandEvents();
        this.changePhoto();
    }


    onSubmit() {

        this.formEl.addEventListener("submit", event => {

            event.preventDefault();

            this.hideNewForm();

            this.band = this.option.value;

            if (!this.band) {
                window.alert("Please, select a band");
                return false;
            }

            this.data = new Data(this.band);

            this.validWhyButton();

            this.selectedOption();

            this.hideText();
        });

    }

    //Altera as informações de acordo com a banda selecionada
    selectedOption() {

        if (!this) {

            window.alert("Please, select a valid option");

        } else {

            this.result.innerText = this.data._bandObject.result;

            this.changePhoto();

            this.showInfo();
        }


    }

    //Eventos = Ao apertar o botão "registrar", Registra a banda digitada no json
    //Submit = Instancia a classe e lá, adiciona no array bands 
    newBandEvents() {

        let registerBtn = document.getElementById("register");


        registerBtn.addEventListener("click", e => {

            e.preventDefault();

            this.formEl.reset();

            this.newFormEl.style.display = "block";

            this.hideInfo();
            this.hideWhyButton();
        })


        this.newFormEl.addEventListener("submit", e => {

            e.preventDefault();

            this.bandName = document.querySelector("#band-name").value;
            this.bandResult = document.querySelector("#band-result").value;
            this.bandText = document.querySelector("#band-text").value;

            this.newData = new Data(this.bandName);

            this.bandText.trim();

            if (!this.bandText) {

                this.newData.setNewBand(this.bandName, this.bandResult);

                this.hideInfo();
                this.hideWhyButton();

            } else {

                this.newData.setNewBand(this.bandName, this.bandResult, this.bandText);

            }

            this.insertNewBand();
        });


    }

    //Changing view, inserindo a opção no selected
    insertNewBand() {

        let newOption = document.createElement('option');

        newOption.value = `${this.bandName} `;

        newOption.innerHTML = `${this.bandName} `;

        this.option.appendChild(newOption);

        this.setNewData();

    }


    //view
    setNewData() {

        let result = this.newData._bandObject.result;

        result = result.toLowerCase();

        result = result.trim();

        if (result == "yes" && this.newData._bandObject.text) {

            this.result.innerText = "Fascist";
            this.showWhyButtonNewForm();
            this.showInfo();

        } else if (result == "no" && this.newData._bandObject.text) {

            this.result.innerText = "Not Fascist";
            this.showWhyButtonNewForm();
            this.showInfo();

        } else if (result == "no" && !this.newData._bandObject.text) {
            this.result.innerText = "Not Fascist";
            this.showResult();
            this.showPhoto();

        } else if (result == "yes" && !this.newData._bandObject.text) {
            this.result.innerText = "Fascist";
            this.showResult();
            this.showPhoto();

        }


    }


    getPhoto() {

        let imageInput = document.querySelector("#band-photo");

        let uploadedImage = "";

        imageInput.addEventListener("change", function () {

            let reader = new FileReader();

            let photo = document.getElementById("photo");

            reader.addEventListener("load", () => {

                uploadedImage = reader.result;

                photo.src = uploadedImage;
            })

            reader.readAsDataURL(this.files[0]);


        })

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

            case "Batushka":
                this.photo.src = "./css/img/batushka.jpg"
                break;

            case "Burzum":
                this.photo.src = "./css/img/burzum.jpg"
                break;

            case "Dark Fortress":
                this.photo.src = "./css/img/darkfortress.jpg"
                break;

            case "Dawn Ray'd":
                this.photo.src = "./css/img/dawmrayd.jpg"
                break;
            default:
                this.getPhoto();
        }

    }


    hideNewForm() {
        this.newFormEl.style.display = "none";

    }

    showWhyButton() {
        this.button.style.display = "block";
    }

    validWhyButton() {

        this.showWhyButton();

        this.button.addEventListener("click", e => {

            if (!this.data._bandObject.text) {
                window.alert("Please, select a band before asking why")
            } else {
                this.text.innerText = this.data._bandObject.text;
                this.showText();
                this.hideWhyButton();
            }
        });

    }

    showWhyButtonNewForm() {

        this.showWhyButton();

        this.button.addEventListener("click", e => {

            this.text.innerText = this.newData._bandObject.text;
            this.showText();
            this.hideWhyButton();

        });


    }

    showResult() {
        this.result.style.display = "block";
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

    showPhoto() {
        this.photo.style.display = "block";
    }


    showInfo() {
        this.showPhoto();
        this.showResult();
        this.showText();
    }

    hideInfo() {

        this.photo.style.display = "none";
        this.result.style.display = "none";
        this.hideText();
    }


}