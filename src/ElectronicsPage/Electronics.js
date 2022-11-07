import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../ElectronicsPage/index.css";
function Electronics() {
  const [electronics, setElectronics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);

        setElectronics(json);
      });
  }, []);
  const { ElectronicsPageId } = useParams();
  console.log(ElectronicsPageId);
  if (loading) {
    return <div className="mainContainerJewelery">...Almoust there ♥</div>;
  }
  return (
    <div>
      {" "}
      <p>
        <h1>Electronics</h1>
      </p>
      <div className="mainContainerElectronics">
        {electronics.map((item) => {
          return (
            <div className="boxElectronics">
              <div className="idElectronics"> {item.id}</div>
              <div className="titleElectronics"> {item.title}</div>
              {/* <div className="categoryElectronics">{item.category}</div> */}
              <div className="descriptionElectronics">{item.description}</div>
              <img className="imgElectronics" src={item.image} alt="" />
              <div className="priceElectronics">Price: {item.price} $</div>{" "}
            </div>
          );
        })}

        <div className="electronicsFooter">
          <Link to={"/"}>
            <button>Click here to go to mainApp</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Electronics;
