import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation()
{
    return (
    <header className={classes.header}>
        <div className={classes.logo}> My pages</div>
        <nav>
            <ul>
                <li>
                    <Link to="/"> All todos </Link>
                </li>
                <li>
                    <Link to="/your-favorites"> My Favorites </Link>
                </li>
                <li>
                    <Link to="/new-meetup"> New Meetup </Link>
                </li>

            </ul>
        </nav>
    </header>
    );
}
export default MainNavigation;