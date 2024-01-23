import {  useSelector, useDispatch } from "react-redux";
import { changeName  } from "../store/index";

function CarForm() {
 const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.name;
  });
  const handleNameChange = (event) => {
    console.log('value',event.target.value)
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
              className="input is-expanded"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default CarForm;
