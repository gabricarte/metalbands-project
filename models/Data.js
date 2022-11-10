class Data {

    constructor(band) {

        this.setLocal(band);

        this.bandObject = {};
    }


    setLocal(band) {


        let bands = [

            { "name": "1914", "result": "Not Fascist", "text": "Why ?: Fairly self- explanatory; posted fuck nsbm and all nazi shit in response to a question asking if they are NSBM." },


            {
                "name": "Abigor", "result": "Fascist", "text": "The other core member of Abigor, Thomas Tannenberger, has said that he is  not a Nazi, but certainly not a friend to foreigners (foreigners as in Ausländer, not foreigners to the black metal scene or whatever, so definitely xenophobic). He also refused to distance himself from NSBM because black metal is about extremism or something in an interview from around 2007. He also played session keyboards on Absurd releases as recently as last year."
            }

        ]


        bands.forEach(object => {


            if (object.name == band) {

                this.bandObject = object;

                console.log(this.bandObject);

            }

        });


    }

}