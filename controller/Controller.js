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
        this.acessData(band);

        switch (this.option.value) {

            case "1914":

                this.photo.src = "./css/img/1914.jpg"
                this.result.innerText = "Not Fascist"
                this.text.innerText = " Why?: Fairly self-explanatory; posted fuck nsbm and all nazi shit in response to a question asking if they are NSBM."

                this.showInfo();

                break;


            case "Abigor":

                this.photo.src = "./css/img/abigor.png"
                this.result.innerText = "Fascist"
                this.text.innerText = "The other core member of Abigor, Thomas Tannenberger, has said that he is  not a Nazi, but certainly not a friend to foreigners (foreigners as in Ausländer, not foreigners to the black metal scene or whatever, so definitely xenophobic). He also refused to distance himself from NSBM because black metal is about extremism or something in an interview from around 2007. He also played session keyboards on Absurd releases as recently as last year."

                this.showInfo();

                break;


            case "Absurd":
                console.log("Absurd")

                this.photo.src = "./css/img/absurd.jpg"
                this.result.innerText = "Fascist"
                this.text.innerText = " For the somehow uninitiated, Absurd are basically the NSBM act. Hendrik Mobus is a very open neo-Nazi who founded the now-defunct German branch of the Heathen Front, which was a white supremacist pagan movement more or less founded, although possibly indirectly, by Varg Vikernes."

                this.showInfo();

                break;

            case "Altar of Plagues":

                console.log("Altar of Plagues")


                this.photo.src = "./css/img/altarofplagues.jpg"
                this.result.innerText = "Not fascist"
                this.text.innerText = " When discussing the influence of Burzum on the band's music, they make sure to quite clearly distance themselves from Varg's politics. Showing that, while they claim to find politics uninteresting, they are not fascist apologists."

                this.showInfo();

                break;

            default:
                window.alert("Please, select one valid band");
        }



    }

    showInfo() {

        this.photo.style.display = "block";
        this.text.style.display = "block";

    }

    //Model 

    acessData(band) {

        let data = new Data(band);

    }


}