import Button from "react-bootstrap/Button";

function ButtonCard() {
  return (
    <div>
      <Button href="#" variant="secondary">
        Previous
      </Button>{" "}
      <Button variant="secondary">1</Button>{" "}
      <Button variant="secondary">2</Button>{" "}
      <Button variant="secondary">3</Button>{" "}
      <Button variant="secondary">Next</Button>{" "}
    </div>
  );
}

export default ButtonCard;
