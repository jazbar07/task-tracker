import PropTypes from 'prop-types'

const Header = ( { userName }) => {
    
    // Check for Time of Day
    const currHours = new Date().getHours();
    const timeOfDay = currHours < 12 ? 'AM' : 'PM'
    
    return (
        <header>
            <div className="titleContent">
                <h1> Good { timeOfDay === 'AM' ? 'Morning' : 'Afternoon' } { userName }!</h1>
                <h1> Your Tasks for the Day Are ...</h1>
            </div>
            <div className="btnContent">
                <button className='btn'>Add</button>
            </div>
        </header>
    )
}

Header.defaultProps = {
    userName: 'Guest'
}

Header.propTypes = {
    greeting: PropTypes.string.isRequired
}

export default Header