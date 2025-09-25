import React from "react";
import {
  Col1Row1,
  Col1Row2,
  Col1Row3,
  Col2Row1,
  Col2Row3,
  Col3Row1,
  Col4Row1,
  Col4Row2,
  CenterImg,
} from "@/assets/Index";
import GalleryGrid from "../../Reusable/GalleryGrid";

const ChemicalGalleryGrid = () => {
  return (
    <GalleryGrid
      title="Chemical Solution"
      col1row1={Col1Row1}
      col1row2={Col1Row2}
      col1row3={Col1Row3}
      col2row1={Col2Row1}
      col2row3={Col2Row3}
      col3row1={Col3Row1}
      col4row1={Col4Row1}
      col4row2={Col4Row2}
      centerImg={CenterImg}
    />
  );
};

export default ChemicalGalleryGrid;
