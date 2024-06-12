

function TodoItem() {
  return (
    <div>
      <div className="row mt-3">
          <div className="col-6">
            buys Milk
          </div>
          <div className="col-4">
            15/06/24
          </div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            Go to Office
          </div>
          <div className="col-4">
            16/06/24
          </div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
    </div>
  )
}
export default TodoItem; 
