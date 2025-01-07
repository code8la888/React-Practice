import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer);
  return <h2>👋 Welcome, {customer.fullName || "尊敬的客戶"}</h2>;
}

export default Customer;
