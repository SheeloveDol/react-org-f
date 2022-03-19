import './SearchBar.css'

export const SearchBar = () => (
    <form>
        <input type="text" placeholder="Search..." /> <br/>
        <label>
            <input type="checkbox" />
            {' '}
            Only show products in stock
        </label>
    </form>
)