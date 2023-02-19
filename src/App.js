import "./App.css";
import NavBar from "./components/nav-bar";
import PostList from "./components/post-list";
import "./Component.css";
import AuthorsList from "./components/authors-list";
import { Col, Container, Row } from "react-bootstrap";
import CategoryList from "./components/category-list";
import RecentPost from "./components/recent-post";

function App() {
  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <Row>
          <Col lg={8}>
            <PostList />
          </Col>
          <Col lg={4}>
            <AuthorsList />
            <CategoryList />
            <RecentPost />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
