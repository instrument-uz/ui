import Container from "../Global/Container";

function Menu() {
  return (
    <Container className="fcc ml-12 mr-10 py-2 | cursor-pointer | click:scale">
      <ul>
        <li className="mb-2 bg-[#30A8F7] w-6 h-0.5 rounded-full"></li>
        <li className="mt-2 bg-[#30A8F7] w-6 h-0.5 rounded-full"></li>
      </ul>

      <h2 className="font-normal text-sm text-[#30A8F7] pl-3">Категории</h2>
    </Container>
  );
}

export default Menu;
