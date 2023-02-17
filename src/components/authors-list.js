import AuthorCard from "./author-card";

function AuthorsList() {
  return (
    <div>
      <h3>Authors</h3>
      <div className="shadow-sm p-3 mb-5 bg-body rounded">
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>
    </div>
  );
}

export default AuthorsList;
