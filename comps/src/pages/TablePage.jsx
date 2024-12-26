import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Aple", color: "bg-red-500", score: 5 },
    { name: "Banana", color: "bg-yellow-500", score: 5 },
    { name: "Lime", color: "bg-green-500", score: 5 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default TablePage;
