function Table(){
    return(
        <table class="table caption-top">
  <caption></caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Quantity</th>
      <th scope="col">untiPrice</th>
      <th scope="col">Total</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <th scope="row">1</th>
      <td>Dove</td>
      <td><input type="text" class="form-control" id="1"  value ="1"required/></td>
      <td>60</td>
      <td>60</td>
      <td><button type="button" class="btn btn-danger">Detele</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Lifebouy</td>
      <td> <input type="text" class="form-control" id="1"  value ="1"required/></td>
      <td>80</td>
      <td>80</td>
      <td><button type="button" class="btn btn-danger">Detele</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Safeguards</td>
      <td> <input type="text" class="form-control" id="1"  value ="1"required/></td>
      <td>90</td>
      <td>90</td>
      <td><button type="button" class="btn btn-danger">Detele</button></td>
    </tr>
    <td></td>
   
  </tbody>
</table>
    )
}

export default Table;




