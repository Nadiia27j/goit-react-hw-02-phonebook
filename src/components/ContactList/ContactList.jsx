import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

export default function ContactList({ contacts, onClick}) {
    return (
        <ul className="contact-list">
      {contacts.map(({ name, number }) => (
        <li className="contact" key={nanoid()}>
          <a>
            {name}: {number}
          </a>
          <button type="button" onClick={() => onClick(name)} name={name}>
            Delete
          </button>
        </li>
      ))}
      </ul>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};