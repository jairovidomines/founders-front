import { Link } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled className="notfound">
      <svg
        data-testid="page_not_found"
        width="162"
        height="138"
        viewBox="0 0 162 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="162" height="138" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_165_1457"
              transform="scale(0.00308642 0.00362319)"
            />
          </pattern>
          <image
            id="image0_165_1457"
            width="324"
            height="276"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <Link className="notfound__link" to={"/"}>
        Back to home page
      </Link>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
