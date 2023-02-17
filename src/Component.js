import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import './Component.css';



function FirstComponent() {
    return (
        <div class="row div0">
            <br /> <br /> <br />
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-10">
                        <h3>Post</h3>
                    </div>
                    <div className='me-auto w-100 d-flex justify-content-end position-fixed' class="col-md-2 ">
                        <DropdownButton variant="secondary" title="Latest" id="bg-nested-dropdown" disabled>
                            <Dropdown.Item eventlyKey="1">Latest</Dropdown.Item>
                            <Dropdown.Item eventlyKey="2">Latest week</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>
                <br />
                <br /> <br /> <br />
            <div class="col-md-4">
                <h3>Authors</h3>
            </div>

            <div class="shadow p-3 mb-5 bg-body rounded div1">
                <div class="row div2">
                    <div class="col-md-11">
                        <h4>June 1, 2020</h4>
                    </div>
                    <div class="col-md-1">
                        <Button class="btn btn-secondary" variant="info">Laravel</Button>{' '}
                    </div>
                </div>

                <h2><a href="#">Build Your New Idea with Laravel Freamwork.</a></h2>
                <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque.
                     Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                
                <div class="row">
                    <div class="col-md-11">
                        <a href="#">Read more</a>
                    </div>

                    <div class="col-md-1">
                        <div class="row">
                            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80" alt="avatar" class="mx-4 w-10 h-10 object-cover rounded-full hidden " />
                            <p>joel foka</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default FirstComponent;