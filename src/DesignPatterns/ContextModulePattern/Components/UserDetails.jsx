import { updateUserDetails } from "../actions/userAction";
import {
  useUserDispatchContext,
  useUserStateContext,
} from "../context/userContext";

export function UserDetails() {
  //Below can be written but to keep the segerate we already keep on other file.
  //const userState =() => useContext(UserStateContext);
  const { userDetails } = useUserStateContext();
  const dispatch = useUserDispatchContext();
  const onChangeFirstName = (event) => {
    onChangeStage("firstName", event.target.value);
  };

  const onChangeLastName = (event) => {
    onChangeStage("lastName", event.target.value);
  };

  const onChangeAddress = (event) => {
    onChangeStage("address", event.target.value);
  };

  const onChangeStage = (key, value) => {
    const newObj = {
      ...userDetails,
      [key]: value,
    };
    // const obj = {
    //   ...userState.userDetails,
    //   [key]: value,
    // };
    // console.log("onChangeStage", obj);
    updateUserDetails(dispatch, newObj);
  };

  return (
    <div>
      <div>User Details</div>
      FirstName: {userDetails.firstName}
      <br />
      LastName: {userDetails.lastName}
      <br />
      Address: {userDetails.address}
      <br />
      <form>
        <input
          type="text"
          value={userDetails.firstName}
          onChange={onChangeFirstName}
        />
        <br />
        <input
          type="text"
          value={userDetails.lastName}
          onChange={onChangeLastName}
        />
        <br />
        <input
          type="text"
          value={userDetails.address}
          onChange={onChangeAddress}
        />
      </form>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
    </div>
  );
}
