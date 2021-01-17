import React from "react";

export const ResourceItem = ({ info }) => {
  const emptyornot = (item) => {
    return item == null ? (
      <span>n/a</span>
    ) : (
      <strong>{item.toLocaleString()}</strong>
    );
  };
  return (
    <div className="card anchor" id={info.state}>
      <div class="card-body">
        <h1 class="card-title">{info.state}</h1>
        <p className="card-text">last Updated: {info.lastUpdateEt}</p>
        <p className="card-text text-primary">
          total: {emptyornot(info.total)}
        </p>
        <p className="card-text">positive: {emptyornot(info.positive)}</p>
        <p className="card-text text-warning">
          hospitalized: {emptyornot(info.hospitalized)}
        </p>
        <p className="card-text text-success">
          recovered: {emptyornot(info.recovered)}
        </p>
        <p className="card-text text-danger">death: {emptyornot(info.death)}</p>
      </div>
    </div>
  );
};

export default ResourceItem;
