import { useLocation } from "react-router-dom";

function PaymentHistory() {
  const location = useLocation();
  const transactionId = location.state?.transactionId;

  return (
    <div>
      <h1>Payment History</h1>
      {transactionId ? (
        <p>Your Transaction ID: {transactionId}</p>
      ) : (
        <p>No transaction found.</p>
      )}
    </div>
  );
}

export default PaymentHistory;
