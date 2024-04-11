import './RadioBtn.scss';

export const RadioBtn = () => {


    return (
        <div className="container">
            <input type="radio" className="radio" id="radio-1" name="group" />
            <label htmlFor="radio-1"></label>
            <input type="radio" className="radio" id="radio-2" name="group" />
            <label htmlFor="radio-2"></label>
            <input type="radio" className="radio" id="radio-3" name="group" />
            <label htmlFor="radio-3"></label>
            <input type="radio" className="radio" id="radio-4" name="group" />
            <label htmlFor="radio-4"></label>
        </div>
    )
}