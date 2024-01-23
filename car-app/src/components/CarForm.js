import {useDispatch} from 'react-redux'
import {changeName} from './store'

function CarForm() {
    const dispatch=useDispatch();
   const  handleNameChange=(event)=>{
    dispatch(changeName(event.target.value));

    };
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label"></label>
            <input
            value={name}
            onChange={handleNameChange}
            className="input is-expanded"/>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CarForm;
