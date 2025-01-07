const intialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

//reducer
export default function customerReducer(state = intialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateNAme":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}

//action creator
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString,
    },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName" };
}
