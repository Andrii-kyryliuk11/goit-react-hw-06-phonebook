import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from 'Redux/contactsSlice';

export const ContactList = ({ data }) => {
  const dispatch = useDispatch();

  return (
    data.length > 0 && (
      <ul>
        {data.map(({ name, number, id }, i) => {
          return (
            <li key={id}>
              <span>
                {i + 1}.{name}: {number}
              </span>
              <button
                className={css.button}
                type="button"
                onClick={() => dispatch(removeContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
};
