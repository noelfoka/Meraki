import AuthorCard from "./author-card";

function AuthorsList() {
  return (
    <div>
      <h3>Authors</h3>
      <div className="shadow-sm p-3 mb-5 bg-body rounded">
        <AuthorCard name="Alex Jhon" />
        <AuthorCard name="Janne Doe" />
        <AuthorCard name="Lisa Way" />
        <AuthorCard name="Steve Matt" />
        <AuthorCard name="Khatab Wedaa" />
      </div>
    </div>
  );
}

export default AuthorsList;
