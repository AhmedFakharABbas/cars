import { useSelector, useDispatch } from "react-redux";
import { changeName, changeCost, addCar } from "../store/index";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });
  const handleChangeName = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const cost = parseInt(event.target.value) || 0;
    dispatch(changeCost(cost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar(name, cost));
  };
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <p>{name}</p>
          <div className="field">
            <label className="label">Name</label>
            <input
              value={name}
              onChange={handleChangeName}
              className="input is-expanded"
            />
          </div>
        </div>
        {/* cost  */}
        <div className="field-group">
          <p>{cost}</p>
          <div className="field">
            <label className="label">Cost</label>
            <input
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
              className="input is-expanded"
            />
          </div>
        </div>
        {/* submited  */}
        <button>Submit</button>
      </form>
    </div>
  );
}
export default CarForm;
