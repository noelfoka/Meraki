import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import RecentPostCard from "./recent-post-card";

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
      </div>
    </container>
  );
}

export default RecentPost;
