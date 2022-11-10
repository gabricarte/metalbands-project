class Data {

    //Model - A função é retornar o objeto com as informações da banda escolhida 

    constructor(band) {

        this._bandObject = {};

        this.setLocal(band);

    }


    setLocal(band) {


        let bands = [

            { "name": "1914", "result": "Not Fascist", "text": "Why ?: Fairly self- explanatory; posted fuck nsbm and all nazi shit in response to a question asking if they are NSBM." },


            {
                "name": "Abigor", "result": "Fascist", "text": "The other core member of Abigor, Thomas Tannenberger, has said that he is  not a Nazi, but certainly not a friend to foreigners (foreigners as in Ausländer, not foreigners to the black metal scene or whatever, so definitely xenophobic). He also refused to distance himself from NSBM because black metal is about extremism or something in an interview from around 2007. He also played session keyboards on Absurd releases as recently as last year."
            },

            {
                "name": "Absurd", "result": "Fascist", "text": " For the somehow uninitiated, Absurd are basically the NSBM act. Hendrik Mobus is a very open neo-Nazi who founded the now-defunct German branch of the Heathen Front, which was a white supremacist pagan movement more or less founded, although possibly indirectly, by Varg Vikernes."
            },

            {
                "name": "Altar of Plagues", "result": "Not fascist", "text": "When discussing the influence of Burzum on the band's music, they make sure to quite clearly distance themselves from Varg's politics. Showing that, while they claim to find politics uninteresting, they are not fascist apologists."
            }

        ]


        bands.forEach(object => {

            if (object.name == band) {

                this._bandObject = object;


                // console.log(this.bandObject);

            }

        });

    }

    //Getters and Setters

    get bandObject() {
        return this._bandObject;
    }

    set bandObject(value) {
        this._bandObject = value;
    }

}