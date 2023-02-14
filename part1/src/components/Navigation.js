import './Navigation.css';

export default function Navigation({ links }) {
  return (
    <div className='navigation'>
      <ul>
        {links.map(({ href, label }) => {
          return (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
