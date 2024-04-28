import { useRef, useEffect } from "react";
import { Button } from "native-base";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFoundScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404";
  }, []);

  return (
    <div className="container-not-found">
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <Button
          onPress={() => {
            navigate("/weather");
          }}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default NotFoundScreen;
