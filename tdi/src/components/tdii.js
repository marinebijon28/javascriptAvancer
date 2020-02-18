import React from 'react';

export default class Tdii extends React.Component {
    setNumber(event) {
        this.randNumber = Math.floor(Math.random() * 101)
        console.log(this.randNumber);

    }

    checkNumber(event) {
        event.preventDefault();
        let target = parseInt(event.target[0].value);
        console.log("target :", target);
        console.log(this.randNumber);
        switch (target) {
            case target > this.randNumber :
                document.getElementById("indic").innerHTML="c'est plus petit";
               console.log("c'est plus petit");
               break;
            case target < this.randNumber :
                document.getElementById("indic").innerHTML="c'est plus grand";
                console.log("c'est plus grand");
                break;
            default :
                document.getElementById("indic").innerHTML="c'est gagné";
                console.log("c'est gagné");
                break;
        }

    }

    render() {
        return (

            <div>
                <h2 id="indic"></h2>
                <form onSubmit={event => this.checkNumber(event)}>
                    <input type="number"/>
                    <button>Envoyer</button>
                </form>
                <button onClick={event => this.setNumber(event)}>Nouvelle partie</button>
            </div>
        );
    }
}