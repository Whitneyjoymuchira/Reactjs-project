import { useNavigate } from "react-router-dom";
import "/home/whitney/Development/code/phase-2/project/src/Pages/Home.css";
export default function LandingPage() {
  let nav = useNavigate();
  const routeChange = () => {
    nav("/add");
  };
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <h1>Welcome to Recipe Book</h1>
        <p>
          This is a recipe book app that allows you to create, and Read recipes
          from others
        </p>
        <p>To create a recipe, click the button below.</p>
        <button className="btn" onClick={routeChange}>
          Create Recipe
        </button>
      </div>
      <div className="landing-page-image">
        <img
          src="/home/whitney/Development/code/phase-2/project/src/cooking.svg"
          alt="recipes"
        />
      </div>
    </div>
  );
}