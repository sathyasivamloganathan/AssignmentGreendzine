import PropTypes from 'prop-types';
const Card = ({ user, index }) => {
    const oddClass = index % 2 === 0 ? '' : 'odd';
    return (
        <div className={`user-card-container ${oddClass}`}>
            <section>
                <div className='user-card'>
                    <span className='user-card-heading'>EMP ID</span>
                    <span>: </span>
                    <span style={{ fontWeight: 'bold', opacity: '0.9' }} className='text-white'>{user.empId}</span>
                </div>
                <div className='user-card'>
                    <span className='user-card-heading'>Name</span>
                    <span>: </span>
                    <span style={{ fontWeight: 'bold', opacity: '0.9' }} className='text-white'>{user.empName}</span>
                </div>
                <div className='user-card'>
                    <span className='user-card-heading'>DOB</span>
                    <span>: </span>
                    <span style={{ color: 'orange', opacity: '0.6', fontWeight: 'bold' }} className='text-white'>{user.dob}</span>
                </div>
                <div className='user-card'>
                    <span className='user-card-heading'>Role</span>
                    <span>: </span>
                    <span style={{ color: '#36A546', opacity: '0.7', fontWeight: 'bold' }} className='text-white'>{user.role}</span>
                </div>
            </section>
            <div className='top-corner-number'>
                <p>{user.empId}</p>
            </div>
        </div>
    )
}
Card.propTypes = {
    user: PropTypes.shape({
        empId: PropTypes.number.isRequired,
        empName: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};
export default Card;