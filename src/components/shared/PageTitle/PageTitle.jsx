import Container from "../Container/Container";

const PageTitle = ({ heading }) => {
  return (
    <Container>
      <div className="mt-[90px] mb-[90px] lg:mb-[120px] xl:mb-[150px]">
        <h1 className="font-bold border-b-2 border-[#878B8E] dark:border-[#FFFFFF]">
          {heading}
        </h1>
      </div>
    </Container>
  );
};

export default PageTitle;
