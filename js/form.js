import React from 'react';
import Button from './button.js'
function Form(){
    return(
        <form>
            <label className="col-1">
                <input type="radio" name="klass" />
                2:a klass
            </label>
            <label className="col-1">
                <input type="radio" name="klass" />
                1:a klass
            </label>
            <label className="col-1">
               
                Antal biljetter
            </label>
            <label className="col-1">
               
                Titel
            </label>
            <section className="col-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </section>
            <section className="col-1">
                <option value="mr">mr.</option>
                <option value="mrs">mrs.</option>
                <option value="ms">ms.</option>
                <option value="dr">dr.</option>
            
            </section>
            <label className="col-2">
                Namn
            </label>
            <label className="col-2">
                Efternamn
            </label>
            <label className="col-2">
                E-post
            </label>
            <input type="" />
            <label className="col-2">
                <input type="checkbox" > Godkänner villkoren</input>
            </label>



            <Button />
        </form>
    )
}

export default Form;