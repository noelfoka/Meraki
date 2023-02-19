import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function RecentPost() {
  return (
    <div>
      <Container>
        <h3>Recent Post</h3>
        <div class="shadow-sm mb-5 p-3 bg-body rounded">
          <div class="text-center">
            <Button
              class="px-2 py-1 btn btn-secondary col-lg-2 center-block"
              id="div1"
              variant="info"
              size=""
              active
            >
              Button
            </Button>
          </div>
          <br />

          <h4>
            <a href="#">Build Your New Idea with Laravel Freamwork.</a>
          </h4>
          <div class="row">
            <div class="col-md-5">
              <a href="#" className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  alt="avatar"
                  className="rounded-circle w-90 object-cover rounded-full hidden sm:block likeordislike flotte"
                />{" "}
              </a>
              <p className="text-grey-700 font-bold hover-inline liketext p">
                joel foka
              </p>
            </div>
            <div className="col-md">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RecentPost;
