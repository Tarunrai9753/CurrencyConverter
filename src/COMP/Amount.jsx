import './Amount.css'
function Amount({setamount}) {
  return (  <>
      <div className="left ">
          <input
            type="text"
            placeholder="Amount"
            onChange={(e) => setamount(e.target.value)}
          />
        </div>
  </>);
}

export default Amount;