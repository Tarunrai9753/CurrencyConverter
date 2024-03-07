import "./from.css";
import 'bootstrap/dist/css/bootstrap.min.css'

function Fromto({from,options,setfrom,to,setTo,amount,result,convert,}) {
  return (
    <>
      {/* from */}
      <div className="whole">
        <div className="color">
          <h5>From</h5>
          <select className="select" onChange={(e) => setfrom(e.target.value)}value={from}>
            {options.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>

          {/* from result */}
          <h3 className="set">
            {amount} {from}{" "}
          </h3>

          {/* from result */}
        </div>
        {/* from */}

        {/* convert button */}
        <div className=" result">
        
          <button className=' btn  butn' onClick={convert} >
            Convert
          </button>
        </div>
        {/* convert button */}

        {/* to */}

        <div className="color">
        
          <h5 className="to">To</h5>
          <select className="select"
            onChange={(e) => setTo(e.target.value)}
            value={to}
          >
            {options.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          {/*  to result */}
          <h3 className="set">
            {amount == 0 ? amount : result} {to}
          </h3>
          {/*  to result */}
        </div>
        {/* to */}
      </div>
    </>
  );
}

export default Fromto;
