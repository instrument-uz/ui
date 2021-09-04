function CategoryLink(props) {
  return (
    <div className="fcc flex-col |  cursor-pointer | group duration-200 | click:scale">
      <div
        className={`hover:shadow-blue | w-20 h-20 | mb-3 fcc | rounded-[10px] border  group-hover:border-[1.75px] group-hover:border-[#30A8F7] duration-200`}
      >
        <img src={props.category.icon} className="h-12 | filter " alt="#" />
      </div>

      <p
        className={`text-sm text-[#6C6C6C] group-hover:text-[#30A8F7] duration-200`}
      >
        {props.category.title}
      </p>
    </div>
  );
}

export default CategoryLink;
