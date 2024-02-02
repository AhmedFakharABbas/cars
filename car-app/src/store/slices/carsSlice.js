import { createSlice, nanoid } from "@reduxjs/toolkit";
const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducer: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    //asumption  action payload is similar to like this {name :"sdfsd", cost:324234}
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    //asumption payload will have the id the car want to remove
    removeCar(state, action) {
      const updatedCars = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updatedCars;
    },
  },
});
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
