import { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ data, card: Card, emptyTitle }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setTimeout(() => {
            const filtered = data.filter(item =>
                item.empName.toLowerCase().trim().includes(query.toLowerCase().trim())
            );
            setFilteredData(filtered);
        }, 300);
    };

    return (
        <div>
            <div className="w-[100px]">
                <input
                    type="text"
                    placeholder="Search with name"
                    value={searchQuery}
                    onChange={handleChange}
                    className="search-input"
                />
            </div>
            <div className='all-users'>
                {filteredData.length > 0 ? filteredData.map((user, id) => <Card key={user.empId} user={user} index={id} />) : <p style={{ textAlign: 'center' }}>{emptyTitle}</p>}
            </div>
        </div>
    )
}

Search.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        empId: PropTypes.number.isRequired,
        empName: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    })).isRequired,
    card: PropTypes.elementType.isRequired,
    emptyTitle: PropTypes.string.isRequired,
};

export default Search;