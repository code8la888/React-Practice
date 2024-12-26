import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-5", score: 5 },
    { name: "Orange", color: "bg-orange-5", score: 5 },
    { name: "Orange", color: "bg-orange-5", score: 5 },
    { name: "Orange", color: "bg-orange-5", score: 5 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default TablePage;
