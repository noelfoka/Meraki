import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import "./Component.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function FirstComponent() {
  return (
    <div class="row div0">
      <br />
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-10">
            <h3>Post</h3>
          </div>
          <div
            className="me-auto w-100 d-flex justify-content-end position-fixed"
            class="col-md-2 "
          >
            <DropdownButton
              variant="secondary"
              class=""
              title="Latest"
              id="bg-nested-dropdown"
            >
              <Dropdown.Item eventlyKey="1">Latest</Dropdown.Item>
              <Dropdown.Item eventlyKey="2">Latest week</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <div class="shadow p-3 mb-5 bg-body rounded div1">
          <div class="row div2">
            <div class="col-md-11">
              <h4>June 1, 2020</h4>
            </div>
            <div class="col-md-1">
              <Button class="btn btn-secondary button" variant="info">
                <strong>Design</strong>
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
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>

          <div class="row">
            <div class="col-md-9">
              <a href="#">Read more</a>
            </div>

            <div class="col-md-3">
              <div class="row ">
                <a href="#" class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block likeordislike flotte"
                  />
                  <p class="text-grey-700 font-bold hover-inline liketext p">
                    joel foka
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow p-3 mb-5 bg-body rounded div1">
          <div class="row div2">
            <div class="col-md-11">
              <h4>June 1, 2020</h4>
            </div>
            <div class="col-md-1">
              <Button class="btn btn-secondary button" variant="info">
                <strong>PHP</strong>
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
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>

          <div class="row">
            <div class="col-md-9">
              <a href="#">Read more</a>
            </div>

            <div class="col-md-3">
              <div class="row ">
                <a href="#" class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block likeordislike flotte"
                  />
                  <p class="text-grey-700 font-bold hover-inline liketext p">
                    joel foka
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow p-3 mb-5 bg-body rounded div1">
          <div class="row div2">
            <div class="col-md-11">
              <h4>June 1, 2020</h4>
            </div>
            <div class="col-md-1">
              <Button class="btn btn-secondary button" variant="info">
                <strong>Django</strong>
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
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>

          <div class="row">
            <div class="col-md-9">
              <a href="#">Read more</a>
            </div>

            <div class="col-md-3">
              <div class="row ">
                <a href="#" class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block likeordislike flotte"
                  />
                  <p class="text-grey-700 font-bold hover-inline liketext p">
                    joel foka
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="shadow p-3 mb-5 bg-body rounded div1">
          <div class="row div2">
            <div class="col-md-11">
              <h4>June 1, 2020</h4>
            </div>
            <div class="col-md-1">
              <Button class="btn btn-secondary button" variant="info">
                <strong>Testing</strong>
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
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>

          <div class="row">
            <div class="col-md-9">
              <a href="#">Read more</a>
            </div>

            <div class="col-md-3">
              <div class="row ">
                <a href="#" class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block likeordislike flotte"
                  />
                  <p class="text-grey-700 font-bold hover-inline liketext p">
                    joel foka
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h3>Authors</h3>
        <div class="shadow p-3 mb-5 bg-body rounded">
          <div>
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
              alt="avatar"
              class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block likeordislike flotte"
            />
            <p class="p">
              <a href="#">
                <strong>Joel Foka</strong>
              </a>{" "}
              Created 23 post
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
              alt="avatar"
              class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block likeordislike flotte"
            />
            <p class="p">
              <a href="#">
                <strong>Joel Foka</strong>
              </a>{" "}
              Created 23 post
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
              alt="avatar"
              class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block likeordislike flotte"
            />
            <p class="p">
              <a href="#">
                <strong>Joel Foka</strong>
              </a>{" "}
              Created 23 post
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
              alt="avatar"
              class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block likeordislike flotte"
            />
            <p class="p">
              <a href="#">
                <strong>Joel Foka</strong>
              </a>{" "}
              Created 23 post
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
              alt="avatar"
              class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block likeordislike flotte"
            />
            <p class="p">
              <a href="#">
                <strong>Joel Foka</strong>
              </a>{" "}
              Created 23 post
            </p>
          </div>
        </div>
        <br />

        <h3>Categories</h3>
        <div class="shadow p-3 mb-5 bg-body rounded">
          <h5>- AWS</h5>
          <h5>- Laravel</h5>
          <h5>- Vue</h5>
          <h5>- Design</h5>
          <h5>- Django</h5>
          <h5>- PHP</h5>
        </div>
        <br />

        <h3>Recent Post</h3>
        <div class="shadow p-3 mb-body rounded">
          <Button
            class="btn btn-secondary text-center"
            id="div1"
            variant="info"
            size=""
            active
          >
            Button
          </Button>
          <br />

          <h4>
            <a href="#">Build Your New Idea with Laravel Freamwork.</a>
          </h4>
        </div>
      </div>

      <div>
        <Button href="#" class="btn btn-secondary">
          Previous
        </Button>{" "}
        <Button class="btn btn-secondary">1</Button>{" "}
        <Button class="btn btn-secondary">2</Button>{" "}
        <Button class="btn btn-secondary">3</Button>{" "}
        <Button class="btn btn-secondary">Next</Button>{" "}
      </div>
    </div>
  );
}

export default FirstComponent;
