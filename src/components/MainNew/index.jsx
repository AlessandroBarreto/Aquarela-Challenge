import React from 'react';
import "./styles.css"
import mainNew from "../../assets/mainNew.svg"

const MainNew = () => {
  return (
    <div className="flex-containerMN">
      <div className="flexMN-item">
        <img src={mainNew} alt="" />
      </div>
    </div>
  );
}

export default MainNew;