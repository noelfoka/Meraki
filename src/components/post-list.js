import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import PostCard from "./post-card";

function PostList() {
  return (
    <div>
      <div className="d-flex justify-content-between post">
        <h3>Post</h3>
        <div>
          <DropdownButton
            className="bg-lightgrey"
            title="Latest"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventlyKey="1">Latest</Dropdown.Item>
            <Dropdown.Item eventlyKey="2">Latest week</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

export default PostList;
