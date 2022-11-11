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
        this.registerBand();
    }


    onSubmit() {

        this.formEl.addEventListener("submit", event => {

            event.preventDefault();

            this.band = this.option.value;

            this.data = new Data(this.band);

            this.showWhyButton();

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

    //Registra a banda digitada no json
    registerBand() {

        let registerBtn = document.getElementById("register");

        let submitBandBtn = document.getElementById("newband-submit");

        registerBtn.addEventListener("click", e => {

            e.preventDefault();

            this.newFormEl.style.display = "block";
            this.hideInfo();
            this.hideWhyButton();
        })


        submitBandBtn.addEventListener("click", e => {


            this.bandName = document.querySelector("#band-name").value;
            this.bandResult = document.querySelector("#band-result").value;
            this.bandText = document.querySelector("#band-text").value;


            this.newData = new Data(this.bandName);
            this.newData.setNewBand(this.bandName, this.bandResult, this.bandText);

            this.insertNewBand();
        })


    }

    //Changing view
    insertNewBand() {

        let newOption = document.createElement('option');

        newOption.value = `${this.bandName} `;

        newOption.innerHTML = `${this.bandName} `;

        this.option.appendChild(newOption);

        this.setNewData();


    }

    //view
    setNewData() {

        //this.result.innerText = this.newData._bandObject.result;

        let result = this.newData._bandObject.result;

        result.toLowerCase();

        if (result == "yes") {

            this.result.innerText = "Fascist"

        } else if (result == "no") {

            this.result.innerText = "Not Fascist"

        } else {
            window.alert("Please, insert a valid answer");

        }

        this.changePhoto();

        this.showInfo();

        this.showWhyButton();

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

        }

    }


    showWhyButton() {


        this.button.style.display = "block";

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
        this.result.style.display = "block";
        this.showText();
    }

    hideInfo() {

        this.photo.style.display = "none";
        this.result.style.display = "none";
        this.hideText();
    }


}