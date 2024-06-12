

function AddTODO() {
  return (
    <div>
       <div className="row">
          <div className="col-6">
            <input type="text" className="form-control" placeholder="Enter Tour todo"></input>
          </div>
          <div className="col-4">
          <input type="date" className="form-control"></input>
          </div>
          <div className="col-2">
            <button className="btn btn-success add-btn">ADD</button>
            </div>
        </div>
    </div>
  )
}
export default AddTODO;  
