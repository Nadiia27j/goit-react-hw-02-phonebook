import React from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';


export default class ContactForm extends React.Component {

    state = {
    name: '',
    number: '',
    }
    
    nameInputId = nanoid();
    // numberInputId = nanoid();
    // contactId = nanoid();

    handlerChangeInput(e) {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handlerSubmit(e) {
        e.preventdefault();

        this.props.onSubmit(this.state);
        this.reset();
    };

    reset() {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <div onSubmit={this.handlerSubmit}>
                <label>
                    {/* htmlFor={this.nameInputId} */}
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handlerChangeInput}
                        id={this.nameInputId}
                    />
                    <label>
                        
                    </label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handlerChangeInput}
                        id={this.numberInputId}
                    />
                </label>

                <button type="submit">Add contact</button>
            </div>
        );
    }
}


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

