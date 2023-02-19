import Button from "react-bootstrap/Button";

function ButtonCard() {
  return (
    <div>
      <Button href="#" class="btn btn-secondary">
        Previous
      </Button>{" "}
      <Button class="btn btn-secondary">1</Button>{" "}
      <Button class="btn btn-secondary">2</Button>{" "}
      <Button class="btn btn-secondary">3</Button>{" "}
      <Button class="btn btn-secondary">Next</Button>{" "}
    </div>
  );
}

export default ButtonCard;
