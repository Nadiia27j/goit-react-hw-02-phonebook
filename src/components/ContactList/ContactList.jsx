import PropTypes from 'prop-types';

export default function ContactList({ contacts, onClick }) {
    return (
      <ul>
        {contacts.map(({ name, number, id }) => (
        <li key={id}>
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