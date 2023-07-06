const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-end px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href="https://localhost:3000/"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Job Hunter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
