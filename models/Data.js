class Data {

    //Model - A função é retornar o objeto com as informações da banda escolhida 

    constructor(band) {

        this._bandObject = {};

        this.setLocal(band);

        this.band = band;

        this.returnBandObject();


    }


    setLocal(band) {


        this.bands = [

            { "name": "1914", "result": "Not Fascist", "text": `Fairly self-explanatory; posted "fuck nsbm and all nazi shit" in response to a question asking if they are NSBM.` },


            {
                "name": "Abigor", "result": "Fascist", "text": `There's no NS lyrical content in Abigor, but the lyrics to "The Dark Kiss" were written by Hendrik Möbus from Absurd, who is one of the most infamous Nazis in black metal (as anyone reading this probably knows). At least Peter Kubik also describes Möbus as a "friend" and claims to "share parts of his worldview, particularly those that relate to establishing a new world order" (whatever that means).

                The other core member of Abigor, Thomas Tannenberger, has said that he is "not a Nazi, but certainly not a friend to foreigners" (foreigners as in "Ausländer", not foreigners to the black metal scene or whatever, so definitely xenophobic). He also refused to distance himself from NSBM because "black metal is about extremism" or something in an interview from around 2007. He also played session keyboards on Absurd releases as recently as last year.`
            },

            {
                "name": "Absurd", "result": "Fascist", "text": " For the somehow uninitiated, Absurd are basically the NSBM act. Hendrik Mobus is a very open neo-Nazi who founded the now-defunct German branch of the Heathen Front, which was a white supremacist pagan movement more or less founded, although possibly indirectly, by Varg Vikernes."
            },

            {
                "name": "Altar of Plagues", "result": "Not fascist", "text": `For the somehow uninitiated, Absurd are basically the NSBM act. Hendrik Mobus is a very open neo-Nazi who founded the now-defunct German branch of the "Heathen Front", which was a white supremacist pagan movement more or less founded, although possibly indirectly, by Varg Vikernes.

                The band are also famous for being murderers.`
            },
            {
                "name": "Batushka", "result": "Not fascist", "text": `Krzysztof Drabikowski has in the past made anti-fascist and anti-racist comments, and he also plays in the more explicitly antifa-oriented crust punk band Sturmovik.

                The band are also famous for being murderers.`
            },
            {
                "name": "Burzum", "result": "Fascist", "text": ` Varg Vikernes, sole member of Burzum, is in many ways largely responsible for the rise of the NSBM scene and popularizing far-right politics in the black metal sphere. The list of his frequently terrible opinions is endless, but a small selection of some of his most prominent beliefs include:

                White supremacy/white nationalism (though he would deny being a nationalist, considering nations to be "modern constructs", his beliefs naturally will culminate in nationalism as well as fascism if taken to their only logical conclusion)
                Homophobia
                Anti-semitism (Varg believes in an international Jewish conspiracy)
                Borderline holocaust denial
                
                Outside of that, he is also obviously a murderer. In case you were somehow unaware, not that it has anything much to do with him being a fascist.`
            },
            {
                "name": "Dark Fortress", "result": "Not fascist", "text": `Did a split with the NSBM band Barad Dur early in their career. However, they have distanced themselves from that split, and from NSBM in general since then, chalking it up to youthful naivety. They claim the split was offered to them by their label and didn't know who Barad Dur were.

                Furthermore the one political account the band are following on their twitter is a communist, suggesting a left-wing worldview.
                `
            },
            {
                "name": "Dawn Ray'd", "result": "Not fascist", "text": `The band make it fairly clear in most of their interviews that they have no sympathy for fascists in the black metal scene, and the vast majority of their lyrical content is inspired by their leftist anarchist ideology and antifascism.

                The band are considered part of the wave of explicitly antifascist black metal that has been rising in importance and prominence in the last several years.`
            },

        ]

    }


    setNewBand(name, result, text = 0) {

        if (!text) {
            this.bands.push({ "name": name, "result": result });

        } else {
            this.bands.push({ "name": name, "result": result, "text": text });


        }

        console.log(this.bands);

        this.returnBandObject();
    }


    returnBandObject() {

        this.bands.forEach(object => {

            if (object.name == this.band) {

                this._bandObject = object;

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