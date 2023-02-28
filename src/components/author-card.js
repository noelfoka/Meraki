import React from "react";

function AuthorCard(props) {
  return (
    <div className="d-flex">
      <img
        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
        alt="avatar"
        className="rounded-circle object-cover rounded-full hidden sm:block likeordislike flotte"
      />
      <p className="p">
        <a href="#">
          <strong>{props.name}</strong>
        </a>{" "}
        Created 23 post
      </p>
    </div>
  );
}

export default AuthorCard;
