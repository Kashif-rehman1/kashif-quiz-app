function Card() {
  return (
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-md-4">
         <label for="validationCustom01" class="form-label"></label>
        <input type="number" class="form-control" value="username" required />
        <div class="valid-feedback"></div> 
      </div>
      <div class="col-md-5">
        <label for="validationCustom02" class="form-label"></label>
        <input type="text" class="form-control" id="validationCustom02" value="Product Title" required />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationCustomUsername" class="form-label"></label>
        <div class="input-group has-validation">
          <input type="text" class="form-control" id="1" value="1" required />
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <label for="validationCustom03" class="form-label"></label>
        <input type="text" class="form-control" id="validationCustom03" value="untiPrice" required />
        <div class="invalid-feedback">
          Please provide a valid city.
        </div>
        <div class="col-auto d-flex">
          <button type="submit" class="btn btn-primary mb-3 me-3">Add</button>
          <button type="button" class="btn btn-warning">Clear</button>
        </div>
      </div>
    </form>
  );
}

export default Card;






