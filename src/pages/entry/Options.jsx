import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`).then(res => {
      setItems(res.data);
    });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map(item => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });

  return <div>{optionItems}</div>;
}
