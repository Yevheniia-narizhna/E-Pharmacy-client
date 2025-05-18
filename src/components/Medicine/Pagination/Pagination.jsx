import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "../../../utils/utils";
import { useCallback, useEffect, useMemo } from "react";
import { setCurrentPage } from "../../../redux/pharm/slice";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Btn, BtnList, Wrapper } from "./Pagination.styled";

const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pharm.currentPage);

  const windowWidth = useWindowSize();
  const buttonsPerPage = windowWidth >= 768 ? 3 : 2;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const goToPage = useCallback(
    (pageNumber) => {
      if (
        pageNumber >= 1 &&
        pageNumber <= totalPages &&
        pageNumber !== currentPage
      ) {
        dispatch(setCurrentPage(pageNumber));
      }
    },
    [dispatch, totalPages, currentPage]
  );

  const renderPageButtons = useMemo(() => {
    const buttons = [];
    const start = Math.max(
      1,
      Math.min(
        currentPage - Math.floor(buttonsPerPage / 2),
        totalPages - buttonsPerPage + 1
      )
    );
    const end = Math.min(totalPages, start + buttonsPerPage - 1);

    for (let i = start; i <= end; i++) {
      buttons.push(
        <Btn
          key={i}
          type="button"
          current={i === currentPage ? "true" : undefined}
          onClick={() => goToPage(i)}
        >
          {i}
        </Btn>
      );
    }

    return buttons;
  }, [currentPage, buttonsPerPage, totalPages, goToPage]);

  const iconStyle = { fill: "#1D1E21" };

  return (
    <Wrapper>
      <BtnList>
        <Btn type="button" onClick={() => goToPage(1)}>
          <BiFirstPage style={iconStyle} />
        </Btn>
        <Btn type="button" onClick={() => goToPage(currentPage - 1)}>
          <GrFormPrevious />
        </Btn>
      </BtnList>

      <BtnList>
        {currentPage > Math.floor(buttonsPerPage / 2) + 1 && (
          <Btn type="button" onClick={() => goToPage(currentPage - 1)}>
            ...
          </Btn>
        )}
        {renderPageButtons}
        {currentPage < totalPages - Math.floor(buttonsPerPage / 2) && (
          <Btn type="button" onClick={() => goToPage(currentPage + 1)}>
            ...
          </Btn>
        )}
      </BtnList>

      <BtnList>
        <Btn type="button" onClick={() => goToPage(currentPage + 1)}>
          <GrFormNext />
        </Btn>
        <Btn type="button" onClick={() => goToPage(totalPages)}>
          <BiLastPage />
        </Btn>
      </BtnList>
    </Wrapper>
  );
};

export default Pagination;
