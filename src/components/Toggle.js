import "./Toggle.css";

export default function Toggle({ handleChange, toggleTheme }) {
    return (
        <div className="toggle-container">
           <input
               type="checkbox"
               className="toggle"
               id="check"
               onChange={handleChange}
               checked={toggleTheme}
            />
            <label htmlFor="check">
              {toggleTheme ? "🌞" : "🌜"}
            </label>
        </div>
    );
}