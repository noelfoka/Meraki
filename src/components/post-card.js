import Button from "react-bootstrap/Button";

function PostCard() {
  return (
    <div className="shadow-sm p-3 mb-5 bg-body rounded div1">
      <div className="row div2">
        <div className="col-md-11">
          <h4>June 1, 2020</h4>
        </div>
        <div className="col-md-1">
          <Button className="btn btn-secondary button" variant="info">
            <strong>Laravel</strong>
          </Button>{" "}
        </div>
      </div>

      <h2>
        <a href="#">Build Your New Idea with Laravel Freamwork.</a>
      </h2>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
        enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
        ratione libero!
      </p>

      <div className="row">
        <div className="col-md-9">
          <a href="#">Read more</a>
        </div>

        <div className="col-md-3">
          <div className="row ">
            <a href="#" className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar"
                className="rounded-circle w-90 object-cover rounded-full hidden sm:block likeordislike flotte"
              />
              <p className="text-grey-700 font-bold hover-inline liketext p">
                joel foka
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
