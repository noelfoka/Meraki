import RecentPostCard from "./recent-post-card";
import RecentPostFooter from "./recent-post-footer";

function RecentPost() {
  return (
    <container>
      <div className="shadow p-3 rounded">
        <div className="text-center">
          <RecentPostCard />
        </div>
        <br />
        <h4>
          <a href="#">Build Your New Idea with Laravel Freamwork.</a>
        </h4>
        <div className="row align-items-end custom-line">
          <didv className="col">
            <p>Jun, 23 2023</p>
          </didv>
          <div className="col">
            <br />
            <br />
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
    </container>
  );
}

export default RecentPost;
