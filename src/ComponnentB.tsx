import ComponnentC from "./ComponnentC";

function ComponnentB() {
  return (
    <div className="box">
      ComponnentB
      <ComponnentC />
    </div>
  );
}

export default ComponnentB;
