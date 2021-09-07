import Container from "@/components/Global/Container";
import Link from "@/components/Link";

function Breadcrumb(props) {
  return (
    <Container className="pt-7 flex items-center">
      <div className="flex items-center">
        <Link href="#">
          <p className="hover:text-[#30A8F7] duration-200 text-[#001A34] text-sm">
            Электроника
          </p>
        </Link>
      </div>

      <svg
        className="w-1.5 mx-3"
        viewBox="0 0 5 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.129218 8.98843C-0.0274098 8.8318 -0.0416487 8.5867 0.086501 8.41399L0.129218 8.36451L3.93471 4.55882L0.129218 0.753133C-0.0274098 0.596505 -0.0416487 0.351409 0.086501 0.178697L0.129218 0.129215C0.285845 -0.0274115 0.530941 -0.0416508 0.703654 0.0864992L0.753135 0.129215L4.87078 4.24686C5.02741 4.40349 5.04165 4.64859 4.9135 4.8213L4.87078 4.87078L0.753135 8.98843C0.580845 9.16072 0.301508 9.16072 0.129218 8.98843Z"
          fill="#001A34"
        />
      </svg>

      <div className="flex items-center">
        <Link href="#">
          <p className="hover:text-[#30A8F7] duration-200 text-[#001A34] text-sm">
            Электроника
          </p>
        </Link>
      </div>

      <svg
        className="w-1.5 mx-3"
        viewBox="0 0 5 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.129218 8.98843C-0.0274098 8.8318 -0.0416487 8.5867 0.086501 8.41399L0.129218 8.36451L3.93471 4.55882L0.129218 0.753133C-0.0274098 0.596505 -0.0416487 0.351409 0.086501 0.178697L0.129218 0.129215C0.285845 -0.0274115 0.530941 -0.0416508 0.703654 0.0864992L0.753135 0.129215L4.87078 4.24686C5.02741 4.40349 5.04165 4.64859 4.9135 4.8213L4.87078 4.87078L0.753135 8.98843C0.580845 9.16072 0.301508 9.16072 0.129218 8.98843Z"
          fill="#001A34"
        />
      </svg>

      <div className="flex items-center">
        <Link href="#">
          <p className="text-[#30A8F7] duration-200 text-sm">Ноутбуки</p>
        </Link>
      </div>
    </Container>
  );
}

export default Breadcrumb;
