import React from "react";

export default function Table({ title, tHead, children }) {
  return (
    <div>
      <div className="table__header">
        <h2> {title} </h2>
      </div>
      <table>
        <thead>
          <tr>
            {tHead ? (
              <>
                {tHead.map((t) => (
                  <th>{t}</th>
                ))}
              </>
            ) : (
              <th></th>
            )}
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
            {children}
      </table>
    </div>
  );
}
