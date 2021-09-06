import HF from "@/components/Layout/HF";
import Link from "@/components/Link";

function NotFound() {
  return (
    <HF>
      <div className="fcc flex-col pt-12">
        <div className="404 | h-56">
          <img
            src="/images/404.png"
            alt="404"
            className="h-full object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-[#001A34] pt-12">
          Ооой, мы не смогли найти страницу 😬
        </h1>

        <Link href={`/`}>
          <button className="bg-[#00DA4A] text-white text-xl font-extrabold fcc px-40 py-2 rounded-[7px] click:scale outline-none focus:outline-none mt-5">
            На Главную
            <div>
              <svg
                className="h-4 pl-5"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12.3959C0 11.7516 0.478801 11.2191 1.10001 11.1348L1.27271 11.1232L26.727 11.1232C27.4298 11.1232 27.9997 11.693 27.9997 12.3959C27.9997 13.0402 27.5209 13.5727 26.8996 13.657L26.727 13.6686L1.27271 13.6686C0.569813 13.6686 0 13.0988 0 12.3959Z"
                  fill="white"
                />
                <path
                  d="M15.5632 3.07469C15.0651 2.57874 15.0634 1.7729 15.5593 1.27481C16.0102 0.821995 16.7171 0.779397 17.2162 1.14801L17.3592 1.27093L27.6257 11.4934C28.0799 11.9456 28.1212 12.6551 27.7497 13.1541L27.6258 13.297L17.3593 23.5212C16.8612 24.0171 16.0554 24.0155 15.5594 23.5174C15.1085 23.0647 15.0689 22.3575 15.4396 21.86L15.5631 21.7175L24.9235 12.3947L15.5632 3.07469Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </HF>
  );
}

export default NotFound;
