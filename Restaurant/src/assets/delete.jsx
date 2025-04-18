export default function Delete(){
    return (
        <div>
          <div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button>Proceed</button>
          </div> 
        </div>    
      );
}